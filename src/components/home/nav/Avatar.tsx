import React from 'react'

function Avatar() {
  return (
    <div className="h-full w-11  overflow-hidden  rounded-lg shadow-md">
      <img
        className="object-cover w-full h-full "
        src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top"
        alt='avatar'
      />
    </div>
  );
}

export default Avatar