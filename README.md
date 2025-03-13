# ReactArcade

## 1. Felhasználói Dokumentáció

### 1.1. Menük
- **Home** -> Kezdőoldal, általános információk.
- **Games** -> Választható játékok listája.

### 1.2. Játék Kiválasztása
Játékot kiválasztunk rákattintással.

#### Szemétgyűjtő Játék
- **Cél**: A leeső szemét darabokat a megfelelő kukába dobni.

- **Irányítás**:
  - **Billentyűzet**: `ArrowLeft` (műanyag kuka), `ArrowRight` (papír kuka).
  - **Egér**: Kattintás a kukákra.

- **Játék vége**:
  - Rossz kukába dobás.
  - Szemét elérése a képernyő aljáig.

#### Memória Játék
- **Cél**: A számítógép által generált sorrend pontos megismétése.
- **Irányítás**: Kártyákra kattintás.
- **Játék vége**: Hibás sorrend megadása.

## 2. Fejlesztői Dokumentáció

### 2.1. Szemétgyűjtő Játék

#### 2.1.1. Főbb Komponensek
- `TrashGame`: A játék fő logikáját tartalmazza.
- `Bins`: A kukákat jeleníti meg.
- `Trash`: Az egyes szemét darabokat jeleníti meg.
- `GameOverScreen`: A játék vége képernyőt jeleníti meg.

#### 2.1.2. Játék Logika
- **Szemét Generálása**: Új szemét darabok jelennek meg időközönként, és a játék gyorsul.
- **Szemét Mozgatása**: A szemét darabok folyamatosan lefelé esnek, és a sebesség növekszik.
- **Szemét Kezelése**: A felhasználó a billentyűzet vagy egér segítségével dobhatja a szemetet a kukába.
- **Játék Újraindítása**: A játék visszaállítja a kezdeti állapotot.

#### 2.1.3. Állapotok és Változók
- `trash`: A jelenlegi szemét darabok listája.
- `score`: A felhasználó pontszáma.
- `gameOver`: A játék végét jelzi.
- `growingBin`: Az éppen "növekvő" kuka típusa (animációhoz).
- `trashSpeed`: A szemét esésének sebessége.
- `spawnInterval`: Az új szemét darabok megjelenésének időköze.

### 2.2. Memória Játék

#### 2.2.1. Főbb Komponensek
- `MemoryGame`: A játék fő logikáját tartalmazza.
- `Card`: Az egyes kártyákat jeleníti meg.
- `GameOverScreen`: A játék vége képernyőt jeleníti meg.

#### 2.2.2. Játék Logika
- **Szekvencia Generálása**: A számítógép véletlenszerűen generál egy szekvenciát, amely hossza minden sikeres kör után növekszik.
- **Szekvencia Lejátszása**: A számítógép lejátsza a szekvenciát, amely során a kártyák képe és hangja aktiválódik.
- **Játékos Válasza**: A játékos a kártyákra kattintva adja meg a szekvenciát.
- **Szekvencia Ellenőrzése**: A játékos által megadott szekvenciát összehasonlítjuk a számítógép által generált szekvenciával.
- **Játék Újraindítása**: A játék visszaállítja a kezdeti állapotot.

#### 2.2.3. Állapotok és Változók
- `sequence`: A számítógép által generált szekvencia.
- `playerSequence`: A játékos által megadott szekvencia.
- `round`: Az aktuális kör száma.
- `isPlaying`: Azt jelzi, hogy éppen a számítógép játsza-e le a szekvenciát.
- `gameOver`: A játék végét jelzi.
- `score`: A játékos pontszáma.
- `activeCardIndex`: Az éppen aktív kártya indexe.

