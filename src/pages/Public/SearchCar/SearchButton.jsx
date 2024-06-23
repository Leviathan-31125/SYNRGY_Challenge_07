import React from 'react'

const SearchButton = ({changeHandler, refresh, setRefresh}) => {
  return (
    <div className="container card p-4 w-100" style={{boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)'}}>
        <div className="row align-items-center justify-content-center" id="search-form">
            <div className="col-auto">
                <div className="form-outline">
                    <label className="form-label" htmlFor="input-driver">Tipe Driver</label>
                    <select className="form-select search-input" aria-label="Default select example"
                        id="input-driver">
                        <option hidden>Pilih Tipe Driver</option>
                        <option value="denganSupir">Dengan Supir</option>
                        <option value="lepasKunci">Lepas Kunci</option>
                    </select>
                </div>
            </div>

            <div className="col-auto">
                <div className="form-outline">
                    <label className="form-label" htmlFor="form11Example1">Tanggal</label>
                    <input 
                      type="date" 
                      id="tanggal" 
                      name="tanggal" 
                      className="form-control" 
                      placeholder="Pilih Tanggal" 
                      required
                      onChange={(e) => changeHandler(e)}
                    />
                </div>
            </div>

            <div className="col-auto">
                <div className="form-outline">
                    <label className="form-label" htmlFor="form11Example1">Waktu Jemput / Ambil</label>
                    <input 
                      type="time" 
                      id="waktu" 
                      name='waktu' 
                      className="form-control" 
                      required
                      onChange={changeHandler}
                    />
                </div>
            </div>

            <div className="col-auto">
                <div className="form-outline">
                    <label className="form-label" htmlFor="form11Example1">Jumlah Penumpang (optional)</label>
                    <input 
                      type="number" 
                      id="penumpang" 
                      name="penumpang" 
                      className="form-control" 
                      placeholder="Jumlah Penumpang" 
                      onChange={changeHandler}
                    />
                </div>
            </div>

            <div className="col-auto">
                <br />
                <button type="submit" className="btn btn-success" onClick={() => setRefresh(!refresh)}
                    style={{backgroundColor: '#5CB85F', borderRadius: '3px'}}>
                    Cari Mobil
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchButton
