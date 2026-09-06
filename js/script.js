if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(registration => {

    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;

      worker.addEventListener("statechange", () => {
        if (worker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            location.reload();
          }
        }
      });
    });

  });
}