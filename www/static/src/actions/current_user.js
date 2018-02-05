function handleErrorCurrentUser(){


}

function handleExpireCurrentUser(id){



}

function getLocalCurrentUserId(){

}
function CurrentUserLoginOut(){
  
}
export function checkRemoteCurrentUser(){
  return dispatch => {
    asteroid.call("user.changeNickname",user,nickname)
      .then(result => {
          console.log("Success");
          console.log(result);
          // dispatch(setCurrentUser(result))
      })
      .catch(error => {
          console.log("Error");
          console.error(error);
          // dispatch(setCurrentUserError(error))
      });
  }
}
