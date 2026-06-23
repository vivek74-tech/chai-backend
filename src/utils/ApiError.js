class ApiError extends Error {
  constructor(
    statuseCode,
    message = "Something went wrong",
    error = [],
    stack = " "
  ) {
    super(message)
    this.statuseCode = statuseCode
    this.data = null
    this.message = message
    this.sucess = false;
    this.error = errors

    if(stack) {
      this.stack = stack

    }else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
  
}