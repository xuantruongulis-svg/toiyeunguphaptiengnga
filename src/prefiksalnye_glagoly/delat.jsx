import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const delatCards = [
  { verb: 'вделывать — вделать', meaning: 'gắn chặt vào bên trong' },
  { verb: 'возделывать — возделать', meaning: 'canh tác, cày xới (đất đai)' },
  { verb: 'выделывать — выделать', meaning: '1) chế biến, chế tác\n2) làm trò kỳ quặc' },
  { verb: 'доделывать — доделать', meaning: 'hoàn thành, làm xong' },
  { verb: 'заделывать — заделать', meaning: 'bịt kín, trám lại chắc chắn' },
  { verb: '(заделываться — заделаться)', meaning: 'trở thành (ai đó, thường có hàm ý bất ngờ/mỉa mai)' },
  { verb: 'наделать', meaning: 'làm ra/gây ra nhiều' },
  { verb: 'обделывать — обделать', meaning: '1) chế tác, gia công\n2) thu xếp, lo liệu (việc gì)' },
  { verb: 'отделывать — отделать', meaning: '1) hoàn thiện, trang trí, sửa chữa\n2) trang điểm, đính thêm đồ trang trí\n3) mắng chửi hoặc đánh đòn' },
  { verb: 'отделываться — отделаться', meaning: '1) thoát khỏi, trốn tránh\n2) thoái thác bằng thứ vặt vãnh\n3) chỉ bị/nhận điều gì nhỏ nhoi' },
  { verb: 'переделывать — переделать', meaning: '1) làm lại từ đầu hoặc làm khác đi\n2) làm rất nhiều (việc)' },
  { verb: 'поделать', meaning: 'làm một lúc, không lâu' },
  { verb: 'сделать', meaning: '1) làm, hành động theo cách nào đó\n2) thực hiện, tạo ra (đang vận hành)\n3) đặt may, đặt làm, giao việc\n4) thực hiện, tiến hành\n5) biến thành' },
  { verb: 'сделаться', meaning: '1) trở nên, trở thành\n2) xảy ra (không dùng ở ngôi 1, 2)' },
  { verb: '*подделывать — подделать', meaning: 'làm giả, làm đồ giả mạo' },
  { verb: '(подделываться — подделаться)', meaning: 'bắt chước, giả giọng/hành động của ai' },
  { verb: 'приделывать — приделать', meaning: 'gắn chặt, lắp cố định vào' },
  { verb: 'проделывать — проделать', meaning: '1) đục, khoét lỗ trong cái gì\n2) thực hiện, hoàn thành (một khối lượng công việc)' },
  { verb: 'разделывать — разделать', meaning: '1) xử lý, chế biến thành trạng thái nào đó\n2) đánh đòn, cho ăn đòn' },
  { verb: 'разделываться — разделаться', meaning: '1) giải quyết xong, thanh toán xong\n2) trừng phạt, tính sổ' }
];

