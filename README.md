# Picture Slider React Component

Recreation of ![PictureSlider](https://github.com/Zabamd/pictureSlider) as a React Component

![Pre-transition screenshot](https://github.com/Zabamd/pictureSlider/blob/master/assets/readMe/pre.png)
![Transition screenshot](https://github.com/Zabamd/pictureSlider/blob/master/assets/readMe/post.png)

Component Set-up:

```js
import PictureSlider from "./lib/components/picture-slider";
import YourImageName1 from "YourImage";
import YourImageName2 from "YourImage";
import YourImageName3 from "YourImage";

const data = [
  {
    heading: "Visit Alps",
    place: "France",
    comment: "Ce la vie!",
    image: YourImageName1,
  },
  {
    heading: "Visit Alps",
    place: "Italy",
    comment: "Ce la vie!",
    image: YourImageName2,
  },
  {
    heading: "Visit Alps",
    place: "Switzerland",
    comment: "Ce la vie!",
    image: YourImageName3,
  },
];

function App() {
  return (
    <div className="App">
      <PictureSlider picturesData={data} />
    </div>
  );
}

export default App;
```

### Assets:

France-dxiane.jpg Photo by <a href="https://unsplash.com/@dxiane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">dxiane</a> on <a href="https://unsplash.com/photos/Gfec0OXXmn8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Swiss-ricardo-gomez-angel.jpg Photo by <a href="https://unsplash.com/es/@rgaleriacom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ricardo Gomez Angel</a> on <a href="https://unsplash.com/photos/58uZCE8zrdk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Italy-mattia-bericchia.jpg Photo by <a href="https://unsplash.com/@mattiabericchia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mattia Bericchia</a> on <a href="https://unsplash.com/photos/hGOU4Lz5J-U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
