import './pages.negynegynegy.css';
import negynegynegyLogo from '../assets/logo-444.svg';
import people from '../assets/people_white.png';
import search from '../assets/search_white.png';
import React, { FunctionComponent, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';

const Negynegynegy: FunctionComponent<{ initial?: string }> = () => {
  const [textValue, settextValue] = useState('');
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <>
      <textarea
        placeholder="Szoveg helye ..."
        onChange={(e) => settextValue(e.target.value)}
        className="mainTextarea"
      />

      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="content_main">
            <button
              className="btn_d"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Klikkelj, vagy huzd ide a kepet
            </button>
            <button className="btn_d" onClick={onImageRemoveAll}>
              Osszes torlese
            </button>

            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <div className="image-item__btn-wrapper">
                  <button
                    className="btn_d"
                    onClick={() => onImageUpdate(index)}
                  >
                    Csere
                  </button>
                  <button
                    className="btn_d"
                    onClick={() => onImageRemove(index)}
                  >
                    Torles
                  </button>
                </div>
                <div className="negynegynegy">
                  <div className="editor"></div>
                  <div className="n_navbar">
                    <button className="n_navbar__hamburger_menu">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        className="svgico"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                          fill="#fff"
                          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                        />
                      </svg>
                    </button>
                    <div className="n_navbar__center">
                      <img
                        className="n_logo"
                        src={negynegynegyLogo}
                        alt="logo"
                      />
                    </div>
                    <div className="n_navbar__right">
                      <div className="n_navbar__right__icon">
                        <img
                          src={search}
                          alt="people"
                          className="n_navbar__right_icons"
                        />
                      </div>
                      <div className="n_navbar__right__icon">
                        <img
                          src={people}
                          alt="people"
                          className="n_navbar__right_icons"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="n_content">
                    <div className="left_side_content">
                      <img
                        src={image.dataURL}
                        alt="images"
                        className="imgContent"
                        width="60%"
                      />
                      <div className="ls_title">FRISS HIR</div>
                      <h1>
                        <div className="inputField">{textValue}</div>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default Negynegynegy;
