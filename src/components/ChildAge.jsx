import '../css/childage.css';

export function ChildAge({bookingPageLabel}) {
  return (
    <select defaultValue={bookingPageLabel[0]?.childrenAge} className='childeAge'>
      <option value={bookingPageLabel[0]?.childrenAge} disabled className='disabled'>{bookingPageLabel[0].childrenAge}</option>
      {
        Array(18).fill('').map((_,index)=> <option key={index} className='option' value={`${index} ${bookingPageLabel[0]?.childAgeText}`}>
          {index} {bookingPageLabel[0]?.childAgeText}
        </option>)
      }
    </select>
  )
}
