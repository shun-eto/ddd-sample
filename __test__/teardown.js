module.exports = async () => {
  await global["MONGO_MEMORY_SERVER"].stop();
  console.log(">> teardown");
};
