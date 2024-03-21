import { router } from "../components/Routes"
import { client } from "../constants/apollo-client";

export const onLogout = () => {
  router.navigate('/login');
  client.resetStore();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  client.onResetStore(() => new Promise(() => { }));

}