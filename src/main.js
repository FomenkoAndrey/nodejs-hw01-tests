console.log('#53. JavaScript homework example file')

/*
 *
 * #1
 *
 * Функціональні вимоги:
 * 1. Вхідні параметри:
 *  - Довільна кількість рядків як параметри функцій.
 *
 * 2. Операції кодування:
 *  - Використання функції `encodeToBase64(...args)`: об'єднання всіх аргументів у рядок з роздільником `:` і кодування його в формат base64.
 *  - Використання функції `encodeToHex(...args)`: об'єднання всіх аргументів у рядок з роздільником `:` і кодування його в шістнадцятковий формат.
 *
 * 3. Операції декодування:
 *  - Використання функції `decodeFromBase64(base64String)`: декодування рядка з формату base64 у звичайний рядок.
 *  - Використання функції `decodeFromHex(hexString)`: декодування рядка з шістнадцяткового формату у звичайний рядок.
 *
 * 4. Логування:
 *  - Логування отриманих даних у консоль при виклику кожної з функцій.
 *  - Логування можливих помилок в процесі кодування/декодування.
 *
 * Технічні вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема rest-параметрів для збору аргументів.
 * - Належне управління помилками та виключеннями.
 * - Код має бути чистим, добре структурованим, зі зрозумілими назвами змінних та функцій.
 *
 */

// Функції для кодування даних з довільною кількістю аргументів
function encodeToBase64(...args) {
  // code here
}

function encodeToHex(...args) {
  // code here
}

// Функції для декодування даних
function decodeFromBase64(base64String) {
  // code here
}

function decodeFromHex(hexString) {
  // code here
}

// ! Приклад використання:
// const base64Encoded = encodeToBase64('john@email.com', '123', 'extraData')
// console.log('Base64 Encoded:', base64Encoded)
//
// const hexEncoded = encodeToHex('john@email.com', '123', 'extraData')
// console.log('Hex Encoded:', hexEncoded)
//
// const base64Decoded = decodeFromBase64(base64Encoded)
// console.log('Base64 Decoded:', base64Decoded)
//
// const hexDecoded = decodeFromHex(hexEncoded)
// console.log('Hex Decoded:', hexDecoded)

/*
 *
 * #2
 *
 * Функціональні вимоги:
 * 1. Вхідні параметри:
 *  - `base64String` та `hexString`: рядки, які мають бути декодовані відповідно з форматів base64 та hex.
 *
 * 2. Операції декодування з перевіркою:
 *  - Використання функції `safeDecodeFromBase64(base64String)`: перевірка на валідність рядка у форматі base64 перед декодуванням, повернення декодованого рядка або помилки при невалідних даних.
 *  - Використання функції `safeDecodeFromHex(hexString)`: перевірка на валідність рядка у шістнадцятковому форматі перед декодуванням, повернення декодованого рядка або помилки при невалідних даних.
 *
 * 3. Обробка помилок:
 *  - Якщо декодування не вдається через невалідність вхідних даних, функції викидають помилку з інформативним повідомленням (`Invalid base64 string` або `Invalid hex string`).
 *  - Забезпечення прозорого інформування користувача про помилку при її виникненні.
 *
 * 4. Логування:
 *  - Логування декодованих даних у консоль при успішному декодуванні.
 *  - Логування помилок у консоль при їх виникненні.
 *
 * Технічні вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема регулярних виразів для перевірки формату вхідних даних.
 * - Належне управління помилками та виключеннями.
 * - Код має бути чистим, добре структурованим, зі зрозумілими назвами змінних та функцій.
 *
 */

function safeDecodeFromBase64(base64String) {
  // code here
}

function safeDecodeFromHex(hexString) {
  // code here
}

// ! Приклад використання:
// const safeBase64Decoded = safeDecodeFromBase64(base64Encoded)
// console.log('Safe Base64 Decoded:', safeBase64Decoded)
//
// const safeHexDecoded = safeDecodeFromHex(hexEncoded)
// console.log('Safe Hex Decoded:', safeHexDecoded)

export { encodeToBase64, encodeToHex, decodeFromBase64, decodeFromHex, safeDecodeFromBase64, safeDecodeFromHex }
