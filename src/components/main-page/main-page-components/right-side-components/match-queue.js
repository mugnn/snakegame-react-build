import axios from "axios";
import { setMatchQueue } from "../../state";

/* essa classe é responsável por captar um match_id com base no user_id - 
posteriormente com base no match_id retornar uma lista que contém as informações 
de todas as partidas que serão lidas e renderizadas como componentes no componente MatchComponent.jsx */

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
