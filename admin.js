const { kafka } = require('./client')

async function init() {
  const admin = kafka.admin();
  console.log('connecting admin...');
  admin.connect();
  console.log('Admin connected!');

  await admin.createTopics({
    topics: [{
      topic: 'rider-update',
      numPartitions: 2,

    }]
  });
  console.log('topic created');
  await admin.disconnect();
}

init();

