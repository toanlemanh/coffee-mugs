function Story() {
  let fullStoryDiv = document.getElementById("full-story");
  let openDiv = document.getElementById("open-story");

  function handleFullContent() {
    let fullStoryDiv = document.getElementById("full-story");
    fullStoryDiv.classList.toggle("hidden");
    fullStoryDiv.classList.toggle("my-full-story");
     openDiv.classList.toggle("opacity-95");
    
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-center px-32 py-32 flex flex-col gap-y-8">
        <div className="text-3xl text-center font-Karla">
          Even the all-powerful Pointing has
          <span className="block font-Karla">no control about the blind texts.</span> 
        </div>
        <div className="text-gray-500 leading-7 mb-6">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </div>
        <div className="text-center">
          <div
            id="open-story"
            className="my-8 cursor-pointer inline-block text-light-coffee opacity-50 hover:opacity-95 border-b-2 border-0 border-solid border-light-coffee"
            onClick={handleFullContent}
          >
            <a className="no-underline">
               Read the full story
            </a>
           
          </div>

          <div id="full-story" className="hidden text-gray-500 leading-7 mb-6">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Story;
