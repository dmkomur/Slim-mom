import productSearch from 'utils/productsSearch.js';
import * as css from './DiaryAddProductForm.styled.js';


function DiaryAddProductForm() {

  const onSubmit = (e) => {
    e.preventDefault();

  }


  const ProdName = (e) => {
    const query = e.target.value;
    productSearch(query)

  }



  return (
    <div>
      <css.Form action="" onSubmit={onSubmit}>
        <css.InputProdName type="text" placeholder="Enter product name" onChange={ProdName} />
        <css.InputGrams type="text" placeholder="Grams" />
        <css.Button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: '14px', height: '14px' }}>
            <path fill="#fff" d="M31.36 18.194h-13.166v13.166h-4.389v-13.166h-13.166v-4.389h13.166v-13.166h4.389v13.166h13.166v4.389z" />
          </svg>
        </css.Button>
      </css.Form>
    </div>
  )
}

export default DiaryAddProductForm;
