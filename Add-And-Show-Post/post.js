const posts = [
  { name: "Mehmet", content: "Good morning, what a beautiful day" },
  { name: "Ahmet", content: "I am so tired today" },
];

const listPosts = () => {
  posts.map((post) => console.log(post.content));
};

const addPosts = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    if (newPost) {
      posts.push(newPost);
      resolve(posts);
    } else {
      reject("Error");
    }
  });
};

listPosts();
console.log("---------------------------------------------------------------------");

async function showPosts() {
  try {
    await addPosts({
      name: "Ayse",
      content: "Tomorrow I have a math exam and I did not study",
    });
    await listPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();
