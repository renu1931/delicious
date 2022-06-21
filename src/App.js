import "./App.css";
import Home from "./components/Home";

function App() {
  (function ($) {
    $(window).on("load", function () {
      $("#js-preloader").addClass("loaded");
    });
  })(window.jQuery);
  return (
    <div className="App">
      <div id="js-preloader" class="js-preloader">
        <div class="preloader"></div>
      </div>
      <Home />
    </div>
  );
}

export default App;
