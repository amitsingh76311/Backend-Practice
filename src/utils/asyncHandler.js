// we create resusable function those which we can use in a contoller or basically higher order function here written

const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
    Promise.resolve(requestHandler()).catch((error) => next(error));
  };
};
export {asyncHandler};