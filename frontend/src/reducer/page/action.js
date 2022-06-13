export const LOADING='LOADING'

export const loadingAction=(loading=true)=>{

  return {
    type:LOADING,
    payload:{isLoading:loading}
  }
}