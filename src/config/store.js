const store = [
  {
    id: 1,
    title: "My first post",
    status: "pending"
  },
  {
    id: 2,
    title: "My second post",
    status: "pending"
  },
  {
    id: 3,
    title: "My third post",
    status: "pending"
  }
];

class StoreAPI {
  constructor() {
    this.currentNumber = store.length;
    this.store = store;
  }

  getStore() {
    return this.store;
  }

  addStore({ title, status }) {
    let currentStore = [...this.store];
    currentStore.push({
      id: this.store,
      title,
      status
    });
    this.store = [...currentStore];
  }

  updateStatus(id) {
    this.store = this.store.map(entry => {
      if (entry.id === id) {
        entry.status = "completed";
      }
      return entry;
    });
  }

  deleteTask(id) {
    this.store = this.store.filter(entry => entry.id !== id);
  }
}

const storeObject = new StoreAPI();
export default storeObject;
