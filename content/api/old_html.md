---
date: 2016-09-27T19:16:55-04:00
title: API
---

<p>Provides the high-level user functionality intended for use by typical VEX Cortex programmers.  
<a href="#details">More...</a></p>
<div class="textblock"><code>#include &lt;stdlib.h&gt;</code><br />
<code>#include &lt;stdbool.h&gt;</code><br />
<code>#include &lt;stdarg.h&gt;</code><br />
</div><table class="memberdecls">
<tr class="heading"><td colspan="2"><h2 class="groupheader"><a name="define-members"></a>
Macros</h2></td></tr>
<tr class="memitem:af4cc2866af9a3674feedf15a2bb2b540"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="af4cc2866af9a3674feedf15a2bb2b540"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#af4cc2866af9a3674feedf15a2bb2b540">ACCEL_X</a>&#160;&#160;&#160;5</td></tr>
<tr class="memdesc:af4cc2866af9a3674feedf15a2bb2b540"><td class="mdescLeft">&#160;</td><td class="mdescRight">Analog axis for the X acceleration from the VEX Joystick. <br /></td></tr>
<tr class="separator:af4cc2866af9a3674feedf15a2bb2b540"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a73df2dcbe32c4a51551b34034093c37f"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a73df2dcbe32c4a51551b34034093c37f"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a73df2dcbe32c4a51551b34034093c37f">ACCEL_Y</a>&#160;&#160;&#160;6</td></tr>
<tr class="memdesc:a73df2dcbe32c4a51551b34034093c37f"><td class="mdescLeft">&#160;</td><td class="mdescRight">Analog axis for the Y acceleration from the VEX Joystick. <br /></td></tr>
<tr class="separator:a73df2dcbe32c4a51551b34034093c37f"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ae0f99ae5d6aae10845f04e642560e702"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="ae0f99ae5d6aae10845f04e642560e702"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ae0f99ae5d6aae10845f04e642560e702">BOARD_NR_ADC_PINS</a>&#160;&#160;&#160;8</td></tr>
<tr class="memdesc:ae0f99ae5d6aae10845f04e642560e702"><td class="mdescLeft">&#160;</td><td class="mdescRight">There are 8 available analog I/O on the Cortex. <br /></td></tr>
<tr class="separator:ae0f99ae5d6aae10845f04e642560e702"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ae61940b1dacc12c437f11082a6018a1c"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ae61940b1dacc12c437f11082a6018a1c">BOARD_NR_GPIO_PINS</a>&#160;&#160;&#160;27</td></tr>
<tr class="memdesc:ae61940b1dacc12c437f11082a6018a1c"><td class="mdescLeft">&#160;</td><td class="mdescRight">There are 27 available I/O on the Cortex that can be used for digital communication.  <a href="#ae61940b1dacc12c437f11082a6018a1c">More...</a><br /></td></tr>
<tr class="separator:ae61940b1dacc12c437f11082a6018a1c"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a59adc4c82490d23754cd39c2fb99b0da"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a59adc4c82490d23754cd39c2fb99b0da"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a59adc4c82490d23754cd39c2fb99b0da">EOF</a>&#160;&#160;&#160;((int)-1)</td></tr>
<tr class="memdesc:a59adc4c82490d23754cd39c2fb99b0da"><td class="mdescLeft">&#160;</td><td class="mdescRight">EOF is a value evaluating to -1. <br /></td></tr>
<tr class="separator:a59adc4c82490d23754cd39c2fb99b0da"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a5bb885982ff66a2e0a0a45a8ee9c35e2"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a5bb885982ff66a2e0a0a45a8ee9c35e2">HIGH</a>&#160;&#160;&#160;1</td></tr>
<tr class="memdesc:a5bb885982ff66a2e0a0a45a8ee9c35e2"><td class="mdescLeft">&#160;</td><td class="mdescRight">Used for <a class="el" href="#a23e767e5b47fa61d4e2cc02e6f15c7ab" title="Sets the digital value (1 or 0) of a pin configured as a digital output. ">digitalWrite()</a> to specify a logic HIGH state to output.  <a href="#a5bb885982ff66a2e0a0a45a8ee9c35e2">More...</a><br /></td></tr>
<tr class="separator:a5bb885982ff66a2e0a0a45a8ee9c35e2"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a6d369ee1e214daea8bf939aa817b5d00"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a6d369ee1e214daea8bf939aa817b5d00">IME_ADDR_MAX</a>&#160;&#160;&#160;0x1F</td></tr>
<tr class="memdesc:a6d369ee1e214daea8bf939aa817b5d00"><td class="mdescLeft">&#160;</td><td class="mdescRight">IME addresses end at 0x1F.  <a href="#a6d369ee1e214daea8bf939aa817b5d00">More...</a><br /></td></tr>
<tr class="separator:a6d369ee1e214daea8bf939aa817b5d00"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a1bb283bd7893b9855e2f23013891fc82"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a1bb283bd7893b9855e2f23013891fc82">INPUT</a>&#160;&#160;&#160;0x0A</td></tr>
<tr class="memdesc:a1bb283bd7893b9855e2f23013891fc82"><td class="mdescLeft">&#160;</td><td class="mdescRight"><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for digital input, with pullup.  <a href="#a1bb283bd7893b9855e2f23013891fc82">More...</a><br /></td></tr>
<tr class="separator:a1bb283bd7893b9855e2f23013891fc82"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a877f7490feac007f3a904ece06afe87a"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a877f7490feac007f3a904ece06afe87a">INPUT_ANALOG</a>&#160;&#160;&#160;0x00</td></tr>
<tr class="memdesc:a877f7490feac007f3a904ece06afe87a"><td class="mdescLeft">&#160;</td><td class="mdescRight"><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for analog inputs.  <a href="#a877f7490feac007f3a904ece06afe87a">More...</a><br /></td></tr>
<tr class="separator:a877f7490feac007f3a904ece06afe87a"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ac31084f7ffdfd4325b3703718fce74ea"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ac31084f7ffdfd4325b3703718fce74ea">INPUT_FLOATING</a>&#160;&#160;&#160;0x04</td></tr>
<tr class="memdesc:ac31084f7ffdfd4325b3703718fce74ea"><td class="mdescLeft">&#160;</td><td class="mdescRight"><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for digital input, without pullup.  <a href="#ac31084f7ffdfd4325b3703718fce74ea">More...</a><br /></td></tr>
<tr class="separator:ac31084f7ffdfd4325b3703718fce74ea"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ab0ce5d2283faeb80389f8b54a925a15b"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="ab0ce5d2283faeb80389f8b54a925a15b"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ab0ce5d2283faeb80389f8b54a925a15b">INTERRUPT_EDGE_BOTH</a>&#160;&#160;&#160;3</td></tr>
<tr class="memdesc:ab0ce5d2283faeb80389f8b54a925a15b"><td class="mdescLeft">&#160;</td><td class="mdescRight">When used in <a class="el" href="#a8d0fd8e69a4c4c5aba981d106ee7f9ac" title="Sets up an interrupt to occur on the specified pin, and resets any counters or timers associated with...">ioSetInterrupt()</a>, triggers an interrupt on both rising and falling edges (LOW to HIGH or HIGH to LOW). <br /></td></tr>
<tr class="separator:ab0ce5d2283faeb80389f8b54a925a15b"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a5d01e5bd9626ca29af3e1e9385e58427"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a5d01e5bd9626ca29af3e1e9385e58427"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a5d01e5bd9626ca29af3e1e9385e58427">INTERRUPT_EDGE_FALLING</a>&#160;&#160;&#160;2</td></tr>
<tr class="memdesc:a5d01e5bd9626ca29af3e1e9385e58427"><td class="mdescLeft">&#160;</td><td class="mdescRight">When used in <a class="el" href="#a8d0fd8e69a4c4c5aba981d106ee7f9ac" title="Sets up an interrupt to occur on the specified pin, and resets any counters or timers associated with...">ioSetInterrupt()</a>, triggers an interrupt on falling edges (HIGH to LOW). <br /></td></tr>
<tr class="separator:a5d01e5bd9626ca29af3e1e9385e58427"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a8bd8f2fe1b638ebff63e702d14880b12"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a8bd8f2fe1b638ebff63e702d14880b12"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a8bd8f2fe1b638ebff63e702d14880b12">INTERRUPT_EDGE_RISING</a>&#160;&#160;&#160;1</td></tr>
<tr class="memdesc:a8bd8f2fe1b638ebff63e702d14880b12"><td class="mdescLeft">&#160;</td><td class="mdescRight">When used in <a class="el" href="#a8d0fd8e69a4c4c5aba981d106ee7f9ac" title="Sets up an interrupt to occur on the specified pin, and resets any counters or timers associated with...">ioSetInterrupt()</a>, triggers an interrupt on rising edges (LOW to HIGH). <br /></td></tr>
<tr class="separator:a8bd8f2fe1b638ebff63e702d14880b12"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a950e3ba6cd65c992b92f36b837c52a0a"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a950e3ba6cd65c992b92f36b837c52a0a"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a950e3ba6cd65c992b92f36b837c52a0a">JOY_DOWN</a>&#160;&#160;&#160;1</td></tr>
<tr class="memdesc:a950e3ba6cd65c992b92f36b837c52a0a"><td class="mdescLeft">&#160;</td><td class="mdescRight">DOWN button (valid on channels 5, 6, 7, 8) <br /></td></tr>
<tr class="separator:a950e3ba6cd65c992b92f36b837c52a0a"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a5b41c548ba97989b473f6393b9c2c7f1"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a5b41c548ba97989b473f6393b9c2c7f1"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a5b41c548ba97989b473f6393b9c2c7f1">JOY_LEFT</a>&#160;&#160;&#160;2</td></tr>
<tr class="memdesc:a5b41c548ba97989b473f6393b9c2c7f1"><td class="mdescLeft">&#160;</td><td class="mdescRight">LEFT button (valid on channels 7, 8) <br /></td></tr>
<tr class="separator:a5b41c548ba97989b473f6393b9c2c7f1"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a59c1b2e5c6856ed044ba0635102fd995"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a59c1b2e5c6856ed044ba0635102fd995"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a59c1b2e5c6856ed044ba0635102fd995">JOY_RIGHT</a>&#160;&#160;&#160;8</td></tr>
<tr class="memdesc:a59c1b2e5c6856ed044ba0635102fd995"><td class="mdescLeft">&#160;</td><td class="mdescRight">RIGHT button (valid on channels 7, 8) <br /></td></tr>
<tr class="separator:a59c1b2e5c6856ed044ba0635102fd995"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a85e47af11e6a32e3a819f247d9f619d6"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a85e47af11e6a32e3a819f247d9f619d6"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a85e47af11e6a32e3a819f247d9f619d6">JOY_UP</a>&#160;&#160;&#160;4</td></tr>
<tr class="memdesc:a85e47af11e6a32e3a819f247d9f619d6"><td class="mdescLeft">&#160;</td><td class="mdescRight">UP button (valid on channels 5, 6, 7, 8) <br /></td></tr>
<tr class="separator:a85e47af11e6a32e3a819f247d9f619d6"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:abf8903693b4a95a6b653916d5f6fe486"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="abf8903693b4a95a6b653916d5f6fe486"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#abf8903693b4a95a6b653916d5f6fe486">LCD_BTN_CENTER</a>&#160;&#160;&#160;2</td></tr>
<tr class="memdesc:abf8903693b4a95a6b653916d5f6fe486"><td class="mdescLeft">&#160;</td><td class="mdescRight">CENTER button on LCD for use with <a class="el" href="#af13bc828964f1443a0689f4780b6dc29" title="Reads the user button status from the LCD display. ">lcdReadButtons()</a> <br /></td></tr>
<tr class="separator:abf8903693b4a95a6b653916d5f6fe486"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:afa86afc6491531fb4b4d7f1e18803852"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="afa86afc6491531fb4b4d7f1e18803852"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#afa86afc6491531fb4b4d7f1e18803852">LCD_BTN_LEFT</a>&#160;&#160;&#160;1</td></tr>
<tr class="memdesc:afa86afc6491531fb4b4d7f1e18803852"><td class="mdescLeft">&#160;</td><td class="mdescRight">LEFT button on LCD for use with <a class="el" href="#af13bc828964f1443a0689f4780b6dc29" title="Reads the user button status from the LCD display. ">lcdReadButtons()</a> <br /></td></tr>
<tr class="separator:afa86afc6491531fb4b4d7f1e18803852"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a7851ef3eb7573b194efb0a05d88f2c35"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a7851ef3eb7573b194efb0a05d88f2c35"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a7851ef3eb7573b194efb0a05d88f2c35">LCD_BTN_RIGHT</a>&#160;&#160;&#160;4</td></tr>
<tr class="memdesc:a7851ef3eb7573b194efb0a05d88f2c35"><td class="mdescLeft">&#160;</td><td class="mdescRight">RIGHT button on LCD for use with <a class="el" href="#af13bc828964f1443a0689f4780b6dc29" title="Reads the user button status from the LCD display. ">lcdReadButtons()</a> <br /></td></tr>
<tr class="separator:a7851ef3eb7573b194efb0a05d88f2c35"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ab811d8c6ff3a505312d3276590444289"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ab811d8c6ff3a505312d3276590444289">LOW</a>&#160;&#160;&#160;0</td></tr>
<tr class="memdesc:ab811d8c6ff3a505312d3276590444289"><td class="mdescLeft">&#160;</td><td class="mdescRight">Used for <a class="el" href="#a23e767e5b47fa61d4e2cc02e6f15c7ab" title="Sets the digital value (1 or 0) of a pin configured as a digital output. ">digitalWrite()</a> to specify a logic LOW state to output.  <a href="#ab811d8c6ff3a505312d3276590444289">More...</a><br /></td></tr>
<tr class="separator:ab811d8c6ff3a505312d3276590444289"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a61a3c9a18380aafb6e430e79bf596557"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a61a3c9a18380aafb6e430e79bf596557">OUTPUT</a>&#160;&#160;&#160;0x01</td></tr>
<tr class="memdesc:a61a3c9a18380aafb6e430e79bf596557"><td class="mdescLeft">&#160;</td><td class="mdescRight"><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for digital output, push-pull.  <a href="#a61a3c9a18380aafb6e430e79bf596557">More...</a><br /></td></tr>
<tr class="separator:a61a3c9a18380aafb6e430e79bf596557"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aea041a6db0843f4b27a6a39b829d56e7"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aea041a6db0843f4b27a6a39b829d56e7">OUTPUT_OD</a>&#160;&#160;&#160;0x05</td></tr>
<tr class="memdesc:aea041a6db0843f4b27a6a39b829d56e7"><td class="mdescLeft">&#160;</td><td class="mdescRight"><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for open-drain outputs.  <a href="#aea041a6db0843f4b27a6a39b829d56e7">More...</a><br /></td></tr>
<tr class="separator:aea041a6db0843f4b27a6a39b829d56e7"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a4c8d0b76b470ba65a43ca46a88320f39"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a4c8d0b76b470ba65a43ca46a88320f39"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a4c8d0b76b470ba65a43ca46a88320f39">SEEK_CUR</a>&#160;&#160;&#160;1</td></tr>
<tr class="memdesc:a4c8d0b76b470ba65a43ca46a88320f39"><td class="mdescLeft">&#160;</td><td class="mdescRight">SEEK_CUR is used in <a class="el" href="#af2b5e837a27524264f0422232f5f9538" title="Seeks within a file open in Read mode. ">fseek()</a> to denote an relative position in bytes from the current file location. <br /></td></tr>
<tr class="separator:a4c8d0b76b470ba65a43ca46a88320f39"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ad2a2e6c114780c3071efd24f16c7f7d8"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ad2a2e6c114780c3071efd24f16c7f7d8">SEEK_END</a>&#160;&#160;&#160;2</td></tr>
<tr class="memdesc:ad2a2e6c114780c3071efd24f16c7f7d8"><td class="mdescLeft">&#160;</td><td class="mdescRight">SEEK_END is used in <a class="el" href="#af2b5e837a27524264f0422232f5f9538" title="Seeks within a file open in Read mode. ">fseek()</a> to denote an absolute position in bytes from the end of the file.  <a href="#ad2a2e6c114780c3071efd24f16c7f7d8">More...</a><br /></td></tr>
<tr class="separator:ad2a2e6c114780c3071efd24f16c7f7d8"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a0d112bae8fd35be772185b6ec6bcbe64"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a0d112bae8fd35be772185b6ec6bcbe64"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a0d112bae8fd35be772185b6ec6bcbe64">SEEK_SET</a>&#160;&#160;&#160;0</td></tr>
<tr class="memdesc:a0d112bae8fd35be772185b6ec6bcbe64"><td class="mdescLeft">&#160;</td><td class="mdescRight">SEEK_SET is used in <a class="el" href="#af2b5e837a27524264f0422232f5f9538" title="Seeks within a file open in Read mode. ">fseek()</a> to denote an absolute position in bytes from the start of the file. <br /></td></tr>
<tr class="separator:a0d112bae8fd35be772185b6ec6bcbe64"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a0db78b4521d43c0d702b9577bd3acda2"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a0db78b4521d43c0d702b9577bd3acda2"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a0db78b4521d43c0d702b9577bd3acda2">SERIAL_8N1</a>&#160;&#160;&#160;0x0000</td></tr>
<tr class="memdesc:a0db78b4521d43c0d702b9577bd3acda2"><td class="mdescLeft">&#160;</td><td class="mdescRight">Specifies the default serial settings when used in <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> <br /></td></tr>
<tr class="separator:a0db78b4521d43c0d702b9577bd3acda2"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ae40f3da18d9c7bc3aa3b4f14f6c2fe03"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="ae40f3da18d9c7bc3aa3b4f14f6c2fe03"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ae40f3da18d9c7bc3aa3b4f14f6c2fe03">SERIAL_DATABITS_8</a>&#160;&#160;&#160;0x0000</td></tr>
<tr class="memdesc:ae40f3da18d9c7bc3aa3b4f14f6c2fe03"><td class="mdescLeft">&#160;</td><td class="mdescRight">Bit mask for <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> for 8 data bits (typical) <br /></td></tr>
<tr class="separator:ae40f3da18d9c7bc3aa3b4f14f6c2fe03"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aa742d7e1dd88294b770e7a2fa244d6cb"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="aa742d7e1dd88294b770e7a2fa244d6cb"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aa742d7e1dd88294b770e7a2fa244d6cb">SERIAL_DATABITS_9</a>&#160;&#160;&#160;0x1000</td></tr>
<tr class="memdesc:aa742d7e1dd88294b770e7a2fa244d6cb"><td class="mdescLeft">&#160;</td><td class="mdescRight">Bit mask for <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> for 9 data bits. <br /></td></tr>
<tr class="separator:aa742d7e1dd88294b770e7a2fa244d6cb"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ab1469484b1ad5e39561c21b5a590eaf6"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="ab1469484b1ad5e39561c21b5a590eaf6"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ab1469484b1ad5e39561c21b5a590eaf6">SERIAL_PARITY_EVEN</a>&#160;&#160;&#160;0x0400</td></tr>
<tr class="memdesc:ab1469484b1ad5e39561c21b5a590eaf6"><td class="mdescLeft">&#160;</td><td class="mdescRight">Bit mask for <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> for Even parity. <br /></td></tr>
<tr class="separator:ab1469484b1ad5e39561c21b5a590eaf6"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ad3af92391cfd2670eb782a60c7f923a6"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="ad3af92391cfd2670eb782a60c7f923a6"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ad3af92391cfd2670eb782a60c7f923a6">SERIAL_PARITY_NONE</a>&#160;&#160;&#160;0x0000</td></tr>
<tr class="memdesc:ad3af92391cfd2670eb782a60c7f923a6"><td class="mdescLeft">&#160;</td><td class="mdescRight">Bit mask for <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> for No parity (typical) <br /></td></tr>
<tr class="separator:ad3af92391cfd2670eb782a60c7f923a6"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aa1baeda93fe64b888113824d02471d0f"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="aa1baeda93fe64b888113824d02471d0f"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aa1baeda93fe64b888113824d02471d0f">SERIAL_PARITY_ODD</a>&#160;&#160;&#160;0x0600</td></tr>
<tr class="memdesc:aa1baeda93fe64b888113824d02471d0f"><td class="mdescLeft">&#160;</td><td class="mdescRight">Bit mask for <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> for Odd parity. <br /></td></tr>
<tr class="separator:aa1baeda93fe64b888113824d02471d0f"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aa81fc4bae892bc1f7be6ca8434ee0ffd"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="aa81fc4bae892bc1f7be6ca8434ee0ffd"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aa81fc4bae892bc1f7be6ca8434ee0ffd">SERIAL_STOPBITS_1</a>&#160;&#160;&#160;0x0000</td></tr>
<tr class="memdesc:aa81fc4bae892bc1f7be6ca8434ee0ffd"><td class="mdescLeft">&#160;</td><td class="mdescRight">Bit mask for <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> for 1 stop bit (typical) <br /></td></tr>
<tr class="separator:aa81fc4bae892bc1f7be6ca8434ee0ffd"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a3051a690103146121c8202301dbc4e79"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a3051a690103146121c8202301dbc4e79"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a3051a690103146121c8202301dbc4e79">SERIAL_STOPBITS_2</a>&#160;&#160;&#160;0x2000</td></tr>
<tr class="memdesc:a3051a690103146121c8202301dbc4e79"><td class="mdescLeft">&#160;</td><td class="mdescRight">Bit mask for <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> for 2 stop bits. <br /></td></tr>
<tr class="separator:a3051a690103146121c8202301dbc4e79"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aaca70138f0cb63ddb026921afc635179"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="aaca70138f0cb63ddb026921afc635179"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aaca70138f0cb63ddb026921afc635179">stdin</a>&#160;&#160;&#160;((<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *)3)</td></tr>
<tr class="memdesc:aaca70138f0cb63ddb026921afc635179"><td class="mdescLeft">&#160;</td><td class="mdescRight">The standard input stream uses the PC debug terminal. <br /></td></tr>
<tr class="separator:aaca70138f0cb63ddb026921afc635179"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a0c0ef221f95f64e8632451312fd18cc8"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a0c0ef221f95f64e8632451312fd18cc8"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a0c0ef221f95f64e8632451312fd18cc8">stdout</a>&#160;&#160;&#160;((<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *)3)</td></tr>
<tr class="memdesc:a0c0ef221f95f64e8632451312fd18cc8"><td class="mdescLeft">&#160;</td><td class="mdescRight">The standard output stream uses the PC debug terminal. <br /></td></tr>
<tr class="separator:a0c0ef221f95f64e8632451312fd18cc8"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a13a05b7bdcbd07423a04bfb4cc6759b3"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a13a05b7bdcbd07423a04bfb4cc6759b3"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a13a05b7bdcbd07423a04bfb4cc6759b3">TASK_DEAD</a>&#160;&#160;&#160;0</td></tr>
<tr class="memdesc:a13a05b7bdcbd07423a04bfb4cc6759b3"><td class="mdescLeft">&#160;</td><td class="mdescRight">Constant returned from <a class="el" href="#a4f805fd479cb4c427e8f4edfa7d55143" title="Retrieves the state of the specified task. ">taskGetState()</a> when the task is dead or nonexistant. <br /></td></tr>
<tr class="separator:a13a05b7bdcbd07423a04bfb4cc6759b3"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a51827b6505ae59fb2ddf9d32e5519ab4"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a51827b6505ae59fb2ddf9d32e5519ab4">TASK_DEFAULT_STACK_SIZE</a>&#160;&#160;&#160;512</td></tr>
<tr class="memdesc:a51827b6505ae59fb2ddf9d32e5519ab4"><td class="mdescLeft">&#160;</td><td class="mdescRight">The recommended stack size for a new task that does an average amount of work.  <a href="#a51827b6505ae59fb2ddf9d32e5519ab4">More...</a><br /></td></tr>
<tr class="separator:a51827b6505ae59fb2ddf9d32e5519ab4"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a36bb10267dd6269cfdb231d9e98b5794"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a36bb10267dd6269cfdb231d9e98b5794">TASK_MAX</a>&#160;&#160;&#160;16</td></tr>
<tr class="memdesc:a36bb10267dd6269cfdb231d9e98b5794"><td class="mdescLeft">&#160;</td><td class="mdescRight">Only this many tasks can exist at once.  <a href="#a36bb10267dd6269cfdb231d9e98b5794">More...</a><br /></td></tr>
<tr class="separator:a36bb10267dd6269cfdb231d9e98b5794"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ad896f092de28df06fbcdcf925a933996"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ad896f092de28df06fbcdcf925a933996">TASK_MAX_PRIORITIES</a>&#160;&#160;&#160;6</td></tr>
<tr class="memdesc:ad896f092de28df06fbcdcf925a933996"><td class="mdescLeft">&#160;</td><td class="mdescRight">The maximum number of available task priorities, which run from 0 to 5.  <a href="#ad896f092de28df06fbcdcf925a933996">More...</a><br /></td></tr>
<tr class="separator:ad896f092de28df06fbcdcf925a933996"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ac6f33c920771bc599d55765a5a6e62c7"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ac6f33c920771bc599d55765a5a6e62c7">TASK_MINIMAL_STACK_SIZE</a>&#160;&#160;&#160;64</td></tr>
<tr class="memdesc:ac6f33c920771bc599d55765a5a6e62c7"><td class="mdescLeft">&#160;</td><td class="mdescRight">The minimum stack depth for a task.  <a href="#ac6f33c920771bc599d55765a5a6e62c7">More...</a><br /></td></tr>
<tr class="separator:ac6f33c920771bc599d55765a5a6e62c7"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a3082a7e8f15691441dba683711bb823f"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a3082a7e8f15691441dba683711bb823f">TASK_PRIORITY_DEFAULT</a>&#160;&#160;&#160;2</td></tr>
<tr class="memdesc:a3082a7e8f15691441dba683711bb823f"><td class="mdescLeft">&#160;</td><td class="mdescRight">The default task priority, which should be used for most tasks.  <a href="#a3082a7e8f15691441dba683711bb823f">More...</a><br /></td></tr>
<tr class="separator:a3082a7e8f15691441dba683711bb823f"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a1b3cef27c58c5cac78f170c90dbf7a89"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a1b3cef27c58c5cac78f170c90dbf7a89">TASK_PRIORITY_HIGHEST</a>&#160;&#160;&#160;(<a class="el" href="#ad896f092de28df06fbcdcf925a933996">TASK_MAX_PRIORITIES</a> - 1)</td></tr>
<tr class="memdesc:a1b3cef27c58c5cac78f170c90dbf7a89"><td class="mdescLeft">&#160;</td><td class="mdescRight">The highest priority that can be assigned to a task.  <a href="#a1b3cef27c58c5cac78f170c90dbf7a89">More...</a><br /></td></tr>
<tr class="separator:a1b3cef27c58c5cac78f170c90dbf7a89"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aa494e6c8001ab827484775bfd5c0fe9d"><td class="memItemLeft" align="right" valign="top">#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aa494e6c8001ab827484775bfd5c0fe9d">TASK_PRIORITY_LOWEST</a>&#160;&#160;&#160;0</td></tr>
<tr class="memdesc:aa494e6c8001ab827484775bfd5c0fe9d"><td class="mdescLeft">&#160;</td><td class="mdescRight">The lowest priority that can be assigned to a task, which puts it on a level with the idle task.  <a href="#aa494e6c8001ab827484775bfd5c0fe9d">More...</a><br /></td></tr>
<tr class="separator:aa494e6c8001ab827484775bfd5c0fe9d"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a9dbd080b9c7d79b61e865717bc06306c"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a9dbd080b9c7d79b61e865717bc06306c"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a9dbd080b9c7d79b61e865717bc06306c">TASK_RUNNABLE</a>&#160;&#160;&#160;2</td></tr>
<tr class="memdesc:a9dbd080b9c7d79b61e865717bc06306c"><td class="mdescLeft">&#160;</td><td class="mdescRight">Constant returned from <a class="el" href="#a4f805fd479cb4c427e8f4edfa7d55143" title="Retrieves the state of the specified task. ">taskGetState()</a> when the task is exists and is available to run, but not currently running. <br /></td></tr>
<tr class="separator:a9dbd080b9c7d79b61e865717bc06306c"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a17e3f99a030e5dfefb8f9815600e3fed"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a17e3f99a030e5dfefb8f9815600e3fed"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a17e3f99a030e5dfefb8f9815600e3fed">TASK_RUNNING</a>&#160;&#160;&#160;1</td></tr>
<tr class="memdesc:a17e3f99a030e5dfefb8f9815600e3fed"><td class="mdescLeft">&#160;</td><td class="mdescRight">Constant returned from <a class="el" href="#a4f805fd479cb4c427e8f4edfa7d55143" title="Retrieves the state of the specified task. ">taskGetState()</a> when the task is actively executing. <br /></td></tr>
<tr class="separator:a17e3f99a030e5dfefb8f9815600e3fed"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a1fa55559982d06fb5f1b3f2fbf5814e5"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a1fa55559982d06fb5f1b3f2fbf5814e5"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a1fa55559982d06fb5f1b3f2fbf5814e5">TASK_SLEEPING</a>&#160;&#160;&#160;3</td></tr>
<tr class="memdesc:a1fa55559982d06fb5f1b3f2fbf5814e5"><td class="mdescLeft">&#160;</td><td class="mdescRight">Constant returned from <a class="el" href="#a4f805fd479cb4c427e8f4edfa7d55143" title="Retrieves the state of the specified task. ">taskGetState()</a> when the task is delayed or blocked waiting for a semaphore, mutex, or I/O operation. <br /></td></tr>
<tr class="separator:a1fa55559982d06fb5f1b3f2fbf5814e5"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ac90388d86d6cacd27fb13b218daff9ba"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="ac90388d86d6cacd27fb13b218daff9ba"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ac90388d86d6cacd27fb13b218daff9ba">TASK_SUSPENDED</a>&#160;&#160;&#160;4</td></tr>
<tr class="memdesc:ac90388d86d6cacd27fb13b218daff9ba"><td class="mdescLeft">&#160;</td><td class="mdescRight">Constant returned from <a class="el" href="#a4f805fd479cb4c427e8f4edfa7d55143" title="Retrieves the state of the specified task. ">taskGetState()</a> when the task is suspended using <a class="el" href="#ab56a51f337ad1903ad2bbce095744170" title="Suspends the specified task. ">taskSuspend()</a>. <br /></td></tr>
<tr class="separator:ac90388d86d6cacd27fb13b218daff9ba"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ad94ac6d5e345a1f794174d9bb7c6f69c"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="ad94ac6d5e345a1f794174d9bb7c6f69c"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ad94ac6d5e345a1f794174d9bb7c6f69c">uart1</a>&#160;&#160;&#160;((<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *)1)</td></tr>
<tr class="memdesc:ad94ac6d5e345a1f794174d9bb7c6f69c"><td class="mdescLeft">&#160;</td><td class="mdescRight">UART 1 on the Cortex; must be opened first using <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a>. <br /></td></tr>
<tr class="separator:ad94ac6d5e345a1f794174d9bb7c6f69c"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a001e6f2f6c87e1e2bcff741ab586024e"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a001e6f2f6c87e1e2bcff741ab586024e"></a>
#define&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a001e6f2f6c87e1e2bcff741ab586024e">uart2</a>&#160;&#160;&#160;((<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *)2)</td></tr>
<tr class="memdesc:a001e6f2f6c87e1e2bcff741ab586024e"><td class="mdescLeft">&#160;</td><td class="mdescRight">UART 2 on the Cortex; must be opened first using <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a>. <br /></td></tr>
<tr class="separator:a001e6f2f6c87e1e2bcff741ab586024e"><td class="memSeparator" colspan="2">&#160;</td></tr>
</table><table class="memberdecls">
<tr class="heading"><td colspan="2"><h2 class="groupheader"><a name="typedef-members"></a>
Typedefs</h2></td></tr>
<tr class="memitem:a8289b20280bf9db1462f60dae76d2939"><td class="memItemLeft" align="right" valign="top">typedef void *&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a></td></tr>
<tr class="memdesc:a8289b20280bf9db1462f60dae76d2939"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reference type for an initialized encoder.  <a href="#a8289b20280bf9db1462f60dae76d2939">More...</a><br /></td></tr>
<tr class="separator:a8289b20280bf9db1462f60dae76d2939"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ac15bbd02a147d1595cdfb8b2979693d7"><td class="memItemLeft" align="right" valign="top">typedef int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a></td></tr>
<tr class="memdesc:ac15bbd02a147d1595cdfb8b2979693d7"><td class="mdescLeft">&#160;</td><td class="mdescRight">FILE is an integer referring to a stream for the standard I/O functions.  <a href="#ac15bbd02a147d1595cdfb8b2979693d7">More...</a><br /></td></tr>
<tr class="separator:ac15bbd02a147d1595cdfb8b2979693d7"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a04e06985633aa933343fcfa3d7fb268d"><td class="memItemLeft" align="right" valign="top">typedef void *&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a></td></tr>
<tr class="memdesc:a04e06985633aa933343fcfa3d7fb268d"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reference type for an initialized gyro.  <a href="#a04e06985633aa933343fcfa3d7fb268d">More...</a><br /></td></tr>
<tr class="separator:a04e06985633aa933343fcfa3d7fb268d"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a5bbb1ca889e36aec7b4fce324c2662c4"><td class="memItemLeft" align="right" valign="top">typedef void(*&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a5bbb1ca889e36aec7b4fce324c2662c4">InterruptHandler</a>) (unsigned char pin)</td></tr>
<tr class="memdesc:a5bbb1ca889e36aec7b4fce324c2662c4"><td class="mdescLeft">&#160;</td><td class="mdescRight">Type definition for interrupt handlers.  <a href="#a5bbb1ca889e36aec7b4fce324c2662c4">More...</a><br /></td></tr>
<tr class="separator:a5bbb1ca889e36aec7b4fce324c2662c4"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a9b40607ca13d2b5261f47f613e3c4fa4"><td class="memItemLeft" align="right" valign="top">typedef void *&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a></td></tr>
<tr class="memdesc:a9b40607ca13d2b5261f47f613e3c4fa4"><td class="mdescLeft">&#160;</td><td class="mdescRight">Type by which mutexes are referenced.  <a href="#a9b40607ca13d2b5261f47f613e3c4fa4">More...</a><br /></td></tr>
<tr class="separator:a9b40607ca13d2b5261f47f613e3c4fa4"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a884363b5e46c2eedeae95c179aaeb717"><td class="memItemLeft" align="right" valign="top">typedef void *&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a></td></tr>
<tr class="memdesc:a884363b5e46c2eedeae95c179aaeb717"><td class="mdescLeft">&#160;</td><td class="mdescRight">Type by which semaphores are referenced.  <a href="#a884363b5e46c2eedeae95c179aaeb717">More...</a><br /></td></tr>
<tr class="separator:a884363b5e46c2eedeae95c179aaeb717"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:af3bbcf99b9e4561ebbae4a1f283ba6a3"><td class="memItemLeft" align="right" valign="top">typedef void(*&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#af3bbcf99b9e4561ebbae4a1f283ba6a3">TaskCode</a>) (void *)</td></tr>
<tr class="memdesc:af3bbcf99b9e4561ebbae4a1f283ba6a3"><td class="mdescLeft">&#160;</td><td class="mdescRight">Type for defining task functions.  <a href="#af3bbcf99b9e4561ebbae4a1f283ba6a3">More...</a><br /></td></tr>
<tr class="separator:af3bbcf99b9e4561ebbae4a1f283ba6a3"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a23dca3c0de10682afb982677ff292f77"><td class="memItemLeft" align="right" valign="top">typedef void *&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a></td></tr>
<tr class="memdesc:a23dca3c0de10682afb982677ff292f77"><td class="mdescLeft">&#160;</td><td class="mdescRight">Type by which tasks are referenced.  <a href="#a23dca3c0de10682afb982677ff292f77">More...</a><br /></td></tr>
<tr class="separator:a23dca3c0de10682afb982677ff292f77"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a527ee5b64142c3505d6931d8ed7ac6b7"><td class="memItemLeft" align="right" valign="top">typedef void *&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a527ee5b64142c3505d6931d8ed7ac6b7">Ultrasonic</a></td></tr>
<tr class="memdesc:a527ee5b64142c3505d6931d8ed7ac6b7"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reference type for an initialized ultrasonic sensor.  <a href="#a527ee5b64142c3505d6931d8ed7ac6b7">More...</a><br /></td></tr>
<tr class="separator:a527ee5b64142c3505d6931d8ed7ac6b7"><td class="memSeparator" colspan="2">&#160;</td></tr>
</table><table class="memberdecls">
<tr class="heading"><td colspan="2"><h2 class="groupheader"><a name="func-members"></a>
Functions</h2></td></tr>
<tr class="memitem:aab54c390b2ff91b5b7861db877136392"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aab54c390b2ff91b5b7861db877136392">analogCalibrate</a> (unsigned char channel)</td></tr>
<tr class="memdesc:aab54c390b2ff91b5b7861db877136392"><td class="mdescLeft">&#160;</td><td class="mdescRight">Calibrates the analog sensor on the specified channel.  <a href="#aab54c390b2ff91b5b7861db877136392">More...</a><br /></td></tr>
<tr class="separator:aab54c390b2ff91b5b7861db877136392"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a5da86064604c539c2b6a5e2993289108"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a5da86064604c539c2b6a5e2993289108">analogRead</a> (unsigned char channel)</td></tr>
<tr class="memdesc:a5da86064604c539c2b6a5e2993289108"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reads an analog input channel and returns the 12-bit value.  <a href="#a5da86064604c539c2b6a5e2993289108">More...</a><br /></td></tr>
<tr class="separator:a5da86064604c539c2b6a5e2993289108"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:adefc4d860dbaed441901d47d8c3598ee"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#adefc4d860dbaed441901d47d8c3598ee">analogReadCalibrated</a> (unsigned char channel)</td></tr>
<tr class="memdesc:adefc4d860dbaed441901d47d8c3598ee"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reads the calibrated value of an analog input channel.  <a href="#adefc4d860dbaed441901d47d8c3598ee">More...</a><br /></td></tr>
<tr class="separator:adefc4d860dbaed441901d47d8c3598ee"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a68b2c3e0863b8f4cb022fcdd77d2f5fd"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a68b2c3e0863b8f4cb022fcdd77d2f5fd">analogReadCalibratedHR</a> (unsigned char channel)</td></tr>
<tr class="memdesc:a68b2c3e0863b8f4cb022fcdd77d2f5fd"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reads the calibrated value of an analog input channel 1-8 with enhanced precision.  <a href="#a68b2c3e0863b8f4cb022fcdd77d2f5fd">More...</a><br /></td></tr>
<tr class="separator:a68b2c3e0863b8f4cb022fcdd77d2f5fd"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a1c59207742a1acf45a8957d7f04f9dfe"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a1c59207742a1acf45a8957d7f04f9dfe">delay</a> (const unsigned long time)</td></tr>
<tr class="memdesc:a1c59207742a1acf45a8957d7f04f9dfe"><td class="mdescLeft">&#160;</td><td class="mdescRight">Wiring-compatible alias of <a class="el" href="#ac89618d0782547d189fe412a9917639b" title="Delays the current task for a given number of milliseconds. ">taskDelay()</a>.  <a href="#a1c59207742a1acf45a8957d7f04f9dfe">More...</a><br /></td></tr>
<tr class="separator:a1c59207742a1acf45a8957d7f04f9dfe"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:abee651cde0a0e6ed0df34c86ed5af756"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#abee651cde0a0e6ed0df34c86ed5af756">delayMicroseconds</a> (const unsigned long us)</td></tr>
<tr class="memdesc:abee651cde0a0e6ed0df34c86ed5af756"><td class="mdescLeft">&#160;</td><td class="mdescRight">Wait for approximately the given number of microseconds.  <a href="#abee651cde0a0e6ed0df34c86ed5af756">More...</a><br /></td></tr>
<tr class="separator:abee651cde0a0e6ed0df34c86ed5af756"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a7321930f297f38e246050f7f5b091722"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a7321930f297f38e246050f7f5b091722">digitalRead</a> (unsigned char pin)</td></tr>
<tr class="memdesc:a7321930f297f38e246050f7f5b091722"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the digital value (1 or 0) of a pin configured as a digital input.  <a href="#a7321930f297f38e246050f7f5b091722">More...</a><br /></td></tr>
<tr class="separator:a7321930f297f38e246050f7f5b091722"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a23e767e5b47fa61d4e2cc02e6f15c7ab"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a23e767e5b47fa61d4e2cc02e6f15c7ab">digitalWrite</a> (unsigned char pin, bool value)</td></tr>
<tr class="memdesc:a23e767e5b47fa61d4e2cc02e6f15c7ab"><td class="mdescLeft">&#160;</td><td class="mdescRight">Sets the digital value (1 or 0) of a pin configured as a digital output.  <a href="#a23e767e5b47fa61d4e2cc02e6f15c7ab">More...</a><br /></td></tr>
<tr class="separator:a23e767e5b47fa61d4e2cc02e6f15c7ab"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a5cfffd673e7fc8bcd1827f11b2b1490b"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a5cfffd673e7fc8bcd1827f11b2b1490b">encoderGet</a> (<a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a> enc)</td></tr>
<tr class="memdesc:a5cfffd673e7fc8bcd1827f11b2b1490b"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the number of ticks recorded by the encoder.  <a href="#a5cfffd673e7fc8bcd1827f11b2b1490b">More...</a><br /></td></tr>
<tr class="separator:a5cfffd673e7fc8bcd1827f11b2b1490b"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aa68a1ba3d46d89bdb40961c52aa2c4d0"><td class="memItemLeft" align="right" valign="top"><a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a>&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aa68a1ba3d46d89bdb40961c52aa2c4d0">encoderInit</a> (unsigned char portTop, unsigned char portBottom, bool reverse)</td></tr>
<tr class="memdesc:aa68a1ba3d46d89bdb40961c52aa2c4d0"><td class="mdescLeft">&#160;</td><td class="mdescRight">Initializes and enables a quadrature encoder on two digital ports.  <a href="#aa68a1ba3d46d89bdb40961c52aa2c4d0">More...</a><br /></td></tr>
<tr class="separator:aa68a1ba3d46d89bdb40961c52aa2c4d0"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a27500c21f56b2f44c62a9284ca5ebd44"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a27500c21f56b2f44c62a9284ca5ebd44">encoderReset</a> (<a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a> enc)</td></tr>
<tr class="memdesc:a27500c21f56b2f44c62a9284ca5ebd44"><td class="mdescLeft">&#160;</td><td class="mdescRight">Resets the encoder to zero.  <a href="#a27500c21f56b2f44c62a9284ca5ebd44">More...</a><br /></td></tr>
<tr class="separator:a27500c21f56b2f44c62a9284ca5ebd44"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ad068eaed82fe8c8f08ba02ea8eaf2d17"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ad068eaed82fe8c8f08ba02ea8eaf2d17">encoderShutdown</a> (<a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a> enc)</td></tr>
<tr class="memdesc:ad068eaed82fe8c8f08ba02ea8eaf2d17"><td class="mdescLeft">&#160;</td><td class="mdescRight">Stops and disables the encoder.  <a href="#ad068eaed82fe8c8f08ba02ea8eaf2d17">More...</a><br /></td></tr>
<tr class="separator:ad068eaed82fe8c8f08ba02ea8eaf2d17"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a339e549606415666d4342bb56cffe976"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a339e549606415666d4342bb56cffe976">fclose</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:a339e549606415666d4342bb56cffe976"><td class="mdescLeft">&#160;</td><td class="mdescRight">Closes the specified file descriptor.  <a href="#a339e549606415666d4342bb56cffe976">More...</a><br /></td></tr>
<tr class="separator:a339e549606415666d4342bb56cffe976"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ab9d8f65e0a5c94019fcb796c97682d26"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ab9d8f65e0a5c94019fcb796c97682d26">fcount</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:ab9d8f65e0a5c94019fcb796c97682d26"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns the number of characters that can be read without blocking (the number of characters available) from the specified stream.  <a href="#ab9d8f65e0a5c94019fcb796c97682d26">More...</a><br /></td></tr>
<tr class="separator:ab9d8f65e0a5c94019fcb796c97682d26"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a27fc767a71921999f9651b1ca4cf1f93"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a27fc767a71921999f9651b1ca4cf1f93">fdelete</a> (const char *file)</td></tr>
<tr class="memdesc:a27fc767a71921999f9651b1ca4cf1f93"><td class="mdescLeft">&#160;</td><td class="mdescRight">Delete the specified file if it exists and is not currently open.  <a href="#a27fc767a71921999f9651b1ca4cf1f93">More...</a><br /></td></tr>
<tr class="separator:a27fc767a71921999f9651b1ca4cf1f93"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a9e71f513ad2496acb5361aedc065e3d8"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a9e71f513ad2496acb5361aedc065e3d8">feof</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:a9e71f513ad2496acb5361aedc065e3d8"><td class="mdescLeft">&#160;</td><td class="mdescRight">Checks to see if the specified stream is at its end.  <a href="#a9e71f513ad2496acb5361aedc065e3d8">More...</a><br /></td></tr>
<tr class="separator:a9e71f513ad2496acb5361aedc065e3d8"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:adb974f28765a31026ee6bf71d5175951"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#adb974f28765a31026ee6bf71d5175951">fflush</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:adb974f28765a31026ee6bf71d5175951"><td class="mdescLeft">&#160;</td><td class="mdescRight">Flushes the data on the specified file channel open in Write mode.  <a href="#adb974f28765a31026ee6bf71d5175951">More...</a><br /></td></tr>
<tr class="separator:adb974f28765a31026ee6bf71d5175951"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ab11a990e4f8863a1e7736e3c1d430092"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ab11a990e4f8863a1e7736e3c1d430092">fgetc</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:ab11a990e4f8863a1e7736e3c1d430092"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reads and returns one character from the specified stream, blocking until complete.  <a href="#ab11a990e4f8863a1e7736e3c1d430092">More...</a><br /></td></tr>
<tr class="separator:ab11a990e4f8863a1e7736e3c1d430092"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a0020b6e39df31f8b342a2444b9b4ad31"><td class="memItemLeft" align="right" valign="top">char *&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a0020b6e39df31f8b342a2444b9b4ad31">fgets</a> (char *str, int num, <a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:a0020b6e39df31f8b342a2444b9b4ad31"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reads a string from the specified stream, storing the characters into the memory at str.  <a href="#a0020b6e39df31f8b342a2444b9b4ad31">More...</a><br /></td></tr>
<tr class="separator:a0020b6e39df31f8b342a2444b9b4ad31"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aad2752157ff714acae7f1e6fe8c9a475"><td class="memItemLeft" align="right" valign="top"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aad2752157ff714acae7f1e6fe8c9a475">fopen</a> (const char *file, const char *mode)</td></tr>
<tr class="memdesc:aad2752157ff714acae7f1e6fe8c9a475"><td class="mdescLeft">&#160;</td><td class="mdescRight">Opens the given file in the specified mode.  <a href="#aad2752157ff714acae7f1e6fe8c9a475">More...</a><br /></td></tr>
<tr class="separator:aad2752157ff714acae7f1e6fe8c9a475"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a6d7ffc552fcee003ef2bf97580bb2577"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a6d7ffc552fcee003ef2bf97580bb2577">fprint</a> (const char *string, <a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:a6d7ffc552fcee003ef2bf97580bb2577"><td class="mdescLeft">&#160;</td><td class="mdescRight">Prints the simple string to the specified stream.  <a href="#a6d7ffc552fcee003ef2bf97580bb2577">More...</a><br /></td></tr>
<tr class="separator:a6d7ffc552fcee003ef2bf97580bb2577"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a4ec55b78eca2e4c07a44d5bc95273d4b"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a4ec55b78eca2e4c07a44d5bc95273d4b">fprintf</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream, const char *formatString,...)</td></tr>
<tr class="memdesc:a4ec55b78eca2e4c07a44d5bc95273d4b"><td class="mdescLeft">&#160;</td><td class="mdescRight">Prints the formatted string to the specified output stream.  <a href="#a4ec55b78eca2e4c07a44d5bc95273d4b">More...</a><br /></td></tr>
<tr class="separator:a4ec55b78eca2e4c07a44d5bc95273d4b"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aab90aff9d7f1b7239b80cae2bf5c7ea8"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aab90aff9d7f1b7239b80cae2bf5c7ea8">fputc</a> (int value, <a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:aab90aff9d7f1b7239b80cae2bf5c7ea8"><td class="mdescLeft">&#160;</td><td class="mdescRight">Writes one character to the specified stream.  <a href="#aab90aff9d7f1b7239b80cae2bf5c7ea8">More...</a><br /></td></tr>
<tr class="separator:aab90aff9d7f1b7239b80cae2bf5c7ea8"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aa25c5dc5bac3e7d45635ec1369783c61"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aa25c5dc5bac3e7d45635ec1369783c61">fputs</a> (const char *string, <a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:aa25c5dc5bac3e7d45635ec1369783c61"><td class="mdescLeft">&#160;</td><td class="mdescRight">Behaves the same as the "fprint" function, and appends a trailing newline ("\n").  <a href="#aa25c5dc5bac3e7d45635ec1369783c61">More...</a><br /></td></tr>
<tr class="separator:aa25c5dc5bac3e7d45635ec1369783c61"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:afb8cb08b18c9b9ed78d1598c8076d956"><td class="memItemLeft" align="right" valign="top">size_t&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#afb8cb08b18c9b9ed78d1598c8076d956">fread</a> (void *ptr, size_t size, size_t count, <a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:afb8cb08b18c9b9ed78d1598c8076d956"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reads data from a stream into memory.  <a href="#afb8cb08b18c9b9ed78d1598c8076d956">More...</a><br /></td></tr>
<tr class="separator:afb8cb08b18c9b9ed78d1598c8076d956"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:af2b5e837a27524264f0422232f5f9538"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#af2b5e837a27524264f0422232f5f9538">fseek</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream, long int offset, int origin)</td></tr>
<tr class="memdesc:af2b5e837a27524264f0422232f5f9538"><td class="mdescLeft">&#160;</td><td class="mdescRight">Seeks within a file open in Read mode.  <a href="#af2b5e837a27524264f0422232f5f9538">More...</a><br /></td></tr>
<tr class="separator:af2b5e837a27524264f0422232f5f9538"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a6273f71322efc95f429d9e990a8ef8ae"><td class="memItemLeft" align="right" valign="top">long int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a6273f71322efc95f429d9e990a8ef8ae">ftell</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:a6273f71322efc95f429d9e990a8ef8ae"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns the current position of the stream.  <a href="#a6273f71322efc95f429d9e990a8ef8ae">More...</a><br /></td></tr>
<tr class="separator:a6273f71322efc95f429d9e990a8ef8ae"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a998dde93aaae1ed6cc10a4656eb5cc10"><td class="memItemLeft" align="right" valign="top">size_t&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a998dde93aaae1ed6cc10a4656eb5cc10">fwrite</a> (const void *ptr, size_t size, size_t count, <a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *stream)</td></tr>
<tr class="memdesc:a998dde93aaae1ed6cc10a4656eb5cc10"><td class="mdescLeft">&#160;</td><td class="mdescRight">Writes data from memory to a stream.  <a href="#a998dde93aaae1ed6cc10a4656eb5cc10">More...</a><br /></td></tr>
<tr class="separator:a998dde93aaae1ed6cc10a4656eb5cc10"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ac45fdeab51c3197c1e7c4ec7beabaca9"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ac45fdeab51c3197c1e7c4ec7beabaca9">getchar</a> ()</td></tr>
<tr class="memdesc:ac45fdeab51c3197c1e7c4ec7beabaca9"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reads and returns one character from "stdin", which is the PC debug terminal.  <a href="#ac45fdeab51c3197c1e7c4ec7beabaca9">More...</a><br /></td></tr>
<tr class="separator:ac45fdeab51c3197c1e7c4ec7beabaca9"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a0ae2ca5d2fd99f33aaef38786bb8ee59"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a0ae2ca5d2fd99f33aaef38786bb8ee59">gyroGet</a> (<a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a> gyro)</td></tr>
<tr class="memdesc:a0ae2ca5d2fd99f33aaef38786bb8ee59"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the current gyro angle in degrees, rounded to the nearest degree.  <a href="#a0ae2ca5d2fd99f33aaef38786bb8ee59">More...</a><br /></td></tr>
<tr class="separator:a0ae2ca5d2fd99f33aaef38786bb8ee59"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a17270080a32b64937a3669089a80120f"><td class="memItemLeft" align="right" valign="top"><a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a>&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a17270080a32b64937a3669089a80120f">gyroInit</a> (unsigned char port, unsigned short multiplier)</td></tr>
<tr class="memdesc:a17270080a32b64937a3669089a80120f"><td class="mdescLeft">&#160;</td><td class="mdescRight">Initializes and enables a gyro on an analog port.  <a href="#a17270080a32b64937a3669089a80120f">More...</a><br /></td></tr>
<tr class="separator:a17270080a32b64937a3669089a80120f"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a5de4afb9c6bd747e8d7664e1c72390b2"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a5de4afb9c6bd747e8d7664e1c72390b2">gyroReset</a> (<a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a> gyro)</td></tr>
<tr class="memdesc:a5de4afb9c6bd747e8d7664e1c72390b2"><td class="mdescLeft">&#160;</td><td class="mdescRight">Resets the gyro to zero.  <a href="#a5de4afb9c6bd747e8d7664e1c72390b2">More...</a><br /></td></tr>
<tr class="separator:a5de4afb9c6bd747e8d7664e1c72390b2"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a4e50e79b76d956dd9d466a582a5bb7b5"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a4e50e79b76d956dd9d466a582a5bb7b5">gyroShutdown</a> (<a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a> gyro)</td></tr>
<tr class="memdesc:a4e50e79b76d956dd9d466a582a5bb7b5"><td class="mdescLeft">&#160;</td><td class="mdescRight">Stops and disables the gyro.  <a href="#a4e50e79b76d956dd9d466a582a5bb7b5">More...</a><br /></td></tr>
<tr class="separator:a4e50e79b76d956dd9d466a582a5bb7b5"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ac4f1500418a729ac3ee95bce9768b20c"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ac4f1500418a729ac3ee95bce9768b20c">imeGet</a> (unsigned char address, int *value)</td></tr>
<tr class="memdesc:ac4f1500418a729ac3ee95bce9768b20c"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the current 32-bit count of the specified IME.  <a href="#ac4f1500418a729ac3ee95bce9768b20c">More...</a><br /></td></tr>
<tr class="separator:ac4f1500418a729ac3ee95bce9768b20c"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a2dfd22ed31510b48a91bd9cd3d04a72f"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a2dfd22ed31510b48a91bd9cd3d04a72f">imeGetVelocity</a> (unsigned char address, int *value)</td></tr>
<tr class="memdesc:a2dfd22ed31510b48a91bd9cd3d04a72f"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the current rotational velocity of the specified IME.  <a href="#a2dfd22ed31510b48a91bd9cd3d04a72f">More...</a><br /></td></tr>
<tr class="separator:a2dfd22ed31510b48a91bd9cd3d04a72f"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a868ab46aa5992e60829936c0109160bf"><td class="memItemLeft" align="right" valign="top">unsigned int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a868ab46aa5992e60829936c0109160bf">imeInitializeAll</a> ()</td></tr>
<tr class="memdesc:a868ab46aa5992e60829936c0109160bf"><td class="mdescLeft">&#160;</td><td class="mdescRight">Initializes all IMEs.  <a href="#a868ab46aa5992e60829936c0109160bf">More...</a><br /></td></tr>
<tr class="separator:a868ab46aa5992e60829936c0109160bf"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ab1ef9ee5f8878856896a6c920ed762fc"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ab1ef9ee5f8878856896a6c920ed762fc">imeReset</a> (unsigned char address)</td></tr>
<tr class="memdesc:ab1ef9ee5f8878856896a6c920ed762fc"><td class="mdescLeft">&#160;</td><td class="mdescRight">Resets the specified IME's counters to zero.  <a href="#ab1ef9ee5f8878856896a6c920ed762fc">More...</a><br /></td></tr>
<tr class="separator:ab1ef9ee5f8878856896a6c920ed762fc"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a19de5a557348a6b4931c89eb82eb8fb7"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a19de5a557348a6b4931c89eb82eb8fb7">imeShutdown</a> ()</td></tr>
<tr class="memdesc:a19de5a557348a6b4931c89eb82eb8fb7"><td class="mdescLeft">&#160;</td><td class="mdescRight">Shuts down all IMEs on the chain; their addresses return to the default and the stored counts and velocities are lost.  <a href="#a19de5a557348a6b4931c89eb82eb8fb7">More...</a><br /></td></tr>
<tr class="separator:a19de5a557348a6b4931c89eb82eb8fb7"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a9291f71712cfb21e9bfd51682260fa73"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a9291f71712cfb21e9bfd51682260fa73">ioClearInterrupt</a> (unsigned char pin)</td></tr>
<tr class="memdesc:a9291f71712cfb21e9bfd51682260fa73"><td class="mdescLeft">&#160;</td><td class="mdescRight">Disables interrupts on the specified pin.  <a href="#a9291f71712cfb21e9bfd51682260fa73">More...</a><br /></td></tr>
<tr class="separator:a9291f71712cfb21e9bfd51682260fa73"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a8d0fd8e69a4c4c5aba981d106ee7f9ac"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a8d0fd8e69a4c4c5aba981d106ee7f9ac">ioSetInterrupt</a> (unsigned char pin, unsigned char edges, <a class="el" href="#a5bbb1ca889e36aec7b4fce324c2662c4">InterruptHandler</a> handler)</td></tr>
<tr class="memdesc:a8d0fd8e69a4c4c5aba981d106ee7f9ac"><td class="mdescLeft">&#160;</td><td class="mdescRight">Sets up an interrupt to occur on the specified pin, and resets any counters or timers associated with the pin.  <a href="#a8d0fd8e69a4c4c5aba981d106ee7f9ac">More...</a><br /></td></tr>
<tr class="separator:a8d0fd8e69a4c4c5aba981d106ee7f9ac"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aad3f43faea37dc2eddaf4ba0926a511f"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aad3f43faea37dc2eddaf4ba0926a511f">isAutonomous</a> ()</td></tr>
<tr class="memdesc:aad3f43faea37dc2eddaf4ba0926a511f"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns true if the robot is in autonomous mode, or false otherwise.  <a href="#aad3f43faea37dc2eddaf4ba0926a511f">More...</a><br /></td></tr>
<tr class="separator:aad3f43faea37dc2eddaf4ba0926a511f"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a56722b6f1c22da04885bc9853148bb71"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a56722b6f1c22da04885bc9853148bb71">isEnabled</a> ()</td></tr>
<tr class="memdesc:a56722b6f1c22da04885bc9853148bb71"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns true if the robot is enabled, or false otherwise.  <a href="#a56722b6f1c22da04885bc9853148bb71">More...</a><br /></td></tr>
<tr class="separator:a56722b6f1c22da04885bc9853148bb71"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a72aa0bce6b1d8ee298a60617f8fa74da"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a72aa0bce6b1d8ee298a60617f8fa74da">isJoystickConnected</a> (unsigned char joystick)</td></tr>
<tr class="memdesc:a72aa0bce6b1d8ee298a60617f8fa74da"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns true if a joystick is connected to the specified slot number (1 or 2), or false otherwise.  <a href="#a72aa0bce6b1d8ee298a60617f8fa74da">More...</a><br /></td></tr>
<tr class="separator:a72aa0bce6b1d8ee298a60617f8fa74da"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a1eceab28885f971892b9d4fc76e0e542"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a1eceab28885f971892b9d4fc76e0e542">isOnline</a> ()</td></tr>
<tr class="memdesc:a1eceab28885f971892b9d4fc76e0e542"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns true if a VEX field controller or competition switch is connected, or false otherwise.  <a href="#a1eceab28885f971892b9d4fc76e0e542">More...</a><br /></td></tr>
<tr class="separator:a1eceab28885f971892b9d4fc76e0e542"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ad56fcec15d1a48deb8780bb0fc38be4d"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ad56fcec15d1a48deb8780bb0fc38be4d">joystickGetAnalog</a> (unsigned char joystick, unsigned char axis)</td></tr>
<tr class="memdesc:ad56fcec15d1a48deb8780bb0fc38be4d"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the value of a control axis on the VEX joystick.  <a href="#ad56fcec15d1a48deb8780bb0fc38be4d">More...</a><br /></td></tr>
<tr class="separator:ad56fcec15d1a48deb8780bb0fc38be4d"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a792f1a80c62a63e764cf64aabf95db92"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a792f1a80c62a63e764cf64aabf95db92">joystickGetDigital</a> (unsigned char joystick, unsigned char buttonGroup, unsigned char button)</td></tr>
<tr class="memdesc:a792f1a80c62a63e764cf64aabf95db92"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the value of a button on the VEX joystick.  <a href="#a792f1a80c62a63e764cf64aabf95db92">More...</a><br /></td></tr>
<tr class="separator:a792f1a80c62a63e764cf64aabf95db92"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aa53f19724bcf9f7bf1b4468b5982553b"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aa53f19724bcf9f7bf1b4468b5982553b">lcdClear</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *lcdPort)</td></tr>
<tr class="memdesc:aa53f19724bcf9f7bf1b4468b5982553b"><td class="mdescLeft">&#160;</td><td class="mdescRight">Clears the LCD screen on the specified port.  <a href="#aa53f19724bcf9f7bf1b4468b5982553b">More...</a><br /></td></tr>
<tr class="separator:aa53f19724bcf9f7bf1b4468b5982553b"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a51af160afcbfb860dfff75d91ffb3824"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a51af160afcbfb860dfff75d91ffb3824">lcdInit</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *lcdPort)</td></tr>
<tr class="memdesc:a51af160afcbfb860dfff75d91ffb3824"><td class="mdescLeft">&#160;</td><td class="mdescRight">Initializes the LCD port, but does not change the text or settings.  <a href="#a51af160afcbfb860dfff75d91ffb3824">More...</a><br /></td></tr>
<tr class="separator:a51af160afcbfb860dfff75d91ffb3824"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a7364395c55595702316ac68519a764fa"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a7364395c55595702316ac68519a764fa">lcdPrint</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *lcdPort, unsigned char line, const char *formatString,...)</td></tr>
<tr class="memdesc:a7364395c55595702316ac68519a764fa"><td class="mdescLeft">&#160;</td><td class="mdescRight">Prints the formatted string to the attached LCD.  <a href="#a7364395c55595702316ac68519a764fa">More...</a><br /></td></tr>
<tr class="separator:a7364395c55595702316ac68519a764fa"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:af13bc828964f1443a0689f4780b6dc29"><td class="memItemLeft" align="right" valign="top">unsigned int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#af13bc828964f1443a0689f4780b6dc29">lcdReadButtons</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *lcdPort)</td></tr>
<tr class="memdesc:af13bc828964f1443a0689f4780b6dc29"><td class="mdescLeft">&#160;</td><td class="mdescRight">Reads the user button status from the LCD display.  <a href="#af13bc828964f1443a0689f4780b6dc29">More...</a><br /></td></tr>
<tr class="separator:af13bc828964f1443a0689f4780b6dc29"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aeafd247b27813122cfee95e0cecf188b"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aeafd247b27813122cfee95e0cecf188b">lcdSetBacklight</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *lcdPort, bool backlight)</td></tr>
<tr class="memdesc:aeafd247b27813122cfee95e0cecf188b"><td class="mdescLeft">&#160;</td><td class="mdescRight">Sets the specified LCD backlight to be on or off.  <a href="#aeafd247b27813122cfee95e0cecf188b">More...</a><br /></td></tr>
<tr class="separator:aeafd247b27813122cfee95e0cecf188b"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aae51423c0e108729bbb4d26a1b265eb3"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aae51423c0e108729bbb4d26a1b265eb3">lcdSetText</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *lcdPort, unsigned char line, const char *buffer)</td></tr>
<tr class="memdesc:aae51423c0e108729bbb4d26a1b265eb3"><td class="mdescLeft">&#160;</td><td class="mdescRight">Prints the string buffer to the attached LCD.  <a href="#aae51423c0e108729bbb4d26a1b265eb3">More...</a><br /></td></tr>
<tr class="separator:aae51423c0e108729bbb4d26a1b265eb3"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aa97fb2f4a17f8924bd11a1e40a2abe20"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aa97fb2f4a17f8924bd11a1e40a2abe20">lcdShutdown</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *lcdPort)</td></tr>
<tr class="memdesc:aa97fb2f4a17f8924bd11a1e40a2abe20"><td class="mdescLeft">&#160;</td><td class="mdescRight">Shut down the specified LCD port.  <a href="#aa97fb2f4a17f8924bd11a1e40a2abe20">More...</a><br /></td></tr>
<tr class="separator:aa97fb2f4a17f8924bd11a1e40a2abe20"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a8b24cbb7c3486e1bfa05c86db83ecb01"><td class="memItemLeft" align="right" valign="top">unsigned long&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a8b24cbb7c3486e1bfa05c86db83ecb01">micros</a> ()</td></tr>
<tr class="memdesc:a8b24cbb7c3486e1bfa05c86db83ecb01"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns the number of microseconds since Cortex power-up.  <a href="#a8b24cbb7c3486e1bfa05c86db83ecb01">More...</a><br /></td></tr>
<tr class="separator:a8b24cbb7c3486e1bfa05c86db83ecb01"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a6ff7f2532a22366f0013bc41397129fd"><td class="memItemLeft" align="right" valign="top">unsigned long&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a6ff7f2532a22366f0013bc41397129fd">millis</a> ()</td></tr>
<tr class="memdesc:a6ff7f2532a22366f0013bc41397129fd"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns the number of milliseconds since Cortex power-up.  <a href="#a6ff7f2532a22366f0013bc41397129fd">More...</a><br /></td></tr>
<tr class="separator:a6ff7f2532a22366f0013bc41397129fd"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a4805c8fd29f9221d28ed2e673c06e6c4"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a4805c8fd29f9221d28ed2e673c06e6c4">motorGet</a> (unsigned char channel)</td></tr>
<tr class="memdesc:a4805c8fd29f9221d28ed2e673c06e6c4"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the last set speed of the specified motor channel.  <a href="#a4805c8fd29f9221d28ed2e673c06e6c4">More...</a><br /></td></tr>
<tr class="separator:a4805c8fd29f9221d28ed2e673c06e6c4"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a03c5b04b472d024281f62d7af8854a8e"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a03c5b04b472d024281f62d7af8854a8e">motorSet</a> (unsigned char channel, int speed)</td></tr>
<tr class="memdesc:a03c5b04b472d024281f62d7af8854a8e"><td class="mdescLeft">&#160;</td><td class="mdescRight">Sets the speed of the specified motor channel.  <a href="#a03c5b04b472d024281f62d7af8854a8e">More...</a><br /></td></tr>
<tr class="separator:a03c5b04b472d024281f62d7af8854a8e"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a339844ebc35f48a14945b73edaeca498"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a339844ebc35f48a14945b73edaeca498">motorStop</a> (unsigned char channel)</td></tr>
<tr class="memdesc:a339844ebc35f48a14945b73edaeca498"><td class="mdescLeft">&#160;</td><td class="mdescRight">Stops the motor on the specified channel, equivalent to calling <a class="el" href="#a03c5b04b472d024281f62d7af8854a8e" title="Sets the speed of the specified motor channel. ">motorSet()</a> with an argument of zero.  <a href="#a339844ebc35f48a14945b73edaeca498">More...</a><br /></td></tr>
<tr class="separator:a339844ebc35f48a14945b73edaeca498"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a8966c541f3e9565aea1289f0d2f2cf43"><td class="memItemLeft" align="right" valign="top"><a class="anchor" id="a8966c541f3e9565aea1289f0d2f2cf43"></a>
void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a8966c541f3e9565aea1289f0d2f2cf43">motorStopAll</a> ()</td></tr>
<tr class="memdesc:a8966c541f3e9565aea1289f0d2f2cf43"><td class="mdescLeft">&#160;</td><td class="mdescRight">Stops all motors; significantly faster than looping through all motor ports and calling motorSet(channel, 0) on each one. <br /></td></tr>
<tr class="separator:a8966c541f3e9565aea1289f0d2f2cf43"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aecd027ce8f8b52a765735e9eb5b202b3"><td class="memItemLeft" align="right" valign="top"><a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a>&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aecd027ce8f8b52a765735e9eb5b202b3">mutexCreate</a> ()</td></tr>
<tr class="memdesc:aecd027ce8f8b52a765735e9eb5b202b3"><td class="mdescLeft">&#160;</td><td class="mdescRight">Creates a mutex intended to allow only one task to use a resource at a time.  <a href="#aecd027ce8f8b52a765735e9eb5b202b3">More...</a><br /></td></tr>
<tr class="separator:aecd027ce8f8b52a765735e9eb5b202b3"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a247598f8083a3ce6c39317d279f631cf"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a247598f8083a3ce6c39317d279f631cf">mutexDelete</a> (<a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a> mutex)</td></tr>
<tr class="memdesc:a247598f8083a3ce6c39317d279f631cf"><td class="mdescLeft">&#160;</td><td class="mdescRight">Deletes the specified mutex.  <a href="#a247598f8083a3ce6c39317d279f631cf">More...</a><br /></td></tr>
<tr class="separator:a247598f8083a3ce6c39317d279f631cf"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:afe171a08d22de18fc2ab604b2364959f"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#afe171a08d22de18fc2ab604b2364959f">mutexGive</a> (<a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a> mutex)</td></tr>
<tr class="memdesc:afe171a08d22de18fc2ab604b2364959f"><td class="mdescLeft">&#160;</td><td class="mdescRight">Relinquishes a mutex so that other tasks can use the resource it guards.  <a href="#afe171a08d22de18fc2ab604b2364959f">More...</a><br /></td></tr>
<tr class="separator:afe171a08d22de18fc2ab604b2364959f"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a8b51124628d2a7741738d48551d1e8ee"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a8b51124628d2a7741738d48551d1e8ee">mutexTake</a> (<a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a> mutex, const unsigned long blockTime)</td></tr>
<tr class="memdesc:a8b51124628d2a7741738d48551d1e8ee"><td class="mdescLeft">&#160;</td><td class="mdescRight">Requests a mutex so that other tasks cannot simultaneously use the resource it guards.  <a href="#a8b51124628d2a7741738d48551d1e8ee">More...</a><br /></td></tr>
<tr class="separator:a8b51124628d2a7741738d48551d1e8ee"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a1875409d12eee562555bda94cad7f973"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a1875409d12eee562555bda94cad7f973">pinMode</a> (unsigned char pin, unsigned char mode)</td></tr>
<tr class="memdesc:a1875409d12eee562555bda94cad7f973"><td class="mdescLeft">&#160;</td><td class="mdescRight">Configures the pin as an input or output with a variety of settings.  <a href="#a1875409d12eee562555bda94cad7f973">More...</a><br /></td></tr>
<tr class="separator:a1875409d12eee562555bda94cad7f973"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a91ac9eacbf0930cd5f26bc12b90b9efd"><td class="memItemLeft" align="right" valign="top">unsigned int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a91ac9eacbf0930cd5f26bc12b90b9efd">powerLevelBackup</a> ()</td></tr>
<tr class="memdesc:a91ac9eacbf0930cd5f26bc12b90b9efd"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns the backup battery voltage in millivolts.  <a href="#a91ac9eacbf0930cd5f26bc12b90b9efd">More...</a><br /></td></tr>
<tr class="separator:a91ac9eacbf0930cd5f26bc12b90b9efd"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aeb5efefae0d6fa559dae5a7e5a77c956"><td class="memItemLeft" align="right" valign="top">unsigned int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aeb5efefae0d6fa559dae5a7e5a77c956">powerLevelMain</a> ()</td></tr>
<tr class="memdesc:aeb5efefae0d6fa559dae5a7e5a77c956"><td class="mdescLeft">&#160;</td><td class="mdescRight">Returns the main battery voltage in millivolts.  <a href="#aeb5efefae0d6fa559dae5a7e5a77c956">More...</a><br /></td></tr>
<tr class="separator:aeb5efefae0d6fa559dae5a7e5a77c956"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ae2dd7886efd463e815dadf10eb54777e"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ae2dd7886efd463e815dadf10eb54777e">print</a> (const char *string)</td></tr>
<tr class="memdesc:ae2dd7886efd463e815dadf10eb54777e"><td class="mdescLeft">&#160;</td><td class="mdescRight">Prints the simple string to the debug terminal without formatting.  <a href="#ae2dd7886efd463e815dadf10eb54777e">More...</a><br /></td></tr>
<tr class="separator:ae2dd7886efd463e815dadf10eb54777e"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a403c82418e475fa4a8273719e6a7f3e6"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a403c82418e475fa4a8273719e6a7f3e6">printf</a> (const char *formatString,...)</td></tr>
<tr class="memdesc:a403c82418e475fa4a8273719e6a7f3e6"><td class="mdescLeft">&#160;</td><td class="mdescRight">Prints the formatted string to the debug stream (the PC terminal).  <a href="#a403c82418e475fa4a8273719e6a7f3e6">More...</a><br /></td></tr>
<tr class="separator:a403c82418e475fa4a8273719e6a7f3e6"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a6c600555ec9aefb4c01fdb960ecc2809"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a6c600555ec9aefb4c01fdb960ecc2809">putchar</a> (int value)</td></tr>
<tr class="memdesc:a6c600555ec9aefb4c01fdb960ecc2809"><td class="mdescLeft">&#160;</td><td class="mdescRight">Writes one character to "stdout", which is the PC debug terminal, and returns the input value.  <a href="#a6c600555ec9aefb4c01fdb960ecc2809">More...</a><br /></td></tr>
<tr class="separator:a6c600555ec9aefb4c01fdb960ecc2809"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:af17f2f3fda696ddc3b7c1bac995edaf8"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#af17f2f3fda696ddc3b7c1bac995edaf8">puts</a> (const char *string)</td></tr>
<tr class="memdesc:af17f2f3fda696ddc3b7c1bac995edaf8"><td class="mdescLeft">&#160;</td><td class="mdescRight">Behaves the same as the "print" function, and appends a trailing newline ("\n").  <a href="#af17f2f3fda696ddc3b7c1bac995edaf8">More...</a><br /></td></tr>
<tr class="separator:af17f2f3fda696ddc3b7c1bac995edaf8"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a4461acf29574576dda6a3316117f85a9"><td class="memItemLeft" align="right" valign="top"><a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a>&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a4461acf29574576dda6a3316117f85a9">semaphoreCreate</a> ()</td></tr>
<tr class="memdesc:a4461acf29574576dda6a3316117f85a9"><td class="mdescLeft">&#160;</td><td class="mdescRight">Creates a semaphore intended for synchronizing tasks.  <a href="#a4461acf29574576dda6a3316117f85a9">More...</a><br /></td></tr>
<tr class="separator:a4461acf29574576dda6a3316117f85a9"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:af27ba79dc102f914d31a3c20136b1cd9"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#af27ba79dc102f914d31a3c20136b1cd9">semaphoreDelete</a> (<a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a> semaphore)</td></tr>
<tr class="memdesc:af27ba79dc102f914d31a3c20136b1cd9"><td class="mdescLeft">&#160;</td><td class="mdescRight">Deletes the specified semaphore.  <a href="#af27ba79dc102f914d31a3c20136b1cd9">More...</a><br /></td></tr>
<tr class="separator:af27ba79dc102f914d31a3c20136b1cd9"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a9e5b0b6d5da138b4d5a077237894f96e"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a9e5b0b6d5da138b4d5a077237894f96e">semaphoreGive</a> (<a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a> semaphore)</td></tr>
<tr class="memdesc:a9e5b0b6d5da138b4d5a077237894f96e"><td class="mdescLeft">&#160;</td><td class="mdescRight">Signals a semaphore.  <a href="#a9e5b0b6d5da138b4d5a077237894f96e">More...</a><br /></td></tr>
<tr class="separator:a9e5b0b6d5da138b4d5a077237894f96e"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a7520baa9cf5c9ec2f43925b098e7b46a"><td class="memItemLeft" align="right" valign="top">bool&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a7520baa9cf5c9ec2f43925b098e7b46a">semaphoreTake</a> (<a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a> semaphore, const unsigned long blockTime)</td></tr>
<tr class="memdesc:a7520baa9cf5c9ec2f43925b098e7b46a"><td class="mdescLeft">&#160;</td><td class="mdescRight">Waits on a semaphore.  <a href="#a7520baa9cf5c9ec2f43925b098e7b46a">More...</a><br /></td></tr>
<tr class="separator:a7520baa9cf5c9ec2f43925b098e7b46a"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a22269cefc22e487f7acdcc4737d58c4a"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a22269cefc22e487f7acdcc4737d58c4a">setTeamName</a> (const char *name)</td></tr>
<tr class="memdesc:a22269cefc22e487f7acdcc4737d58c4a"><td class="mdescLeft">&#160;</td><td class="mdescRight">Sets the team name displayed to the VEX field control and VEX Firmware Upgrade.  <a href="#a22269cefc22e487f7acdcc4737d58c4a">More...</a><br /></td></tr>
<tr class="separator:a22269cefc22e487f7acdcc4737d58c4a"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ada81026ae730d990159aab26c302a3ad"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ada81026ae730d990159aab26c302a3ad">snprintf</a> (char *buffer, size_t limit, const char *formatString,...)</td></tr>
<tr class="memdesc:ada81026ae730d990159aab26c302a3ad"><td class="mdescLeft">&#160;</td><td class="mdescRight">Prints the formatted string to the string buffer with the specified length limit.  <a href="#ada81026ae730d990159aab26c302a3ad">More...</a><br /></td></tr>
<tr class="separator:ada81026ae730d990159aab26c302a3ad"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a7e0b8a79a6f53f88329b87229e7d698b"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a7e0b8a79a6f53f88329b87229e7d698b">speakerInit</a> ()</td></tr>
<tr class="memdesc:a7e0b8a79a6f53f88329b87229e7d698b"><td class="mdescLeft">&#160;</td><td class="mdescRight">Initializes VEX speaker support.  <a href="#a7e0b8a79a6f53f88329b87229e7d698b">More...</a><br /></td></tr>
<tr class="separator:a7e0b8a79a6f53f88329b87229e7d698b"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:af91f9f80737d283ff82a96596f833854"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#af91f9f80737d283ff82a96596f833854">speakerPlayArray</a> (const char **songs)</td></tr>
<tr class="memdesc:af91f9f80737d283ff82a96596f833854"><td class="mdescLeft">&#160;</td><td class="mdescRight">Plays up to three RTTTL (Ring Tone Text Transfer Language) songs simultaneously over the VEX speaker.  <a href="#af91f9f80737d283ff82a96596f833854">More...</a><br /></td></tr>
<tr class="separator:af91f9f80737d283ff82a96596f833854"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a6971b95fa28048bf134b7421b7f2faee"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a6971b95fa28048bf134b7421b7f2faee">speakerPlayRtttl</a> (const char *song)</td></tr>
<tr class="memdesc:a6971b95fa28048bf134b7421b7f2faee"><td class="mdescLeft">&#160;</td><td class="mdescRight">Plays an RTTTL (Ring Tone Text Transfer Language) song over the VEX speaker.  <a href="#a6971b95fa28048bf134b7421b7f2faee">More...</a><br /></td></tr>
<tr class="separator:a6971b95fa28048bf134b7421b7f2faee"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a8d6d3ddc25b8408b0270cd2ccb9505ce"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a8d6d3ddc25b8408b0270cd2ccb9505ce">speakerShutdown</a> ()</td></tr>
<tr class="memdesc:a8d6d3ddc25b8408b0270cd2ccb9505ce"><td class="mdescLeft">&#160;</td><td class="mdescRight">Powers down and disables the VEX speaker.  <a href="#a8d6d3ddc25b8408b0270cd2ccb9505ce">More...</a><br /></td></tr>
<tr class="separator:a8d6d3ddc25b8408b0270cd2ccb9505ce"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:acbfbfc380f865613ad5ff3cae256bdc4"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#acbfbfc380f865613ad5ff3cae256bdc4">sprintf</a> (char *buffer, const char *formatString,...)</td></tr>
<tr class="memdesc:acbfbfc380f865613ad5ff3cae256bdc4"><td class="mdescLeft">&#160;</td><td class="mdescRight">Prints the formatted string to the string buffer.  <a href="#acbfbfc380f865613ad5ff3cae256bdc4">More...</a><br /></td></tr>
<tr class="separator:acbfbfc380f865613ad5ff3cae256bdc4"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:abd5e503a273aaf6abf6869ebd76f2d2d"><td class="memItemLeft" align="right" valign="top"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a>&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#abd5e503a273aaf6abf6869ebd76f2d2d">taskCreate</a> (<a class="el" href="#af3bbcf99b9e4561ebbae4a1f283ba6a3">TaskCode</a> taskCode, const unsigned int stackDepth, void *parameters, const unsigned int priority)</td></tr>
<tr class="memdesc:abd5e503a273aaf6abf6869ebd76f2d2d"><td class="mdescLeft">&#160;</td><td class="mdescRight">Creates a new task and add it to the list of tasks that are ready to run.  <a href="#abd5e503a273aaf6abf6869ebd76f2d2d">More...</a><br /></td></tr>
<tr class="separator:abd5e503a273aaf6abf6869ebd76f2d2d"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ac89618d0782547d189fe412a9917639b"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ac89618d0782547d189fe412a9917639b">taskDelay</a> (const unsigned long msToDelay)</td></tr>
<tr class="memdesc:ac89618d0782547d189fe412a9917639b"><td class="mdescLeft">&#160;</td><td class="mdescRight">Delays the current task for a given number of milliseconds.  <a href="#ac89618d0782547d189fe412a9917639b">More...</a><br /></td></tr>
<tr class="separator:ac89618d0782547d189fe412a9917639b"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:taskDelayUntil"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#taskDelayUntil">taskDelayUntil</a> (unsigned long *previousWakeTime, const unsigned long cycleTime)</td></tr>
<tr class="memdesc:taskDelayUntil"><td class="mdescLeft">&#160;</td><td class="mdescRight">Delays the current task until a specified time.  <a href="#taskDelayUntil">More...</a><br /></td></tr>
<tr class="separator:taskDelayUntil"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:add3b8d580ea6ef5635c6d9ff88c68612"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#add3b8d580ea6ef5635c6d9ff88c68612">taskDelete</a> (<a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a> taskToDelete)</td></tr>
<tr class="memdesc:add3b8d580ea6ef5635c6d9ff88c68612"><td class="mdescLeft">&#160;</td><td class="mdescRight">Kills and removes the specified task from the kernel task list.  <a href="#add3b8d580ea6ef5635c6d9ff88c68612">More...</a><br /></td></tr>
<tr class="separator:add3b8d580ea6ef5635c6d9ff88c68612"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a436fb5636d9a200ecebbb95968de91f6"><td class="memItemLeft" align="right" valign="top">unsigned int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a436fb5636d9a200ecebbb95968de91f6">taskGetCount</a> ()</td></tr>
<tr class="memdesc:a436fb5636d9a200ecebbb95968de91f6"><td class="mdescLeft">&#160;</td><td class="mdescRight">Determines the number of tasks that are currently being managed.  <a href="#a436fb5636d9a200ecebbb95968de91f6">More...</a><br /></td></tr>
<tr class="separator:a436fb5636d9a200ecebbb95968de91f6"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a4f805fd479cb4c427e8f4edfa7d55143"><td class="memItemLeft" align="right" valign="top">unsigned int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a4f805fd479cb4c427e8f4edfa7d55143">taskGetState</a> (<a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a> task)</td></tr>
<tr class="memdesc:a4f805fd479cb4c427e8f4edfa7d55143"><td class="mdescLeft">&#160;</td><td class="mdescRight">Retrieves the state of the specified task.  <a href="#a4f805fd479cb4c427e8f4edfa7d55143">More...</a><br /></td></tr>
<tr class="separator:a4f805fd479cb4c427e8f4edfa7d55143"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ae62d015b8280e4c74ad9ee15c7ac790b"><td class="memItemLeft" align="right" valign="top">unsigned int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ae62d015b8280e4c74ad9ee15c7ac790b">taskPriorityGet</a> (const <a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a> task)</td></tr>
<tr class="memdesc:ae62d015b8280e4c74ad9ee15c7ac790b"><td class="mdescLeft">&#160;</td><td class="mdescRight">Obtains the priority of the specified task.  <a href="#ae62d015b8280e4c74ad9ee15c7ac790b">More...</a><br /></td></tr>
<tr class="separator:ae62d015b8280e4c74ad9ee15c7ac790b"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a91d8f7074c6cb12dfe163df17bdf5540"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a91d8f7074c6cb12dfe163df17bdf5540">taskPrioritySet</a> (<a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a> task, const unsigned int newPriority)</td></tr>
<tr class="memdesc:a91d8f7074c6cb12dfe163df17bdf5540"><td class="mdescLeft">&#160;</td><td class="mdescRight">Sets the priority of the specified task.  <a href="#a91d8f7074c6cb12dfe163df17bdf5540">More...</a><br /></td></tr>
<tr class="separator:a91d8f7074c6cb12dfe163df17bdf5540"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:afa2a4c5236b32bd9983bf19a4ac0cc23"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#afa2a4c5236b32bd9983bf19a4ac0cc23">taskResume</a> (<a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a> taskToResume)</td></tr>
<tr class="memdesc:afa2a4c5236b32bd9983bf19a4ac0cc23"><td class="mdescLeft">&#160;</td><td class="mdescRight">Resumes the specified task.  <a href="#afa2a4c5236b32bd9983bf19a4ac0cc23">More...</a><br /></td></tr>
<tr class="separator:afa2a4c5236b32bd9983bf19a4ac0cc23"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ab05a241d6d1fd98b1ceb4665db678156"><td class="memItemLeft" align="right" valign="top"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a>&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ab05a241d6d1fd98b1ceb4665db678156">taskRunLoop</a> (void(*fn)(void), const unsigned long increment)</td></tr>
<tr class="memdesc:ab05a241d6d1fd98b1ceb4665db678156"><td class="mdescLeft">&#160;</td><td class="mdescRight">Starts a task which will periodically call the specified function.  <a href="#ab05a241d6d1fd98b1ceb4665db678156">More...</a><br /></td></tr>
<tr class="separator:ab05a241d6d1fd98b1ceb4665db678156"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:ab56a51f337ad1903ad2bbce095744170"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#ab56a51f337ad1903ad2bbce095744170">taskSuspend</a> (<a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a> taskToSuspend)</td></tr>
<tr class="memdesc:ab56a51f337ad1903ad2bbce095744170"><td class="mdescLeft">&#160;</td><td class="mdescRight">Suspends the specified task.  <a href="#ab56a51f337ad1903ad2bbce095744170">More...</a><br /></td></tr>
<tr class="separator:ab56a51f337ad1903ad2bbce095744170"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a435d7fc1c3c3da80ed64cf9dfed0bd42"><td class="memItemLeft" align="right" valign="top">int&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a435d7fc1c3c3da80ed64cf9dfed0bd42">ultrasonicGet</a> (<a class="el" href="#a527ee5b64142c3505d6931d8ed7ac6b7">Ultrasonic</a> ult)</td></tr>
<tr class="memdesc:a435d7fc1c3c3da80ed64cf9dfed0bd42"><td class="mdescLeft">&#160;</td><td class="mdescRight">Gets the current ultrasonic sensor value in centimeters.  <a href="#a435d7fc1c3c3da80ed64cf9dfed0bd42">More...</a><br /></td></tr>
<tr class="separator:a435d7fc1c3c3da80ed64cf9dfed0bd42"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:aed267558847e901e3741bd031c4fc83d"><td class="memItemLeft" align="right" valign="top"><a class="el" href="#a527ee5b64142c3505d6931d8ed7ac6b7">Ultrasonic</a>&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#aed267558847e901e3741bd031c4fc83d">ultrasonicInit</a> (unsigned char portEcho, unsigned char portPing)</td></tr>
<tr class="memdesc:aed267558847e901e3741bd031c4fc83d"><td class="mdescLeft">&#160;</td><td class="mdescRight">Initializes an ultrasonic sensor on the specified digital ports.  <a href="#aed267558847e901e3741bd031c4fc83d">More...</a><br /></td></tr>
<tr class="separator:aed267558847e901e3741bd031c4fc83d"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a355f91a286a081b95104b09898b467ed"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a355f91a286a081b95104b09898b467ed">ultrasonicShutdown</a> (<a class="el" href="#a527ee5b64142c3505d6931d8ed7ac6b7">Ultrasonic</a> ult)</td></tr>
<tr class="memdesc:a355f91a286a081b95104b09898b467ed"><td class="mdescLeft">&#160;</td><td class="mdescRight">Stops and disables the ultrasonic sensor.  <a href="#a355f91a286a081b95104b09898b467ed">More...</a><br /></td></tr>
<tr class="separator:a355f91a286a081b95104b09898b467ed"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:acce6911cfbfe971d368444eecd918301"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#acce6911cfbfe971d368444eecd918301">usartInit</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *usart, unsigned int baud, unsigned int flags)</td></tr>
<tr class="memdesc:acce6911cfbfe971d368444eecd918301"><td class="mdescLeft">&#160;</td><td class="mdescRight">Initialize the specified serial interface with the given connection parameters.  <a href="#acce6911cfbfe971d368444eecd918301">More...</a><br /></td></tr>
<tr class="separator:acce6911cfbfe971d368444eecd918301"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a599d7ea04f8d9fb0e37b75423a80a54f"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a599d7ea04f8d9fb0e37b75423a80a54f">usartShutdown</a> (<a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *usart)</td></tr>
<tr class="memdesc:a599d7ea04f8d9fb0e37b75423a80a54f"><td class="mdescLeft">&#160;</td><td class="mdescRight">Disables the specified USART interface.  <a href="#a599d7ea04f8d9fb0e37b75423a80a54f">More...</a><br /></td></tr>
<tr class="separator:a599d7ea04f8d9fb0e37b75423a80a54f"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:add8964052eef78ca864990642888a7d7"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#add8964052eef78ca864990642888a7d7">wait</a> (const unsigned long time)</td></tr>
<tr class="memdesc:add8964052eef78ca864990642888a7d7"><td class="mdescLeft">&#160;</td><td class="mdescRight">Alias of <a class="el" href="#ac89618d0782547d189fe412a9917639b" title="Delays the current task for a given number of milliseconds. ">taskDelay()</a> intended to help EasyC users.  <a href="#add8964052eef78ca864990642888a7d7">More...</a><br /></td></tr>
<tr class="separator:add8964052eef78ca864990642888a7d7"><td class="memSeparator" colspan="2">&#160;</td></tr>
<tr class="memitem:a591705c8bd27fce32490b0bd4fb7ecd9"><td class="memItemLeft" align="right" valign="top">void&#160;</td><td class="memItemRight" valign="bottom"><a class="el" href="#a591705c8bd27fce32490b0bd4fb7ecd9">waitUntil</a> (unsigned long *previousWakeTime, const unsigned long time)</td></tr>
<tr class="memdesc:a591705c8bd27fce32490b0bd4fb7ecd9"><td class="mdescLeft">&#160;</td><td class="mdescRight">Alias of <a class="el" href="#taskDelayUntil" title="Delays the current task until a specified time. ">taskDelayUntil()</a> intended to help EasyC users.  <a href="#a591705c8bd27fce32490b0bd4fb7ecd9">More...</a><br /></td></tr>
<tr class="separator:a591705c8bd27fce32490b0bd4fb7ecd9"><td class="memSeparator" colspan="2">&#160;</td></tr>
</table>
<a name="details" id="details"></a><h2 class="groupheader">Detailed Description</h2>
<div class="textblock"><p>Provides the high-level user functionality intended for use by typical VEX Cortex programmers. </p>
<p>This file should be included for you in the predefined stubs in each new VEX Cortex PROS project through the inclusion of "main.h". In any new C source file, it is advisable to include <a class="el" href="a00004.htm" title="Header file for global functions. ">main.h</a> instead of referencing <a class="el" href="" title="Provides the high-level user functionality intended for use by typical VEX Cortex programmers...">API.h</a> by name, to better handle any nomenclature changes to this file or its contents.</p>
<p>Copyright (c) 2011-2014, Purdue University ACM SIG BOTS. All rights reserved.</p>
<p>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</p><ul>
<li>Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</li>
<li>Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</li>
<li>Neither the name of Purdue University ACM SIG BOTS nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</li>
</ul>
<p>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL PURDUE UNIVERSITY ACM SIG BOTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>
<p>Purdue Robotics OS contains FreeRTOS (<a href="http://www.freertos.org">http://www.freertos.org</a>) whose source code may be obtained from <a href="http://sourceforge.net/projects/freertos/files/">http://sourceforge.net/projects/freertos/files/</a> or on request. </p>
</div><h2 class="groupheader">Macro Definition Documentation</h2>
<a class="anchor" id="ae61940b1dacc12c437f11082a6018a1c"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define BOARD_NR_GPIO_PINS&#160;&#160;&#160;27</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>There are 27 available I/O on the Cortex that can be used for digital communication. </p>
<p>This excludes the crystal ports but includes the Communications, Speaker, and Analog ports.</p>
<p>The motor ports are not on the Cortex and are thus excluded from this count. Pin 0 is the Speaker port, pins 1-12 are the standard Digital I/O, 13-20 are the Analog I/O, 21+22 are UART1, 23+24 are UART2, and 25+26 are the I2C port. </p>

</div>
</div>
<a class="anchor" id="a5bb885982ff66a2e0a0a45a8ee9c35e2"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define HIGH&#160;&#160;&#160;1</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Used for <a class="el" href="#a23e767e5b47fa61d4e2cc02e6f15c7ab" title="Sets the digital value (1 or 0) of a pin configured as a digital output. ">digitalWrite()</a> to specify a logic HIGH state to output. </p>
<p>In reality, using any non-zero expression or "true" will work to set a pin to HIGH. </p>

</div>
</div>
<a class="anchor" id="a6d369ee1e214daea8bf939aa817b5d00"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define IME_ADDR_MAX&#160;&#160;&#160;0x1F</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>IME addresses end at 0x1F. </p>
<p>Actually using more than 10 (address 0x1A) encoders will cause unreliable communications. </p>

</div>
</div>
<a class="anchor" id="a1bb283bd7893b9855e2f23013891fc82"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define INPUT&#160;&#160;&#160;0x0A</td>
        </tr>
      </table>
</div><div class="memdoc">

<p><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for digital input, with pullup. </p>
<p>This is the default state for the 12 Digital pins. The pullup causes the input to read as "HIGH" when unplugged, but is fairly weak and can safely be driven by most sources. Many VEX digital sensors rely on this behavior and cannot be used with INPUT_FLOATING. </p>

</div>
</div>
<a class="anchor" id="a877f7490feac007f3a904ece06afe87a"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define INPUT_ANALOG&#160;&#160;&#160;0x00</td>
        </tr>
      </table>
</div><div class="memdoc">

<p><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for analog inputs. </p>
<p>This is the default state for the 8 Analog pins and the Speaker port. This only works on pins with analog input capabilities; use anywhere else results in undefined behavior. </p>

</div>
</div>
<a class="anchor" id="ac31084f7ffdfd4325b3703718fce74ea"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define INPUT_FLOATING&#160;&#160;&#160;0x04</td>
        </tr>
      </table>
</div><div class="memdoc">

<p><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for digital input, without pullup. </p>
<p>Beware of power consumption, as digital inputs left "floating" may switch back and forth and cause spurious interrupts. </p>

</div>
</div>
<a class="anchor" id="ab811d8c6ff3a505312d3276590444289"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define LOW&#160;&#160;&#160;0</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Used for <a class="el" href="#a23e767e5b47fa61d4e2cc02e6f15c7ab" title="Sets the digital value (1 or 0) of a pin configured as a digital output. ">digitalWrite()</a> to specify a logic LOW state to output. </p>
<p>In reality, using a zero expression or "false" will work to set a pin to LOW. </p>

</div>
</div>
<a class="anchor" id="a61a3c9a18380aafb6e430e79bf596557"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define OUTPUT&#160;&#160;&#160;0x01</td>
        </tr>
      </table>
</div><div class="memdoc">

<p><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for digital output, push-pull. </p>
<p>This is the mode which should be used to output a digital HIGH or LOW value from the Cortex. This mode is useful for pneumatic solenoid valves and VEX LEDs. </p>

</div>
</div>
<a class="anchor" id="aea041a6db0843f4b27a6a39b829d56e7"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define OUTPUT_OD&#160;&#160;&#160;0x05</td>
        </tr>
      </table>
</div><div class="memdoc">

<p><a class="el" href="#a1875409d12eee562555bda94cad7f973" title="Configures the pin as an input or output with a variety of settings. ">pinMode()</a> state for open-drain outputs. </p>
<p>This is useful in a few cases for external electronics and should not be used for the VEX solenoid or LEDs. </p>

</div>
</div>
<a class="anchor" id="ad2a2e6c114780c3071efd24f16c7f7d8"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define SEEK_END&#160;&#160;&#160;2</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>SEEK_END is used in <a class="el" href="#af2b5e837a27524264f0422232f5f9538" title="Seeks within a file open in Read mode. ">fseek()</a> to denote an absolute position in bytes from the end of the file. </p>
<p>The offset will most likely be negative in this case. </p>

</div>
</div>
<a class="anchor" id="a51827b6505ae59fb2ddf9d32e5519ab4"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define TASK_DEFAULT_STACK_SIZE&#160;&#160;&#160;512</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>The recommended stack size for a new task that does an average amount of work. </p>
<p>This stack size is used for default tasks such as <a class="el" href="a00004.htm#a3c7ca506bbc071fa740de13805b7f376" title="Runs the user autonomous code. ">autonomous()</a>.</p>
<p>This is probably OK for 4-5 levels of function calls and the use of <a class="el" href="#a403c82418e475fa4a8273719e6a7f3e6" title="Prints the formatted string to the debug stream (the PC terminal). ">printf()</a> with several arguments. Tasks requiring deep recursion or large local buffers will need a bigger stack. </p>

</div>
</div>
<a class="anchor" id="a36bb10267dd6269cfdb231d9e98b5794"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define TASK_MAX&#160;&#160;&#160;16</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Only this many tasks can exist at once. </p>
<p>Attempts to create further tasks will not succeed until tasks end or are destroyed, AND the idle task cleans them up.</p>
<p>Changing this value will not change the limit without a kernel recompile. The idle task and VEX daemon task count against the limit. The user <a class="el" href="a00004.htm#a3c7ca506bbc071fa740de13805b7f376" title="Runs the user autonomous code. ">autonomous()</a> or teleop() also counts against the limit, so 12 tasks usually remain for other uses. </p>

</div>
</div>
<a class="anchor" id="ad896f092de28df06fbcdcf925a933996"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define TASK_MAX_PRIORITIES&#160;&#160;&#160;6</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>The maximum number of available task priorities, which run from 0 to 5. </p>
<p>Changing this value will not change the priority count without a kernel recompile. </p>

</div>
</div>
<a class="anchor" id="ac6f33c920771bc599d55765a5a6e62c7"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define TASK_MINIMAL_STACK_SIZE&#160;&#160;&#160;64</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>The minimum stack depth for a task. </p>
<p>Scheduler state is stored on the stack, so even if the task never uses the stack, at least this much space must be allocated.</p>
<p>Function calls and other seemingly innocent constructs may place information on the stack. Err on the side of a larger stack when possible. </p>

</div>
</div>
<a class="anchor" id="a3082a7e8f15691441dba683711bb823f"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define TASK_PRIORITY_DEFAULT&#160;&#160;&#160;2</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>The default task priority, which should be used for most tasks. </p>
<p>Default tasks such as <a class="el" href="a00004.htm#a3c7ca506bbc071fa740de13805b7f376" title="Runs the user autonomous code. ">autonomous()</a> inherit this priority. </p>

</div>
</div>
<a class="anchor" id="a1b3cef27c58c5cac78f170c90dbf7a89"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define TASK_PRIORITY_HIGHEST&#160;&#160;&#160;(<a class="el" href="#ad896f092de28df06fbcdcf925a933996">TASK_MAX_PRIORITIES</a> - 1)</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>The highest priority that can be assigned to a task. </p>
<p>Unlike the lowest priority, this priority can be safely used without hampering interrupts. Beware of deadlock. </p>

</div>
</div>
<a class="anchor" id="aa494e6c8001ab827484775bfd5c0fe9d"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">#define TASK_PRIORITY_LOWEST&#160;&#160;&#160;0</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>The lowest priority that can be assigned to a task, which puts it on a level with the idle task. </p>
<p>This may cause severe performance problems and is generally not recommended. </p>

</div>
</div>
<h2 class="groupheader">Typedef Documentation</h2>
<a class="anchor" id="a8289b20280bf9db1462f60dae76d2939"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef void* <a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reference type for an initialized encoder. </p>
<p>Encoder information is stored as an opaque pointer to a structure in memory; as this is a pointer type, it can be safely passed or stored by value. </p>

</div>
</div>
<a class="anchor" id="ac15bbd02a147d1595cdfb8b2979693d7"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef int <a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>FILE is an integer referring to a stream for the standard I/O functions. </p>
<p>FILE * is the standard library method of referring to a file pointer, even though there is actually nothing there. </p>

</div>
</div>
<a class="anchor" id="a04e06985633aa933343fcfa3d7fb268d"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef void* <a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reference type for an initialized gyro. </p>
<p>Gyro information is stored as an opaque pointer to a structure in memory; as this is a pointer type, it can be safely passed or stored by value. </p>

</div>
</div>
<a class="anchor" id="a5bbb1ca889e36aec7b4fce324c2662c4"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef void(* InterruptHandler) (unsigned char pin)</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Type definition for interrupt handlers. </p>
<p>Such functions must accept one argument indicating the pin which changed. </p>

</div>
</div>
<a class="anchor" id="a9b40607ca13d2b5261f47f613e3c4fa4"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef void* <a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Type by which mutexes are referenced. </p>
<p>As this is a pointer type, it can be safely passed or stored by value. </p>

</div>
</div>
<a class="anchor" id="a884363b5e46c2eedeae95c179aaeb717"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef void* <a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Type by which semaphores are referenced. </p>
<p>As this is a pointer type, it can be safely passed or stored by value. </p>

</div>
</div>
<a class="anchor" id="af3bbcf99b9e4561ebbae4a1f283ba6a3"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef void(* TaskCode) (void *)</td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Type for defining task functions. </p>
<p>Task functions must accept one parameter of type "void *"; they need not use it.</p>
<p>For example:</p>
<p>void MyTask(void *ignore) { while (1); } </p>

</div>
</div>
<a class="anchor" id="a23dca3c0de10682afb982677ff292f77"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef void* <a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Type by which tasks are referenced. </p>
<p>As this is a pointer type, it can be safely passed or stored by value. </p>

</div>
</div>
<a class="anchor" id="a527ee5b64142c3505d6931d8ed7ac6b7"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">typedef void* <a class="el" href="#a527ee5b64142c3505d6931d8ed7ac6b7">Ultrasonic</a></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reference type for an initialized ultrasonic sensor. </p>
<p>Ultrasonic information is stored as an opaque pointer to a structure in memory; as this is a pointer type, it can be safely passed or stored by value. </p>

</div>
</div>
<h2 class="groupheader">Function Documentation</h2>
<a class="anchor" id="aab54c390b2ff91b5b7861db877136392"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int analogCalibrate </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>channel</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Calibrates the analog sensor on the specified channel. </p>
<p>This method assumes that the true sensor value is not actively changing at this time and computes an average from approximately 500 samples, 1 ms apart, for a 0.5 s period of calibration. The average value thus calculated is returned and stored for later calls to the <a class="el" href="#adefc4d860dbaed441901d47d8c3598ee" title="Reads the calibrated value of an analog input channel. ">analogReadCalibrated()</a> and <a class="el" href="#a68b2c3e0863b8f4cb022fcdd77d2f5fd" title="Reads the calibrated value of an analog input channel 1-8 with enhanced precision. ">analogReadCalibratedHR()</a> functions. These functions will return the difference between this value and the current sensor value when called.</p>
<p>Do not use this function in <a class="el" href="a00004.htm#ad9cda921edb01125bb13c2f86bcf624b" title="Runs pre-initialization code. ">initializeIO()</a>, or when the sensor value might be unstable (gyro rotation, accelerometer movement).</p>
<p>This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">channel</td><td>the channel to calibrate from 1-8 </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the average sensor value computed by this function </dd></dl>

</div>
</div>
<a class="anchor" id="a5da86064604c539c2b6a5e2993289108"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int analogRead </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>channel</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reads an analog input channel and returns the 12-bit value. </p>
<p>The value returned is undefined if the analog pin has been switched to a different mode. This function is Wiring-compatible with the exception of the larger output range. The meaning of the returned value varies depending on the sensor attached.</p>
<p>This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">channel</td><td>the channel to read from 1-8 </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the analog sensor value, where a value of 0 reflects an input voltage of nearly 0 V and a value of 4095 reflects an input voltage of nearly 5 V </dd></dl>

</div>
</div>
<a class="anchor" id="adefc4d860dbaed441901d47d8c3598ee"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int analogReadCalibrated </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>channel</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reads the calibrated value of an analog input channel. </p>
<p>The <a class="el" href="#aab54c390b2ff91b5b7861db877136392" title="Calibrates the analog sensor on the specified channel. ">analogCalibrate()</a> function must be run first on that channel. This function is inappropriate for sensor values intended for integration, as round-off error can accumulate causing drift over time. Use <a class="el" href="#a68b2c3e0863b8f4cb022fcdd77d2f5fd" title="Reads the calibrated value of an analog input channel 1-8 with enhanced precision. ">analogReadCalibratedHR()</a> instead.</p>
<p>This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">channel</td><td>the channel to read from 1-8 </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the difference of the sensor value from its calibrated default from -4095 to 4095 </dd></dl>

</div>
</div>
<a class="anchor" id="a68b2c3e0863b8f4cb022fcdd77d2f5fd"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int analogReadCalibratedHR </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>channel</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reads the calibrated value of an analog input channel 1-8 with enhanced precision. </p>
<p>The <a class="el" href="#aab54c390b2ff91b5b7861db877136392" title="Calibrates the analog sensor on the specified channel. ">analogCalibrate()</a> function must be run first. This is intended for integrated sensor values such as gyros and accelerometers to reduce drift due to round-off, and should not be used on a sensor such as a line tracker or potentiometer.</p>
<p>The value returned actually has 16 bits of "precision", even though the ADC only reads 12 bits, so that errors induced by the average value being between two values come out in the wash when integrated over time. Think of the value as the true value times 16.</p>
<p>This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">channel</td><td>the channel to read from 1-8 </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the difference of the sensor value from its calibrated default from -16384 to 16384 </dd></dl>

</div>
</div>
<a class="anchor" id="a1c59207742a1acf45a8957d7f04f9dfe"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void delay </td>
          <td>(</td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>time</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Wiring-compatible alias of <a class="el" href="#ac89618d0782547d189fe412a9917639b" title="Delays the current task for a given number of milliseconds. ">taskDelay()</a>. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">time</td><td>the duration of the delay in milliseconds (1 000 milliseconds per second) </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="abee651cde0a0e6ed0df34c86ed5af756"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void delayMicroseconds </td>
          <td>(</td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>us</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Wait for approximately the given number of microseconds. </p>
<p>The method used for delaying this length of time may vary depending on the argument. The current task will always be delayed by at least the specified period, but possibly much more depending on CPU load. In general, this function is less reliable than <a class="el" href="#a1c59207742a1acf45a8957d7f04f9dfe" title="Wiring-compatible alias of taskDelay(). ">delay()</a>. Using this function in a loop may hog processing time from other tasks.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">us</td><td>the duration of the delay in microseconds (1 000 000 microseconds per second) </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a7321930f297f38e246050f7f5b091722"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool digitalRead </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>pin</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the digital value (1 or 0) of a pin configured as a digital input. </p>
<p>If the pin is configured as some other mode, the digital value which reflects the current state of the pin is returned, which may or may not differ from the currently set value. The return value is undefined for pins configured as Analog inputs, or for ports in use by a Communications interface. This function is Wiring-compatible.</p>
<p>This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">pin</td><td>the pin to read from 1-26 </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>true if the pin is HIGH, or false if it is LOW </dd></dl>

</div>
</div>
<a class="anchor" id="a23e767e5b47fa61d4e2cc02e6f15c7ab"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void digitalWrite </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>pin</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">bool&#160;</td>
          <td class="paramname"><em>value</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Sets the digital value (1 or 0) of a pin configured as a digital output. </p>
<p>If the pin is configured as some other mode, behavior is undefined. This function is Wiring-compatible.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">pin</td><td>the pin to write from 1-26 </td></tr>
    <tr><td class="paramname">value</td><td>an expression evaluating to "true" or "false" to set the output to HIGH or LOW respectively, or the constants HIGH or LOW themselves </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a5cfffd673e7fc8bcd1827f11b2b1490b"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int encoderGet </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a>&#160;</td>
          <td class="paramname"><em>enc</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the number of ticks recorded by the encoder. </p>
<p>There are 360 ticks in one revolution.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">enc</td><td>the Encoder object from <a class="el" href="#aa68a1ba3d46d89bdb40961c52aa2c4d0" title="Initializes and enables a quadrature encoder on two digital ports. ">encoderInit()</a> to read </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the signed and cumulative number of counts since the last start or reset </dd></dl>

</div>
</div>
<a class="anchor" id="aa68a1ba3d46d89bdb40961c52aa2c4d0"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a> encoderInit </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>portTop</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>portBottom</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">bool&#160;</td>
          <td class="paramname"><em>reverse</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes and enables a quadrature encoder on two digital ports. </p>
<p>Neither the top port nor the bottom port can be digital port 10. NULL will be returned if either port is invalid or the encoder is already in use. Initializing an encoder implicitly resets its count.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">portTop</td><td>the "top" wire from the encoder sensor with the removable cover side UP </td></tr>
    <tr><td class="paramname">portBottom</td><td>the "bottom" wire from the encoder sensor </td></tr>
    <tr><td class="paramname">reverse</td><td>if "true", the sensor will count in the opposite direction </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>an Encoder object to be stored and used for later calls to encoder functions </dd></dl>

</div>
</div>
<a class="anchor" id="a27500c21f56b2f44c62a9284ca5ebd44"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void encoderReset </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a>&#160;</td>
          <td class="paramname"><em>enc</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Resets the encoder to zero. </p>
<p>It is safe to use this method while an encoder is enabled. It is not necessary to call this method before stopping or starting an encoder.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">enc</td><td>the Encoder object from <a class="el" href="#aa68a1ba3d46d89bdb40961c52aa2c4d0" title="Initializes and enables a quadrature encoder on two digital ports. ">encoderInit()</a> to reset </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="ad068eaed82fe8c8f08ba02ea8eaf2d17"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void encoderShutdown </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a8289b20280bf9db1462f60dae76d2939">Encoder</a>&#160;</td>
          <td class="paramname"><em>enc</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Stops and disables the encoder. </p>
<p>Encoders use processing power, so disabling unused encoders increases code performance. The encoder's count will be retained.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">enc</td><td>the Encoder object from <a class="el" href="#aa68a1ba3d46d89bdb40961c52aa2c4d0" title="Initializes and enables a quadrature encoder on two digital ports. ">encoderInit()</a> to stop </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a339e549606415666d4342bb56cffe976"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void fclose </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Closes the specified file descriptor. </p>
<p>This function does not work on communication ports; use <a class="el" href="#a599d7ea04f8d9fb0e37b75423a80a54f" title="Disables the specified USART interface. ">usartShutdown()</a> instead.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">stream</td><td>the file descriptor to close from <a class="el" href="#aad2752157ff714acae7f1e6fe8c9a475" title="Opens the given file in the specified mode. ">fopen()</a> </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="ab9d8f65e0a5c94019fcb796c97682d26"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int fcount </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns the number of characters that can be read without blocking (the number of characters available) from the specified stream. </p>
<p>This only works for communication ports and files in Read mode; for files in Write mode, 0 is always returned.</p>
<p>This function may underestimate, but will not overestimate, the number of characters which meet this criterion.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">stream</td><td>the stream to read (stdin, uart1, uart2, or an open file in Read mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of characters which meet this criterion; if this number cannot be determined, returns 0 </dd></dl>

</div>
</div>
<a class="anchor" id="a27fc767a71921999f9651b1ca4cf1f93"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int fdelete </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>file</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Delete the specified file if it exists and is not currently open. </p>
<p>The file will actually be erased from memory on the next re-boot. A physical power cycle is required to purge deleted files and free their allocated space for new files to be written. Deleted files are still considered inaccessible to <a class="el" href="#aad2752157ff714acae7f1e6fe8c9a475" title="Opens the given file in the specified mode. ">fopen()</a> in Read mode.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">file</td><td>the file name to erase </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>0 if the file was deleted, or 1 if the file could not be found </dd></dl>

</div>
</div>
<a class="anchor" id="a9e71f513ad2496acb5361aedc065e3d8"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int feof </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Checks to see if the specified stream is at its end. </p>
<p>This only works for communication ports and files in Read mode; for files in Write mode, 1 is always returned.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">stream</td><td>the channel to check (stdin, uart1, uart2, or an open file in Read mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>0 if the stream is not at EOF, or 1 otherwise. </dd></dl>

</div>
</div>
<a class="anchor" id="adb974f28765a31026ee6bf71d5175951"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int fflush </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Flushes the data on the specified file channel open in Write mode. </p>
<p>This function has no effect on a communication port or a file in Read mode, as these streams are always flushed as quickly as possible by the kernel.</p>
<p>Successful completion of an fflush function on a file in Write mode cannot guarantee that the file is vaild until <a class="el" href="#a339e549606415666d4342bb56cffe976" title="Closes the specified file descriptor. ">fclose()</a> is used on that file descriptor.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">stream</td><td>the channel to flush (an open file in Write mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>0 if the data was successfully flushed, EOF otherwise </dd></dl>

</div>
</div>
<a class="anchor" id="ab11a990e4f8863a1e7736e3c1d430092"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int fgetc </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reads and returns one character from the specified stream, blocking until complete. </p>
<p>Do not use <a class="el" href="#ab11a990e4f8863a1e7736e3c1d430092" title="Reads and returns one character from the specified stream, blocking until complete. ">fgetc()</a> on a VEX LCD port; deadlock may occur.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">stream</td><td>the stream to read (stdin, uart1, uart2, or an open file in Read mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the next character from 0 to 255, or -1 if no character can be read </dd></dl>

</div>
</div>
<a class="anchor" id="a0020b6e39df31f8b342a2444b9b4ad31"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">char* fgets </td>
          <td>(</td>
          <td class="paramtype">char *&#160;</td>
          <td class="paramname"><em>str</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">int&#160;</td>
          <td class="paramname"><em>num</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reads a string from the specified stream, storing the characters into the memory at str. </p>
<p>Characters will be read until the specified limit is reached, a new line is found, or the end of file is reached.</p>
<p>If the stream is already at end of file (for files in Read mode), NULL will be returned; otherwise, at least one character will be read and stored into str.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">str</td><td>the location where the characters read will be stored </td></tr>
    <tr><td class="paramname">num</td><td>the maximum number of characters to store; at most (num - 1) characters will be read, with a null terminator ('\0') automatically appended </td></tr>
    <tr><td class="paramname">stream</td><td>the channel to read (stdin, uart1, uart2, or an open file in Read mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>str, or NULL if zero characters could be read </dd></dl>

</div>
</div>
<a class="anchor" id="aad2752157ff714acae7f1e6fe8c9a475"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a>* fopen </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>file</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>mode</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Opens the given file in the specified mode. </p>
<p>The file name is truncated to eight characters. Only four files can be in use simultaneously in any given time, with at most one of those files in Write mode. This function does not work on communication ports; use <a class="el" href="#acce6911cfbfe971d368444eecd918301" title="Initialize the specified serial interface with the given connection parameters. ">usartInit()</a> instead.</p>
<p>mode can be "r" or "w". Due to the nature of the VEX Cortex memory, the "r+", "w+", and "a" modes are not supported by the file system.</p>
<p>Opening a file that does not exist in Read mode will fail and return NULL, but opening a new file in Write mode will create it if there is space. Opening a file that already exists in Write mode will destroy the contents and create a new blank file if space is available.</p>
<p>There are important considerations when using of the file system on the VEX Cortex. Reading from files is safe, but writing to files should only be performed when robot actuators have been stopped. PROS will attempt to continue to handle events during file writes, but most user tasks cannot execute during file writing. Powering down the VEX Cortex mid-write may cause file system corruption.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">file</td><td>the file name </td></tr>
    <tr><td class="paramname">mode</td><td>the file mode </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>a file descriptor pointing to the new file, or NULL if the file could not be opened </dd></dl>

</div>
</div>
<a class="anchor" id="a6d7ffc552fcee003ef2bf97580bb2577"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void fprint </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>string</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Prints the simple string to the specified stream. </p>
<p>This method is much, much faster than <a class="el" href="#a4ec55b78eca2e4c07a44d5bc95273d4b" title="Prints the formatted string to the specified output stream. ">fprintf()</a> and does not add a new line like <a class="el" href="#aa25c5dc5bac3e7d45635ec1369783c61" title="Behaves the same as the &quot;fprint&quot; function, and appends a trailing newline (&quot;\n&quot;). ...">fputs()</a>. Do not use <a class="el" href="#a6d7ffc552fcee003ef2bf97580bb2577" title="Prints the simple string to the specified stream. ">fprint()</a> on a VEX LCD port. Use <a class="el" href="#aae51423c0e108729bbb4d26a1b265eb3" title="Prints the string buffer to the attached LCD. ">lcdSetText()</a> instead.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">string</td><td>the string to write </td></tr>
    <tr><td class="paramname">stream</td><td>the stream to write (stdout, uart1, uart2, or an open file in Write mode) </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a4ec55b78eca2e4c07a44d5bc95273d4b"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int fprintf </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>formatString</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">&#160;</td>
          <td class="paramname"><em>...</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Prints the formatted string to the specified output stream. </p>
<p>The specifiers supported by this minimalistic <a class="el" href="#a403c82418e475fa4a8273719e6a7f3e6" title="Prints the formatted string to the debug stream (the PC terminal). ">printf()</a> function are:</p><ul>
<li><code>%d:</code> Signed integer in base 10 (int)</li>
<li><code>%u:</code> Unsigned integer in base 10 (unsigned int)</li>
<li><code>%x</code>, <code>%X:</code> Integer in base 16 (unsigned int, int)</li>
<li><code>%p:</code> Pointer (void *, int *, ...)</li>
<li><code>%c:</code> Character (char)</li>
<li><code>%s:</code> Null-terminated string (char *)</li>
<li><code>%%</code>: Single literal percent sign</li>
<li><code>%f:</code> Floating-point number</li>
</ul>
<p>Specifiers can be modified with:</p><ul>
<li><code>0</code>: Zero-pad, instead of space-pad</li>
<li><code>a.b:</code> Make the field at least "a" characters wide. If "b" is specified for "%f", changes the number of digits after the decimal point</li>
<li><code>-</code>: Left-align, instead of right-align</li>
<li><code>+</code>: Always display the sign character (displays a leading "+" for positive numbers)</li>
<li><code>l:</code> Ignored for compatibility</li>
</ul>
<p>Invalid format specifiers, or mismatched parameters to specifiers, cause undefined behavior. Other characters are written out verbatim. Do not use <a class="el" href="#a4ec55b78eca2e4c07a44d5bc95273d4b" title="Prints the formatted string to the specified output stream. ">fprintf()</a> on a VEX LCD port. Use <a class="el" href="#a7364395c55595702316ac68519a764fa" title="Prints the formatted string to the attached LCD. ">lcdPrint()</a> instead.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">stream</td><td>the stream to write (stdout, uart1, or uart2) </td></tr>
    <tr><td class="paramname">formatString</td><td>the format string as specified above </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of characters written </dd></dl>

</div>
</div>
<a class="anchor" id="aab90aff9d7f1b7239b80cae2bf5c7ea8"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int fputc </td>
          <td>(</td>
          <td class="paramtype">int&#160;</td>
          <td class="paramname"><em>value</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Writes one character to the specified stream. </p>
<p>Do not use <a class="el" href="#aab90aff9d7f1b7239b80cae2bf5c7ea8" title="Writes one character to the specified stream. ">fputc()</a> on a VEX LCD port. Use <a class="el" href="#aae51423c0e108729bbb4d26a1b265eb3" title="Prints the string buffer to the attached LCD. ">lcdSetText()</a> instead.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">value</td><td>the character to write (a value of type "char" can be used) </td></tr>
    <tr><td class="paramname">stream</td><td>the stream to write (stdout, uart1, uart2, or an open file in Write mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the character written </dd></dl>

</div>
</div>
<a class="anchor" id="aa25c5dc5bac3e7d45635ec1369783c61"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int fputs </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>string</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Behaves the same as the "fprint" function, and appends a trailing newline ("\n"). </p>
<p>Do not use <a class="el" href="#aa25c5dc5bac3e7d45635ec1369783c61" title="Behaves the same as the &quot;fprint&quot; function, and appends a trailing newline (&quot;\n&quot;). ...">fputs()</a> on a VEX LCD port. Use <a class="el" href="#aae51423c0e108729bbb4d26a1b265eb3" title="Prints the string buffer to the attached LCD. ">lcdSetText()</a> instead.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">string</td><td>the string to write </td></tr>
    <tr><td class="paramname">stream</td><td>the stream to write (stdout, uart1, uart2, or an open file in Write mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of characters written, excluding the new line </dd></dl>

</div>
</div>
<a class="anchor" id="afb8cb08b18c9b9ed78d1598c8076d956"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">size_t fread </td>
          <td>(</td>
          <td class="paramtype">void *&#160;</td>
          <td class="paramname"><em>ptr</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><em>size</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><em>count</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reads data from a stream into memory. </p>
<p>Returns the number of bytes thus read.</p>
<p>If the memory at ptr cannot store (size * count) bytes, undefined behavior occurs.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">ptr</td><td>a pointer to where the data will be stored </td></tr>
    <tr><td class="paramname">size</td><td>the size of each data element to read in bytes </td></tr>
    <tr><td class="paramname">count</td><td>the number of data elements to read </td></tr>
    <tr><td class="paramname">stream</td><td>the stream to read (stdout, uart1, uart2, or an open file in Read mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of bytes successfully read </dd></dl>

</div>
</div>
<a class="anchor" id="af2b5e837a27524264f0422232f5f9538"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int fseek </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">long int&#160;</td>
          <td class="paramname"><em>offset</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">int&#160;</td>
          <td class="paramname"><em>origin</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Seeks within a file open in Read mode. </p>
<p>This function will fail when used on a file in Write mode or on any communications port.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">stream</td><td>the stream to seek within </td></tr>
    <tr><td class="paramname">offset</td><td>the location within the stream to seek </td></tr>
    <tr><td class="paramname">origin</td><td>the reference location for offset: SEEK_CUR, SEEK_SET, or SEEK_END </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>0 if the seek was successful, or 1 otherwise </dd></dl>

</div>
</div>
<a class="anchor" id="a6273f71322efc95f429d9e990a8ef8ae"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">long int ftell </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns the current position of the stream. </p>
<p>This function works on files in either Read or Write mode, but will fail on communications ports.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">stream</td><td>the stream to check </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the offset of the stream, or -1 if the offset could not be determined </dd></dl>

</div>
</div>
<a class="anchor" id="a998dde93aaae1ed6cc10a4656eb5cc10"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">size_t fwrite </td>
          <td>(</td>
          <td class="paramtype">const void *&#160;</td>
          <td class="paramname"><em>ptr</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><em>size</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><em>count</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>stream</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Writes data from memory to a stream. </p>
<p>Returns the number of bytes thus written.</p>
<p>If the memory at ptr is not as long as (size * count) bytes, undefined behavior occurs.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">ptr</td><td>a pointer to the data to write </td></tr>
    <tr><td class="paramname">size</td><td>the size of each data element to write in bytes </td></tr>
    <tr><td class="paramname">count</td><td>the number of data elements to write </td></tr>
    <tr><td class="paramname">stream</td><td>the stream to write (stdout, uart1, uart2, or an open file in Write mode) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of bytes successfully written </dd></dl>

</div>
</div>
<a class="anchor" id="ac45fdeab51c3197c1e7c4ec7beabaca9"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int getchar </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reads and returns one character from "stdin", which is the PC debug terminal. </p>
<dl class="section return"><dt>Returns</dt><dd>the next character from 0 to 255, or -1 if no character can be read </dd></dl>

</div>
</div>
<a class="anchor" id="a0ae2ca5d2fd99f33aaef38786bb8ee59"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int gyroGet </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a>&#160;</td>
          <td class="paramname"><em>gyro</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the current gyro angle in degrees, rounded to the nearest degree. </p>
<p>There are 360 degrees in a circle.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">gyro</td><td>the Gyro object from <a class="el" href="#a17270080a32b64937a3669089a80120f" title="Initializes and enables a gyro on an analog port. ">gyroInit()</a> to read </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the signed and cumulative number of degrees rotated around the gyro's vertical axis since the last start or reset </dd></dl>

</div>
</div>
<a class="anchor" id="a17270080a32b64937a3669089a80120f"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a> gyroInit </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>port</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned short&#160;</td>
          <td class="paramname"><em>multiplier</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes and enables a gyro on an analog port. </p>
<p>NULL will be returned if the port is invalid or the gyro is already in use. Initializing a gyro implicitly calibrates it and resets its count. Do not move the robot while the gyro is being calibrated. It is suggested to call this function in <a class="el" href="a00004.htm#a25a40b6614565f755233080a384c35f1" title="Runs user initialization code. ">initialize()</a> and to place the robot in its final position before powering it on.</p>
<p>The multiplier parameter can tune the gyro to adapt to specific sensors. The default value at this time is 196; higher values will increase the number of degrees reported for a fixed actual rotation, while lower values will decrease the number of degrees reported. If your robot is consistently turning too far, increase the multiplier, and if it is not turning far enough, decrease the multiplier.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">port</td><td>the analog port to use from 1-8 </td></tr>
    <tr><td class="paramname">multiplier</td><td>an optional constant to tune the gyro readings; use 0 for the default value </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>a Gyro object to be stored and used for later calls to gyro functions </dd></dl>

</div>
</div>
<a class="anchor" id="a5de4afb9c6bd747e8d7664e1c72390b2"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void gyroReset </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a>&#160;</td>
          <td class="paramname"><em>gyro</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Resets the gyro to zero. </p>
<p>It is safe to use this method while a gyro is enabled. It is not necessary to call this method before stopping or starting a gyro.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">gyro</td><td>the Gyro object from <a class="el" href="#a17270080a32b64937a3669089a80120f" title="Initializes and enables a gyro on an analog port. ">gyroInit()</a> to reset </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a4e50e79b76d956dd9d466a582a5bb7b5"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void gyroShutdown </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a04e06985633aa933343fcfa3d7fb268d">Gyro</a>&#160;</td>
          <td class="paramname"><em>gyro</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Stops and disables the gyro. </p>
<p>Gyros use processing power, so disabling unused gyros increases code performance. The gyro's position will be retained.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">gyro</td><td>the Gyro object from <a class="el" href="#a17270080a32b64937a3669089a80120f" title="Initializes and enables a gyro on an analog port. ">gyroInit()</a> to stop </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="ac4f1500418a729ac3ee95bce9768b20c"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool imeGet </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>address</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">int *&#160;</td>
          <td class="paramname"><em>value</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the current 32-bit count of the specified IME. </p>
<p>Much like the count for a quadrature encoder, the tick count is signed and cumulative. The value reflects total counts since the last reset. Different VEX Motor Encoders have a different number of counts per revolution:</p>
<ul>
<li><code>240.448</code> for the 269 IME</li>
<li><code>627.2</code> for the 393 IME in high torque mode (factory default)</li>
<li><code>392</code> for the 393 IME in high speed mode</li>
</ul>
<p>If the IME address is invalid, or the IME has not been reset or initialized, the value stored in *value is undefined.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">address</td><td>the IME address to fetch from 0 to IME_ADDR_MAX </td></tr>
    <tr><td class="paramname">value</td><td>a pointer to the location where the value will be stored (obtained using the "&amp;" operator on the target variable name e.g. <code>imeGet(2, &amp;counts)</code>) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>true if the count was successfully read and the value stored in *value is valid; false otherwise </dd></dl>

</div>
</div>
<a class="anchor" id="a2dfd22ed31510b48a91bd9cd3d04a72f"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool imeGetVelocity </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>address</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">int *&#160;</td>
          <td class="paramname"><em>value</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the current rotational velocity of the specified IME. </p>
<p>In this version of PROS, the velocity is positive if the IME count is increasing and negative if the IME count is decreasing. The velocity is in RPM of the internal encoder wheel. Since checking the IME for its type cannot reveal whether the motor gearing is high speed or high torque (in the 2-Wire Motor 393 case), the user must divide the return value by the number of output revolutions per encoder revolution:</p>
<ul>
<li><code>30.056</code> for the 269 IME</li>
<li><code>39.2</code> for the 393 IME in high torque mode (factory default)</li>
<li><code>24.5</code> for the 393 IME in high speed mode</li>
</ul>
<p>If the IME address is invalid, or the IME has not been reset or initialized, the value stored in *value is undefined.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">address</td><td>the IME address to fetch from 0 to IME_ADDR_MAX </td></tr>
    <tr><td class="paramname">value</td><td>a pointer to the location where the value will be stored (obtained using the "&amp;" operator on the target variable name e.g. <code>imeGetVelocity(2, &amp;counts)</code>) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>true if the velocity was successfully read and the value stored in *value is valid; false otherwise </dd></dl>

</div>
</div>
<a class="anchor" id="a868ab46aa5992e60829936c0109160bf"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned int imeInitializeAll </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes all IMEs. </p>
<p>IMEs are assigned sequential incrementing addresses, beginning with the first IME on the chain (closest to the VEX Cortex I2C port). Therefore, a given configuration of IMEs will always have the same ID assigned to each encoder. The addresses range from 0 to IME_ADDR_MAX, so the first encoder gets 0, the second gets 1, ...</p>
<p>This function should most likely be used in <a class="el" href="a00004.htm#a25a40b6614565f755233080a384c35f1" title="Runs user initialization code. ">initialize()</a>. Do not use it in <a class="el" href="a00004.htm#ad9cda921edb01125bb13c2f86bcf624b" title="Runs pre-initialization code. ">initializeIO()</a> or at any other time when the scheduler is paused (like an interrupt). Checking the return value of this function is important to ensure that all IMEs are plugged in and responding as expected.</p>
<p>This function, unlike the other IME functions, is not thread safe. If using imeInitializeAll to re-initialize encoders, calls to other IME functions might behave unpredictably during this function's execution.</p>
<dl class="section return"><dt>Returns</dt><dd>the number of IMEs successfully initialized. </dd></dl>

</div>
</div>
<a class="anchor" id="ab1ef9ee5f8878856896a6c920ed762fc"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool imeReset </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>address</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Resets the specified IME's counters to zero. </p>
<p>This method can be used while the IME is rotating.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">address</td><td>the IME address to reset from 0 to IME_ADDR_MAX </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>true if the reset succeeded; false otherwise </dd></dl>

</div>
</div>
<a class="anchor" id="a19de5a557348a6b4931c89eb82eb8fb7"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void imeShutdown </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Shuts down all IMEs on the chain; their addresses return to the default and the stored counts and velocities are lost. </p>
<p>This function, unlike the other IME functions, is not thread safe.</p>
<p>To use the IME chain again, wait at least 0.25 seconds before using imeInitializeAll again. </p>

</div>
</div>
<a class="anchor" id="a9291f71712cfb21e9bfd51682260fa73"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void ioClearInterrupt </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>pin</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Disables interrupts on the specified pin. </p>
<p>Disabling interrupts on interrupt pins which are not in use conserves processing time.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">pin</td><td>the pin on which to reset interrupts from 1-9,11-12 </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a8d0fd8e69a4c4c5aba981d106ee7f9ac"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void ioSetInterrupt </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>pin</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>edges</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype"><a class="el" href="#a5bbb1ca889e36aec7b4fce324c2662c4">InterruptHandler</a>&#160;</td>
          <td class="paramname"><em>handler</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Sets up an interrupt to occur on the specified pin, and resets any counters or timers associated with the pin. </p>
<p>Each time the specified change occurs, the function pointer passed in will be called with the pin that changed as an argument. Enabling pin-change interrupts consumes processing time, so it is best to only enable necessary interrupts and to keep the InterruptHandler function short. Pin change interrupts can only be enabled on pins 1-9 and 11-12.</p>
<p>Do not use API functions such as <a class="el" href="#a1c59207742a1acf45a8957d7f04f9dfe" title="Wiring-compatible alias of taskDelay(). ">delay()</a> inside the handler function, as the function will run in an ISR where the scheduler is paused and no other interrupts can execute. It is best to quickly update some state and allow a task to perform the work.</p>
<p>Do not use this function on pins that are also being used by the built-in ultrasonic or shaft encoder drivers, or on pins which have been switched to output mode.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">pin</td><td>the pin on which to enable interrupts from 1-9,11-12 </td></tr>
    <tr><td class="paramname">edges</td><td>one of INTERRUPT_EDGE_RISING, INTERRUPT_EDGE_FALLING, or INTERRUPT_EDGE_BOTH </td></tr>
    <tr><td class="paramname">handler</td><td>the function to call when the condition is satisfied </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="aad3f43faea37dc2eddaf4ba0926a511f"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool isAutonomous </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns true if the robot is in autonomous mode, or false otherwise. </p>
<p>While in autonomous mode, joystick inputs will return a neutral value, but serial port communications (even over VexNET) will still work properly. </p>

</div>
</div>
<a class="anchor" id="a56722b6f1c22da04885bc9853148bb71"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool isEnabled </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns true if the robot is enabled, or false otherwise. </p>
<p>While disabled via the VEX Competition Switch or VEX Field Controller, motors will not function. However, the digital I/O ports can still be changed, which may indirectly affect the robot state (e.g. solenoids). Avoid performing externally visible actions while disabled (the kernel should take care of this most of the time). </p>

</div>
</div>
<a class="anchor" id="a72aa0bce6b1d8ee298a60617f8fa74da"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool isJoystickConnected </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>joystick</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns true if a joystick is connected to the specified slot number (1 or 2), or false otherwise. </p>
<p>Useful for automatically merging joysticks for one operator, or splitting for two. This function does not work properly during <a class="el" href="a00004.htm#a25a40b6614565f755233080a384c35f1" title="Runs user initialization code. ">initialize()</a> or <a class="el" href="a00004.htm#ad9cda921edb01125bb13c2f86bcf624b" title="Runs pre-initialization code. ">initializeIO()</a> and can return false positives. It should be checked once and stored at the beginning of <a class="el" href="a00004.htm#ac71a94af413917f27d108e95c4d6f6a7" title="Runs the user operator control code. ">operatorControl()</a>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">joystick</td><td>the joystick slot to check </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a1eceab28885f971892b9d4fc76e0e542"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool isOnline </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns true if a VEX field controller or competition switch is connected, or false otherwise. </p>
<p>When in online mode, the switching between <a class="el" href="a00004.htm#a3c7ca506bbc071fa740de13805b7f376" title="Runs the user autonomous code. ">autonomous()</a> and <a class="el" href="a00004.htm#ac71a94af413917f27d108e95c4d6f6a7" title="Runs the user operator control code. ">operatorControl()</a> tasks is managed by the PROS kernel. </p>

</div>
</div>
<a class="anchor" id="ad56fcec15d1a48deb8780bb0fc38be4d"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int joystickGetAnalog </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>joystick</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>axis</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the value of a control axis on the VEX joystick. </p>
<p>Returns the value from -127 to 127, or 0 if no joystick is connected to the requested slot.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">joystick</td><td>the joystick slot to check </td></tr>
    <tr><td class="paramname">axis</td><td>one of 1, 2, 3, 4, ACCEL_X, or ACCEL_Y </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a792f1a80c62a63e764cf64aabf95db92"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool joystickGetDigital </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>joystick</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>buttonGroup</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>button</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the value of a button on the VEX joystick. </p>
<p>Returns true if that button is pressed, or false otherwise. If no joystick is connected to the requested slot, returns false.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">joystick</td><td>the joystick slot to check </td></tr>
    <tr><td class="paramname">buttonGroup</td><td>one of 5, 6, 7, or 8 to request that button as labelled on the joystick </td></tr>
    <tr><td class="paramname">button</td><td>one of JOY_UP, JOY_DOWN, JOY_LEFT, or JOY_RIGHT; requesting JOY_LEFT or JOY_RIGHT for groups 5 or 6 will cause an undefined value to be returned </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="aa53f19724bcf9f7bf1b4468b5982553b"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void lcdClear </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>lcdPort</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Clears the LCD screen on the specified port. </p>
<p>Printing to a line implicitly overwrites the contents, so clearing should only be required at startup.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">lcdPort</td><td>the LCD to clear, either uart1 or uart2 </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a51af160afcbfb860dfff75d91ffb3824"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void lcdInit </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>lcdPort</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes the LCD port, but does not change the text or settings. </p>
<p>If the LCD was not initialized before, the text currently on the screen will be undefined. The port will not be usable with standard serial port functions until the LCD is stopped.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">lcdPort</td><td>the LCD to initialize, either uart1 or uart2 </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a7364395c55595702316ac68519a764fa"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void lcdPrint </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>lcdPort</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>line</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>formatString</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">&#160;</td>
          <td class="paramname"><em>...</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Prints the formatted string to the attached LCD. </p>
<p>The output string will be truncated as necessary to fit on the LCD screen, 16 characters wide. It is probably better to generate the string in a local buffer and use <a class="el" href="#aae51423c0e108729bbb4d26a1b265eb3" title="Prints the string buffer to the attached LCD. ">lcdSetText()</a> but this method is provided for convenience.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">lcdPort</td><td>the LCD to write, either uart1 or uart2 </td></tr>
    <tr><td class="paramname">line</td><td>the LCD line to write, either 1 or 2 </td></tr>
    <tr><td class="paramname">formatString</td><td>the format string as specified in <a class="el" href="#a4ec55b78eca2e4c07a44d5bc95273d4b" title="Prints the formatted string to the specified output stream. ">fprintf()</a> </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="af13bc828964f1443a0689f4780b6dc29"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned int lcdReadButtons </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>lcdPort</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Reads the user button status from the LCD display. </p>
<p>For example, if the left and right buttons are pushed, (1 | 4) = 5 will be returned. 0 is returned if no buttons are pushed.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">lcdPort</td><td>the LCD to poll, either uart1 or uart2 </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the buttons pressed as a bit mask </dd></dl>

</div>
</div>
<a class="anchor" id="aeafd247b27813122cfee95e0cecf188b"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void lcdSetBacklight </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>lcdPort</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">bool&#160;</td>
          <td class="paramname"><em>backlight</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Sets the specified LCD backlight to be on or off. </p>
<p>Turning it off will save power but may make it more difficult to read in dim conditions.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">lcdPort</td><td>the LCD to adjust, either uart1 or uart2 </td></tr>
    <tr><td class="paramname">backlight</td><td>true to turn the backlight on, or false to turn it off </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="aae51423c0e108729bbb4d26a1b265eb3"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void lcdSetText </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>lcdPort</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>line</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>buffer</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Prints the string buffer to the attached LCD. </p>
<p>The output string will be truncated as necessary to fit on the LCD screen, 16 characters wide. This function, like <a class="el" href="#a6d7ffc552fcee003ef2bf97580bb2577" title="Prints the simple string to the specified stream. ">fprint()</a>, is much, much faster than a formatted routine such as <a class="el" href="#a7364395c55595702316ac68519a764fa" title="Prints the formatted string to the attached LCD. ">lcdPrint()</a> and consumes less memory.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">lcdPort</td><td>the LCD to write, either uart1 or uart2 </td></tr>
    <tr><td class="paramname">line</td><td>the LCD line to write, either 1 or 2 </td></tr>
    <tr><td class="paramname">buffer</td><td>the string to write </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="aa97fb2f4a17f8924bd11a1e40a2abe20"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void lcdShutdown </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>lcdPort</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Shut down the specified LCD port. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">lcdPort</td><td>the LCD to stop, either uart1 or uart2 </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a8b24cbb7c3486e1bfa05c86db83ecb01"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned long micros </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns the number of microseconds since Cortex power-up. </p>
<p>There are 10^6 microseconds in a second, so as a 32-bit integer, this will overflow and wrap back to zero every two hours or so.</p>
<p>This function is Wiring-compatible.</p>
<dl class="section return"><dt>Returns</dt><dd>the number of microseconds since the Cortex was turned on or the last overflow </dd></dl>

</div>
</div>
<a class="anchor" id="a6ff7f2532a22366f0013bc41397129fd"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned long millis </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns the number of milliseconds since Cortex power-up. </p>
<p>There are 1000 milliseconds in a second, so as a 32-bit integer, this will not overflow for 50 days.</p>
<p>This function is Wiring-compatible.</p>
<dl class="section return"><dt>Returns</dt><dd>the number of milliseconds since the Cortex was turned on </dd></dl>

</div>
</div>
<a class="anchor" id="a4805c8fd29f9221d28ed2e673c06e6c4"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int motorGet </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>channel</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the last set speed of the specified motor channel. </p>
<p>This speed may have been set by any task or the PROS kernel itself. This is not guaranteed to be the speed that the motor is actually running at, or even the speed currently being sent to the motor, due to latency in the Motor Controller 29 protocol and physical loading. To measure actual motor shaft revolution speed, attach a VEX Integrated Motor Encoder or VEX Quadrature Encoder and use the velocity functions associated with each.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">channel</td><td>the motor channel to fetch from 1-10 </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the speed last sent to this channel; -127 is full reverse and 127 is full forward, with 0 being off </dd></dl>

</div>
</div>
<a class="anchor" id="a03c5b04b472d024281f62d7af8854a8e"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void motorSet </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>channel</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">int&#160;</td>
          <td class="paramname"><em>speed</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Sets the speed of the specified motor channel. </p>
<p>Do not use <a class="el" href="#a03c5b04b472d024281f62d7af8854a8e" title="Sets the speed of the specified motor channel. ">motorSet()</a> with the same channel argument from two different tasks. It is safe to use <a class="el" href="#a03c5b04b472d024281f62d7af8854a8e" title="Sets the speed of the specified motor channel. ">motorSet()</a> with different channel arguments from different tasks.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">channel</td><td>the motor channel to modify from 1-10 </td></tr>
    <tr><td class="paramname">speed</td><td>the new signed speed; -127 is full reverse and 127 is full forward, with 0 being off </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a339844ebc35f48a14945b73edaeca498"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void motorStop </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>channel</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Stops the motor on the specified channel, equivalent to calling <a class="el" href="#a03c5b04b472d024281f62d7af8854a8e" title="Sets the speed of the specified motor channel. ">motorSet()</a> with an argument of zero. </p>
<p>This performs a coasting stop, not an active brake. Since motorStop is similar to motorSet(0), see the note for <a class="el" href="#a03c5b04b472d024281f62d7af8854a8e" title="Sets the speed of the specified motor channel. ">motorSet()</a> about use from multiple tasks.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">channel</td><td>the motor channel to stop from 1-10 </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="aecd027ce8f8b52a765735e9eb5b202b3"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a> mutexCreate </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Creates a mutex intended to allow only one task to use a resource at a time. </p>
<p>For signalling and synchronization, try using semaphores.</p>
<p>Mutexes created using this function can be accessed using the <a class="el" href="#a8b51124628d2a7741738d48551d1e8ee" title="Requests a mutex so that other tasks cannot simultaneously use the resource it guards. ">mutexTake()</a> and <a class="el" href="#afe171a08d22de18fc2ab604b2364959f" title="Relinquishes a mutex so that other tasks can use the resource it guards. ">mutexGive()</a> functions. The semaphore functions must not be used on objects of this type.</p>
<p>This type of object uses a priority inheritance mechanism so a task 'taking' a mutex MUST ALWAYS 'give' the mutex back once the mutex is no longer required.</p>
<dl class="section return"><dt>Returns</dt><dd>a handle to the created mutex </dd></dl>

</div>
</div>
<a class="anchor" id="a247598f8083a3ce6c39317d279f631cf"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void mutexDelete </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a>&#160;</td>
          <td class="paramname"><em>mutex</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Deletes the specified mutex. </p>
<p>This function can be dangerous; deleting semaphores being waited on by a task may cause deadlock or a crash.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">mutex</td><td>the mutex to destroy </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="afe171a08d22de18fc2ab604b2364959f"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool mutexGive </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a>&#160;</td>
          <td class="paramname"><em>mutex</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Relinquishes a mutex so that other tasks can use the resource it guards. </p>
<p>The mutex must be held by the current task using a corresponding call to mutexTake.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">mutex</td><td>the mutex to release </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>true if the mutex was released, or false if the mutex was not already held </dd></dl>

</div>
</div>
<a class="anchor" id="a8b51124628d2a7741738d48551d1e8ee"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool mutexTake </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a9b40607ca13d2b5261f47f613e3c4fa4">Mutex</a>&#160;</td>
          <td class="paramname"><em>mutex</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>blockTime</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Requests a mutex so that other tasks cannot simultaneously use the resource it guards. </p>
<p>The mutex must not already be held by the current task. If another task already holds the mutex, the function will wait for the mutex to be released. Other tasks can run during this time.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">mutex</td><td>the mutex to request </td></tr>
    <tr><td class="paramname">blockTime</td><td>the maximum time to wait for the mutex to be available, where -1 specifies an infinite timeout </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>true if the mutex was successfully taken, or false if the timeout expired </dd></dl>

</div>
</div>
<a class="anchor" id="a1875409d12eee562555bda94cad7f973"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void pinMode </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>pin</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>mode</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Configures the pin as an input or output with a variety of settings. </p>
<p>Do note that INPUT by default turns on the pull-up resistor, as most VEX sensors are open-drain active low. It should not be a big deal for most push-pull sources. This function is Wiring-compatible.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">pin</td><td>the pin to modify from 1-26 </td></tr>
    <tr><td class="paramname">mode</td><td>one of INPUT, INPUT_ANALOG, INPUT_FLOATING, OUTPUT, or OUTPUT_OD </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a91ac9eacbf0930cd5f26bc12b90b9efd"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned int powerLevelBackup </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns the backup battery voltage in millivolts. </p>
<p>If no backup battery is connected, returns 0. </p>

</div>
</div>
<a class="anchor" id="aeb5efefae0d6fa559dae5a7e5a77c956"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned int powerLevelMain </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Returns the main battery voltage in millivolts. </p>
<p>In rare circumstances, this method might return 0. Check the output value for reasonability before blindly blasting the user. </p>

</div>
</div>
<a class="anchor" id="ae2dd7886efd463e815dadf10eb54777e"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void print </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>string</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Prints the simple string to the debug terminal without formatting. </p>
<p>This method is much, much faster than <a class="el" href="#a403c82418e475fa4a8273719e6a7f3e6" title="Prints the formatted string to the debug stream (the PC terminal). ">printf()</a>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">string</td><td>the string to write </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a403c82418e475fa4a8273719e6a7f3e6"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int printf </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>formatString</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">&#160;</td>
          <td class="paramname"><em>...</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Prints the formatted string to the debug stream (the PC terminal). </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">formatString</td><td>the format string as specified in <a class="el" href="#a4ec55b78eca2e4c07a44d5bc95273d4b" title="Prints the formatted string to the specified output stream. ">fprintf()</a> </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of characters written </dd></dl>

</div>
</div>
<a class="anchor" id="a6c600555ec9aefb4c01fdb960ecc2809"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int putchar </td>
          <td>(</td>
          <td class="paramtype">int&#160;</td>
          <td class="paramname"><em>value</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Writes one character to "stdout", which is the PC debug terminal, and returns the input value. </p>
<p>When using a wireless connection, one may need to press the spacebar before the input is visible on the terminal.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">value</td><td>the character to write (a value of type "char" can be used) </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the character written </dd></dl>

</div>
</div>
<a class="anchor" id="af17f2f3fda696ddc3b7c1bac995edaf8"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int puts </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>string</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Behaves the same as the "print" function, and appends a trailing newline ("\n"). </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">string</td><td>the string to write </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of characters written, excluding the new line </dd></dl>

</div>
</div>
<a class="anchor" id="a4461acf29574576dda6a3316117f85a9"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a> semaphoreCreate </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Creates a semaphore intended for synchronizing tasks. </p>
<p>To prevent some critical code from simultaneously modifying a shared resource, use mutexes instead.</p>
<p>Semaphores created using this function can be accessed using the <a class="el" href="#a7520baa9cf5c9ec2f43925b098e7b46a" title="Waits on a semaphore. ">semaphoreTake()</a> and <a class="el" href="#a9e5b0b6d5da138b4d5a077237894f96e" title="Signals a semaphore. ">semaphoreGive()</a> functions. The mutex functions must not be used on objects of this type.</p>
<p>This type of object does not need to have balanced take and give calls, so priority inheritance is not used. Semaphores can be signalled by an interrupt routine.</p>
<dl class="section return"><dt>Returns</dt><dd>a handle to the created semaphore </dd></dl>

</div>
</div>
<a class="anchor" id="af27ba79dc102f914d31a3c20136b1cd9"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void semaphoreDelete </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a>&#160;</td>
          <td class="paramname"><em>semaphore</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Deletes the specified semaphore. </p>
<p>This function can be dangerous; deleting semaphores being waited on by a task may cause deadlock or a crash.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">semaphore</td><td>the semaphore to destroy </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a9e5b0b6d5da138b4d5a077237894f96e"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool semaphoreGive </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a>&#160;</td>
          <td class="paramname"><em>semaphore</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Signals a semaphore. </p>
<p>Tasks waiting for a signal using <a class="el" href="#a7520baa9cf5c9ec2f43925b098e7b46a" title="Waits on a semaphore. ">semaphoreTake()</a> will be unblocked by this call and can continue execution.</p>
<p>Slow processes can give semaphores when ready, and fast processes waiting to take the semaphore will continue at that point.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">semaphore</td><td>the semaphore to signal </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>true if the semaphore was successfully given, or false if the semaphore was not taken since the last give </dd></dl>

</div>
</div>
<a class="anchor" id="a7520baa9cf5c9ec2f43925b098e7b46a"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">bool semaphoreTake </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a884363b5e46c2eedeae95c179aaeb717">Semaphore</a>&#160;</td>
          <td class="paramname"><em>semaphore</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>blockTime</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Waits on a semaphore. </p>
<p>If the semaphore is already in the "taken" state, the current task will wait for the semaphore to be signaled. Other tasks can run during this time.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">semaphore</td><td>the semaphore to wait </td></tr>
    <tr><td class="paramname">blockTime</td><td>the maximum time to wait for the semaphore to be given, where -1 specifies an infinite timeout </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>true if the semaphore was successfully taken, or false if the timeout expired </dd></dl>

</div>
</div>
<a class="anchor" id="a22269cefc22e487f7acdcc4737d58c4a"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void setTeamName </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>name</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Sets the team name displayed to the VEX field control and VEX Firmware Upgrade. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">name</td><td>a string containing the team name; only the first eight characters will be shown </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="ada81026ae730d990159aab26c302a3ad"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int snprintf </td>
          <td>(</td>
          <td class="paramtype">char *&#160;</td>
          <td class="paramname"><em>buffer</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">size_t&#160;</td>
          <td class="paramname"><em>limit</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>formatString</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">&#160;</td>
          <td class="paramname"><em>...</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Prints the formatted string to the string buffer with the specified length limit. </p>
<p>The length limit, as per the C standard, includes the trailing null character, so an argument of 256 will cause a maximum of 255 non-null characters to be printed, and one null terminator in all cases.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">buffer</td><td>the string buffer where characters can be placed </td></tr>
    <tr><td class="paramname">limit</td><td>the maximum number of characters to write </td></tr>
    <tr><td class="paramname">formatString</td><td>the format string as specified in <a class="el" href="#a4ec55b78eca2e4c07a44d5bc95273d4b" title="Prints the formatted string to the specified output stream. ">fprintf()</a> </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of characters stored </dd></dl>

</div>
</div>
<a class="anchor" id="a7e0b8a79a6f53f88329b87229e7d698b"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void speakerInit </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes VEX speaker support. </p>
<p>The VEX speaker is not thread safe; it can only be used from one task at a time. Using the VEX speaker may impact robot performance. Teams may benefit from an if statement that only enables sound if <a class="el" href="#a1eceab28885f971892b9d4fc76e0e542" title="Returns true if a VEX field controller or competition switch is connected, or false otherwise...">isOnline()</a> returns false. </p>

</div>
</div>
<a class="anchor" id="af91f9f80737d283ff82a96596f833854"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void speakerPlayArray </td>
          <td>(</td>
          <td class="paramtype">const char **&#160;</td>
          <td class="paramname"><em>songs</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Plays up to three RTTTL (Ring Tone Text Transfer Language) songs simultaneously over the VEX speaker. </p>
<p>The audio is mixed to allow polyphonic sound to be played. Many simple songs are available in RTTTL format online, or compose your own.</p>
<p>The song must not be NULL, but unused tracks within the song can be set to NULL. If any of the three song tracks is invalid, the result of this function is undefined.</p>
<p>The VEX speaker is not thread safe; it can only be used from one task at a time. Using the VEX speaker may impact robot performance. Teams may benefit from an if statement that only enables sound if <a class="el" href="#a1eceab28885f971892b9d4fc76e0e542" title="Returns true if a VEX field controller or competition switch is connected, or false otherwise...">isOnline()</a> returns false.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">songs</td><td>an array of up to three (3) RTTTL songs as string values to play </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a6971b95fa28048bf134b7421b7f2faee"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void speakerPlayRtttl </td>
          <td>(</td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>song</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Plays an RTTTL (Ring Tone Text Transfer Language) song over the VEX speaker. </p>
<p>Many simple songs are available in RTTTL format online, or compose your own.</p>
<p>The song must not be NULL. If an invalid song is specified, the result of this function is undefined.</p>
<p>The VEX speaker is not thread safe; it can only be used from one task at a time. Using the VEX speaker may impact robot performance. Teams may benefit from an if statement that only enables sound if <a class="el" href="#a1eceab28885f971892b9d4fc76e0e542" title="Returns true if a VEX field controller or competition switch is connected, or false otherwise...">isOnline()</a> returns false.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">song</td><td>the RTTTL song as a string value to play </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a8d6d3ddc25b8408b0270cd2ccb9505ce"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void speakerShutdown </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Powers down and disables the VEX speaker. </p>
<p>If a song is currently being played in another task, the behavior of this function is undefined, since the VEX speaker is not thread safe. </p>

</div>
</div>
<a class="anchor" id="acbfbfc380f865613ad5ff3cae256bdc4"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int sprintf </td>
          <td>(</td>
          <td class="paramtype">char *&#160;</td>
          <td class="paramname"><em>buffer</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const char *&#160;</td>
          <td class="paramname"><em>formatString</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">&#160;</td>
          <td class="paramname"><em>...</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Prints the formatted string to the string buffer. </p>
<p>If the buffer is not big enough to contain the complete formatted output, undefined behavior occurs. See <a class="el" href="#ada81026ae730d990159aab26c302a3ad" title="Prints the formatted string to the string buffer with the specified length limit. ...">snprintf()</a> for a safer version of this function.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">buffer</td><td>the string buffer where characters can be placed </td></tr>
    <tr><td class="paramname">formatString</td><td>the format string as specified in <a class="el" href="#a4ec55b78eca2e4c07a44d5bc95273d4b" title="Prints the formatted string to the specified output stream. ">fprintf()</a> </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the number of characters stored </dd></dl>

</div>
</div>
<a class="anchor" id="abd5e503a273aaf6abf6869ebd76f2d2d"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a> taskCreate </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#af3bbcf99b9e4561ebbae4a1f283ba6a3">TaskCode</a>&#160;</td>
          <td class="paramname"><em>taskCode</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const unsigned int&#160;</td>
          <td class="paramname"><em>stackDepth</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">void *&#160;</td>
          <td class="paramname"><em>parameters</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const unsigned int&#160;</td>
          <td class="paramname"><em>priority</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Creates a new task and add it to the list of tasks that are ready to run. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">taskCode</td><td>the function to execute in its own task </td></tr>
    <tr><td class="paramname">stackDepth</td><td>the number of variables available on the stack (4 * stackDepth bytes will be allocated on the Cortex) </td></tr>
    <tr><td class="paramname">parameters</td><td>an argument passed to the taskCode function </td></tr>
    <tr><td class="paramname">priority</td><td>a value from TASK_PRIORITY_LOWEST to TASK_PRIORITY_HIGHEST determining the initial priority of the task </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>a handle to the created task, or NULL if an error occurred </dd></dl>

</div>
</div>
<a class="anchor" id="ac89618d0782547d189fe412a9917639b"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void taskDelay </td>
          <td>(</td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>msToDelay</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Delays the current task for a given number of milliseconds. </p>
<p>Delaying for a period of zero will force a reschedule, where tasks of equal priority may be scheduled if available. The calling task will still be available for immediate rescheduling once the other tasks have had their turn or if nothing of equal or higher priority is available to be scheduled.</p>
<p>This is not the best method to have a task execute code at predefined intervals, as the delay time is measured from when the delay is requested. To delay cyclically, use <a class="el" href="#taskDelayUntil" title="Delays the current task until a specified time. ">taskDelayUntil()</a>.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">msToDelay</td><td>the number of milliseconds to wait, with 1000 milliseconds per second </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="taskDelayUntil"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void taskDelayUntil </td>
          <td>(</td>
          <td class="paramtype">unsigned long *&#160;</td>
          <td class="paramname"><em>previousWakeTime</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>cycleTime</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Delays the current task until a specified time. </p>
<p>The task will be unblocked at the time *previousWakeTime + cycleTime, and *previousWakeTime will be changed to reflect the time at which the task will unblock.</p>
<p>If the target time is in the past, no delay occurs, but a reschedule is forced, as if <a class="el" href="#ac89618d0782547d189fe412a9917639b" title="Delays the current task for a given number of milliseconds. ">taskDelay()</a> was called with an argument of zero. If the sum of cycleTime and *previousWakeTime overflows or underflows, undefined behavior occurs.</p>
<p>This function should be used by cyclical tasks to ensure a constant execution frequency. While <a class="el" href="#ac89618d0782547d189fe412a9917639b" title="Delays the current task for a given number of milliseconds. ">taskDelay()</a> specifies a wake time relative to the time at which the function is called, <a class="el" href="#taskDelayUntil" title="Delays the current task until a specified time. ">taskDelayUntil()</a> specifies the absolute future time at which it wishes to unblock. Calling taskDelayUntil with the same cycleTime parameter value in a loop, with previousWakeTime referring to a local variable initialized to <a class="el" href="#a6ff7f2532a22366f0013bc41397129fd" title="Returns the number of milliseconds since Cortex power-up. ">millis()</a>, will cause the loop to execute with a fixed period.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">previousWakeTime</td><td>a pointer to the location storing the last unblock time, obtained by using the "&amp;" operator on a variable (e.g. "taskDelayUntil(&amp;now, 50);") </td></tr>
    <tr><td class="paramname">cycleTime</td><td>the number of milliseconds to wait, with 1000 milliseconds per second </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="add3b8d580ea6ef5635c6d9ff88c68612"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void taskDelete </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a>&#160;</td>
          <td class="paramname"><em>taskToDelete</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Kills and removes the specified task from the kernel task list. </p>
<p>Deleting the last task will end the program, possibly leading to undesirable states as some outputs may remain in their last set configuration.</p>
<p>NOTE: The idle task is responsible for freeing the kernel allocated memory from tasks that have been deleted. It is therefore important that the idle task is not starved of processing time. Memory allocated by the task code is not automatically freed, and should be freed before the task is deleted.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">taskToDelete</td><td>the task to kill; passing NULL kills the current task </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a436fb5636d9a200ecebbb95968de91f6"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned int taskGetCount </td>
          <td>(</td>
          <td class="paramname"></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Determines the number of tasks that are currently being managed. </p>
<p>This includes all ready, blocked and suspended tasks. A task that has been deleted but not yet freed by the idle task will also be included in the count. Tasks recently created may take one context switch to be counted.</p>
<dl class="section return"><dt>Returns</dt><dd>the number of tasks that are currently running, waiting, or suspended </dd></dl>

</div>
</div>
<a class="anchor" id="a4f805fd479cb4c427e8f4edfa7d55143"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned int taskGetState </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a>&#160;</td>
          <td class="paramname"><em>task</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Retrieves the state of the specified task. </p>
<p>Note that the state of tasks which have died may be re-used for future tasks, causing the value returned by this function to reflect a different task than possibly intended in this case.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">task</td><td>Handle to the task to query. Passing NULL will query the current task status (which will, by definition, be TASK_RUNNING if this call returns)</td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>A value reflecting the task's status, one of the constants TASK_DEAD, TASK_RUNNING, TASK_RUNNABLE, TASK_SLEEPING, or TASK_SUSPENDED </dd></dl>

</div>
</div>
<a class="anchor" id="ae62d015b8280e4c74ad9ee15c7ac790b"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">unsigned int taskPriorityGet </td>
          <td>(</td>
          <td class="paramtype">const <a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a>&#160;</td>
          <td class="paramname"><em>task</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Obtains the priority of the specified task. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">task</td><td>the task to check; passing NULL checks the current task </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the priority of that task from 0 to TASK_MAX_PRIORITIES </dd></dl>

</div>
</div>
<a class="anchor" id="a91d8f7074c6cb12dfe163df17bdf5540"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void taskPrioritySet </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a>&#160;</td>
          <td class="paramname"><em>task</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const unsigned int&#160;</td>
          <td class="paramname"><em>newPriority</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Sets the priority of the specified task. </p>
<p>A context switch may occur before the function returns if the priority being set is higher than the currently executing task and the task being mutated is available to be scheduled.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">task</td><td>the task to change; passing NULL changes the current task </td></tr>
    <tr><td class="paramname">newPriority</td><td>a value between TASK_PRIORITY_LOWEST and TASK_PRIORITY_HIGHEST inclusive indicating the new task priority </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="afa2a4c5236b32bd9983bf19a4ac0cc23"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void taskResume </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a>&#160;</td>
          <td class="paramname"><em>taskToResume</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Resumes the specified task. </p>
<p>A task that has been suspended by one or more calls to <a class="el" href="#ab56a51f337ad1903ad2bbce095744170" title="Suspends the specified task. ">taskSuspend()</a> will be made available for scheduling again by a call to <a class="el" href="#afa2a4c5236b32bd9983bf19a4ac0cc23" title="Resumes the specified task. ">taskResume()</a>. If the task was not suspended at the time of the call to <a class="el" href="#afa2a4c5236b32bd9983bf19a4ac0cc23" title="Resumes the specified task. ">taskResume()</a>, undefined behavior occurs.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">taskToResume</td><td>the task to change; passing NULL is not allowed as the current task cannot be suspended (it is obviously running if this function is called) </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="ab05a241d6d1fd98b1ceb4665db678156"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a> taskRunLoop </td>
          <td>(</td>
          <td class="paramtype">void(*)(void)&#160;</td>
          <td class="paramname"><em>fn</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>increment</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Starts a task which will periodically call the specified function. </p>
<p>Intended for use as a quick-start skeleton for cyclic tasks with higher priority than the "main" tasks. The created task will have priority TASK_PRIORITY_DEFAULT + 1 with the default stack size. To customize behavior, create a task manually with the specified function.</p>
<p>This task will automatically terminate after one further function invocation when the robot is disabled or when the robot mode is switched.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">fn</td><td>the function to call in this loop </td></tr>
    <tr><td class="paramname">increment</td><td>the delay between successive calls in milliseconds; the <a class="el" href="#taskDelayUntil" title="Delays the current task until a specified time. ">taskDelayUntil()</a> function is used for accurate cycle timing </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>a handle to the task, or NULL if an error occurred </dd></dl>

</div>
</div>
<a class="anchor" id="ab56a51f337ad1903ad2bbce095744170"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void taskSuspend </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a23dca3c0de10682afb982677ff292f77">TaskHandle</a>&#160;</td>
          <td class="paramname"><em>taskToSuspend</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Suspends the specified task. </p>
<p>When suspended a task will not be scheduled, regardless of whether it might be otherwise available to run.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">taskToSuspend</td><td>the task to suspend; passing NULL suspends the current task </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a435d7fc1c3c3da80ed64cf9dfed0bd42"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">int ultrasonicGet </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a527ee5b64142c3505d6931d8ed7ac6b7">Ultrasonic</a>&#160;</td>
          <td class="paramname"><em>ult</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Gets the current ultrasonic sensor value in centimeters. </p>
<p>If no object was found, zero is returned. If the ultrasonic sensor was never started, the return value is undefined. Round and fluffy objects can cause inaccurate values to be returned.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">ult</td><td>the Ultrasonic object from <a class="el" href="#aed267558847e901e3741bd031c4fc83d" title="Initializes an ultrasonic sensor on the specified digital ports. ">ultrasonicInit()</a> to read </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>the distance to the nearest object in centimeters </dd></dl>

</div>
</div>
<a class="anchor" id="aed267558847e901e3741bd031c4fc83d"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname"><a class="el" href="#a527ee5b64142c3505d6931d8ed7ac6b7">Ultrasonic</a> ultrasonicInit </td>
          <td>(</td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>portEcho</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned char&#160;</td>
          <td class="paramname"><em>portPing</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Initializes an ultrasonic sensor on the specified digital ports. </p>
<p>The ultrasonic sensor will be polled in the background in concert with the other sensors registered using this method. NULL will be returned if either port is invalid or the ultrasonic sensor port is already in use.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">portEcho</td><td>the port connected to the orange cable from 1-9,11-12 </td></tr>
    <tr><td class="paramname">portPing</td><td>the port connected to the yellow cable from 1-12 </td></tr>
  </table>
  </dd>
</dl>
<dl class="section return"><dt>Returns</dt><dd>an Ultrasonic object to be stored and used for later calls to ultrasonic functions </dd></dl>

</div>
</div>
<a class="anchor" id="a355f91a286a081b95104b09898b467ed"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void ultrasonicShutdown </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#a527ee5b64142c3505d6931d8ed7ac6b7">Ultrasonic</a>&#160;</td>
          <td class="paramname"><em>ult</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Stops and disables the ultrasonic sensor. </p>
<p>The last distance it had before stopping will be retained. One more ping operation may occur before the sensor is fully disabled.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">ult</td><td>the Ultrasonic object from <a class="el" href="#aed267558847e901e3741bd031c4fc83d" title="Initializes an ultrasonic sensor on the specified digital ports. ">ultrasonicInit()</a> to stop </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="acce6911cfbfe971d368444eecd918301"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void usartInit </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>usart</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><em>baud</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">unsigned int&#160;</td>
          <td class="paramname"><em>flags</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Initialize the specified serial interface with the given connection parameters. </p>
<p>I/O to the port is accomplished using the "standard" I/O functions such as <a class="el" href="#aa25c5dc5bac3e7d45635ec1369783c61" title="Behaves the same as the &quot;fprint&quot; function, and appends a trailing newline (&quot;\n&quot;). ...">fputs()</a>, <a class="el" href="#a4ec55b78eca2e4c07a44d5bc95273d4b" title="Prints the formatted string to the specified output stream. ">fprintf()</a>, and <a class="el" href="#aab90aff9d7f1b7239b80cae2bf5c7ea8" title="Writes one character to the specified stream. ">fputc()</a>.</p>
<p>Re-initializing an open port may cause loss of data in the buffers. This routine may be safely called from <a class="el" href="a00004.htm#ad9cda921edb01125bb13c2f86bcf624b" title="Runs pre-initialization code. ">initializeIO()</a> or when the scheduler is paused. If I/O is attempted on a serial port which has never been opened, the behavior will be the same as if the port had been disabled.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">usart</td><td>the port to open, either "uart1" or "uart2" </td></tr>
    <tr><td class="paramname">baud</td><td>the baud rate to use from 2400 to 1000000 baud </td></tr>
    <tr><td class="paramname">flags</td><td>a bit mask combination of the SERIAL_* flags specifying parity, stop, and data bits </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a599d7ea04f8d9fb0e37b75423a80a54f"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void usartShutdown </td>
          <td>(</td>
          <td class="paramtype"><a class="el" href="#ac15bbd02a147d1595cdfb8b2979693d7">FILE</a> *&#160;</td>
          <td class="paramname"><em>usart</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Disables the specified USART interface. </p>
<p>Any data in the transmit and receive buffers will be lost. Attempts to read from the port when it is disabled will deadlock, and attempts to write to it may deadlock depending on the state of the buffer.</p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">usart</td><td>the port to close, either "uart1" or "uart2" </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="add8964052eef78ca864990642888a7d7"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void wait </td>
          <td>(</td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>time</em></td><td>)</td>
          <td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Alias of <a class="el" href="#ac89618d0782547d189fe412a9917639b" title="Delays the current task for a given number of milliseconds. ">taskDelay()</a> intended to help EasyC users. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">time</td><td>the duration of the delay in milliseconds (1 000 milliseconds per second) </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
<a class="anchor" id="a591705c8bd27fce32490b0bd4fb7ecd9"></a>
<div class="memitem">
<div class="memproto">
      <table class="memname">
        <tr>
          <td class="memname">void waitUntil </td>
          <td>(</td>
          <td class="paramtype">unsigned long *&#160;</td>
          <td class="paramname"><em>previousWakeTime</em>, </td>
        </tr>
        <tr>
          <td class="paramkey"></td>
          <td></td>
          <td class="paramtype">const unsigned long&#160;</td>
          <td class="paramname"><em>time</em>&#160;</td>
        </tr>
        <tr>
          <td></td>
          <td>)</td>
          <td></td><td></td>
        </tr>
      </table>
</div><div class="memdoc">

<p>Alias of <a class="el" href="#taskDelayUntil" title="Delays the current task until a specified time. ">taskDelayUntil()</a> intended to help EasyC users. </p>
<dl class="params"><dt>Parameters</dt><dd>
  <table class="params">
    <tr><td class="paramname">previousWakeTime</td><td>a pointer to the last wakeup time </td></tr>
    <tr><td class="paramname">time</td><td>the duration of the delay in milliseconds (1 000 milliseconds per second) </td></tr>
  </table>
  </dd>
</dl>

</div>
</div>
