import userStore from '../store/User';

export function useAuthGuard(navigateFn: (url: string) => void) {
  if (!userStore.isLogin) {
    navigateFn('/');
  }
}