import { initWelcome } from "./pages/welcome/index";

const routes = [
  { path: /^\/$/, component: initWelcome },
  { path: /\/welcome/, component: initWelcome },
];

function initRouter(container: HTMLElement) {
  function handleRoute(route: string) {
    for (const r of routes) {
      if (r.path.test(route)) {
        container.replaceChildren(r.component({ goTo }));
        return;
      }
    }
  }

  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  handleRoute(location.pathname);
  window.addEventListener("popstate", () => handleRoute(location.pathname));
}

export { initRouter };
