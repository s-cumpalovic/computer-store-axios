import { axiosObj } from "./AxiosService";

class PostsService {
  async getAll() {
    const response = await axiosObj.get("/posts");

    return response.data
  }
}

export default new PostsService();
