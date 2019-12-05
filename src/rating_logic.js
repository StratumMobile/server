//This function will return the total stratum based on the following data provided.
//totalVotes = The total amount of times that particular user has been rated
//currentStratum = Their current Stratum score
//feedback = the user input with which the new stratum score will be recalculated.

module.exports = function (totalVotes, currentStratum, feedback) {
    
    feedback == 0 ? feedback = -1 : feedback = 1
    let stratum = feedback / totalVotes + currentStratum

    if (stratum >= 10) {
      return 10
    } else if (stratum <= 0) {
      return 0
    } else {
      return stratum
    }
}