export default function DelatTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>Глаголы, мотивированные глаголом ДЕЛАТЬ</h3>
          <span className="subtitle">Các động từ phái sinh từ gốc делать — Bảng tra nghĩa song ngữ Nga–Việt</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={delatCards} />
        ) : (
          <>
            <div className="verb-list-box">
              <strong>Danh sách:</strong> вделать, возделать, выделать, доделать, заделать, (заделаться), наделать, обделать, отделать, отделаться, переделать, поделать, сделать, сделаться, *подделать, (подделаться), приделать, проделать, разделать, разделаться<br/>
              <small className="note">* = nghĩa ít phổ biến hơn; () = động từ ít gặp</small>
            </div>

            <div className="theory-table-container">
          <table className="theory-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Động từ (НСВ — СВ)</th>
                <th>Nghĩa Nga · Dịch Việt · Ví dụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="verb-name">вделывать — вделать</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-sb">thường СВ</span> вставить внутрь, закрепив — gắn chặt vào bên trong<br/>
                  <span className="example-block">камень в кольцо (đá vào nhẫn)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">возделывать — возделать</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-nsb">thường НСВ</span> обрабатывать (землю) — canh tác, cày xới (đất đai)<br/>
                  <span className="example-block">землю (đất)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">выделывать — выделать</span></td>
                <td className="verb-meaning">
                  1) обработать, изготовить — chế biến, chế tác <span className="example-block">кожу (da)</span>
                  2) <span className="tag tag-nsb">НСВ</span> <span className="tag tag-ust">перен.</span> делать что-либо странное — làm trò kỳ quặc <span className="example-block">что-то ногами (trò gì đó bằng chân)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">доделывать — доделать</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-sb">thường СВ</span> закончить — hoàn thành, làm xong<br/>
                  <span className="example-block">работу (công việc)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">заделывать — заделать</span></td>
                <td className="verb-meaning">
                  забив, заровняв, закрыть наглухо — bịt kín, trám lại chắc chắn<br/>
                  <span className="example-block">щели (khe hở, kẽ nứt)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">(заделываться — заделаться)</span> <span className="tag tag-ust">редк.</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-sb">thường СВ</span> <span className="tag tag-prost">прост.</span> стать кем-либо — trở thành (ai đó, thường có hàm ý bất ngờ/mỉa mai)<br/>
                  <span className="example-block">механиком (thợ máy)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">наделать</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  произвести много — làm ra/gây ra nhiều<br/>
                  <span className="example-block">игрушек (đồ chơi) · хлопот (rắc rối)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">обделывать — обделать</span></td>
                <td className="verb-meaning">
                  1) <span className="tag tag-razg">разг.</span> обработать — chế tác, gia công <span className="example-block">драгоценный камень (đá quý)</span>
                  2) <span className="tag tag-prost">прост.</span> решить, устроить — thu xếp, lo liệu (việc gì) <span className="example-block">свои дела (việc riêng)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">отделывать — отделать</span></td>
                <td className="verb-meaning">
                  1) обработать или отремонтировать — hoàn thiện, trang trí, sửa chữa <span className="example-block">квартиру (căn hộ)</span>
                  2) украсить — trang điểm, đính thêm đồ trang trí <span className="example-block">платье кружевами (váy bằng ren)</span>
                  *3) <span className="tag tag-sb">СВ</span> <span className="tag tag-prost">прост.</span> выругать или избить — mắng chửi hoặc đánh đòn <span className="example-block">кого-либо за что-либо</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">отделываться — отделаться</span></td>
                <td className="verb-meaning">
                  1) <span className="tag tag-razg">разг.</span> избавиться — thoát khỏi, trốn tránh <span className="example-block">от уроков (thoát khỏi bài tập)</span>
                  2) уклоняясь, ограничиться чем-либо несущественным — thoái thác bằng thứ vặt vãnh <span className="example-block">обещанием (bằng lời hứa suông)</span>
                  3) испытать что-либо незначительное — chỉ bị/nhận điều gì nhỏ nhoi <span className="example-block">царапиной (chỉ bị một vết xước)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">переделывать — переделать</span></td>
                <td className="verb-meaning">
                  1) заново или по-иному — làm lại từ đầu hoặc làm khác đi <span className="example-block">работу (bài/việc)</span>
                  2) много — làm rất nhiều (việc) <span className="example-block">дела</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">поделать</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  немного, недолго — làm một lúc, không lâu
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">сделать</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  1) заниматься чем-либо, поступать как-либо — làm, hành động theo cách nào đó <span className="example-block">по-своему (theo cách mình)</span>
                  2) производить, совершать, работая — thực hiện, tạo ra (đang vận hành) <span className="example-block">сто оборотов в минуту (100 vòng/phút)</span>
                  3) заказывать, поручать — đặt may, đặt làm, giao việc <span className="example-block">себе костюм (đặt may áo vest)</span>
                  4) совершать — thực hiện, tiến hành <span className="example-block">попытку (thử, nỗ lực)</span>
                  5) превращать — biến thành <span className="example-block">добро · несчастным (thành điều tốt · thành người bất hạnh)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">сделаться</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  1) становиться — trở nên, trở thành <span className="example-block">весёлым (vui vẻ lên)</span>
                  2) <span className="tag tag-ust">1 и 2 л. не употр.</span> происходить — xảy ra (không dùng ở ngôi 1, 2) <span className="example-block">что там делается? (chuyện gì xảy ra vậy?)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">*подделывать — подделать</span></td>
                <td className="verb-meaning">
                  изготовить что-либо фальшивое — làm giả, làm đồ giả mạo<br/>
                  <span className="example-block">подпись (chữ ký giả)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">(подделываться — подделаться)</span> <span className="tag tag-ust">редк.</span></td>
                <td className="verb-meaning">
                  сделать что-либо в подражание кому-либо или чему-либо — bắt chước, giả giọng/hành động của ai<br/>
                  <span className="example-block">под ребячий тон (giả giọng trẻ con)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">приделывать — приделать</span></td>
                <td className="verb-meaning">
                  прикрепив, прочно присоединить — gắn chặt, lắp cố định vào<br/>
                  <span className="example-block">ручку (tay cầm, tay nắm)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">проделывать — проделать</span></td>
                <td className="verb-meaning">
                  1) сделать отверстие в чём-либо — đục, khoét lỗ trong cái gì <span className="example-block">дыру в заборе (lỗ trên hàng rào)</span>
                  2) сделать, выполнить — thực hiện, hoàn thành (một khối lượng công việc) <span className="example-block">работу (công việc)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">разделывать — разделать</span></td>
                <td className="verb-meaning">
                  1) привести что-либо в какое-либо состояние — xử lý, chế biến thành trạng thái nào đó <span className="example-block">шкаф под дуб (tủ giả vân gỗ sồi)</span>
                  *2) <span className="tag tag-prost">прост.</span> избить — đánh đòn, cho ăn đòn
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">разделываться — разделаться</span></td>
                <td className="verb-meaning">
                  1) <span className="tag tag-razg">разг.</span> покончить с чем-либо — giải quyết xong, thanh toán xong <span className="example-block">с поручениями (xong việc được giao)</span>
                  *2) наказать — trừng phạt, tính sổ <span className="example-block">с обидчиком (với kẻ đã xúc phạm)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="theory-note">
          <h4>📌 Lưu ý phong cách:</h4>
          <ul>
            <li>• <span className="tag tag-razg">разг.</span> = ngôn ngữ nói (khẩu ngữ) | <span className="tag tag-prost">прост.</span> = ngôn ngữ bình dân (thông tục)</li>
            <li>• <span className="tag tag-ust">перен.</span> = nghĩa bóng | <span className="tag tag-ust">редк.</span> = hiếm gặp</li>
            <li>• Dấu <strong>*</strong> = nghĩa ít phổ biến hơn</li>
            <li>• Dấu <strong>(…)</strong> = động từ ít gặp</li>
            <li>• <strong>1 и 2 л. не употр.</strong> = không dùng ở ngôi 1 và 2</li>
          </ul>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
