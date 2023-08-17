import { useState } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
    <>
      
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action"
            ><div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">珍珠奶茶</h5>
              <small>$50</small>
            </div>
            <p class="mb-1">香濃奶茶搭配QQ珍珠</p></a
          ><a href="#" class="list-group-item list-group-item-action"
            ><div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">冬瓜檸檬</h5>
              <small>$45</small>
            </div>
            <p class="mb-1">清新冬瓜配上新鮮檸檬</p></a
          ><a href="#" class="list-group-item list-group-item-action"
            ><div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">翡翠檸檬</h5>
              <small>$55</small>
            </div>
            <p class="mb-1">綠茶與檸檬的完美結合</p></a
          ><a href="#" class="list-group-item list-group-item-action"
            ><div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">四季春茶</h5>
              <small>$45</small>
            </div>
            <p class="mb-1">香醇四季春茶，回甘無比</p></a
          ><a href="#" class="list-group-item list-group-item-action"
            ><div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">阿薩姆奶茶</h5>
              <small>$50</small>
            </div>
            <p class="mb-1">阿薩姆紅茶搭配香醇鮮奶</p></a
          ><a href="#" class="list-group-item list-group-item-action"
            ><div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">檸檬冰茶</h5>
              <small>$45</small>
            </div>
            <p class="mb-1">檸檬與冰茶的清新組合</p></a
          ><a href="#" class="list-group-item list-group-item-action"
            ><div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">芒果綠茶</h5>
              <small>$55</small>
            </div>
            <p class="mb-1">芒果與綠茶的獨特風味</p></a
          ><a href="#" class="list-group-item list-group-item-action"
            ><div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">抹茶拿鐵</h5>
              <small>$60</small>
            </div>
            <p class="mb-1">抹茶與鮮奶的絕配</p></a
          >
        </div>
      </div>
      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" width="50">操作</th>
              <th scope="col">品項</th>
              <th scope="col">描述</th>
              <th scope="col" width="90">數量</th>
              <th scope="col">單價</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button type="button" class="btn btn-sm">x</button></td>
              <td>四季春茶</td>
              <td><small>香醇四季春茶，回甘無比</small></td>
              <td>
                <select class="form-select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>45</td>
              <td>45</td>
            </tr>
            <tr>
              <td><button type="button" class="btn btn-sm">x</button></td>
              <td>翡翠檸檬</td>
              <td><small>綠茶與檸檬的完美結合</small></td>
              <td>
                <select class="form-select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>55</td>
              <td>55</td>
            </tr>
          </tbody>
        </table>
        <div class="text-end mb-3">
          <h5>總計: <span>$100</span></h5>
        </div>
        <textarea
          class="form-control mb-3"
          rows="3"
          placeholder="備註"
        ></textarea>
        <div class="text-end">
          <button class="btn btn-primary">送出</button>
        </div>
      </div>
    </div>
    <hr />
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              <h5>訂單</h5>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">品項</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>翡翠檸檬</td>
                    <td>7</td>
                    <td>385</td>
                  </tr>
                  <tr>
                    <td>冬瓜檸檬</td>
                    <td>7</td>
                    <td>315</td>
                  </tr>
                  <tr>
                    <td>冬瓜檸檬</td>
                    <td>4</td>
                    <td>180</td>
                  </tr>
                </tbody>
              </table>
              <div class="text-end">備註: <span>都不要香菜</span></div>
              <div class="text-end">
                <h5>總計: <span>$145</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default App
