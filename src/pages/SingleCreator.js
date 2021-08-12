import { useParams } from "react-router-dom";
const SingleCreator = () => {
  var currentUser = {};
  const options = [
    {
      type: "group",
      name: "Youtube",
      items: [
        {
          name: "PersonOne",
          value: "1",
          username: "1",
          img: "https://thispersondoesnotexist.com/image",
        },
        {
          name: "PersonTwo",
          value: "2",
          username: "2",
          img: "https://thispersondoesnotexist.com/image",
        },
      ],
    },
    {
      type: "group",
      name: "Twitch",
      items: [
        {
          name: "PersonThree",
          value: "3",
          username: "3",
          img: "https://thispersondoesnotexist.com/image",
        },
        {
          name: "PersonFour",
          value: "4",
          username: "4",
          img: "https://thispersondoesnotexist.com/image",
        },
        {
          name: "PersonFive",
          value: "5",
          username: "5",
          img: "https://thispersondoesnotexist.com/image",
        },
      ],
    },
  ];
  const { username } = useParams();

  let x = options.filter(function (i, n) {
    i.items.map((z) => {
      if (z.username === username) {
        currentUser = { ...z };
      }
    });
  });

  return (
    <div className="container mx-auto px-12 md:px-8">
      <div className="flex w-full flex-col items-center mt-32 min-h-screen text-white">
        <div className="flex flex-row ">
          <img
            className="rounded-full h-24 w-24 flex items-center justify-center"
            src={currentUser.img}
            style={{ width: "100px", height: "100px" }}
            alt=""
          />
          <div className="flex flex-col ">
            <h1 className="text-2xl md:text-4xl px-7 md:px-11">
              {currentUser.name}
            </h1>
            <h1 className="text-1xl md:text-2xl px-7 md:px-11">
              {currentUser.value}
            </h1>
          </div>
        </div>
        <p className="pt-12">
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
          Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
          Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
          drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
          candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
          muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé
          chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy
          croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot
          cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake
          dragée pie.
        </p>
        <button
          type="submit"
          className=" my-8 md:my-12 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
        >
          Support Me
        </button>
      </div>
    </div>
  );
};

export default SingleCreator;
