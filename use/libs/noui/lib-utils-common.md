# LibCommonUtils

![LibCommonUtils](https://img.shields.io/badge/AndroidAppFactory-LibCommonUtils-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibCommonUtils-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibCommonUtils)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-utils-common) ](https://search.maven.org/artifact/com.bihe0832.android/lib-utils-common)

## 功能简介

通用工具类库，提供丰富的实用功能：

- **类型转换**：安全的类型转换工具
- **数学计算**：随机数、最大最小值、百分比计算
- **时间处理**：时间格式化、时间比较、时长转换
- **ID 生成**：线程安全的自增 ID 生成器
- **反射工具**：基于状态机的反射封装
- **数据结构**：定长队列、键值对等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-utils-common:+'
```

## 组件功能

### ConvertUtils

类型转换工具类，提供安全的类型转换功能。

**核心功能：**
- 字符串到基本类型的安全转换
- 基本类型与字节数组的相互转换
- 数组和列表的安全取值
- 数值处理工具方法

**使用示例：**

```java
// 1. 字符串转整数（转换失败返回默认值）
int value = ConvertUtils.parseInt("123", 0);      // 返回 123
int invalid = ConvertUtils.parseInt("abc", -1);   // 返回 -1

// 2. 字符串转长整数
long longValue = ConvertUtils.parseLong("1234567890", 0L);

// 3. 字符串转浮点数
float floatValue = ConvertUtils.parseFloat("3.14", 0.0f);
double doubleValue = ConvertUtils.parseDouble("2.718", 0.0);

// 4. 字符串转布尔值
boolean bool = ConvertUtils.parseBoolean("true");  // 返回 true

// 5. 基本类型转字节数组
byte[] intBytes = ConvertUtils.intToBytes(12345);
byte[] longBytes = ConvertUtils.longToBytes(1234567890L);

// 6. 字节数组转基本类型
int intValue = ConvertUtils.bytesToInt(intBytes);
long longValue = ConvertUtils.bytesToLong(longBytes);

// 7. 数组安全取值
int[] array = {1, 2, 3};
int element = ConvertUtils.getArrayValue(array, 1, 0);  // 返回 2
int outOfBounds = ConvertUtils.getArrayValue(array, 10, -1);  // 返回 -1

// 8. 列表安全取值
List<String> list = Arrays.asList("A", "B", "C");
String item = ConvertUtils.getListValue(list, 1, "");  // 返回 "B"
String invalid = ConvertUtils.getListValue(list, 10, "default");  // 返回 "default"
```

**类型转换特点：**
- 所有转换方法都支持默认值，避免异常
- 自动校验输入格式，无效输入返回默认值
- 支持正则匹配验证（整数、浮点数）

### MathUtils

数学计算工具类，提供常用的数学功能。

**核心功能：**
- 随机数生成（区间随机数、不重复随机采样）
- 数值比较（最大值、最小值）
- 百分比计算和格式化
- 高精度数值运算

**使用示例：**

```java
// 1. 生成区间随机数（包含边界）
int random = MathUtils.getRandNumByLimit(1, 100);  // 返回 [1, 100] 的随机整数

// 2. 从 N 个数中随机选择 K 个不重复的数
int[] samples = MathUtils.sample(100, 10);  // 从 [0, 99] 中随机选 10 个不重复的数

// 3. 获取最大值
int max = MathUtils.getMax(5, 10, 3, 8);  // 返回 10
long maxLong = MathUtils.getMax(100L, 200L, 50L);

// 4. 获取最小值
int min = MathUtils.getMin(5, 10, 3, 8);  // 返回 3
double minDouble = MathUtils.getMin(3.14, 2.71, 1.41);

// 5. 百分比计算
double percent = MathUtils.calculatePercent(25, 100);  // 返回 25.0

// 6. 百分比格式化（带 % 符号）
String formatted = MathUtils.formatPercent(0.75);  // 返回 "75%"
String precise = MathUtils.formatPercent(0.3333, 2);  // 返回 "33.33%"

// 7. 高精度加法
BigDecimal sum = MathUtils.add(0.1, 0.2);  // 精确返回 0.3（避免浮点数精度问题）

// 8. 高精度减法
BigDecimal diff = MathUtils.subtract(1.0, 0.9);  // 精确返回 0.1

// 9. 高精度乘法
BigDecimal product = MathUtils.multiply(3.14, 2);  // 精确返回 6.28

// 10. 高精度除法
BigDecimal quotient = MathUtils.divide(10, 3, 2);  // 保留2位小数，返回 3.33
```

**随机采样算法：**
使用水塘抽样（Reservoir Sampling）实现，保证：
- 等概率选择
- 不重复
- 时间复杂度 O(N)
- 空间复杂度 O(K)

### IdGenerator

线程安全的 ID 生成器，基于 AtomicInteger 实现。

**核心特性：**
- 线程安全，支持并发调用
- 递增生成唯一 ID
- 可自定义起始值

**使用示例：**

```java
// 1. 创建 ID 生成器（从 0 开始）
IdGenerator generator = new IdGenerator(0);

// 2. 生成 ID
int id1 = generator.generate();  // 返回 1
int id2 = generator.generate();  // 返回 2
int id3 = generator.generate();  // 返回 3

// 3. 自定义起始值
IdGenerator customGenerator = new IdGenerator(1000);
int customId = customGenerator.generate();  // 返回 1001

// 4. 多线程环境使用
ExecutorService executor = Executors.newFixedThreadPool(10);
IdGenerator sharedGenerator = new IdGenerator(0);

for (int i = 0; i < 100; i++) {
    executor.submit(() -> {
        int id = sharedGenerator.generate();  // 线程安全，保证唯一
        System.out.println("Generated ID: " + id);
    });
}
```

**适用场景：**
- 请求追踪 ID
- 数据库自增主键模拟
- 多线程任务编号
- 网络请求序列号

### DateUtil

时间处理工具类，提供丰富的时间操作功能。

**核心功能：**
- 各种时间格式转换
- 获取各种格式的时间字符串
- 时间比较文字结果（几秒前、几分钟前）
- 获取某一天开始的时间戳

**使用示例：**

```java
// 1. 获取当前时间字符串（多种格式）
String dateTime = DateUtil.getCurrentDateTime();        // "2025-11-27 10:30:00"
String date = DateUtil.getCurrentDate();                // "2025-11-27"
String time = DateUtil.getCurrentTime();                // "10:30:00"
long timestamp = DateUtil.getCurrentTimestamp();        // 1732697400000

// 2. 时间戳转字符串
String formatted = DateUtil.formatTimestamp(timestamp, "yyyy-MM-dd HH:mm:ss");

// 3. 字符串转时间戳
long ts = DateUtil.parseTimestamp("2025-11-27 10:30:00", "yyyy-MM-dd HH:mm:ss");

// 4. 时间比较文字（相对时间）
String relative = DateUtil.getRelativeTime(timestamp);
// 返回：
// - "刚刚"（1分钟内）
// - "3分钟前"
// - "2小时前"
// - "昨天"
// - "3天前"
// - "2025-11-27"（超过7天）

// 5. 获取某天开始的时间戳（00:00:00）
long dayStart = DateUtil.getDayStartTimestamp(timestamp);

// 6. 获取某天结束的时间戳（23:59:59）
long dayEnd = DateUtil.getDayEndTimestamp(timestamp);

// 7. 时间差计算
long diff = DateUtil.getTimeDiff(timestamp1, timestamp2);  // 返回毫秒差
```

### TimeUtil

时间时长格式化工具。

**核心功能：**
- 秒数转换为时分秒格式
- 毫秒转换为可读格式
- 时长格式化

**使用示例：**

```java
// 1. 秒数转 HH:MM:SS 格式
String formatted = TimeUtil.formatTime(71);       // 返回 "00:01:11"
String longTime = TimeUtil.formatTime(3661);      // 返回 "01:01:01"

// 2. 秒数转 MM:SS 格式
String shortFormat = TimeUtil.formatShortTime(125);  // 返回 "02:05"

// 3. 毫秒转可读格式
String readable = TimeUtil.formatDuration(125000);   // 返回 "2分5秒"
String hours = TimeUtil.formatDuration(3665000);     // 返回 "1小时1分5秒"

// 4. 自定义格式
String custom = TimeUtil.formatTime(3665, "HH时mm分ss秒");  // 返回 "01时01分05秒"
```

### KVPair

简单的 int-string 键值对数据结构。

**使用示例：**

```java
// 创建键值对
KVPair pair = new KVPair(1, "Option 1");

// 获取键和值
int key = pair.getKey();
String value = pair.getValue();

// 用于下拉列表、选项卡等场景
List<KVPair> options = new ArrayList<>();
options.add(new KVPair(1, "男"));
options.add(new KVPair(2, "女"));
options.add(new KVPair(3, "保密"));
```

### LimitedQueue

定长的先进先出（FIFO）数据队列。

**核心特性：**
- 固定容量，超出时自动移除最早的元素
- 基于 LinkedList 实现
- 适用于日志记录、历史记录等场景

**使用示例：**

```java
// 1. 创建容量为 5 的队列
LimitedQueue<String> queue = new LimitedQueue<>(5);

// 2. 添加元素
queue.offer("A");
queue.offer("B");
queue.offer("C");
queue.offer("D");
queue.offer("E");

// 3. 超出容量，自动移除最早的元素
queue.offer("F");  // "A" 被自动移除

// 4. 获取队列内容
List<String> items = queue.getAll();  // ["B", "C", "D", "E", "F"]

// 5. 清空队列
queue.clear();
```

**适用场景：**
- 请求历史记录（保留最近 N 条）
- 日志缓冲区
- 操作历史（撤销/重做）

### ReflecterHelper

基于状态机的 Java 反射工具类。

**核心功能：**
- 简化反射操作
- 状态机模式，链式调用
- 异常安全处理

**使用示例：**

```java
// 1. 调用对象方法
Object result = ReflecterHelper.on(instance)
    .call("methodName", param1, param2)
    .get();

// 2. 获取字段值
Object fieldValue = ReflecterHelper.on(instance)
    .field("fieldName")
    .get();

// 3. 设置字段值
ReflecterHelper.on(instance)
    .field("fieldName")
    .set(newValue);

// 4. 调用静态方法
Object staticResult = ReflecterHelper.on(ClassName.class)
    .call("staticMethod", param)
    .get();
```

## 最佳实践

### 1. 安全类型转换

```java
// 推荐：使用 ConvertUtils，避免 NumberFormatException
int value = ConvertUtils.parseInt(userInput, 0);

// 不推荐：直接解析可能抛异常
try {
    int value = Integer.parseInt(userInput);
} catch (NumberFormatException e) {
    // 异常处理
}
```

### 2. 高精度计算

```java
// 推荐：使用 MathUtils 避免浮点数精度问题
BigDecimal result = MathUtils.add(0.1, 0.2);  // 精确 0.3

// 不推荐：直接运算可能有精度误差
double result = 0.1 + 0.2;  // 可能是 0.30000000000000004
```

### 3. ID 生成器单例

```java
public class AppIdGenerator {
    private static final IdGenerator INSTANCE = new IdGenerator(0);
    
    public static int nextId() {
        return INSTANCE.generate();
    }
}
```

### 4. 时间格式化缓存

```java
// 频繁使用的格式可以缓存 SimpleDateFormat
private static final SimpleDateFormat SDF = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
```

## 注意事项

1. **类型转换**：所有转换方法都有默认值，注意选择合适的默认值
2. **并发安全**：IdGenerator 是线程安全的，其他工具类多为静态方法
3. **高精度计算**：涉及金额等精度敏感场景，使用 BigDecimal 相关方法
4. **时间处理**：注意时区问题，必要时使用带时区的方法
5. **反射性能**：反射有性能开销，避免在循环中频繁使用

## 相关组件

- [LibLog](./lib-log.md) - 日志工具（工具类内部使用）
- [LibThread](./lib-thread.md) - 线程管理
- [LibFile](./lib-file.md) - 文件操作
