import axios from "axios";

class MatchQueue {
  constructor(user_id) {
    this.user_id = user_id;
  }
  getMatchQueue = async () => {
    try {
      const queue = await axios.get(
        `http://localhost:3001/getMatchesID?userId=${this.user_id}`
      );
      console.log('match id queue: ', queue.data);
      this.getValues(queue.data);
    } catch (error) {
      console.log(error);
    }
  }
  getValues = async (matches_id_queue) => {
    try {
      const queue = await axios.get(
        `http://localhost:3001/getMatchesStats?matches_id_queue=${matches_id_queue}`
      );
      console.log('matches values data: ', queue.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default MatchQueue;
