import React, { useState } from 'react';
import FlashcardList from '../components/Flashcard';

const rabotatCards = [
  { verb: 'вырабатывать — выработать', meaning: '1) sản xuất, tạo ra\n2) (nghĩa bóng) xây dựng qua suy nghĩ' },
  { verb: 'вырабатываться — выработаться', meaning: 'hình thành, xuất hiện như kết quả của kinh nghiệm tích lũy' },
  { verb: 'дорабатывать — доработать', meaning: '1) làm việc đến một thời điểm nhất định\n2) hoàn thành, làm xong' },
  { verb: '(доработаться)', meaning: 'làm việc căng thẳng đến mức đẩy bản thân vào một trạng thái xấu' },
  { verb: 'зарабатывать — заработать', meaning: '1) kiếm được bằng lao động\n2) nhận được kết quả của điều gì đó\n3) bắt đầu hoạt động' },
  { verb: 'заработаться', meaning: 'bị cuốn vào công việc quá mức hoặc kiệt sức vì làm việc' },
  { verb: '(наработать)', meaning: 'làm ra nhiều, một số lượng lớn' },
  { verb: 'наработаться', meaning: 'làm đã đủ, làm thỏa thích (thường hàm ý kiệt sức)' },
  { verb: 'обрабатывать — обработать', meaning: '1) chuẩn bị, xử lý cho mục đích nào đó\n2) thuyết phục, tranh thủ ai đó vì lợi ích cá nhân' },
  { verb: 'отрабатывать — отработать', meaning: '1) bù đắp, đền bù\n2) làm đủ một khoảng thời gian\n3) hoàn thành công việc\n4) hoàn thiện, đánh bóng\n5) luyện tập thuần thục' },
  { verb: 'перерабатывать — переработать', meaning: '1) chuyển hóa thành cái khác\n2) làm lại, sửa lại\n3) làm quá giờ, kiệt sức' },
  { verb: 'перерабатываться — переработаться', meaning: '1) chuyển hóa thành (thức ăn được tiêu hóa)\n2) kiệt sức, làm việc quá sức' },
  { verb: 'поработать', meaning: 'làm việc trong một thời gian ngắn' },
  { verb: 'работать', meaning: '1) đang hoạt động, vận hành\n2) lao động, làm lụng\n3) giữ chức vụ\n4) phục vụ ai/cái gì\n5) vận hành, điều khiển' },
  { verb: 'работаться', meaning: 'diễn đạt trạng thái muốn làm việc hoặc tiến độ công việc' },
  { verb: 'подрабатывать — подработать', meaning: '1) kiếm thêm một chút\n2) hoàn thiện thêm một chút' },
  { verb: 'прирабатывать — приработать', meaning: 'kiếm thêm ngoài thu nhập chính' },
  { verb: 'прорабатывать — проработать', meaning: '1) làm lâu dài\n2) nghiên cứu kỹ, đào sâu\n3) phê bình, chỉ trích tập thể' },
  { verb: 'разрабатывать — разработать', meaning: '1) khai phá, làm cho phù hợp với mục đích\n2) nghiên cứu, chuẩn bị' },
  { verb: 'срабатывать — сработать', meaning: '1) làm ra, chế tạo\n2) phát huy tác dụng, kích hoạt' },
  { verb: 'сработаться', meaning: 'đạt được sự ăn ý, phối hợp nhịp nhàng trong công việc' },
  { verb: '(уработаться)', meaning: 'kiệt sức (vì làm việc quá nhiều)' }
];

