import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, projects, selectProjects, getProject, pickProject, countProjects } from '../dist/src/projects.js';
import { parseProgress } from '../dist/src/progress.js';

test('edge every category/difficulty/search intersection matches an independent membership filter',()=>{
  for(const category of categories)for(const difficulty of ['all','intro','advanced']){
    const expected=projects.filter(p=>(category.id==='all'||p.category===category.id)&&(difficulty==='all'||p.entry===difficulty));
    assert.deepEqual(selectProjects(category.id,'',difficulty).map(p=>p.id),expected.map(p=>p.id));
    for(const p of expected)assert.ok(selectProjects(category.id,p.name,difficulty).includes(p));
    assert.equal(selectProjects(category.id,'no-such-project-987',difficulty).length,0);
  }
});

test('edge search exact length and Unicode normalization do not mutate filters or catalog',()=>{
  assert.equal(selectProjects('all',' '.repeat(120)).length,projects.length);assert.throws(()=>selectProjects('all',' '.repeat(121)),TypeError);
  for(const value of [false,0,[],{},undefined]){if(value!==undefined)assert.throws(()=>selectProjects('all',value),TypeError);}
  const word='정보처리기사';assert.deepEqual(selectProjects('all',word.normalize('NFD')),selectProjects('all',word));
  const before=JSON.stringify(projects);selectProjects('all','  THINK\tFORGE  ');assert.equal(JSON.stringify(projects),before);
});

test('edge recommendation empty/single/last entropy and nonrepeat never mutate source',()=>{
  for(const entries of [[],projects.slice(0,1),projects.slice(0,2),[...projects]]){
    const before=[...entries];for(const value of [0,Number.MIN_VALUE,0.5,1-Number.EPSILON]){
      const selected=pickProject(entries,value,entries[0]?.id);if(!entries.length)assert.equal(selected,null);else{assert.ok(entries.includes(selected));if(entries.length>1)assert.notEqual(selected.id,entries[0].id);}
    }assert.deepEqual(entries,before);
  }
  for(const value of ['0',null,undefined,NaN,Infinity,-Number.MIN_VALUE,1])assert.throws(()=>pickProject(projects,value));
});

test('edge preview ids are exact and unexpected fragments never resolve',()=>{
  for(const p of projects)assert.equal(getProject(p.id),p);
  for(const id of [null,undefined,{},[],['sense-lab'],'#sense-lab','SENSE-LAB','sense-lab/','%73ense-lab','__proto__','constructor','about'])assert.equal(getProject(id),null);
  assert.equal(countProjects([]).all,0);assert.equal(countProjects(projects.slice(-1)).all,1);
});

test('edge completion-summary character cap accepts 6000 and rejects 6001',()=>{
  const raw=JSON.stringify({version:1,apps:{'sense-lab':{completed:1,total:2}}});
  assert.deepEqual(parseProgress(raw+' '.repeat(6000-raw.length),['sense-lab'])['sense-lab'],{completed:1,total:2});
  assert.equal(Object.keys(parseProgress(raw+' '.repeat(6001-raw.length),['sense-lab'])).length,0);
});

test('edge completion counts accept zero/full/1000 but reject types and outside values',()=>{
  const parse=e=>parseProgress(JSON.stringify({version:1,apps:{'sense-lab':e}}),['sense-lab']);
  for(const e of [{completed:0,total:1},{completed:1,total:1},{completed:1000,total:1000}])assert.deepEqual(parse(e)['sense-lab'],e);
  for(const e of [null,[],true,{completed:0,total:0},{completed:1001,total:1000},{completed:1,total:1001},{completed:NaN,total:1},{completed:1,total:Infinity},{completed:true,total:1},{completed:1,total:'1'},{completed:-1,total:1},{completed:0.5,total:1}])assert.equal(Object.keys(parse(e)).length,0);
});

test('edge allowlist 64 boundary and prototype names never leak unrelated properties',()=>{
  const ids=Array.from({length:65},(_,i)=>'case-'+i),apps=Object.fromEntries(ids.map(id=>[id,{completed:1,total:2,private:'excluded'}]));
  const result=parseProgress(JSON.stringify({version:1,apps}),ids);assert.equal(Object.keys(result).length,64);assert.equal(result['case-64'],undefined);assert.equal(Object.getPrototypeOf(result),null);
  assert.deepEqual(Object.keys(result['case-63']),['completed','total']);assert.equal(Object.isFrozen(result['case-63']),true);
  assert.equal(Object.keys(parseProgress('{"version":1,"apps":{"__proto__":{"completed":1,"total":1}}}',projects.map(p=>p.id))).length,0);
});

test('edge malformed completion roots fail closed without retaining a prior valid result',()=>{
  const raw='{"version":1,"apps":{"sense-lab":{"completed":1,"total":1}}}';assert.equal(Object.keys(parseProgress(raw,['sense-lab'])).length,1);
  for(const bad of [null,'','{','null','[]','true','{"version":1,"apps":null}','{"version":1,"apps":[]}','{"version":"1","apps":{}}'])assert.equal(Object.keys(parseProgress(bad,['sense-lab'])).length,0);
  assert.equal(Object.keys(parseProgress(raw,null)).length,0);assert.equal(Object.keys(parseProgress(raw,[])).length,0);
});
