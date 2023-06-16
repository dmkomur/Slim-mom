import * as css from './DiaryProductList.styled';
import DiaryProductListItem from 'components/DiaryProductListItem/DiaryProductListItem';

function DiaryProductList() {
  return (
    <div>
      <css.DivStyle>
        <css.List>
          <DiaryProductListItem />
        </css.List>
      </css.DivStyle>
    </div>
  );
}

export default DiaryProductList;
