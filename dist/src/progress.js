export const PROGRESS_KEY = "web-lab-progress-v1";

export function completionText(id, record) {
  if (id === "sense-lab") {
    if (record && [3, 6].includes(record.total)) return `${record.completed}/6종 체험 완료${record.total === 3 ? " · 기존 기록" : ""}`;
    return "0/6종 체험 완료";
  }
  return record?.completed ? `${record.completed}/${record.total} 완료` : "";
}

export function parseProgress(raw, allowedIds) {
  const result = Object.create(null);
  if (typeof raw !== "string" || raw.length > 6000 || !Array.isArray(allowedIds)) return result;
  try {
    const data = JSON.parse(raw);
    if (data?.version !== 1 || !data.apps || typeof data.apps !== "object" || Array.isArray(data.apps)) return result;
    for (const id of allowedIds.slice(0, 64)) {
      if (!Object.hasOwn(data.apps, id)) continue;
      const entry = data.apps[id];
      if (!entry || !Number.isInteger(entry.total) || entry.total < 1 || entry.total > 1000 || !Number.isInteger(entry.completed) || entry.completed < 0 || entry.completed > entry.total) continue;
      result[id] = Object.freeze({ completed: entry.completed, total: entry.total });
    }
  } catch { /* Invalid or unavailable local summaries do not block browsing. */ }
  return result;
}
