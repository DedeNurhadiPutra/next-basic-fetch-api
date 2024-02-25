'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`user id = ${userId}`);

  return (
    <>
      <button className='pointer btn bg-purple-900 py-1 px-3 rounded-lg' onClick={handleClick}>
        Lihat User
      </button>
    </>
  );
};

export default ViewUserButton;
