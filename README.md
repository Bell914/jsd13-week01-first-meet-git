# 🍽️ Flavorscape — Food Menu & Cart System

โครงการนี้เป็นส่วนหนึ่งของการเรียนรู้สัปดาห์ที่ 1 ในหลักสูตร **Generation Thailand (JSD13)** เว็บไซต์จำลองการสั่งอาหารออนไลน์ที่ดึงข้อมูลเมนูอาหารจาก JavaScript มาแสดงผลบนหน้าเว็บ พร้อมระบบตะกร้าสินค้า (Shopping Cart) และการคำนวณราคารวม

🔗 **Repository:** [Bell914/jsd13-week01-first-meet-git](https://github.com/Bell914/jsd13-week01-first-meet-git)

## ✨ Features (ฟีเจอร์การใช้งาน)

| ฟีเจอร์ | รายละเอียด |
|---------|------------|
| **Dynamic Menu Rendering** | แสดงผลเมนูอาหาร (ชื่อ, รูปภาพ, ราคา) โดยดึงข้อมูลจาก JS Object |
| **Add to Cart System** | ปุ่มกดเพิ่มอาหารลงตะกร้าสินค้า |
| **Real-time Calculation** | ระบบคำนวณยอดรวมราคาสินค้าในตะกร้าอัตโนมัติ |
| **Version Control** | จัดการเวอร์ชันของโค้ดอย่างเป็นระบบด้วย Git และ GitHub |

## ⚙️ How It Works: Data Structure

ข้อมูลอาหารทั้งหมดถูกจัดการและเก็บแยกไว้ในไฟล์ JavaScript เพื่อความเป็นระเบียบและง่ายต่อการอัปเดต:

**`my-array.js`** — ใช้เก็บข้อมูลพื้นฐานในรูปแบบ Array:
```javascript
let food = ["Pizza", "Malatang", "Pad Thai", "Burger", "Sushi", "Medovik"];
```

## 📁 Project Structure

```
jsd13-week01-first-meet-git/
├── .gitignore        # ไฟล์สำหรับละเว้นการ track ของ Git
├── index.html        # โครงสร้างหน้าเว็บหลักและ UI
├── my-array.js       # ไฟล์เก็บข้อมูลแบบ Array
├── my-object.js      # ไฟล์เก็บข้อมูลแบบ Object (ฐานข้อมูลอาหาร)
├── PRD.md            # เอกสารกำหนดรายละเอียดโปรเจกต์ (Product Requirements)
└── README.md         # เอกสารแนะนำโปรเจกต์นี้
```
