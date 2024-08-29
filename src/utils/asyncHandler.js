// by promise how we can build wrapper class of

const asyncHandler = (reqHandler) => {
  (req, res, next) => {
    Promise.resolve(reqHandler()).catch((error) => next(error));
  };
};
export {asyncHandler}