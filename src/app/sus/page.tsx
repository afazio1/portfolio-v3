"use client"
export default function Sus() {
  const crashFunc = () => {
    crashFunc();
  } 
  return (
    <div className="text-white">
      <h2>Clicking this button will crash the tab on Chrome Desktop</h2>
      <h2>Clicking this button will crash the whole app on Chrome iOS</h2>
      <button onClick={crashFunc}>Crash Me</button>
    </div>
  )
}
