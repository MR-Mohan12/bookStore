import PropTypes from 'prop-types';

const Cards = ({ item }) => {
  if (!item) {
    return <div>No item data available</div>;
  }

  console.log(item);

  return (
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
   
       <figure className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline">${item.price}</div>
          <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 hover:text-white duration-200">Buy</div>
        </div>
      </div>
    </div>
    </div>
  );
};

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
