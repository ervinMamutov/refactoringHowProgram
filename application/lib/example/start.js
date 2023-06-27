async () => {
  if (!config.examples.plugin) return;
  if (application.worker.id !== 'W1') return;
  console.debug('Start example plugin');
  lib.example.cache.set({ key: 'keyName', val: 123 });
  const res = lib.example.cache.get({ key: 'keyName' });
  console.debug({ res, cache: lib.example.cache.values });
};
