import axios from "axios";

class MatchOps {
  constructor(result, score, moves, time) {
    this.result = result;
    this.score = score;
    this.moves = moves;
    this.time = time;
  }
  getNewMatch = async (userID) => {
    return await axios
      .post("http://localhost:3001/getMatchID", { userId: userID })
      .then((response) => response.data.match_id)
      .catch((error) => {
        console.log(error);
      });
  };

  insertValues(match_id) {
    console.log(match_id);

    const act = async (matchID, result, score, moves, time) => {
      try {
        await axios.post("http://localhost:3001/insertMatchValues", {
          matchId: matchID,
          matchResult: result,
          matchScore: score,
          matchMoves: moves,
          matchTime: time,
        });
      } catch (error) {
        console.log(error);
      }
    };

    act(match_id, this.result, this.score, this.moves, this.time);
  }
}

export default MatchOps;
