import React from 'react';

const FillInGroupCard = ({ group, answers, onSelectAnswer, showResult }) => {
  const { description, fillInData, partId } = group;
  const { title, items } = fillInData;

  const handleInputChange = (questionId, value) => {
    // onSelectAnswer can be used for text answers too
    onSelectAnswer(questionId, value);
  };

  return (
    <div className="animate-fade-in-up">
      {/* Header / Intro */}
      <div className="mb-6 pb-4 border-b border-surface-lighter">
        <p className="text-text-primary text-base font-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* The Form Document wrapper */}
      <div className="mx-auto max-w-4xl relative mt-4 mb-8">
        {/* Background shadow box mimicking paper's deep drop shadow */}
        <div className="absolute right-[-12px] bottom-[-12px] top-3 left-3 bg-[#b5b5b5] dark:bg-[#18181b] z-0"></div>
        
        {/* The actual paper */}
        <div className="relative bg-white border border-zinc-300 p-8 sm:p-12 lg:p-16 z-10">

          {/* Title block */}
          <div className="flex justify-center mb-12">
            <h2 className="font-sans text-3xl md:text-4xl text-zinc-800 font-normal tracking-wide text-center">
              {title}
            </h2>
          </div>

          {/* The Form Table */}
          <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto px-2 sm:px-0">
            {items.map((item) => {
              const isExample = item.isExample;
              const answerKey = `${item.id}-${partId}`;
              const value = answers[answerKey] || '';
              
              return (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center py-1.5 gap-2 sm:gap-6 lg:gap-8">
                  {/* Left Column: Label */}
                  <div className="w-full sm:w-[40%] shrink-0 flex items-center justify-start">
                    <span className="text-zinc-800 text-base sm:text-lg font-sans">
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Right Column: Input Box */}
                  <div className="w-full sm:w-[60%]">
                    {isExample ? (
                       <div className="h-10 sm:h-12 flex items-center pl-10 sm:pl-16">
                         <span className="font-writing text-2xl sm:text-3xl text-zinc-600 font-medium italic">
                           {item.answer}
                         </span>
                       </div>
                    ) : (
                      <div className="flex bg-white border border-zinc-400 transition-all focus-within:ring-2 focus-within:ring-blue-500/40 focus-within:border-blue-500">
                        {/* The number box */}
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#ebebeb] border-r border-zinc-400 flex items-center justify-center font-bold text-sm sm:text-base text-zinc-800 shrink-0 select-none">
                          {item.id}
                        </div>

                        {/* The input area */}
                        <div className="flex items-end gap-2 px-3 pb-1.5 sm:pb-2 pt-1 h-10 sm:h-12 grow min-w-0 bg-white">
                           {item.prefix && <span className="text-zinc-800 font-sans text-base sm:text-[17px] shrink-0 leading-none pb-1">{item.prefix}</span>}
                           
                           <input
                             type="text"
                             value={value}
                             readOnly={showResult}
                             onChange={(e) => handleInputChange(item.id, e.target.value)}
                             className={`grow min-w-0 pt-2 pb-0.5 outline-none border-b-[1.5px] bg-transparent font-writing text-2xl sm:text-3xl italic text-blue-700 truncate leading-none px-2 ${
                               showResult ? 'border-zinc-300' : 'border-dotted border-zinc-500 focus:border-solid focus:border-blue-600'
                             }`}
                             placeholder=""
                           />
                           
                           {item.suffix && <span className="text-zinc-800 font-sans text-base sm:text-[17px] shrink-0 leading-none pb-1 whitespace-nowrap">{item.suffix}</span>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillInGroupCard;