export default function RabotatTheory() {
  const [viewMode, setViewMode] = useState('table');

  return (
    <div className="theory-wrapper">
      <div className="theory-section">
        <div className="theory-header">
          <h3>ГЛАГОЛЫ, МОТИВИРОВАННЫЕ ГЛАГОЛОМ РАБОТАТЬ</h3>
          <span className="subtitle">Các động từ phái sinh từ gốc РАБОТАТЬ (làm việc)</span>
        </div>

        <div className="exercise-tabs" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
          <button className={`ex-tab ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>Dạng Bảng</button>
          <button className={`ex-tab ${viewMode === 'flashcard' ? 'active' : ''}`} onClick={() => setViewMode('flashcard')}>Luyện Flashcard</button>
        </div>

        {viewMode === 'flashcard' ? (
          <FlashcardList cards={rabotatCards} />
        ) : (
          <>
            <div className="verb-list-box">
              <strong>Danh sách:</strong> Выработать, вырабатываться, доработать, (доработаться), заработать, заработаться, (наработать), наработаться, обработать, отработать, переработать, перерабатываться, поработать, работать, работаться, подработать, приработать, проработать, разработать, сработать, сработаться, (уработаться).<br/>
              <small className="note">() = Các động từ ít gặp hơn trong thực tế</small>
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
                <td><span className="verb-name">вырабатывать — выработать</span></td>
                <td className="verb-meaning">
                  1) произвести, сделать — sản xuất, tạo ra <span className="example-block">продукцию (sản phẩm)</span>
                  2) <span className="tag tag-ust">перен.</span> обдумывая, создать — (nghĩa bóng) xây dựng qua suy nghĩ <span className="example-block">программу (chương trình)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">вырабатываться — выработаться</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-ust">1 и 2 л. не употр.</span> Установиться, появиться в результате опыта — hình thành, xuất hiện như kết quả của kinh nghiệm tích lũy<br/>
                  <span className="example-block">привычка (thói quen)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">дорабатывать — доработать</span></td>
                <td className="verb-meaning">
                  1) до какого-либо времени — làm việc đến một thời điểm nhất định <span className="example-block">до пенсии (đến khi về hưu)</span>
                  2) доделать, закончить что-либо — hoàn thành, làm xong <span className="example-block">проект (dự án)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">(доработаться)</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-razg">разг.</span> Довести себя, напряжённо работая, до какого-либо состояния — làm việc căng thẳng đến mức đẩy bản thân vào một trạng thái (xấu)<br/>
                  <span className="example-block">до инфаркта (đến mức bị nhồi máu cơ tim)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">зарабатывать — заработать</span></td>
                <td className="verb-meaning">
                  1) приобрести работой — kiếm được bằng lao động <span className="example-block">тысячу рублей (nghìn rúp)</span>
                  *2) <span className="tag tag-razg">разг.</span> <span className="tag tag-ust">ирон.</span> получить в результате чего-либо — (khẩu ngữ, mỉa mai) nhận được kết quả của điều gì đó <span className="example-block">выговор (bị khiển trách)</span>
                  3) начать работать — bắt đầu hoạt động <span className="example-block">машина (máy móc)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">заработаться</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  Увлечься работой или устать от работы — bị cuốn vào công việc quá mức hoặc kiệt sức vì làm việc<br/>
                  <span className="example-block">до утра (đến tận sáng)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">(наработать)</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-razg">разг.</span> Много, большое количество — làm ra nhiều, một số lượng lớn<br/>
                  <span className="example-block">много (nhiều)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">наработаться</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-razg">разг.</span> Достаточно, вдоволь — làm đã đủ, làm thỏa thích (thường hàm ý kiệt sức)<br/>
                  <span className="example-block">за день (trong cả một ngày)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">обрабатывать — обработать</span></td>
                <td className="verb-meaning">
                  1) сделать готовым для чего-либо — chuẩn bị, xử lý cho mục đích nào đó <span className="example-block">рану (vết thương)</span>
                  *2) <span className="tag tag-prost">прост.</span> <span className="tag tag-ust">перен.</span> подготовить, сделать полезным для себя — (thông tục, nghĩa bóng) thuyết phục, tranh thủ ai đó vì lợi ích cá nhân <span className="example-block">дельце (một việc nhỏ, mưu đồ)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">отрабатывать — отработать</span></td>
                <td className="verb-meaning">
                  1) возместить — bù đắp, đền bù (bằng lao động) <span className="example-block">занятые деньги (số tiền đã vay/mượn)</span>
                  2) какое-либо время — làm đủ một khoảng thời gian <span className="example-block">три года на стройке (ba năm trên công trường)</span>
                  3) <span className="tag tag-sb">СВ</span> кончить работать — hoàn thành công việc, kết thúc ca làm<br/>
                  4) придать чему-либо окончательный вид — hoàn thiện, đánh bóng lần cuối <span className="example-block">проект (dự án)</span>
                  5) получить навык, овладеть — luyện tập thuần thục, nắm vững <span className="example-block">технику прыжка (kỹ thuật nhảy)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">перерабатывать — переработать</span></td>
                <td className="verb-meaning">
                  1) превратить во что-либо другое — chuyển hóa thành cái khác <span className="example-block">сырьё (nguyên liệu thô)</span>
                  2) переделать — làm lại, sửa lại <span className="example-block">проект (dự án)</span>
                  3) <span className="tag tag-razg">разг.</span> работать больше нормы, устать — (khẩu ngữ) làm quá giờ, kiệt sức <span className="example-block">несколько часов (thêm vài tiếng)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">перерабатываться — переработаться</span></td>
                <td className="verb-meaning">
                  1) <span className="tag tag-ust">1 и 2 л. не употр.</span> превратиться во что-либо — chuyển hóa thành <span className="example-block">например, о пище (ví dụ: thức ăn được tiêu hóa)</span>
                  2) <span className="tag tag-razg">разг.</span> переутомиться, устать — (khẩu ngữ) kiệt sức, làm việc quá sức
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">поработать</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  Работать недолго — làm việc в течение некоторого времени (trong một thời gian ngắn)
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">работать</span> <span className="tag tag-nsb">НСВ</span></td>
                <td className="verb-meaning">
                  1) находиться в действии — đang hoạt động, đang vận hành <span className="example-block">завод; сердце (nhà máy; trái tim)</span>
                  2) трудиться — lao động, làm lụng <span className="example-block">в поле (ngoài đồng)</span>
                  3) иметь должность — giữ chức vụ, làm việc ở vị trí nào đó <span className="example-block">на заводе (ở nhà máy)</span>
                  4) обслуживать кого-либо или что-либо — phục vụ ai/cái gì <span className="example-block">на хозяина (cho ông chủ)</span>
                  5) приводить в действие, управлять — vận hành, điều khiển <span className="example-block">лопатой (bằng xẻng)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">работаться</span> <span className="tag tag-nsb">НСВ</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-razg">разг.</span> <span className="tag tag-ust">безл.</span> О желании работать, о том, как идёт работа — diễn đạt trạng thái muốn làm việc hoặc tiến độ công việc (cấu trúc vô nhân xưng)<br/>
                  <span className="example-block">хорошо на воздухе (ngoài trời thì làm việc hứng hơn)</span>
                  <div style={{marginTop: '8px', padding: '8px 12px', background: '#fffbeb', borderLeft: '3px solid #f59e0b', borderRadius: '4px', fontSize: '0.95rem', color: '#92400e'}}>
                    <strong>⚠️ Lưu ý cú pháp:</strong> Cấu trúc vô nhân xưng — chủ thể ở dạng 3 cách: <em>Мне хорошо работается.</em> (Tôi cảm thấy làm việc tốt.)
                  </div>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">подрабатывать — подработать</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-razg">разг.</span><br/>
                  1) немного, дополнительно заработать — kiếm thêm một chút <span className="example-block">денег (tiền)</span>
                  2) немного доделать — hoàn thiện thêm một chút <span className="example-block">вопрос (vấn đề)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">прирабатывать — приработать</span></td>
                <td className="verb-meaning">
                  Дополнительно к основному заработку — kiếm thêm ngoài thu nhập chính<br/>
                  <span className="example-block">сто рублей (một trăm rúp)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">прорабатывать — проработать</span></td>
                <td className="verb-meaning">
                  1) <span className="tag tag-sb">СВ</span> долго — (СВ) làm lâu dài <span className="example-block">пять лет (năm năm)</span>
                  2) <span className="tag tag-razg">разг.</span> глубоко изучить — (khẩu ngữ) nghiên cứu kỹ, đào sâu <span className="example-block">статью (bài báo)</span>
                  *3) <span className="tag tag-razg">разг.</span> <span className="tag tag-ust">шутл.</span> подвергнуть критике — (khẩu ngữ, hài hước) phê bình, chỉ trích tập thể <span className="example-block">кого-либо на собрании (ai đó tại cuộc họp)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">разрабатывать — разработать</span></td>
                <td className="verb-meaning">
                  1) сделать пригодным для чего-либо — khai phá, làm cho phù hợp với mục đích <span className="example-block">участок земли (mảnh đất)</span>
                  2) исследовать, подготовить — nghiên cứu, chuẩn bị <span className="example-block">вопрос (vấn đề)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">срабатывать — сработать</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-prost">прост.</span><br/>
                  1) сделать, изготовить — làm ra, chế tạo <span className="example-block">хорошо (tốt)</span>
                  2) произвести какое-либо действие — phát huy tác dụng, kích hoạt <span className="example-block">инстинкт (bản năng)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">сработаться</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  Достигнуть согласованности в работе между её участниками — đạt được sự ăn ý, phối hợp nhịp nhàng в работе (giữa các thành viên)<br/>
                  <span className="example-block">с кем-либо (với ai đó)</span>
                </td>
              </tr>

              <tr>
                <td><span className="verb-name">(уработаться)</span> <span className="tag tag-sb">СВ</span></td>
                <td className="verb-meaning">
                  <span className="tag tag-prost">прост.</span> Устать — kiệt sức (vì làm việc quá nhiều)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="theory-section" style={{ marginTop: '3rem' }}>
          <div className="theory-header">
            <h3>Tổng hợp theo ngữ nghĩa</h3>
          </div>
          <div className="theory-table-container">
            <table className="theory-table">
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Nhóm ngữ nghĩa</th>
                  <th>Các động từ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sản xuất / tạo ra</td>
                  <td><strong>вырабатывать, наработать</strong></td>
                </tr>
                <tr>
                  <td>Hình thành / xuất hiện</td>
                  <td><strong>вырабатываться</strong></td>
                </tr>
                <tr>
                  <td>Kiếm tiền</td>
                  <td><strong>зарабатывать, подрабатывать, прирабатывать</strong></td>
                </tr>
                <tr>
                  <td>Hoàn thành / kết thúc</td>
                  <td><strong>доработать, отработать, поработать</strong></td>
                </tr>
                <tr>
                  <td>Xử lý / hoàn thiện</td>
                  <td><strong>обрабатывать, прорабатывать, разрабатывать, переработать</strong></td>
                </tr>
                <tr>
                  <td>Bắt đầu hoạt động</td>
                  <td><strong>заработать</strong> <span className="tag tag-ust">nghĩa 3</span></td>
                </tr>
                <tr>
                  <td>Phối hợp ăn ý</td>
                  <td><strong>сработаться</strong></td>
                </tr>
                <tr>
                  <td>Làm quá sức / kiệt sức</td>
                  <td><strong>заработаться, наработаться, переработаться, уработаться, доработаться</strong></td>
                </tr>
                <tr>
                  <td>Hoạt động / làm việc (chung)</td>
                  <td><strong>работать, работаться</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="theory-note">
          <h4>📌 Chú thích phong cách (стилистика):</h4>
          <ul>
            <li>• <span className="tag tag-razg">разг.</span> = разговорный (Khẩu ngữ, hội thoại thông thường)</li>
            <li>• <span className="tag tag-prost">прост.</span> = просторечный (Thông tục, cấp thấp hơn khẩu ngữ)</li>
            <li>• <span className="tag tag-ust">перен.</span> = переносный (Nghĩa bóng)</li>
            <li>• <span className="tag tag-ust">ирон.</span> = иронический (Mỉa mai)</li>
            <li>• <span className="tag tag-ust">шутл.</span> = шутливый (Hài hước)</li>
            <li>• <span className="tag tag-ust">спец.</span> = специальный (Thuật ngữ chuyên ngành)</li>
            <li>• <span className="tag tag-ust">безл.</span> = безличный (Vô nhân xưng)</li>
            <li>• Dấu <strong>*</strong> = Nghĩa ít phổ biến hơn</li>
            <li>• Dấu <strong>(…)</strong> = Động từ ít dùng trong thực tế</li>
          </ul>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
