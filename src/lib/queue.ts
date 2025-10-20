export type QueueState = {
  position: number;
  waitMinutes: number;
  lastUpdated: string;
};

let queueState: QueueState = {
  position: 0,
  waitMinutes: 0,
  lastUpdated: new Date().toISOString(),
};

const listeners = new Set<(state: QueueState) => void>();

export function getQueue(): QueueState {
  return queueState;
}

export function setQueue(position: number, waitMinutes: number): QueueState {
  queueState = {
    position,
    waitMinutes,
    lastUpdated: new Date().toISOString(),
  };
  // notify all listeners
  listeners.forEach((fn) => {
    try {
      fn(queueState);
    } catch {
      // ignore listener errors
    }
  });
  return queueState;
}

export function subscribe(listener: (state: QueueState) => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
