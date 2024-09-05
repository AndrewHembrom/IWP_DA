export function QuestionCard(props: any) {
  return (
    <div className="p-3 ">
      {/* <img className="rounded-xl" src={props.thumb} /> */}
      <div className="grid grid-cols-10 p-5 border border-slate-500 rounded-xl hover:bg-gray-900">
        <div className="col-span-2 pr-4 border-r flex flex-col items-end">
          <div>{props.votes} votes</div>
          <div className="text-gray-400">{props.ans} answers</div>
          <div className="text-gray-400">{props.views} views</div>
        </div>
        <div className="flex flex-col justify-center items-start col-span-8 pl-5 ">
          <div className="text-2xl">{props.title}</div>
          <div className="text-gray-400 text-base">By - {props.author}</div>
          <br />
          <div className="relative max-h-10 overflow-hidden text-gray-400 text-base">
            {props.description}
          </div>
          <div className="text-gray-400 text-base">- {props.timestamp}</div>
        </div>
      </div>
    </div>
  );
}
