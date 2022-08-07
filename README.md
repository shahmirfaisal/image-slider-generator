# Image Slider Generator

Quickly create and customize image sliders and use them in your projects instantly. This tool helps you create an image slider and customize it. It then gives you an iframe that you can use to display the slider on your website.

Visit our [home page](https://imageslidergenerator.shahmir.me/) to create the slider instantly. It's like a drag and drop creator. Just upload the all of your images and change some settings to meet your needs.

## REST API

We recommend using our REST API when you want a dynamic slider.

## Use Case

If you have a huge website like an e-commerce store with dozens of product pages and you want a slider for each of those pages with different product images then we recommend using the REST API.

## How it Works?

You can send all the images you want in the slider along with some optional settings to the REST API and you will get a URL that you can use as a **src** attribute in **iframe** tag to show the slider.

## Endpoint

| Route                                               | Method | Body            | Body Type | Description                    |
| --------------------------------------------------- | ------ | --------------- | --------- | ------------------------------ |
| https://imageslidergenerator.shahmir.me/api/slider  | POST   | [Data](#data)   | Object    | For creating a single slider.  |
| https://imageslidergenerator.shahmir.me/api/sliders | POST   | [[Data](#data)] | Array     | For creating multiple sliders. |

### Data

| Name                | Type   | Default | Description                  |
| ------------------- | ------ | ------- | ---------------------------- |
| images              | Array  | []      | Array of images. Use string. |
| [options](#options) | Object |         | Customize the slider.        |

#### Options

| Name                       | Type    | Possible Values                | Default      |
| -------------------------- | ------- | ------------------------------ | ------------ |
| animationType              | String  | simple, slide, fade            | simple       |
| autoPlay                   | Boolean | true, false                    | false        |
| arrowsType                 | String  | arrow-circle, arrow, arrow-ios | arrow-circle |
| arrowsBackground           | String  | visible, hidden                | visible      |
| arrowsBackgroundVisibility | Number  | 0 - 1000                       | 212          |
| arrowsSize                 | Number  | 0 - 100                        | 50           |
| arrowsOffset               | Number  | 0 - 10                         | 1            |
| arrowsColor                | String  | Any Color                      | #fff         |
| radioButtonType            | String  | square, circle, none           | square       |
| radioButtonSize            | Number  | 5 - 100                        | 20           |
| radioButtonGap             | Number  | 5 - 100                        | 10           |

## Response

It gives you a URL that you can use in the **iframe** tag. See the below example.

## Example

### Create a single slider

Here's a complete example of using the REST API with React.

```javascript
import { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Test = () => {
  const [loading, setLoading] = useState(false);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch(
        "https://imageslidergenerator.shahmir.me/api/slider",
        {
          method: "POST",
          body: JSON.stringify({
            images,
            options: {
              // customize the slider
              arrowsColor: "#fff",
              radioButtonSize: 50,
            },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setSrc(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <iframe src={src} style={{ border: "none", width: "300px", height: "300px }}></iframe>
    </>
  );
};

export default Test;
```

### Create multiple sliders

Here's a complete example of using the REST API with React.

```javascript
import { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const TestPage = () => {
  const [loading, setLoading] = useState(false);
  const [srcLinks, setSrcLinks] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch(
        "https://imageslidergenerator.shahmir.me/api/sliders",
        {
          method: "POST",
          body: JSON.stringify([
            {
              images,
              options: {
                // customize the slider
              },
            },
            {
              images,
              options: {
                // customize the slider
                animationType: "fade",
              },
            },
          ]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setSrcLinks(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {srcLinks.map((src) => (
        <iframe
          src={src}
          style={{ border: "none", width: "300px", height: "300px" }}
        ></iframe>
      ))}
    </>
  );
};

export default TestPage;
```

## Contributing

Feel free to contribute.

To get started, please take a look at the 'Issues' tab, where you will find open issues that exist with the project. If you see one that interests you, simply create a branch and submit a PR for review and approval. If you want to add a new feature, feel free to do so as well.

## License

Image Slider Generator is made available under the [MIT License](https://choosealicense.com/licenses/mit/).
