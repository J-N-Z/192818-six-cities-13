import { TOfferPreview } from '../../types';

export const Card = ({ offerPreview, onMouseEnter }: { offerPreview: TOfferPreview, onMouseEnter: any }) => (
  <article className="cities__card place-card" onMouseEnter={onMouseEnter}>
    {offerPreview.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={offerPreview.previewImage}
          width={260}
          height={200}
          alt="Place image"
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{offerPreview.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${offerPreview.rating * 20}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offerPreview.title}</a>
      </h2>
      <p className="place-card__type">{offerPreview.type}</p>
    </div>
  </article>
);
