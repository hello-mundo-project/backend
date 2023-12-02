import connectMongoDB from "./mongo/connection";
// import generateSeed from "./mongo/seed";

// connect mongoDB and generate data
async function mongoBoot() {
  await connectMongoDB();
  // await generateSeed();
}

mongoBoot();
