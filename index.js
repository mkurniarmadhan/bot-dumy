
const getDummyData = () => {
  return {
    id: Math.floor(Math.random() * 1000),
    nama: "User Dummy",
    status: "aktif",
    nilai: Math.floor(Math.random() * 100),
    timestamp: new Date().toISOString()
  };
};

console.log("Bot berjalan...");

setInterval(() => {
  const data = getDummyData();

  console.log("Data baru:");
  console.log(JSON.stringify(data, null, 2));
}, 5000);
