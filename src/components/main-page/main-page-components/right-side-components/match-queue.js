import axios from "axios";
import { setMatchQueue } from "../../state";

class MatchQueue {
  constructor(user_id) {
    this.user_id = user_id;
  }
  getMatchQueue = async () => {
    try {
      const queue = await axios.get(
        `http://localhost:3001/getMatchesID?userId=${this.user_id}`
      );
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
      setMatchQueue(queue.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default MatchQueue;
