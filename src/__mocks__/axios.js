
export default {
    get: jest.fn().mockResolvedValue({
        data: {},
      }),

    post : jest.fn().mockResolvedValue({
        status : 201,
        data: {}
    }),

    delete : jest.fn().mockResolvedValue({
      status : 200,
      data : {}
    }) 
  };