JSversion = 243;
var kontainers_xy = [];
kontainers_xy[1] = new Array(0, 0);
kontainers_xy[3] = new Array(549, 0);
kontainers_xy[4] = new Array(725, 4);
kontainers_xy[5] = new Array(725, 260);
kontainers_xy[6] = new Array(442, 93);
var nadpis_xy = new Array(214, 10);
var elifebg_xy = new Array(144, 69);
var etime_xy = new Array(210, 514);
var misialabel = [218, 103];
var autopil_xy = [873, -36];
var MAX_PRELEV_DPS = 5;
var MAX_PRELEV_DPC = 5;
var speedTestA = new Array();
var speedTestT = 0;

function EachSecSpeedTest(_c) {
	var speedTestT2 = new Date()
		.getTime();
	if (!speedTestA[_c]) speedTestA[_c] = 0;
	speedTestA[_c] += speedTestT2 - speedTestT;
	speedTestT = speedTestT2;
}
var jeKolekcia = 0;
var suHelpers = 0;
var $lastPatch = 0;
var MAX_ACH_LEVEL = 11;
var zindexMisie = 0;
var presielTutorial = true;
var fungujePomoc = true;
var buffHodinyOLD = buffHodiny = buffHodinyPauza = 0;
var PHPtimeSAVE = PHPtime = PHPtime2 = PHPtime3 = 0;
var milisecondTimeActual = milisecondTimeLast = milisecondsElapsedOneIter = milisecondsElapsed1Sec = milisecondsElapsedTotal = 0;
var beziEachSec = false;
var buffsBonuses = new Array();
var aktivnychPU = 0;
var isGamePaused = false;
var rozdielPHPjstime = 0;
var medziSaveSec = medziSaveSecBase = 5;
var offlineTimeLimit = 60 * 45;
var offlineTimer = 0;
var akoCastoFtextES = 0;
var testSekund = 0;
ma_arenu = true;
var disabledGame = false;
var enemyZije2 = false;
var budeSaveTeraz = false;
var startedGame = true;
var dostanBalik = new Array();
var eachSecIndx = 1;
var pocetEachSec = 0;
var anyActivity = 0;

function F04p(_indx) {
	pocetEachSec++;
	if (_indx < eachSecIndx) return false;
	checkujFlowHry++;
	if (ignorujTutDieruKlik > 0) ignorujTutDieruKlik--;
	if (offlineTimer >= offlineTimeLimit) return false;
	if (!startedGame) return false;
	if (disabledGame) return false;
	if (blikaZivot) {
		KritickyZivotBlik();
	}
	mozemDalsiQuest = true;
	klikamHACK2++;
	if (klikamHACK >= 0 && !jeautoclicker && klikamHACK2 % 3 == 0) {
		if (klikamHACK == 0) queueUtok = 1;
		if (klikamHACK == 1) queueGold = 1;
		if (klikamHACK == 2) queueHeal = 1;
		if (klikamHACK == 3) queueAmmo = 1;
	}
	if (jeAutoPilot && jeautoclicker && F055()) {
		var zivotMaxx = F05u();
		var novaAPakcia = 0;
		if (APset[0] != 11) {
			if (hrac[17] < KratPercentoJS2(zivotMaxx, APset[0] * 10)) {
				novaAPakcia = 1;
				terazLenLiecimAP = 1;
				if (queueHeal == 0) ZapniAutoClickerNa(2);
			}
		}
		if (terazLenLiecimAP) {
			if (hrac[17] < KratPercentoJS2(zivotMaxx, APset[5] * 10)) {
				if (queueHeal == 0) ZapniAutoClickerNa(2);
				novaAPakcia = 1;
			} else
				terazLenLiecimAP = 0;
		}
		if (!novaAPakcia && APset[1] != 11) {
			if (hrac[10] < KratPercentoJS2(hrac[26], APset[1] * 10)) {
				novaAPakcia = 1;
				terazLenAmmoAP = 1;
				if (queueAmmo == 0) ZapniAutoClickerNa(3);
			}
		}
		if (terazLenAmmoAP) {
			if (hrac[10] < hrac[26]) {
				if (queueAmmo == 0) ZapniAutoClickerNa(3);
				novaAPakcia = 1;
			} else
				terazLenAmmoAP = 0;
		}
		if (!novaAPakcia && APset[2] != 101) {
			if (sekundZaKolo < APset[2] * 3) {
				novaAPakcia = 1;
				if (queueGold == 0) ZapniAutoClickerNa(1);
			}
		}
		if (!novaAPakcia)
			if (queueUtok == 0) ZapniAutoClickerNa(0);
	}
	if (F049() > 0) enemyZije2 = true;
	if (samoVzatieRewards > 0 && !isGamePaused) {
		samoVzatieRewards2++;
		if (samoVzatieRewards2 % 20 == 0 || enemyZije2 || !jeLoged) {
			samoVzatieRewards--;
			if (samoVzatieRewards == 6) saveTick = 5;
		}
		if (samoVzatieRewards < 6 || jeAutoPilot)
			for (var i in odmenyPrevziat)
				if (odmenyPrevziat[i] && odmenyPrevziat[i][3] == lastRewTabid) {
					F02n(odmenyPrevziat[i][0], lastRewTabid);
				}
	}
	if (!F055())
		if (!F098('choselevel_exists'))
			if (!F098('new_shop_div'))
				if (rewardPoradie3 >= rewardPoradie2) {
					F08c('vyber_levelDiv');
					F07g('enemy_stats');
					F07g('enemy_div');
				}
	if (beziEachSec) return false;
	beziEachSec = true;
	if (focused)
		if (doSounds)
			if (!somTESTER)
				if (firstSoundLoaded <= $maxZvukov) {
					soundIDdef = 0;
					audioSounds[soundIDdef][firstSoundLoaded] = new Audio("sounds_" + SVET_SUFIX + "/" + zvukyIds[soundIDdef] + ".wav");
					soundIDdef = 1;
					audioSounds[soundIDdef][firstSoundLoaded] = new Audio("sounds_" + SVET_SUFIX + "/" + zvukyIds[soundIDdef] + ".wav");
					soundIDdef = 3;
					audioSounds[soundIDdef][firstSoundLoaded] = new Audio("sounds_" + SVET_SUFIX + "/" + zvukyIds[soundIDdef] + ".wav");
					soundIDdef = 4;
					audioSounds[soundIDdef][firstSoundLoaded] = new Audio("sounds_" + SVET_SUFIX + "/" + zvukyIds[soundIDdef] + ".wav");
					soundIDdef = 5;
					audioSounds[soundIDdef][firstSoundLoaded] = new Audio("sounds_" + SVET_SUFIX + "/" + zvukyIds[soundIDdef] + ".wav");
					soundIDdef = 6;
					audioSounds[soundIDdef][firstSoundLoaded] = new Audio("sounds_" + SVET_SUFIX + "/" + zvukyIds[soundIDdef] + ".wav");
					firstSoundLoaded++;
				}
	if (kupVecQueue.length > 0) {
		var _zbran_kup = kupVecQueue.shift();
		KupVec2(_zbran_kup[0], _zbran_kup[1]);
	}
	if (randomBonusKlikQueue.length > 0) {
		if (!focused) {
			for (var ci = 0; ci < 12; ci++)
				if (randomBonusKlikQueue.length > 0) {
					var _rbi = randomBonusKlikQueue.shift();
					RandomBonusClick2(_rbi);
				}
		} else {
			var _rbi = randomBonusKlikQueue.shift();
			RandomBonusClick2(_rbi);
		}
	}
	var JS_currentTime = new Date();
	milisecondTimeActual = JS_currentTime.getTime();
	PHPtime3 = F09f(rozdielPHPjstime + milisecondTimeActual * 0.001);
	if (isGamePaused) {
		BudeSaveFun();
		beziEachSec = false;
		VypisFuel();
		setTimeout('F04p(' + _indx + ');', 50);
		return false;
	}
	buffHodiny = F09f((milisecondTimeActual - buffHodinyPauza) * 0.001);
	if (milisecondTimeLast == 0) milisecondTimeLast = milisecondTimeActual;
	milisecondsElapsedOneIter = milisecondTimeActual - milisecondTimeLast;
	milisecondTimeLast = milisecondTimeActual;
	milisecondsElapsed1Sec += milisecondsElapsedOneIter;
	milisecondsElapsedTotal += milisecondsElapsedOneIter;
	PHPtime2 = PHPtime + F09i(rozdielPHPjstime + milisecondsElapsedTotal * 0.001);
	if (adjustable_height > 0) adjustable_height -= 2;
	bolUtokPic = false;
	if (enemyZije2) hramMisiuPG = 1;
	if (!focused) {
		for (var ci = 0; ci < 12; ci++) {
			ClickingChecker();
		}
	} else {
		ClickingChecker();
	}
	if (enemyZije2) {
		if (useConsumQueue.length > 0) {
			var _useConsum = useConsumQueue.shift();
			UseConsum2(_useConsum);
		} else if (sekundZaKolo > 1)
			if (BombsAfterFirstSecond > 0)
				if (F049() > 0) {
					BombsAfterFirstSecond--;
					UseConsum2(1);
				}
		if (usePUQueue.length > 0) {
			var _usePU = usePUQueue.shift();
			UsePowerUp2(_usePU);
		}
		eclientx = 0;
	}
	if (milisecondsElapsed1Sec < 1000) {
		beziEachSec = false;
		setTimeout('F04p(' + _indx + ');', 50);
		return false;
	}
	secOdLastSave++;
	if (jeLoged && focused) {
		F068('lastSavePod', LOC_SINCE_LAST_SAVE + '<b>' + secOdLastSave + '</b>s');
		VypisGoldSinceLast();
	}
	bolUtokPic = false;
	var _kolkoSecPreslo1 = F09i(milisecondsElapsed1Sec * 0.001);
	milisecondsElapsed1Sec -= _kolkoSecPreslo1 * 1000;
	if (_kolkoSecPreslo1 > 1) F02t(37, _kolkoSecPreslo1);
	if (_kolkoSecPreslo1 > 600 && jeLoged && !disabledTestSave) {
		offlineTimer = offlineTimeLimit;
		TookANap();
		beziEachSec = false;
		return false;
	}
	var _kolkoSecPreslo2 = Math.min(_kolkoSecPreslo1, 3);
	var _utok_info_bolo = false;
	for (var i_es = 0; i_es < _kolkoSecPreslo2; i_es++) {
		testSekund++;
		dlzkaJSsesion++;
		klikovZaSec = 0;
		buffHodinyOLD = buffHodiny;
		if (enemyZije2 > 0 && !zabilManual) {
			avrgdmg_s++;
			sekundZaKolo = sekundZaKolo * 1 + 1;
			sekundZaKoloAttack += 1;
			if (fungujePomoc) {
				if (PocetPrejdeni(F055()) > 0) var _dmgpersec = KratPercentoJS(F0w(), itemBonusOverview[36]);
				else var _dmgpersec = F0w();
				if (pomocBonusySpolu[0] > 0) {
					_dmgpersec = KratPercentoJS(_dmgpersec, pomocBonusySpolu[0]);
				} else if (pomocBonusySpolu[0] < 100) {
					_dmgpersec = KratPercentoJS(_dmgpersec, pomocBonusySpolu[0]);
				}
				if (_dmgpersec < 0) _dmgpersec = 0;
				skutocneHodnoty[0] = _dmgpersec;
				F0h(_dmgpersec, 0, 3);
				skutocneHodnoty[1] = KratPercentoJS(F012(), pomocBonusySpolu[1]);
				if (skutocneHodnoty[1] < 0) skutocneHodnoty[1] = 0;
				F038(skutocneHodnoty[1]);
				skutocneHodnoty[2] = KratPercentoJS(F01o(), pomocBonusySpolu[2]);
				if (skutocneHodnoty[2] < 0) skutocneHodnoty[2] = 0;
				F03c(skutocneHodnoty[2]);
				skutocneHodnoty[3] = KratPercentoJS(F0v(), pomocBonusySpolu[3]);
				if (skutocneHodnoty[3] < 0) skutocneHodnoty[3] = 0;
				F01x(skutocneHodnoty[3]);
			}
			if (bestPresielLevel > 1) BuffsOverview(1); {
				var _akoCastoUtok = 6;
				if (sekundZaKolo > $casZoslabeniaEnemy) _akoCastoUtok = 12;
				if (!jeLoged) _akoCastoUtok = 2;
				var _timeCheck = sekundZaKolo - itemBonusOverview[123];
				if (_timeCheck > 0)
					if (_timeCheck % _akoCastoUtok == 0) {
						F04n();
						F02t(87, hrac[17]);
						if (!_utok_info_bolo) {
							F04y();
						}
						_utok_info_bolo = true;
					}
			}
			if (sekundZaKolo < $casZoslabeniaEnemy)
				if (sekundZaKolo % 5 == 0) EnemyHealingJS();
			if (somTESTER || JE_TESTER) F02t(87, hrac[17]);
			if (somTESTER || JE_TESTER) F02t(32, F012());
			if (somTESTER || JE_TESTER) F02t(30, hrac[H_ZLATO]);
			if (somTESTER || JE_TESTER) F02t(85, F049());
			if (somTESTER || JE_TESTER) F02t(56, hrac[82]);
			F02t(36, hrac[15]);
			if (testujem_XP || JE_TESTER) F02t(65, robimQuest[1]);
			if (sekundZaKolo % 5 == 0) {
				F02t(89, hrac[63]);
				F02t(85, F049());
			}
			if (sekundZaKolo % 10 == 0) {
				F02t(30, hrac[H_ZLATO]);
				F02t(32, F012());
				F02t(53, hrac[10]);
			}
		}
		if (bestPresielLevel > 1) {
			SetPomocValues();
			SetKBlokValues();
		}
		if (!prehralSom) F01d();
		if (enemyZije2) {
			medziSaveSec--;
			if (medziSaveSec <= 0) {
				medziSaveSec = medziSaveSecBase;
			}
		}
		if (enemyZije2 && sekundZaKolo >= maxMisiaCas && jeLoged) {
			F02t(29);
			GameOver(2);
		}
		StrongerCheck(); {
			F08n(0);
			F08n(1);
			F08n(2);
			F08n(3);
			F08n(4);
			F08n(5);
			F08n(6);
			F08n(7);
			F08n(8);
			F08n(9);
			F08n(10);
			F08n(11);
			F08n(12);
			F08n(13);
			F08n(15);
			F08n(16);
			if (VisibleValorPoints(1)) F08n(17);
			F08n(18);
			F08n(19);
			F08n(20);
			F08n(21);
			F08n(22);
			F08n(23);
			F08n(24);
			F08n(25);
		}
		if (jeLoged) offlineTimer++;
		if (offlineTimer == offlineTimeLimit) TookANap();
		if (sekundZaKolo >= maxMisiaCas && jeLoged) {
			break;
		}
		if (jeautoclicker && manualKlik > 3) F08c('autocclickernote');
		manualKlik = 0;
		if (jeSvetJS == 1)
			if (PredchadzajuciLevel > 100)
				if (!F055()) {
					skrinaKoef++;
					if (skrinaKoef == 300 && !skrinaLenRaz && F07z(0, 100) < 15) {
						skrinaLenRaz = 1;
						if (F07z(0, 100) <= 30 && VisibleChests()) OpenChestMenu();
						else if (F07z(0, 100) <= 50 && PredchadzajuciLevel > 200)
							ZobrazVlastnychPomocnikov();
						else ZobrazSkrinu();
					}
				}
	}
	if (PredchadzajuciLevel < 150 && anyActivity == 0) {
		anyActivity = 1;
		saveGameIn = 300;
	}
	if (saveGameIn >= 0 && anyActivity > 0) {
		if (F049() > 0 && F055() && saveGameIn > 1) saveGameIn -= 1;
		else if (PHPtime2 % 5 == 0 && saveGameIn >= 1) saveGameIn -= 1;
		if (saveGameIn <= 0 && (!F055() || hrac[63] == 0 || sekundZaKolo >= 120)) {
			saveGameIn = -1;
			saveGameAvailable = 1;
			F06o(0, 2, 1, 1);
		}
	}
	if (saveGameAvaiIn >= 0) {
		if (F049() > 0 && F055()) saveGameAvaiIn -= 1;
		else if (PHPtime2 % 3 == 0) saveGameAvaiIn -= 1;
		if (saveGameAvaiIn <= 0) {
			saveGameAvaiIn = -1;
			saveGameAvailable = 1;
			F044();
		}
	}
	if (!balikIsVisible)
		if (dostanBalik.length > 0)
			if (dlzkaJSsesion > 0 && dlzkaJSsesion % 4 == 0) {
				F02i(1);
				ZobrazBalik(dostanBalik.pop());
			}
	VypisGameTime();
	VypisQuest();
	VypisFuel();
	beziEachSec = false;
	mozemDalsiQuest = true;
	if (deselectuj)
		if (!$jeLoginVisible)
			if (!F098('clanreflink') && !F098('referedlintext') && !F098('APs_10')) DeselectAll();
	BudeSaveFun();
	if (PredchadzajuciLevel < 35)
		if (PredchadzajuciLevel >= 30 && sekundZaKolo >= 1 && aktivnychPU <= 0 && F055() && hrac[10] >= 800) {
			if (PUtutorialDelay > 6) {
				PUtutorialDelay = 0;
				tut_krok = 50;
				ShowJSxy('tutorial_diera', 590, 160);
				SetZIndex('tutorial_diera', 1001);
				F068('tutorialText', LOC_TUTORIAL[50]);
			} else {
				PUtutorialDelay++;
			}
		}
	setTimeout('F04p(' + _indx + ');', (focused ? 50 : 650));
	if (sekundZaKolo == 15) {
		Vypis_kontainer_pomocnicky();
		Vypis_kontainer_kliker();
	}
	if (sekundZaKolo == 30) {
		Vypis_kontainer_pomocnicky();
		Vypis_kontainer_kliker();
	}
}
var skrinaKoef = 0;
var skrinaLenRaz = 0;
PUtutorialDelay = 3;

function Testuj(_text) {
	if (IN_TEST) F068('testujDiv', _text);
}

function TookANap() {
	CloseShop();
	F07e((jeSvetJS == 1 ? '<img class="wb" src="' + PicPrefix() + 'ui2/popupgirl1.jpg"><br>' : '') + '<img src="' + PicPrefix() + 'ui2/ok.png">' + LOC_ENDTIME +
		'<br><br>' + F09d('refresh', 'F06l(THIS_PAGE)'), LOC_ENDTIME_L, 'endPopup', 500, '', '', 1, 0.90);
	F07g('vyber_levelDiv');
	F07g('rightBottom');
}
zobrazilLastXSec = false;

function VypisGameTime() {
	if (!focused)
		return false;
	var _casdokonca = maxMisiaCas - sekundZaKolo;
	F068('gametimediv', (_casdokonca < 60 ? F09k('warning2', '! ' + F099(_casdokonca)) : F099(_casdokonca)) + (klikovZaKolo > 0 ? '&nbsp' + F09k('mini7 tW', '(' +
		klikovZaKolo + ')') : ''));
	F068('speedRewardDiv', (sekundZaKolo < SekundNaDoubleRew() ? PicAt('speedRewardPic', 'ui2/speedreward.png', 0, 0) : ''));
	if (sekundZaKolo >= 120) F068('enemyhealinginfo', '---');
	if (jeLoged && _casdokonca <= 10 && !zobrazilLastXSec && F055()) {
		BublinaHore(F09k('warning2', '<br>' + LOC_LASTXSEC), etime_xy[0] + 30, etime_xy[1] + 15);
		zobrazilLastXSec = true;
	}
}
zarobeneZaMisXP = 0;
zarobeneZaMisG = 0;
zarobeneZaMisP = 0;
hramMisiuPG = false;
avrgdmg_s = avrgdmg_d = 0;

function VypisGoldSinceLast() {
	if (!jeLoged || !focused) return false;
	var _out = '';
	if (JePlatina() && zarobeneZaMisP > 0) _out += LOC_LAST_P + ': ' + PCisloJS2(zarobeneZaMisP);
	if (zarobeneZaMisG > 0)
		_out += SPC + LOC_LAST_G + ': ' + PCisloJS2(zarobeneZaMisG);
	if (zarobeneZaMisXP > 0)
		_out += SPC + 'XP: ' + PCisloJS2(zarobeneZaMisXP);
	if (avrgdmg_s > 0)
		_out += SPC + LOC_AD2 + ': ' + PCisloJS2(F09f(avrgdmg_d / avrgdmg_s));
	else if (avrgdmg_d > 0)
		_out += SPC + LOC_AD2 + ': ' + PCisloJS2(avrgdmg_d);
	if (!F055())
		_out = '<span style="color:' + gpoverviewColor + ';font-size:14px;">' + _out + '</span>';
	F068('lastGoldPod', _out);
}
gpoverviewColor = '#8EFF8E';
deselectuj = false;
var balikIsVisible = false;
var balikCoBeriem = new Array();
var zobrateBalikyIDS = new Array();

function ZobrazBalik(__balik) {
	try {
		__balik = __balik.split(';');
		for (var i in zobrateBalikyIDS)
			if (zobrateBalikyIDS[i] == __balik[0]) {
				return false;
			}
		balikIsVisible = true;
		zobrateBalikyIDS.push(__balik[0]);
		balikCoBeriem = __balik;
		var _out = '';
		_out += '<table class="tabulka3 specialoffer" cellspacing="10" style="text-align:center;"><tr>';
		var BalikSirka = 0;
		if (__balik[6] > 0) {
			_out += '<td width="130"><img src="' + PicPrefix() + 'ui2/reward_icon_skull.png"><br>+' + PCisloJS2(__balik[6], '') + '</td>';
			BalikSirka++;
		}
		if (__balik[7] > 0) {
			_out += '<td width="130"><img src="' + PicPrefix() + 'ui2/reward_icon_fuel.png"><br>+' + PCisloJS2(__balik[7], '') + '</td>';
			BalikSirka++;
		}
		if (__balik[8] > 0) {
			_out += '<td width="130"><img src="' + PicPrefix() + 'ui2/reward_icon_clicker.png"><br>+' + PCisloJS2(__balik[8], '') + '</td>';
			BalikSirka++;
		}
		if (__balik[9] > 0) {
			_out += '<td width="130"><img src="' + PicPrefix() + 'ui2/reward_icon_gold.png"><br>+' + PCisloJS2(__balik[9], '') + '</td>';
			BalikSirka++;
		}
		if (__balik[10] > 0) {
			_out += '<td width="130"><img src="' + PicPrefix() + 'ui2/reward_icon_dmg.png"><br>+' + PCisloJS2(__balik[10], '') + ' ' + F09k('mini3'
				, LOC_UI_DAMAGE_persec) + '</td>';
			BalikSirka++;
		}
		if (__balik[16] > 0) {
			_out += '<td width="130"><img src="' + PicPrefix() + 'ui2/reward_icon_key.png"><br>+' + PCisloJS2(__balik[16], '') + '</td>';
			BalikSirka++;
		}
		_out += '</tr></table>';
		if (__balik[5] > 0) {
			var _saleitem = itemyVShopeA[__balik[5]];
			_out += '<div id="saleitemdiv" style="border:1px #000 solid;"><img id="saleitemimg" src="' + PicPrefix() + 'veci/vec' + __balik[5] + '.png?v=' + (picversion +
				picversionVeci) + '"><div id="saleitemtext">' + (F05p(__balik[5]) <= 0 ? '<br>' + VypisBonusNEW(_saleitem, 1) + '' + LOC_ITEM_COUNT_MAX + ':' + F09k(
				'velke', _saleitem[1][2]) + 'x' : '<br><br><b>' + LOC_LIMITED_OFFER_unlock3 + '</b>') + '</div></div>';
		}
		if (__balik[15] > 0) {
			var _saleitem = itemyVShopeA[__balik[15]];
			_out += '<div id="saleitemdiv" style="border:1px #000 solid;"><img id="saleitemimg" src="' + PicPrefix() + 'veci/vec' + __balik[15] + '.png?v=' + (
				picversion + picversionVeci) + '"><div id="saleitemtext">' + (F05p(__balik[15]) <= 0 ? '<br>' + VypisBonusNEW(_saleitem, 1) + '' + LOC_ITEM_COUNT_MAX +
				':' + F09k('velke', _saleitem[1][2]) + 'x' : '<br><br><b>' + LOC_LIMITED_OFFER_unlock3 + '</b>') + '</div></div>';
		}
		if (__balik[17] > 0) {
			var _saleitem = itemyVShopeA[__balik[17]];
			_out += '<div id="saleitemdiv" style="border:1px #000 solid;"><img id="saleitemimg" src="' + PicPrefix() + 'veci/vec' + __balik[17] + '.png?v=' + (
				picversion + picversionVeci) + '"><div id="saleitemtext">' + (F05p(__balik[17]) <= 0 ? '<br>' + VypisBonusNEW(_saleitem, 1) + '' + LOC_ITEM_COUNT_MAX +
				':' + F09k('velke', _saleitem[1][2]) + 'x' : '<br><br><b>' + LOC_LIMITED_OFFER_unlock3 + '</b>') + '</div></div>';
		}
		if (__balik[18] > 0) {
			var _saleitem = itemyVShopeA[__balik[18]];
			_out += '<div id="saleitemdiv" style="border:1px #000 solid;"><img id="saleitemimg" src="' + PicPrefix() + 'veci/vec' + __balik[18] + '.png?v=' + (
				picversion + picversionVeci) + '"><div id="saleitemtext">' + (F05p(__balik[18]) <= 0 ? '<br>' + VypisBonusNEW(_saleitem, 1) + '' + LOC_ITEM_COUNT_MAX +
				':' + F09k('velke', _saleitem[1][2]) + 'x' : '<br><br><b>' + LOC_LIMITED_OFFER_unlock3 + '</b>') + '</div></div>';
		}
		_out += '<br>' + F09d(LOC_TAKE, 'VezmiBalik();');
		F07e(_out, LOC_Dakujeme2, 'infoPopupBalik', 600 + (BalikSirka > 4 ? 100 : 0), 1, '', 1, 0.55);
	} catch (e) {
		alert(e);
	}
}
kupilSale = F079('kupilsalu', 0);
kukolRazSale = F079('kukolRazSale', 0);

function VezmiBalik() {
	F061('salevrohudiv');
	kupilSale = 1;
	F067('kupilsalu', kupilSale, 3 * 86400);
	var __balik = balikCoBeriem;
	balikCoBeriem = new Array();
	F02t(43, __balik[0]);
	F02t(99, 0);
	if (__balik[6] > 0) hrac[9] += __balik[6] * 1;
	if (__balik[7] > 0) hrac[18] += __balik[7] * 1;
	if (__balik[8] > 0) hrac[65] += __balik[8] * 1;
	if (__balik[9] > 0) F038(__balik[9] * 1);
	if (__balik[10] > 0) hrac[67] += __balik[10] * 1;
	if (__balik[16] > 0) {
		hrac[106] += __balik[16] * 1;
		F068('hs_kluc', hrac[106]);
	}
	if (__balik[5] > 0)
		if (F05p(__balik[5] * 1) == 0) {
			hracVeciA[__balik[5] * 1] = 1;
			hrac[H_VECI] = hracVeciA.join(';');
			PridajJednorazBonusZveci(itemyVShopeA[__balik[5]][4]);
		}
	if (__balik[15] > 0)
		if (F05p(__balik[15] * 1) == 0) {
			hracVeciA[__balik[15] * 1] = 1;
			hrac[H_VECI] = hracVeciA.join(';');
			PridajJednorazBonusZveci(itemyVShopeA[__balik[15]][4]);
		}
	if (__balik[17] > 0)
		if (F05p(__balik[17] * 1) == 0) {
			hracVeciA[__balik[17] * 1] = 1;
			hrac[H_VECI] = hracVeciA.join(';');
			PridajJednorazBonusZveci(itemyVShopeA[__balik[17]][4]);
		}
	if (__balik[18] > 0)
		if (F05p(__balik[18] * 1) == 0) {
			hracVeciA[__balik[18] * 1] = 1;
			hrac[H_VECI] = hracVeciA.join(';');
			PridajJednorazBonusZveci(itemyVShopeA[__balik[18]][4]);
		}
	balikCoBeriem = new Array();
	balikIsVisible = false;
	F046();
	F061('infoPopupBalik');
	F07g('kacickadiv');
	F011();
}

function BudeSaveFun() {
	if (budeSaveTeraz) {
		F06o(0, 1, 0, 1);
		F044();
		budeSaveTeraz = false;
	}
}
var manualKlik = 0;
var queueUtok = 0;
var queueHeal = 0;
var queueGold = 0;
var queueAmmo = 0;
var useConsumQueue = [];
var usePUQueue = [];
var kupVecQueue = [];
var randomBonusKlikQueue = [];

function ClickingChecker() {
	if (queueHeal > 0 && enemyZije2) {
		AutoClickerPreUse();
		queueHeal--;
		KlikHeal2(jeautoclicker);
		PlayMultiSound(4);
	} else if (queueUtok > 0 && enemyZije2) {
		AutoClickerPreUse();
		queueUtok--;
		KlikUtok2(jeautoclicker);
		if (F070(12) > 0) PlayMultiSound(1);
		else PlayMultiSound(0);
	} else if (queueGold > 0) {
		AutoClickerPreUse();
		queueGold--;
		KlikZlato2(jeautoclicker);
		PlayMultiSound(3);
	} else if (queueAmmo > 0 && enemyZije2) {
		AutoClickerPreUse();
		queueAmmo--;
		KlikEnergia2(jeautoclicker);
		PlayMultiSound(5);
	}
	if (!jeautoclicker || hrac[65] <= 0) {
		if (queueHeal > 4) queueHeal = 1;
		if (queueUtok > 4) queueUtok = 1;
		if (queueGold > 4) queueGold = 1;
		if (queueAmmo > 4) queueAmmo = 1;
	}
	if (enemyZije2) VypisGameTime();
}

function ResetQueue(_except) {
	if (!_except) _except = 0;
	if (_except != 1) queueUtok = 0;
	if (_except != 2) queueGold = 0;
	if (_except != 3) queueHeal = 0;
	if (_except != 4) queueAmmo = 0;
}

function AutoClickerPreUse() {
	if (jeautoclicker && hrac[65] <= 0) {
		ToggleAutoClicker(0);
		jeautoclicker = 0;
	}
}

function AutoClickerUse(_action) {
	if (jeautoclicker && hrac[65] > 0) {
		var _kolko = 1;
		if (_action == 2) {
			if (itemBonusOverview[148] > 0) {
				_kolko = 2;
				if (_kolko > hrac[65]) _kolko = hrac[65];
			}
		}
		hrac[65] -= _kolko;
		hrac[66] += _kolko;
		if (hrac[65] == 0) {
			ToggleAutoClicker(0);
			jeautoclicker = 0;
		}
		if (focused) {
			F068('autoklikerValue', PCisloJS2(hrac[65]));
			F068('hs_autoclickery', PCisloJS2(hrac[65]));
		}
	}
}
var jazyk = 0;
var idHraca = 0;
var jeLoged = false;
var GAMESVETNAME = '';
var gameversion = 0;

function F01h(_params) {
	_params = _params.split(',,');
	PHPtimeSAVE = buffHodiny = PHPtime = 1 * _params[0];
	PHPtime3 = PHPtime2 = PHPtime;
	GAMESVETNAME = _params[1];
	idHraca = _params[2];
	jazyk = _params[3];
	gameversion = _params[4];
	if (idHraca > 0) {
		jeLoged = true;
	}
}

function F02c() {
	if ($jeLoginVisible && !jeLoged) F03(198 + ($jeLoginVisible2 ? 300 : 0), 1);
	else
		F03(90, 1);
}

function StartLandingPage() {
	if (!jeLoged && somvofcbJS) {
		if (bestPresielLevel < 1) {
			setTimeout('StartScreen();', 100);
		}
	} else
	if (!jeLoged && bestPresielLevel < 1) {
		if (!jeLogedCOOKIE && !somvofcbJS) {
			if ($zFCBindex == 100 || $zFCBindex == 0 || $forceScreen) {
				setTimeout('StartScreen();', 100);
			} else
				setTimeout('ObrazkovyTutorialStart();', 100);
		}
		if (somvofcbJS && bestPresielLevel < 1) {
			setTimeout('ObrazkovyTutorialStart();', 100);
		}
	} else if (jeLoged && PredchadzajuciLevel <= 1 && bestPresielLevel < 1) {
		setTimeout('ObrazkovyTutorialStart();', 100);
	}
}
testValue = 0;
var idHracaHlava = 0;
var dbgMSGjs = '';
var $energiaIcon_i = 0;
var boloPrveNacitanie = false;
var testujem_XP = false;

function F04r() {
	dbgMSGjs = '';
	try {
		jeautoclicker = (F079('jeautok' + idHracaHlava, 0) == 1 ? 1 : 0);
		var readdata1 = F079('puSave1_' + idHracaHlava, '');
		if (readdata1 == '') PUprog = [];
		else PUprog = F01z(readdata1, 'a');
		var readdata1 = F079('puSave2_' + idHracaHlava, '');
		if (readdata1 == '') spustiZnovaPU = [];
		else spustiZnovaPU = F01z(readdata1, 'a');
	} catch (e) {
		alert('error-onloadfun1-' + e);
	}
	try {
		F01h(intro_params);
		F043(set_hraca_params);
		SortItems();
		if (jeLoged) {
			loadStartEnemy = new Array(herne_levely[hrac[35]], hrac[30], hrac[82]);
		} else {
			F06d(set_enemy_params, 99999999999, 0);
		}
	} catch (e) {
		alert('error-onloadfun2-' + e);
	}
	try {
		var testBugVal = 0;
		DodatocneSkinSettings();
		testBugVal++;
		F04g();
		F02t(96);
		testBugVal++;
		var JS_currentTime = new Date();
		testBugVal++;
		var milisecondTime = JS_currentTime.getTime();
		testBugVal++;
		rozdielPHPjstime = PHPtime - milisecondTime * 0.001;
		testBugVal++;
		PHPtime2 = F09i(PHPtime + rozdielPHPjstime);
		testBugVal++;
		testBugVal++;
		RandomBonusClearAll();
		testBugVal++;
		PHPtimeSAVE = buffHodiny;
		testBugVal++;
		saveGameDate = ajaxOrderId = PHPtime;
		testBugVal++;
		testBugVal++;
		for (var i = 0; i < 3500; i++) uzKupilVec[i] = 0;
		testBugVal++;
		F039(1);
		BuffsOverview();
		F02t(30, hrac[H_ZLATO]);
		F02t(32, F012());
		F02t(36, hrac[15]);
		F02t(103, pocetItemov);
		if (somTESTER) F02t(85, F049());
	} catch (e) {
		alert(' error:detail1: ' + ErrorInVypisVsetko + '; errordetail2: ' + dbgMSGjs + '; error-onloadfun3.' + testBugVal + '-' + e);
	}
	try {
		if (jeLietajuceIkony) {
			if ($zFCBindex <= 200) F098('bodyId')
				.className = "bodyBGimage";
		} else {
			F098('bodyId')
				.className = "";
		}
		if (bestPresielLevel > 2 && bestPresielLevel < 6 && !jeLoged) RandomBonusCreate(2);
		StrongerCheck();
		VytvorFilterNewItems();
		VytvorFilterEventItems();
		boloPrveNacitanie = true;
		if (PredchadzajuciLevel > 5) activeShopFilter = 0;
		eachSecIndx++;
		setInterval('CheckujFlowHry();', 2000);
	} catch (e) {
		alert('error-onloadfun4-' + e);
	}
	try {
		if (!jeLoged)
			if (jeLogedCOOKIE) {
				hrac[61] = hrac[HRALEVEL];
				hrac[HRALEVEL] = 0;
				hrac[60] = enemy[ENEMY_ZIVOT];
				enemy[ENEMY_ZIVOT] = 0;
				F01i();
			}
		if (JeOffer(1)) {
			if ($budeZlavaA[0][3] > 0) {
				var _saleIcon = F08q('sale_icon', 270, 10, 1010, '<div class="saleText1 cierny_outline rott11">-' + F09i((($budeZlavaA[0][3] - $budeZlavaA[0][2]) /
						$budeZlavaA[0][3]) * 100) + '%</div><img src="' + PicPrefix() + 'offers/sale_' + F07z(1, 4) + '.png?v=' + picversion + '">', '', 106, 106
					, 'OfferClick(20);');
			} else
				var _saleIcon = '';
			F068('bonusOfferDiv', '<img ' + F02o(LOC_LIMITED_OFFER, 200, "offerimg1") + ' class="offerimg" src="' + PicPrefix() + 'offers/' + BonusOfferPic($budeZlavaA[
				0][13]) + '" onmousedown="OfferClick(21);">' + _saleIcon + (jeLimitedOffer ?
				'<div onmousedown="OfferClick(21);" class="limitedofferpic"><br>LIMITED<br>OFFER</div>' : ''));
			ZobrazSaleVrohu();
		} else {
			if (JeChestaSpecial()) {
				F068('bonusOfferDiv', '<img class="vobj wbh" style="left:-12px;top:53px;" onclick="OpenChestMenu();" src="' + PicPrefix() + 'ui2/chest_banner_' +
					JeChestaSpecial() + '.jpg?v3=' + picversion + '" ' + F02o(LOC_CHEST_LABEL) + '>');
			} else {
				F07g('bonusOfferDiv');
				F07g('salevrohudiv');
			}
		}
	} catch (e) {
		alert('error-onloadfun5-' + e);
	}
	try {
		THIS_PAGE = (somvofcbJS ? 'fcb_' : '') + 'index.php';
		if (somvofcbJS && jeSvetJS == 1) THIS_PAGE = 'https://apps.facebook.com/armyclicker';
		PrechrastiOznam();
		if (somTESTER || F07z(0, 100) < 10) testujem_XP = true;
		if (F055()) {
			Vypis_kontainer_pomocnicky();
			Vypis_kontainer_klikanie();
		}
	} catch (e) {
		alert('error-onloadfun6-' + e);
	}
	try {
		RestartniEachsec(0);
		loadingMainCas = 0;
		F07g('mainLoadingDiv');
		if (somTESTER) {
			audio_zvonec = false;
			audio_menu = false;
			doSounds = false;
		} else {
			doSounds = F079('doSounds', _DOSOUNDS);
			if (doSounds) {
				audio_zvonec = new Audio("sounds_" + SVET_SUFIX + "/zvonec.wav?v=" + soundsV);
				audio_menu = new Audio("sounds_" + SVET_SUFIX + "/menu.wav?v=" + soundsV);
			}
		}
	} catch (e) {
		alert('error-onloadfun7-' + e);
	}
	if (F055())
		F07g('bonusOfferDiv');
	if (jeLoged) {
		F067('jeautok' + idHracaHlava, jeautoclicker, DEFCAS);
		VypisDivPodHrou();
	} else {
		F07g('podHrouDiv');
	}
	if (!LenRaz) {
		LenRaz = true;
		setTimeout('OnLoadLater();', 1000);
		setTimeout('NewVersionNotify();', 500);
		if (F055())
			F02i();
		FB.Event.subscribe('edge.create', page_like_or_unlike_callback);
		FB.Event.subscribe('edge.remove', page_like_or_unlike_callback);
	}
	if (somvofcbJS) {
		for (var kk in LOC_KAPITOL) LOC_KAPITOL[kk] = '';
	}
}
var LenRaz = false;

function OnLoadLater() {
	TestVyrocie();
}
var vyrociaSTR = [0, '100 Days', '200 Days', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years'];
var vyrocia = [0, 100, 200, 365, 2 * 365, 3 * 365, 4 * 365, 5 * 365];
var vyrociaSkulls = [0, 50, 75, 100, 200, 300, 400, 500];
var vyrociaPlatina = [0, 0, 0, 100000, 200000, 300000, 4000000, 50000000];
var vyrociaFuel = [0, 100, 125, 150, 250, 300, 500, 1000];
var vyrociaKluce = [0, 0, 1, 2, 3, 4, 5, 10];
var vyrociaItems = [0, 0, 0, 3118, 3119, 3120, 3121, 3122];

function TestVyrocie() {
	var _vyrocie = hrac[123];
	var _out = '';
	var _hramDni = F09i((PHPtime - hrac[27]) / 86400);
	var _vindex = 0;
	for (var i in vyrocia)
		if (_hramDni >= vyrocia[i]) {
			_vindex = i;
			if (_vindex > _vyrocie) break;
		}
	if (_vindex > _vyrocie) {
		_out += '<b>You are already playing the game for: ' + vyrociaSTR[_vindex] + '!!!</b>';
		_out += '<br><br>Skulls: <b>' + vyrociaSkulls[_vindex] + '</b>' + IconPicWH('icons2/icon_skull', -13, 40, 40);
		_out += '<br><br>Fuel: <b>' + PCisloJS2(vyrociaFuel[_vindex]) + '</b>' + IconPicWH('icons2/icon_fuel', -13, 40, 40);
		if (vyrociaKluce[_vindex]) _out += '<br><br>Keys: <b>' + PCisloJS2(vyrociaKluce[_vindex]) + '</b>' + IconPicWH('icons2/icon_kluc', -13, 40, 40);
		if (vyrociaPlatina[_vindex]) _out += '<br><br>Platinum: <b>' + PCisloJS2(vyrociaPlatina[_vindex]) + '</b>' + IconPicWH('icons2/icon_platina', -13, 40, 40);
		if (vyrociaItems[_vindex]) _out += '<br><br> <img src="' + PicPrefix() + 'veci/vec' + vyrociaItems[_vindex] + '.png?v=' + (picversion + picversionVeci) +
			'">';
		_out += '<br><br><br>' + F09d(LOC_TAKE, 'ZoberVyrocie(' + _vindex + ');');
		F07e(_out, 'HAPPY ANNIVERSARY', 'vyrocieOkno', 550);
	}
}

function ZoberVyrocie(_vindex) {
	F01r(vyrociaSkulls[_vindex]);
	F03z(vyrociaFuel[_vindex]);
	PridajKluce(vyrociaKluce[_vindex]);
	PridajPlatinu(vyrociaPlatina[_vindex], 1);
	_itemID = vyrociaItems[_vindex];
	if (_itemID > 0) {
		hracVeciA[_itemID] = 1;
		hrac[H_VECI] = hracVeciA.join(';');
		F0z();
	}
	F046();
	F02t(197, _vindex);
	F061('vyrocieOkno');
	hrac[123] = hrac[123] * 1 + 1;
	setTimeout('TestVyrocie();', 700);
}

function ZobrazSaleVrohu() {
	var _fajkasale = '<img class="fajockaitem" alt="k" src="' + PicPrefix() + 'ui2/ok.png?v=' + picversion + '">';
	if (JeOffer()) {
		var _out = '' + CloseBut('salevrohudiv');
		_out += LOC_LIMITED_OFFER + '<br>';
		_out += '<br>';
		for (var iz in $budeZlavaA)
			if ($budeZlavaA[iz] && $budeZlavaA[iz][0]) {
				$budeZlava1 = $budeZlavaA[iz];
				if ($budeZlava1[5] > 0) {
					var _saleitem = itemyVShopeA[$budeZlava1[5]];
					var _unlcklvl = itemyVShopeA[$budeZlava1[5]][1][6];
					_out += '<div class="salepicdiv" ' + F02o(VypisBonusNEW(_saleitem, 2, _saleitem[1][2]), 400) +
						'><img onclick="SpecialOfferPopup(7);F061(\'salevrohudiv\');F02s();" width="70" src="' + PicPrefix() + 'veci/vec' + $budeZlava1[5] + '.png?v=' + (
							picversion + picversionVeci) + '">' + (F05p($budeZlava1[5]) ? _fajkasale : '') + '</div>';
				}
				if ($budeZlava1[15] > 0) {
					var _saleitem = itemyVShopeA[$budeZlava1[15]];
					var _unlcklvl = itemyVShopeA[$budeZlava1[15]][1][6];
					_out += '<div class="salepicdiv" ' + F02o(VypisBonusNEW(_saleitem, 2, _saleitem[1][2]), 400) +
						'><img onclick="SpecialOfferPopup(7);F061(\'salevrohudiv\');F02s();" width="70" src="' + PicPrefix() + 'veci/vec' + $budeZlava1[15] + '.png?v=' + (
							picversion + picversionVeci) + '">' + (F05p($budeZlava1[15]) ? _fajkasale : '') + '</div>';
				}
				if ($budeZlava1[17] > 0) {
					var _saleitem = itemyVShopeA[$budeZlava1[17]];
					var _unlcklvl = itemyVShopeA[$budeZlava1[17]][1][6];
					_out += '<div class="salepicdiv" ' + F02o(VypisBonusNEW(_saleitem, 2, _saleitem[1][2]), 400) +
						'><img onclick="SpecialOfferPopup(7);F061(\'salevrohudiv\');F02s();" width="70" src="' + PicPrefix() + 'veci/vec' + $budeZlava1[17] + '.png?v=' + (
							picversion + picversionVeci) + '">' + (F05p($budeZlava1[17]) ? _fajkasale : '') + '</div>';
				}
				if ($budeZlava1[18] > 0) {
					var _saleitem = itemyVShopeA[$budeZlava1[18]];
					var _unlcklvl = itemyVShopeA[$budeZlava1[18]][1][6];
					_out += '<div class="salepicdiv" ' + F02o(VypisBonusNEW(_saleitem, 2, _saleitem[1][2]), 400) +
						'><img onclick="SpecialOfferPopup(7);F061(\'salevrohudiv\');F02s();" width="70" src="' + PicPrefix() + 'veci/vec' + $budeZlava1[18] + '.png?v=' + (
							picversion + picversionVeci) + '">' + (F05p($budeZlava1[18]) ? _fajkasale : '') + '</div>';
				}
				_out += '<br>';
			}
		_out += '<br>';
		_out += F07f(LOC_SHOW_MORE, 'SpecialOfferPopup(7);F061(\'salevrohudiv\');F02s();');
		_out += '<br>';
		F08c('salevrohudiv');
		F068('salevrohudiv', _out);
	}
}

function NewVersionNotify() {
	var verziaX = F079('novaVerziaV', 0);
	if (jeSvetJS == 1)
		if (verziaX > 0 && verziaX < JSversion) {
			var _out = '<img onclick="F02m(\'https://www.facebook.com/armyclicker\');" src="' + PicPrefix() + 'ui2/newversion.png?v=' + picversion +
				'" alt="new version"><br><br><span onclick="F02m(\'https://www.facebook.com/armyclicker\');" class="regSpan">' + LOC_NEWVERSION2 +
				'<br>https://www.facebook.com/armyclicker</span><br>';
			F07e(_out, '***', 'infoPopupDes', 550);
		}
	F067('novaVerziaV', JSversion, 86400 * 30);
}

function RestartniEachsec(_notifikuj) {
	eachSecIndx++;
	if (_notifikuj) F02t(130);
	setTimeout('F04p(' + eachSecIndx + ');', 50);
	DebugPridaj('!!eachsecRestarted!!', 1);
}
checkujFlowHry = 0;
flowKrok = 0;

function CheckujFlowHry() {
	if (checkujFlowHry == 0) {
		RestartniEachsec(1);
	}
	checkujFlowHry = 0;
}

function PrechrastiOznam() {
	if (F098('headZoznamIN')) {
		var _oznam = F098('headZoznamIN')
			.innerHTML;
		_oznamA = _oznam.split('[b]');
		_oznam = _oznamA.join('<b>');
		_oznamA = _oznam.split('[/b]');
		_oznam = _oznamA.join('</b>');
		F068('headZoznamIN', _oznam);
	}
}
var ciele_Cisla = new Array(300, 700, 1500, 2500, 5000, 7500, 10000, 15000, 20000, 30000, 40000, 50000, 75000, 150000, 250000, 500000);
var ciele_odmena_hracint = new Array(0, 6, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9);
var ciele_odmena = new Array(0, 4000, 7500, 20000, 5, 5, 5, 5, 5, 5, 10, 10, 10, 10, 10, 15, 15);
var ciele_odmena_icon = [];
ciele_odmena_icon[6] = 'icons2/mini_gold';
ciele_odmena_icon[9] = 'icons2/mini_skull';
ciele_odmena_icon[18] = 'icons2/icon_fuel';
ciele_odmena_icon[65] = 'icons2/mini_ac';
vidnociele = true;

function PrveCiele() {
	if (bestPresielLevel < 2) {
		F068('prveCieleDiv', '<br><br><br><br>');
		return false;
	}
	if (IsSimpleTutorial() && (!jeLoged && bestPresielLevel < 2)) {
		F068('prveCieleDiv', '<br><br><br><br>');
		return false;
	}
	if (hrac[72] * 1 >= ciele_Cisla.length) {
		vidnociele = false;
		F07g('prveCieleDiv');
		return false;
	}
	var mojaNicivost1 = ClickAttackValue();
	var _ktoryCiel = hrac[72];
	var aktualnyCiel = ciele_Cisla[_ktoryCiel];
	var predosliCiel = 10;
	if (_ktoryCiel > 0) predosliCiel = ciele_Cisla[_ktoryCiel - 1];
	var ciel3index = _ktoryCiel + 3;
	if (ciel3index > ciele_Cisla.length) ciel3index = ciele_Cisla.length;
	var cielMaxK = (100 / (((_ktoryCiel % 4) + 1) * 25));
	var _out = '<div id="cieleDiv">';
	_out += '<div id="cieleMainText">' + LOC_CIELE_TEXT_0 + LOC_CIELE_TEXT_1 + '&nbsp;<span id="ciele_cislo">' + PCisloJS2(ciele_Cisla[_ktoryCiel]) +
		'</span>&nbsp;' + LOC_CIELE_TEXT_2 + '</div>';
	_out += F05n('bar_ciele', 20, 45, 278, 22, '', 'z-index:3;', '');
	for (var ii = ciel3index - 2; ii <= ciel3index; ii++)
		if (ii > _ktoryCiel) _out += F08q('cielBonus' + ii, 195 + (ii - _ktoryCiel) * 105, 34, 10, LOC_CIELE_BONUS + ' ' + (ii) + '<br>+' + F09k('ciele_bonus'
			, PCisloJS2(ciele_odmena[ii])) + '&nbsp;' + IconPicWH(ciele_odmena_icon[ciele_odmena_hracint[ii]], -5, 25, 25), LOC_CIELE_BONUS, 100, 42, '', 'cielBonus');
	_out += '</div>';
	F068('prveCieleDiv', _out);
	F086('bar_ciele', ClickAttackValue(1) - predosliCiel, aktualnyCiel - predosliCiel, 1, ' ', '', '', LOC_UI_DAMAGE + ': ' + PCisloJS2(ClickAttackValue()) +
		' / ' + PCisloJS2(aktualnyCiel));
	if (!IsRewardVisible()) DajCieleF08b();
}

function DajCieleF08b() {
	for (var i = 0; i < ciele_Cisla.length; i++)
		if (ClickAttackValue(1) >= ciele_Cisla[i] && hrac[72] * 1 <= i) {
			var _ktoru = i + 1;
			_moar = '';
			if (ciele_Cisla[i] < 20) _moar = '<br><br><br>' + LOC_CIELE_rew2;
			var _out = LOC_CIELE_rew1 + ': ' + PCisloJS2(ciele_Cisla[i]) + '<br><br>+' + F09k('ciele_bonus', PCisloJS2(ciele_odmena[_ktoru])) + '&nbsp;' + IconPicWH(
				ciele_odmena_icon[ciele_odmena_hracint[_ktoru]], -5, 25, 25) + _moar + '<br><br>' + F09d(LOC_TAKE, 'ZoberCielF08b(' + _ktoru + ');') + '<br><br>' + F09k(
				'mini3', LOC_CIELE_TEXT_3);
			F07e(_out, LOC_CIELE_TEXT_0, 'infoPopupDes', 550, 0, '', 1, 0.5);
			break;
		}
}

function ZoberCielF08b(_ktoru) {
	F061('infoPopupDes');
	F02t(69, _ktoru);
	hrac[ciele_odmena_hracint[_ktoru]] += ciele_odmena[_ktoru];
	hrac[72]++;
	F046();
}
zIndexBonusPlus = 0;
jeSpecialOffer = 0;
jeLimitedOffer = 0;
specialOfferID = 0;
specialOfferID2 = 0;
$budeZlavaA = [];
var najlepsiGemPomer = 0;

function JeOffer(_ajMozesPopup) {
	if (somvofcbJS) return 0;
	if ($budeZlavaSTR != '') {
		$buduZlavy = $budeZlavaSTR.split(':,.');
		for (var i in $buduZlavy)
			if ($buduZlavy[i])
				if ($buduZlavy[i] != '') {
					$budeZlavaA[i] = $buduZlavy[i].split(';');
					specialOfferID = $budeZlavaA[i][0];
					if ($budeZlavaA[i][19] > 0) {
						jeLimitedOffer = 1;
					}
					if ($budeZlavaA[i][1] > 0) {
						specialOfferID2 = $budeZlavaA[i][0];
						$jeGemBonus = $budeZlavaA[i][1];
					} else {
						jeSpecialOffer = 1;
						if (_ajMozesPopup)
							if (dostanBalik.length <= 0)
								if (F07z(1, 100) < Math.max(0, 30 - hrac[64] * 5) || !kukolRazSale)
									if (kupilSale * 1 == 0) SpecialOfferPopup(3, 1);
					}
					if ($budeZlavaA[i][2] > 0) {
						var _pomer = $budeZlavaA[i][6] / $budeZlavaA[i][2];
						if (_pomer > najlepsiGemPomer) najlepsiGemPomer = _pomer;
					}
				}
	}
	if (jeLoged)
		if (!F055())
			if ($jeGemBonus > 0 || jeSpecialOffer == 1) {
				if ($jeGemBonus) return 2;
				return 1;
			}
	return 0;
}

function OfferClick(_kde) {
	if ($jeGemBonus > 0) F0d(_kde);
	else if (jeSpecialOffer > 0) SpecialOfferPopup(10 + _kde);
	else F0d(_kde);
}

function SpecialOfferPopup(_kde, _nosave, _ajkupene) {
	if (somvofcbJS) {
		if (!_kde) _kde = 1;
		F0d(_kde);
	}
	if (somvofcbJS) return F03t('currently not Available!');
	var _mamNejakyItem = 0;
	kukolRazSale = 1;
	F067('kukolRazSale', 1, 86400 * (hrac[64] > 0 ? 4 : 1));
	if (!_nosave) MapujGemy(_kde);
	var _text = '';
	_out = _text;
	var pocetPackov = 0;
	_out += '<table width="100%"><tr>';
	for (var iz in $budeZlavaA)
		if ($budeZlavaA[iz] && $budeZlavaA[iz][0]) {
			pocetPackov++;
			$budeZlava1 = $budeZlavaA[iz];
			_out += '<td style="text-align:center;' + (iz > 0 ? 'border-left:1px solid #111' : '') + '">';
			if ($budeZlava1[14] && $budeZlava1[14] != 0) _out += '<b>' + $budeZlava1[14] + '</b><br>';
			if ($budeZlava1[19] > 0) {
				if ($budeZlava1[4] < 0) $budeZlava1[4] = 0;
				_out += '<div id="barsale"><div class="barIN" style="width:' + (F09f((($budeZlava1[19] - $budeZlava1[4]) / $budeZlava1[19]) * 250)) +
					'px;height:20px;"></div><div class="vobj" style="width:100%;z-index:3;">' + (($budeZlava1[19] - $budeZlava1[4]) + ' / ' + $budeZlava1[19]) +
					'</div></div>';
			}
			_out += '<table class="tabulka3 specialoffer" cellspacing="10" style="text-align:center;"><tr>';
			var pocetOkien = 0;
			if ($budeZlava1[6] > 0) {
				pocetOkien++;
				_out += '<td width="110" ' + F02o(LOC_VYSVETLIVKA_offer[0]) + '><img src="' + PicPrefix() + 'ui2/reward_icon_skull.png"><br>+' + PCisloJS2($budeZlava1[6]
					, '') + '</td>';
			}
			if ($budeZlava1[7] > 0) {
				pocetOkien++;
				_out += '<td width="110" ' + F02o(LOC_VYSVETLIVKA_offer[1]) + '><img src="' + PicPrefix() + 'ui2/reward_icon_fuel.png"><br>+' + PCisloJS2($budeZlava1[7]
					, '') + '</td>';
			}
			if ($budeZlava1[8] > 0) {
				pocetOkien++;
				_out += '<td width="110" ' + F02o(LOC_VYSVETLIVKA_offer[2]) + '><img src="' + PicPrefix() + 'ui2/reward_icon_clicker.png"><br>+' + PCisloJS2($budeZlava1[8]
					, '') + '</td>';
			}
			if ($budeZlava1[9] > 0) {
				pocetOkien++;
				_out += '<td width="110" ' + F02o(LOC_VYSVETLIVKA_offer[3]) + '><img src="' + PicPrefix() + 'ui2/reward_icon_gold.png"><br>+' + PCisloJS2($budeZlava1[9]
					, '') + '</td>';
			}
			if ($budeZlava1[10] > 0) {
				pocetOkien++;
				_out += '<td width="110" ' + F02o(LOC_VYSVETLIVKA_offer[4]) + '><img src="' + PicPrefix() + 'ui2/reward_icon_dmg.png"><br>+' + PCisloJS2($budeZlava1[10]
					, '') + ' ' + F09k('mini3', LOC_UI_DAMAGE_persec) + '</td>';
			}
			if ($budeZlava1[16] > 0) {
				pocetOkien++;
				_out += '<td width="110" ' + F02o(LOC_CHEST_KEY) + '><img src="' + PicPrefix() + 'ui2/reward_icon_key.png"><br>+' + PCisloJS2($budeZlava1[16], '') +
					'</td>';
			}
			if (pocetOkien > 1) _out += '</tr></table>';
			else _out += '<td>';
			if ($budeZlava1[5] > 0) {
				if (F05p($budeZlava1[5])) _mamNejakyItem++;
				if (F05p($budeZlava1[5]) == 0 || _ajkupene) {
					var _saleitem = itemyVShopeA[$budeZlava1[5]];
					var _unlcklvl = itemyVShopeA[$budeZlava1[5]][1][6];
					_out += '<div id="saleitemdiv" ' + (pocetOkien > 1 ? 'style="border:1px #000 solid;"' : '') + '><img id="saleitemimg" src="' + PicPrefix() + 'veci/vec' +
						$budeZlava1[5] + '.png?v=' + (picversion + picversionVeci) + '">' + (_unlcklvl > PredchadzajuciLevel ? '<div onclick="F07b(\'' + LOC_SALEITEM_3 +
							'\',500);" class="saleunlockLVLdiv" ' + F02o(LOC_SALEITEM_3, 500) + '>' + LOC_SALEITEM_1 + _unlcklvl + '<br><br>' + LOC_SALEITEM_2 + '</div>' : '') +
						'<div id="saleitemtext">' + (F05p($budeZlava1[5]) > 0 ? '<div class="boxerror">' + LOC_LIMITED_OFFER_unlock2 + '</div>' : '') + VypisBonusNEW(_saleitem
							, 2, _saleitem[1][2]) + '</div></div>';
				}
			}
			if ($budeZlava1[15] > 0) {
				if (F05p($budeZlava1[15])) _mamNejakyItem++;
				if (F05p($budeZlava1[15]) == 0 || _ajkupene) {
					var _saleitem = itemyVShopeA[$budeZlava1[15]];
					var _unlcklvl = itemyVShopeA[$budeZlava1[15]][1][6];
					_out += '<div id="saleitemdiv" ' + (pocetOkien > 1 ? 'style="border:1px #000 solid;"' : '') + '><img id="saleitemimg" src="' + PicPrefix() + 'veci/vec' +
						$budeZlava1[15] + '.png?v=' + (picversion + picversionVeci) + '">' + (_unlcklvl > PredchadzajuciLevel ? '<div onclick="F07b(\'' + LOC_SALEITEM_3 +
							'\',500);" class="saleunlockLVLdiv" ' + F02o(LOC_SALEITEM_3, 500) + '>' + LOC_SALEITEM_1 + _unlcklvl + '<br><br>' + LOC_SALEITEM_2 + '</div>' : '') +
						'<div id="saleitemtext">' + (F05p($budeZlava1[15]) > 0 ? '<div class="boxerror">' + LOC_LIMITED_OFFER_unlock2 + '</div>' : '') + VypisBonusNEW(_saleitem
							, 2, _saleitem[1][2]) + '</div></div>';
				}
			}
			if ($budeZlava1[17] > 0) {
				if (F05p($budeZlava1[17])) _mamNejakyItem++;
				if (F05p($budeZlava1[17]) == 0 || _ajkupene) {
					var _saleitem = itemyVShopeA[$budeZlava1[17]];
					var _unlcklvl = itemyVShopeA[$budeZlava1[17]][1][6];
					_out += '<div id="saleitemdiv" ' + (pocetOkien > 1 ? 'style="border:1px #000 solid;"' : '') + '><img id="saleitemimg" src="' + PicPrefix() + 'veci/vec' +
						$budeZlava1[17] + '.png?v=' + (picversion + picversionVeci) + '">' + (_unlcklvl > PredchadzajuciLevel ? '<div onclick="F07b(\'' + LOC_SALEITEM_3 +
							'\',500);" class="saleunlockLVLdiv" ' + F02o(LOC_SALEITEM_3, 500) + '>' + LOC_SALEITEM_1 + _unlcklvl + '<br><br>' + LOC_SALEITEM_2 + '</div>' : '') +
						'<div id="saleitemtext">' + (F05p($budeZlava1[17]) > 0 ? '<div class="boxerror">' + LOC_LIMITED_OFFER_unlock2 + '</div>' : '') + VypisBonusNEW(_saleitem
							, 2, _saleitem[1][2]) + '</div></div>';
				}
			}
			if ($budeZlava1[18] > 0) {
				if (F05p($budeZlava1[18])) _mamNejakyItem++;
				if (F05p($budeZlava1[18]) == 0 || _ajkupene) {
					var _saleitem = itemyVShopeA[$budeZlava1[18]];
					var _unlcklvl = itemyVShopeA[$budeZlava1[18]][1][6];
					_out += '<div id="saleitemdiv" ' + (pocetOkien > 1 ? 'style="border:1px #000 solid;"' : '') + '><img id="saleitemimg" src="' + PicPrefix() + 'veci/vec' +
						$budeZlava1[18] + '.png?v=' + (picversion + picversionVeci) + '">' + (_unlcklvl > PredchadzajuciLevel ? '<div onclick="F07b(\'' + LOC_SALEITEM_3 +
							'\',500);" class="saleunlockLVLdiv" ' + F02o(LOC_SALEITEM_3, 500) + '>' + LOC_SALEITEM_1 + _unlcklvl + '<br><br>' + LOC_SALEITEM_2 + '</div>' : '') +
						'<div id="saleitemtext">' + (F05p($budeZlava1[18]) > 0 ? '<div class="boxerror">' + LOC_LIMITED_OFFER_unlock2 + '</div>' : '') + VypisBonusNEW(_saleitem
							, 2, _saleitem[1][2]) + '</div></div>';
				}
			}
			if (pocetOkien <= 1) _out += '</td></tr></table>';
			_out += '<br>';
			if ($budeZlava1[3] > 0) _out += LOC_OFFER_stara_cena + ' ' + F09k('velkecN2', '&nbsp;' + PCisloJS2($budeZlava1[3]) + '&nbsp;') + '$' + MEDZ;
			_out += ($budeZlava1[3] > 0 ? LOC_OFFER_nova_cena : '') + ' ' + F09k('velke', PCisloJS2($budeZlava1[2]) + '$');
			if ($budeZlava1[19] > 0 && $budeZlava1[4] <= 0)
				_out += '<div id="soldoutdiv">' + LOC_SOLD_OUT + '</div>';
			else {
				if (testingP || somvofcbJS) {
					_out += '<br>' + F09d(LOC_SHOP_BUYBUT, 'BuyFcbGems2(' + $budeZlava1[2] + ',' + $budeZlava1[0] + ');');
				} else {
					_out += '<form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" name="gemform' + $budeZlava1[0] +
						'" id="gemform' + $budeZlava1[0] + '"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="' +
						_PP_hostedvalue_specialPack + '">';
					_out += '<input type="hidden" name="on0" value="Packs">';
					_out += '<input type="hidden" name="notify_url" value="http://' + GAME_LINK_JS + '/p/pocuvam.php">';
					_out += '<input type="hidden" name="custom" value="' + hrac[0] + 'a0a' + $budeZlava1[0] + '">';
					_out += '<input type="hidden" name="currency_code" value="USD">';
					_out += '<input type="hidden" id="os0" name="os0" value="Packxy ' + $specialPackyG[$budeZlava1[12]] + '">';
					_out +=
						'<input style="display:none;" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" id="submitG" name="submitG" alt="PayPal - The safer, easier way to pay online!">';
					_out += '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">';
					_out += '<br><br>' + F09d(LOC_SHOP_BUYBUT, 'GetGems2(' + $budeZlava1[0] + ');');
					_out += '</form>';
				}
				if ($budeZlava1[4] > 0) _out += F09k('mini4', LOC_LIMITED_OFFER_ubuda);
			}
			_out += '</td>';
		}
	_out += '</tr></table>';
	if (!_ajkupene)
		if (_mamNejakyItem) _out += '<br>' + F07f('[' + LOC_DISPLAY_OWNED + ']', 'SpecialOfferPopup(' + _kde + ',' + _nosave + ',1);');
	F07e(_out, '<span class="limited_offer_label">' + LOC_LIMITED_OFFER.toUpperCase() + '</span>', 'infoPopupD2', (pocetPackov > 1 ? 1000 : 650 + (pocetOkien > 4 ?
		50 : 0)), 1, 'diadiv', '', 0, 0, 50);
	MenuSound();
	return false;
}

function BonusOfferPic(_extra) {
	if (_extra) return 'bonusoffer' + _extra + '.png';
	if ($jeGemBonus == 30) return 'bonusoffer30.png';
	return 'bonusoffer1.png';
}

function ObrazkovyTutorialText(_krok) {
	return false;
}

function StartNewGame() {
	ObrazkovyTutorialStart();
	startedGame = true;
	RestartniEachsec(0);
	F011();
	F07g('loginDiv');
	F08c('materialHeader');
}
landing_pos_x = 0.525;
zobrazLandingLenRaz = true;
landingPicX = 2;

function StartScreen() {
	if (!zobrazLandingLenRaz) return false;
	zobrazLandingLenRaz = false;
	presielTutorial = startedGame = false;
	var _sirkaSC = 202;
	var topPadding = -150;
	var _vyskaSC = 70;
	var _topSC = vyskaScreenuTotal - 500;
	var sirkaLandingPic = Math.min(1200, sirkaScreenuTotal - 50);
	var pic_left_x = F09f((sirkaScreenuTotal - sirkaLandingPic) * 0.5);
	var _leftSC = pic_left_x - 47 + Math.round(sirkaLandingPic * landing_pos_x) - 65;
	var vyskaLandingPic = Math.round(sirkaLandingPic * 0.5625);
	_topSC = Math.round(vyskaLandingPic * 0.72) - 65 + topPadding;
	if (jeSvetJS == 2) _topSC += 25;
	var _out = '' + F09d(LOC_startnew, 'StartNewGame();');
	if (somvofcbJS) _out = '<br>' + _out;
	else
		_out += '<br>' + F09d(LOC_loginbut2, 'ShowLoginForm2();');
	var _extratext = '';
	_extratext +=
		'<br><br><br><center><iframe width="560" height="315" src="https://www.youtube.com/embed/lYyqyqyIJi0" frameborder="0" allowfullscreen></iframe></center><br>';
	F07e(_out, '', 'tutorial1div', _sirkaSC, -1, 'firstLoginDiv', 1, 1, _leftSC, _topSC, _vyskaSC, '', '<img onclick="StartNewGame();" id="landingPic" src="' +
		PicPrefix() + 'media/landingpic' + landingPicX + '.jpg?v=3" alt="landingpic" style="top:' + topPadding + 'px; left:' + pic_left_x + 'px; width:' + (
			sirkaLandingPic) + 'px;"><div id="landingText" style="width:' + sirkaScreenuTotal + '">' + LOC_LandingText + '<br><br>' + F09d(LOC_startnew
			, 'StartNewGame();') + (!somvofcbJS ? ' :: ' + F09d(LOC_loginbut2, 'ShowLoginForm2();') : '') + _extratext + '</div>');
	F044();
	F02s();
	F061('bublinahore');
	F07g('materialHeader');
}

function ShowLoginForm2() {
	F07g('tutorial1divIN');
	F0k(1);
	startedGame = true;
	RestartniEachsec(0);
	SetZIndex('loginDiv', 9999);
}
TUT_enemyHealing = 20;
TUT_zacnimisiu3 = 12;
TUT_stratilsiEnergiu = 15;
TUT_dostalLVLup = 18;
TUT_dajautoclickers = 0;
ignorujTutDieruKlik = 0;
var tut_krok = 0;

function NextTut(_checkujNextBut) {
	rychloVypisVsetko = 0;
	if (!_checkujNextBut || (_checkujNextBut && !hideNEXT_A[tut_krok])) ObrazkovyTutorialStart(tut_krok + 1);
	return false;
}

function TutBublinaClick() {
	rychloVypisVsetko = true;
	TutSipkaNext();
}

function HideTutorial() {
	for (var i = 1; i <= 4; i++) F07g('tutorial_avatar' + i);
	F07g('tutorial_diera');
	F07g('tutorial_bublina');
	isTutorialVisible = false;
}
hideNEXT_A = new Array(0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
ignorujTutDieruA = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 20, 0, 0);
_tutBublinaY = 400;
_tutBublinaX = 200;

function TutSet(_s) {
	_hideNEXT = hideNEXT_A[_s];
	var _x = tut_diera_x[_s];
	var _y = tut_diera_y[_s];
	if (_x != 0 && _y != 0) {
		if (_s != 2) F07g('tutorial_diera');
	} else
		F07g('tutorial_diera');
	for (var i = 1; i <= 3; i++)
		if (i != tut_avA[_s]) F07g('tutorial_avatar' + i);
	ShowJSxy('tutorial_bublina', _tutBublinaX, _tutBublinaY);
	if (LOC_TUTORIAL[_s]) {
		F068('tutorialText', LOC_TUTORIAL[_s]);
		F08c('tutorialText');
	} else
		F07g('tutorialText');
	if (_hideNEXT) F07g('tutorialNextBut');
	else F08c('tutorialNextBut');
	F07g('tutorialCloseBut');
	VypisujTutorialText(_s, 1);
	isTutorialVisible = true;
}
isTutorialVisible = false;

function KlikTutDieraDOWN() {
	if (tut_krok == 1) {
		klikamHACK = 0;
	}
	if (tut_krok == 2 || tut_krok == 8) {
		klikamHACK = 0;
	}
}

function KlikTutDiera() {
	if (ignorujTutDieruKlik > 0) {
		return false;
	}
	if (tut_diera_x[tut_krok] == 0 && tut_diera_y[tut_krok] == 0) {
		NextTut();
		return false;
	}
	if (tut_krok == 1) {
		F06e();
		return ObrazkovyTutorialStart(2);
	}
	if (tut_krok == 2) {
		F06e();
	}
	if (tut_krok == 3) {
		OpenShop1(0, 0);
		return ObrazkovyTutorialStart(4);
	}
	if (tut_krok == 5) {
		F08a(0, 2, 0);
		return NextTut();
	}
	if (tut_krok == 6) {
		CloseShop();
		return false;
	}
	if (tut_krok == 7) {
		F03x(bestPresielLevel * 1 + 1);
		return false;
	}
	if (tut_krok == TUT_zacnimisiu3) {
		F03x(bestPresielLevel * 1 + 1);
		return false;
	}
	if (tut_krok == 8) {
		F06e();
		F07g('tutorial_diera');
	}
	if (tut_krok == 9) return NextTut();
	if (tut_krok == 10) {
		OpenShop1(32, 0);
		return ObrazkovyTutorialStart(11);
	}
	if (tut_krok == 13) {
		F050(1);
		return NextTut();
	}
	if (tut_krok == 15) {
		return NextTut();
	}
	if (tut_krok == 16) {
		F06c(0);
		return NextTut();
	}
	if (tut_krok == 17) {
		OpenShop1(30, 0);
		return false;
	}
	if (tut_krok == 18) {
		ToggleAutoClicker(1);
		return NextTut();
	}
	if (tut_krok == 19) {
		ToggleAutoClicker(1);
		F050(1);
		HideTutorial();
	}
	if (tut_krok == 50) {
		HideTutorial();
		F03l(0, 15);
	}
}
tut_krok = 6;
tut_krok = 6;
tut_krok = 6;
tut_krok = 6;
tut_krok = 0;

function ObrazkovyTutorialStart(_krok, _timeout) {
	clearTimeout(dieraneskor);
	if (!_krok) _krok = tut_krok;
	if (_timeout && _timeout > 0) {
		setTimeout('ObrazkovyTutorialStart(' + _krok + ',0);', _timeout);
		return false;
	}
	if (_krok == 9 && F098('jeShopOpen')) {
		CloseShop();
		ObrazkovyTutorialStart(9);
		return false;
	}
	if (_krok == 3 && F098('jeShopOpen')) _krok = 4;
	if (_krok == 3 && F05p(2) > 0)
		_krok = 7;
	if (_krok == 5 && F05p(2) > 0)
		_krok = 6;
	if ((_krok == 6 || _krok == 11) && !F098('shopPopupIN') && !F098('shopPopupFCBIN'))
		_krok++;
	tut_krok = _krok;
	if (tut_krok >= tut_diera_x.length) {
		HideTutorial();
		presielTutorial = true;
		F061('tutorial1div');
		return false;
	}
	presielTutorial = false;
	if (tut_krok == 0)
		if (somvofcbJS || (!somvofcbJS && vyskaScreenuTotal < 600)) F03(220, 0, 0, 0.03);
	F061('tutorial1div');
	MenuSound();
	F044();
	TutSet(_krok);
}
praveVypisujemTutText = 0;
rychloVypisVsetko = 0;

function VypisujTutorialText(_s, _k) {
	if (_k == 1) {
		LOC_tutText2[_s] = LOC_tutText2[_s].split(',,');
		LOC_tutText2[_s] = LOC_tutText2[_s].join(' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + ' ');
		praveVypisujemTutText = _s;
	}
	if (praveVypisujemTutText == _s) {
		var _str = LOC_tutText2[_s];
		var _vysekni = _k * 4;
		if (rychloVypisVsetko) {
			_vysekni = 1999;
			rychloVypisVsetko = false;
			ShowDieruNeskor(_s);
		}
		var _celystring = (_str.length < _vysekni ? 1 : 0);
		if (_k == 15 || _celystring) {
			var _x = tut_diera_x[_s];
			var _y = tut_diera_y[_s];
			if (_x != 0 && _y != 0) {
				ignorujTutDieruKlik = ignorujTutDieruA[_s];
				ShowJSxy('tutorial_diera', _x, _y);
				SetZIndex('tutorial_diera', 14999);
			}
		}
		F068('tutorialText2', _str.substring(0, _vysekni) + (_celystring ? '' : ' |'));
		if (!_celystring) {
			if (tutvypisTO) clearTimeout(tutvypisTO);
			tutvypisTO = setTimeout('VypisujTutorialText(' + _s + ',' + (_k * 1 + 1) + ');', 50);
		} else {
			dieraneskor = setTimeout('ShowDieruNeskor(' + _s + ');', 5000);
		}
	}
}

function ShowDieruNeskor(_s) {
	F08c('tutorialCloseBut');
	if (!hideNEXT_A[_s])
		if (isTutorialVisible) TutSipkaNext();
}
var tutvypisTO;
var dieraneskor;

function TutSipkaNext() {
	var _x = _tutBublinaX + 400;
	var _y = _tutBublinaY - 55;
	if (tut_diera_x[tut_krok] == 0 && tut_diera_y[tut_krok] == 0) {
		ShowJSxy('tutorial_diera', _x, _y);
		SetZIndex('tutorial_diera', 15001);
	}
}
MIN_SIRKA_DIAMANTY = 1350;
loginovanie = true;
menilSizeAfterReward = false;
nadpis_velkostY = 57;
var _zlatoHint = '';
herna_plocha_w = 380;
herna_plocha_h = 475;
minca_w = 95;
zmmn = [375, 210];

function RefreshPomocValues() {
	if (!F055()) {
		skutocneHodnoty[0] = F0w();
		skutocneHodnoty[1] = F012();
		skutocneHodnoty[2] = F01o();
		skutocneHodnoty[3] = F0v();
	} else {
		if (PocetPrejdeni(F055()) > 0) var _dmgpersec = KratPercentoJS(F0w(), itemBonusOverview[36]);
		else var _dmgpersec = F0w();
		if (pomocBonusySpolu[0] > 0) _dmgpersec = KratPercentoJS(_dmgpersec, pomocBonusySpolu[0]);
		else if (pomocBonusySpolu[0] < 100) _dmgpersec = KratPercentoJS(_dmgpersec, pomocBonusySpolu[0]);
		if (_dmgpersec < 0) _dmgpersec = 0;
		skutocneHodnoty[0] = _dmgpersec;
		skutocneHodnoty[1] = KratPercentoJS(F012(), pomocBonusySpolu[1]);
		if (skutocneHodnoty[1] < 0) skutocneHodnoty[1] = 0;
		skutocneHodnoty[2] = KratPercentoJS(F01o(), pomocBonusySpolu[2]);
		if (skutocneHodnoty[2] < 0) skutocneHodnoty[2] = 0;
		skutocneHodnoty[3] = KratPercentoJS(F0v(), pomocBonusySpolu[3]);
		if (skutocneHodnoty[3] < 0) skutocneHodnoty[3] = 0;
	}
}
var clicker_xy = new Array(480, 22);
var ErrorInVypisVsetko = 0;

function F039(_loadZivot) {
	RefreshPomocValues();
	ErrorInVypisVsetko = 0;
	F061('bublinahore');
	pulzy = [];
	if (F098('rewardTable')) {
		menilSizeAfterReward = true;
		return false;
	}
	ErrorInVypisVsetko++;
	resVersion++;
	sirkaScreenu = 1000;
	sirkaScreenuTotal = window.innerWidth;
	vyskaScreenuTotal = window.innerHeight;
	SCREEN_VYSKA2 = vyskaScreenu = 600;
	ErrorInVypisVsetko++;
	xp_xy = new Array(756, 136);
	if (JePlatina()) xp_xy = new Array(756, 148);
	dia_xy = new Array(755, 40);
	achp_xy = new Array(985, 585);
	gold_xy = new Array(755, 82);
	heal_xy = new Array(756, 334);
	fuel_xy = new Array(883, 43);
	platina_xy = new Array(755, 115);
	ammo_xy = new Array(756, 377);
	quest_xy = new Array(770, 180);
	hplocha_xy = new Array(149, 107);
	ErrorInVypisVsetko++;
	_CENKOEF = 0.35;
	_CENKOEF2 = F09i(sirkaScreenu * _CENKOEF);
	var vyskaZeny = vyskaScreenu - 50;
	var sirkaZeny = F09l((482 / 800) * vyskaZeny);
	var out = '';
	var out_dole = '';
	if (!jeLoged) {
		out += '<div id="loginDivMedzera" style="display:none; height:150px;"></div><div id="loginDiv"><table id="regtable"><tr><td><span id="loginlabel">' +
			LOC_loginmeno + '</span>: ' + F035('login_menoEF', '') + '</td><td>' + LOC_loginheslo +
			': <input type="password" id="hesloEF1" name="hesloEF1" value="" size="18" maxlength="32" ">' + '</td><td>' + F09d(LOC_loginbut, 'F07p(1);', '', ''
				, 'loginbut1') + '<center class="mini3"><input type="checkbox" checked="checked" name="pamataj" id="pamataj" value="1">' + LOC_REMEMBERME +
			'</center></td></tr>';
		out += '<tr id="teg_TR" style="display:none;"><td>.</td><td>' + LOC_loginheslo2 +
			': <input type="password" id="hesloEF2" name="hesloEF2" value="" size="18" maxlength="32" "></td><td>' + F09d(LOC_register, 'F07p(2);') + '</td></tr>';
		out += '</table>' + F09d(LOC_VYTVOR_NOVY_UCET_BUT, "F036();", LOC_VYTVOR_NOVY_UCET_BUT, '', "createnewaccbut") + '<div>' + LOC_PRECO_SA_REGISTROVAT +
			'<br><span class="mini3 regSpan" onclick="F04t();">' + LOC_RULES_suhlas +
			'</span></div></div><div id="loginDivMedzera2" style="display:none; height:150px;"></div>';
	}
	out += '<div id="leftBottom"></div>';
	out += '<div id="leftTop">' + LOC_GAMESAVED + '</div>';
	out += '<div id="levelUPtop">' + _lvlupout + '</div>';
	out += '<div id="koloPopup" class="popups"></div>';
	out += '<div id="warPopup" class="popups"></div>';
	out += '<div id="errorPopup" class="popups"></div>';
	out += '<div id="infoPopup" class="popups"></div>';
	out += '<div id="infoPopup2" class="popups"></div>';
	out += '<div id="infoPopupD" class="popups"></div>';
	out += '<div id="infoPopupDes" class="popups"></div>';
	out += '<div id="infoPopupD2" class="popups"></div>';
	out += '<div id="infoPopupBalik" class="popups"></div>';
	out += '<div id="shopPopupFCB" class="popups"></div>';
	out += '<div id="quickshoppopup" class="popups"></div>';
	out += '<div id="endPopup" class="popups"></div>';
	out += '<div id="misiaDiv" class="popups"></div>';
	out += '<div id="event_chest_pop"></div>';
	out += '<div id="tutorial1div" class="popups"></div>';
	var outG = '';
	ErrorInVypisVsetko++;
	outG += F08q('gamepause', F07l(100), 200, 990, '<img alt="pause" src="' + PicPrefix() + 'ui2/pause.png" onclick="F011();" ' + F02o(LOC_BUT_unpause) + '>');
	outG += '<div class="absdiv" ' + F02o(LOC_NARODENIE, 250, 'narodenie') + ' style="z-index:1000;left:-10px;top:-10px;width:190px;height:85px;"></div>';
	outG += F08q('vyber_levelDiv', hplocha_xy[0] - 17, hplocha_xy[1] - 45, 100, '', '', 421, 402, '', '');
	outG += F08q('tutfirstupgdmg', hplocha_xy[0] + -20, hplocha_xy[1] - 60, 101, '', '', 380);
	var casticeSTR = '';
	for (var i = 0; i < castice_max; i++) {
		castice[i] = new Array(i, 0, 0, 0, 0, 0, 0);
		casticeSTR += '<img class="castica" onmousedown="return false;" id="castica' + i + '" src="' + PicPrefix() + 'icons2/icon_xp.png">';
	}
	var ftextsSTR = '';
	for (var i = 0; i < ftexts_max; i++) {
		ftexts[i] = new Array(i, 0, 0, 0, 0, 0, 0);
		ftextsSTR += '<div class="ftext" onmousedown="return false;" id="ftext' + i + '"></div>';
	}
	ErrorInVypisVsetko++;
	_NIsipky = '';
	var _rndbonusy = '';
	for (var ii = 0; ii < 12; ii++) _rndbonusy += F08q('randomBonusDiv' + ii, 550, 50, 900 + zIndexBonusPlus, '', (PredchadzajuciLevel < 5 ? LOC_RANDOMBONUS : '')
		, 100, 100, 'RandomBonusClick(' + ii + ');');
	out += '<div id="eventdiv"></div>';
	out += '<div id="eventdivBuy" class="wbh" onclick="BuyEventMenu();"></div>';
	out += '<div id="kacickadiv" ' + F02o('Army Clicker is the best game ever!!! /Donald please remove this text') + '></div>';
	out += '<br><br><div id="hraciaPlocha">' +
		(jeLietajuceIkony && jeLoged ? '<div id="hokraj1"></div><div id="hokraj2" style="width:' + (sirkaScreenu) +
			'px;"></div><div id="hokraj3"></div><div id="hokraj4" style="height:' + (vyskaScreenu) + 'px;"></div><div id="hokraj6" style="height:' + (vyskaScreenu) +
			'px;"></div><div id="hokraj7"></div><div id="hokraj8" style="width:' + (sirkaScreenu) + 'px;"></div><div id="hokraj9"></div>' : '') +
		F08q('alttabdiv', 120, 200, 900, LOC_NO_FOCUS, '', '', '', 'FocusTeraz();') +
		F08q('lastSavePod', 450, 600, 2, '', '', 500) +
		'<div id="salevrohudiv"></div>' +
		F08q('testujDiv', 250, 650, 2, '', '', 500) +
		F08q('miniSaleDiv', 145, 105, 899, '', '', 363) +
		F08q('achOznamDiv', 134, 466, 49998, '<div id="achOkno2" onmousedown="F0i();"></div>', '') +
		F08q('lastGoldPod', 0, 600, 2, '', LOC_LAST_GOLD + '<br>' + LOC_AD1 + (JePlatina() ? '<br>' + LOC_LAST_PLATINA : ''), 800) +
		F08q('bonusOfferDiv', hplocha_xy[0] + 55 - 29, hplocha_xy[1] + 330, 998, '', '', 331, 184) +
		F08q('tipoftheday', 155, 390, 0, '', '') +
		F08q('autocclickernote', hplocha_xy[0] + 35, hplocha_xy[1] + 20, 1001, LOC_AUTO_TIP + CloseBut('autocclickernote'), LOC_AUTO_TIP, 300, 50
			, 'F07g(\'autocclickernote\');') +
		_rndbonusy +
		F08q('autoclickergif', 0, 0, 1001, '<img src="' + PicPrefix() + 'ui2/autoclicker.gif" alt="clicker">', LOC_autogif, 22, 27) +
		F08q('nofueldiv', 150, 386, 999, '', '', 384, 205) +
		(PredchadzajuciLevel > 40 && PredchadzajuciLevel <= 70 && !boloPrveNacitanie && !F055() ? F08q('zlatoMimoMisiuNote', zmmn[0], zmmn[1], 900, LOC_GOLDMIMO
			, LOC_GOLDMIMO) : '') +
		F08q('typMisieLabel', misialabel[0], misialabel[1], 900, '', '') +
		F08q('newItemsSipky', 0, 0, 1005, _NIsipky, '', 1, 1, '') +
		F08q('tutorial_diera', 0, 0, 15001, '<div id="tutorialText"></div>', '', 383, (jeSvetJS == 1 ? 307 : 383), 'KlikTutDiera();', '', 'KlikTutDieraDOWN();') +
		(PredchadzajuciLevel < 50 ? F08q('tutorial_avatar1', 0, 0, 15000, '', '', 332, 347, 'F07g(\'tutorial_avatar1\');') + F08q('tutorial_avatar2', 0, 0, 15000, ''
			, '', 332, 347, 'F07g(\'tutorial_avatar2\');') + F08q('tutorial_avatar3', 0, 0, 15000, '', '', 332, 347, 'F07g(\'tutorial_avatar3\');') : '') +
		F08q('tutorial_bublina', 0, 0, 15000
			, '<div id="tutorialText2"></div><div id="tutorialCloseBut" onMouseDown="F07g(\'tutorial_bublina\');;return false;;">X</div><div id="tutorialNextBut">NEXT &gt;</div>'
			, '', 671, 179, 'TutBublinaClick();') +
		'<div id="rightBottom"></div>' +
		F08q('kontainer_pomocnicky', kontainers_xy[1][0], kontainers_xy[1][1], 0, '', '', 129, 600) +
		F08q('kontainer_klikanie', kontainers_xy[3][0], kontainers_xy[3][1], '', '', '', 129, 600) +
		'<div id="kontainer_kliker" style="left:' + kontainers_xy[6][0] + 'px;top:' + kontainers_xy[6][1] + 'px;"></div><div id="kontainer_primary" style="' +
		PodkladPic() + ';left:' + kontainers_xy[4][0] + 'px;top:' + kontainers_xy[4][1] + 'px;"></div><div id="kontainer_secondary" style="left:' + kontainers_xy[5][
			0] + 'px;top:' + kontainers_xy[5][1] + 'px; ' + (!IsPuVisible() ? (Fake_Armypic('background-image:url(\'' + PIC_DIR + '/ui2/podklad5b_fake.jpg?v=4\');'
			, 'background-image:url(\'' + PIC_DIR + '/ui2/podklad5b.png?v=2\');')) : '') + '"></div>';

	function PodkladPic() {
		if (SuRubiny()) return 'background-image:url(\'' + PicPrefix() + 'ui2/podklad4d.png?v=5\');';
		if (JePlatina()) return 'background-image:url(\'' + PicPrefix() + 'ui2/podklad4c3.png?v=5\');';
		return '';
	}
	ErrorInVypisVsetko++;
	out += (jeLietajuceIkony ? F08q('topgradient', 0, 0, 0, '', '') : '') +
		(1 ? F08q('attack_help3', 745, 390, 5000, LOC_POUZIVAJ_PU, '', 220) : '') +
		(doDebug ? F08q('debugdiv', 00, 300, 25000, '<textarea id="debugtextarea" rows="30" onclick="F068(\'debugtextarea\',\'\');">debug text</textarea>', '', 400 +
			doDebug * 100, 150 + doDebug * 100) : '') +
		F08q('bublinahore', 10, 10, 5000, '', '', 140, 83) +
		F08q('prisla_sprava_bublina', 795, 465, 1000, LOC_BUT_sysmsg2, LOC_BUT_sysmsg2, 140, 83) +
		F08q('bublinaDole', 775, 465, 1000, '', '', 140, 83, 'F07g(\'bublinaDole\');') +
		(!jeLoged || somvofcbJS ? '' : F08q('autoRegDiv', 210, 250, (PredchadzajuciLevel > 15 ? 10 : 1) * 1500, 'auto reg', '', 250)) +
		'<div id="castice">' + casticeSTR + '</div><div id="ftexts">' + ftextsSTR + '</div>' +
		(1 ? F08q('nadpis', nadpis_xy[0], nadpis_xy[1], 0, '', '', 419, 74) : '') +
		F08q('enemy_stats', elifebg_xy[0] - 13, elifebg_xy[1] + 248, 5, '', '', 203, 239, '') +
		F08q('enemy_div', elifebg_xy[0], elifebg_xy[1], 1, '', '', 407, 522, '') +
		(jeLoged ? F08q('gametimediv', etime_xy[0], etime_xy[1], 5, '---', LOC_TIMER_TIME2 + '<br><br>' + LOC_TIMER_TIME3, 76) : '') +
		(jeLoged ? F08q('speedRewardDiv', etime_xy[0] + 70, etime_xy[1] - 11, 6, '', LOC_SPEEDREW, 76) : '') +
		F05n('i_e_zivot', elifebg_xy[0] + 66, elifebg_xy[1] + 76, 300, 22, LOC_UI_enemylife, 'z-index:3;') +
		'<div ' + (PredchadzajuciLevel < 5 ? F02o(LOC_ARMOR, 300, 'armorDiv') : 'id="armorDiv"') + ' style="left:' + hplocha_xy[0] + 'px;top:' + hplocha_xy[1] +
		'px;" onmousedown="return false;"></div><div id="LevelUPDiv"></div>' + outG;
	out += '</div><br><br>';
	ErrorInVypisVsetko++;
	ENEMY_X = hplocha_xy[0];
	ENEMY_Y = hplocha_xy[1] - 55;
	if (jeLoged) {
		out += '<br><br><br><br><div id="leader_board_container"><div id="lb_okraj1"></div><div id="lb_okraj2"></div>';
		out += '<div id="div_toptable_text">' + LOC_TOP_TABLE_CHANGES + SPC + F07f('[CHANGE Border]', 'ChangeRamcekMenu();') + '</div>';
		out += '<div id="div_top_xp"></div>';
		out += '<div id="div_top_zlato"></div>';
		out += '</div><br>';
		out_dole += '<div id="footer2"></div>';
	} else {
		out += '<br><br><br><br><br><br><br><br><br><br>';
	}
	if (!jeLoged) out +=
		'<br><center><iframe width="560" height="315" src="https://www.youtube.com/embed/lYyqyqyIJi0" frameborder="0" allowfullscreen></iframe></center><br>';
	out_dole += '<div id="ads"></div>';
	out_dole += '<div id="footer">Interactive art: ' + GAMESVETNAME + ' BETA was made by ' + tvorcovia + F07f('[' + LOC_schovajBar + ']', 'F02c();') +
		'<br>All rights reserved 2015 ; ' + (odFrienda > 0 ? 'ri:' + odFrienda : '') + ' version: g' + gameversion + '.j' + JSversion + '.j' + PHP_JSversion2 + '.p' +
		picversion + '; ' + LOC_BY_PART + ' ' + F07f(LOC_RULES_label, 'F04t();') + ' :: ' + F07f(LOC_TOU, 'F02m(\'' + LINK_NA_TERMSOFUSE + '\');') + ' :: ' + F07f(
			LOC_PRIVACY, 'F02m(\'' + LINK_NA_PRIVACY + '\');') + ' :: fcbid:' + mojefcbid + '<br>' + COOKIEspan();
	out_dole += '</div>';
	ErrorInVypisVsetko++;
	F068('body_container', out);
	F068('game_bottom', out_dole);
	_adpic = F07z(0, 6);
	if (jeSvetJS == 2 || _adpic == 3 || _adpic == 4 || _adpic == jeSvetJS) _adpic = 6;
	if (F07z(0, 100) < 75)
		_adpic = 6;
	ErrorInVypisVsetko++;
	adHintA = new Array(
		'Try this new space game<br><br>Content created by players (ever growing game)<br><br>More than 300 features<br><br>more than 3000 ships / weapons / technologies / modules by players'
		, 'Feast your eyes on the beautiful ladies and arm yourself to the teeth with badass weaponry in Army Clicker!'
		, 'Oh no! An evil witch has turned all the cute beings of Fluffy Clicker into rats! Will you save them?', '', '', 'Universe Exodus'
		, 'Check out all our games!');
	adURLA = new Array('universegenesis', 'armyclicker', 'fluffyclicker', '', '', 'universeexodus', 'clickerindustries');
	F068('ads', '<br><center><a target="_blank" href="http://www.' + adURLA[_adpic] + '.com?fcb=' + (101 + jeSvetJS) + '"><img ' + F02o(adHintA[_adpic]) +
		' class="ugAdd" src="pics_all/ads/game_ad_' + _adpic + '.jpg"></a></center>');
	if (!jeLoged) F07k('login_menoEF');
	ErrorInVypisVsetko++;
	dbgMSGjs += 'hrac35: ' + hrac[35] + ';';
	if (_loadZivot) {
		dbgMSGjs += 'knot1;';
		F06d(loadStartEnemy[0], loadStartEnemy[1], loadStartEnemy[2]);
		dbgMSGjs += 'knot1b;';
		_defEnemy = loadStartEnemy[0];
		dbgMSGjs += 'knot1c;';
		dbgMSGjs += 'knot1d;';
	} else {
		if (F054()) {
			F06d(loadStartEnemy[0], enemy[ENEMY_ZIVOT], hrac[82]);
		} else {
			F01i();
		}
	}
	ErrorInVypisVsetko++;
	F03j(herne_levelyA[hrac[35]], (enemy[2] ? enemy[2] : 99999999999999999999));
	F046();
	F045();
	F05l('hraciaPlocha', vyskaScreenu);
	if (F054()) F02t(26);
	ErrorInVypisVsetko++;
	if (jeLoged && nacitanaTopka) F06h();
	SetVyberLevelDiv();
	razVygenerovanaHra = true;
	if (JSversion != PHP_JSversion)
		return ErrorPop(LOC_RELOAD_GAME);
	ErrorInVypisVsetko++;
	window.document.title = GAME_NAME_JS;
	if (!F054() && bestPresielLevel >= 11) ZobrazAutoRegDiv();
	else F07g('autoRegDiv');
	VypisQuest();
	ErrorInVypisVsetko++;
	if (F055()) {
		if (F049() > 0) enemyZije2 = true;
		VypisMissionLabel();
		F08c('enemy_stats');
		F08c('enemy_div');
	} else {
		F07g('typMisieLabel');
	}
	ErrorInVypisVsetko++;
	StartLandingPage();
	if (jeAutoPilot)
		AutopilotStart();
	else AutopilotEnd();
	for (var _i = 0; _i < MAM_RANDOMBON; _i++)
		if (randomBonusVisible[_i] * 1 == 1)
			if (F098('randomBonusDiv' + _i))
				if (randomBonusStats[_i]) {
					F098('randomBonusDiv' + _i)
						.style.left = randomBonusStats[_i][0];
					F098('randomBonusDiv' + _i)
						.style.top = randomBonusStats[_i][1];
					F098('randomBonusDiv' + _i)
						.style.width = (randomBonusStats[_i][3]) + 'px';
					F098('randomBonusDiv' + _i)
						.style.height = (randomBonusStats[_i][4]) + 'px';
					F068('randomBonusDiv' + _i, randomBonusStats[_i][2]);
					F098('randomBonusDiv' + _i)
						.style.opacity = 1;
					F098('randomBonusDiv' + _i)
						.style.zIndex = 5900 + zIndexBonusPlus;
					F08c('randomBonusDiv' + _i);
				}
	VypisEnemyRaz();
	VypisTipOfTheDay(0);
}

function SaleVRohu() {}
var actualTip = 0;

function VypisTipOfTheDay(_i) {
	if (PredchadzajuciLevel < 10) {
		F07g('tipoftheday');
		return false;
	}
	var _out = '';
	if (!_i) _i = F07z(1, LOC_TIP.length - 1);
	actualTip = _i;
	_out += PicAt('infotippic', 'ui2/info.png', -5, 20);
	_out += '<div id="tip1"><table style="height:100%;width:100%;font-size:12px;"><tr><td>TIP #' + _i + ':&nbsp' + LOC_TIP[_i] + '</td></tr></table></div>';
	_out += F08q('nextprevtip', 325, 65, 0, FSize(12, F07f('&lt;&lt;', 'PrevTip(event);') + '&nbsp;&nbsp;' + F07f('&gt;&gt;', 'NextTip(event);')), '', 150);
	F068('tipoftheday', _out);
}

function PrevTip(e) {
	if (e.shiftKey) OdsunTips(-1);
	if (actualTip == 1) actualTip = LOC_TIP.length;
	VypisTipOfTheDay(actualTip - 1);
}

function NextTip(e) {
	if (e.shiftKey) OdsunTips(1);
	if (actualTip == LOC_TIP.length - 1) actualTip = 0;
	VypisTipOfTheDay(actualTip + 1);
}
odsunTips = 0;

function OdsunTips(_smer) {
	odsunTips += 30 * _smer;
	SetXY('tipoftheday', 155 + odsunTips, 390);
	if (odsunTips < 1500 && odsunTips > -1000) {
		setTimeout('OdsunTips(' + _smer + ');', 30);
	} else
		F07g('tipoftheday');
}

function VypisMissionLabel() {
	if (!enemyZije2) {
		F068('typMisieLabel', 'Start new mission');
		F07g('typMisieLabel');
	} else {
		if (F055() < 10000) F068('typMisieLabel', '#' + F055() + SPC + LOC_KOLO_POPIS[herne_levelyA[F055()][4]]);
		else F068('typMisieLabel', LOC_KOLO_POPIS[herne_levelyA[F055()][4]]);
		F08c('typMisieLabel');
	}
}

function VypisNoFuelDiv() {
	var _minFUEL = 0;
	if (PredchadzajuciLevel > 100) _minFUEL = 20;
	if (jeLoged && hrac[18] <= _minFUEL && F055() <= 0) {
		var _out = '<br><center>';
		if (hrac[18] <= 0) _out += LOC_nofuel1;
		else _out += LOC_nofuel1b;
		var zaKolkoF = HODINA - (PHPtime3 - hrac[31]) % HODINA;
		_out += '<br><br>';
		var _fuelokna = '';
		var _fuelokna1 = '<img src="' + PicPrefix() + 'ui2/nofuel1.png?v=' + picversion + '" class="wbh" ' + F02o(LOC_nofuel2) + ' onclick="ClickFreeFuel();">';
		var _fuelokna2 = '<img src="' + PicPrefix() + 'ui2/nofuel2.png?v=' + picversion + '" class="wbh" ' + F02o(LOC_nofuel3) + ' onclick="F02m(\'' + FAN_PAGE_LINK +
			'\');">';
		var _fuelokna3 = '<img src="' + PicPrefix() + 'ui2/nofuel3.png?v=' + picversion + '" class="wbh" ' + F02o(LOC_nofuel4) + ' onclick="F01y();">';
		var freefuelmix = F07z(1, 3);
		_fuelokna = _fuelokna1 + SPC + _fuelokna2 + SPC + _fuelokna3;
		if (PredchadzajuciLevel > 70) {
			if (freefuelmix == 2) _fuelokna = _fuelokna2 + SPC + _fuelokna3 + SPC + _fuelokna1;
			if (freefuelmix == 3) _fuelokna = _fuelokna3 + SPC + _fuelokna1 + SPC + _fuelokna2;
		}
		_out += _fuelokna;
		_out += '<br><br><span id="nofueldivspan">' + LOC_nofuel5 + F099(zaKolkoF) + 's</span>';
		_out += '</center>';
		F068('nofueldiv', _out);
		F08c('nofueldiv');
	} else
		F07g('nofueldiv');
}

function COOKIEspan() {
	return '<span class="clickspan" onclick="CookiePopInfo();">Game is saving cookies-deal with it - click for more info</span>';
}

function CookiePopInfo() {
	var _cookietext =
		'We use cookies to save game settings, so you don`t have to setup your settings each page load.<br><br>We also save cookies of your ingame nick and ingame password so you do not have to type it with each page load.';
	if (povoleneCookies) _cookietext +=
		'<br><br>You can turn the cookies off <span class="clickspan" onclick="povoleneCookies=false; CookiePopInfo();">[here]</span> but you have to do it with every page load, because we can`t save it because you don`t allow us to save it... ';
	else
		_cookietext += '<br><br>turn ON cookies <span class="clickspan" onclick="povoleneCookies=true; CookiePopInfo();">[here]...</span>';
	_cookietext += '<br><br>We didn`t come up with this nonsense...';
	_cookietext += '<br><br>the cookie will not be used for any purpose other than the one stated';
	F07b(_cookietext, 600, "Cookies");
}

function Fake_Armypic(_textfake, _inak) {
	if (!_inak) _inak = '';
	return _inak;
}

function ClickFreeFuel() {
	if (hrac[91] > 1) {
		var _rndFreeFuel = F07z(1, 3);
		if (_rndFreeFuel > hrac[91] - 1) _rndFreeFuel = hrac[91] - 1;
		if (_rndFreeFuel > 0) {
			hrac[91] -= _rndFreeFuel;
			F02t(91, _rndFreeFuel * 1000 + hrac[91]);
			F03z(_rndFreeFuel);
			F07g('nofueldiv');
			F033(_rndFreeFuel, 240, 230, 'icon_fuel', 240, 120, fuel_xy[0], fuel_xy[1]);
			setTimeout('VypisNoFuelDiv();', 300);
		}
	} else
		F03t(ThumbsUpGirl('', '<br>') + LOC_nofuel6, '...');
}

function ThumbsUpGirl(_prefix, _sufix) {
	if (jeSvetJS == 1) return _prefix + '<img alt="empty shop pic" class="" src="' + PicPrefix() + 'ui2/thumbsupgirl.png">' + _sufix;
	return '';
}
var klikBlok_xy = [];
var klikBlok_fakebut_xy = [];
var klikBlok_but_xy = [];
var klikBlok_icon_xy = [];
var klikBlok_value_xy = [];
var klikBlok_shopbut_xy = [];
shopButSize2 = 24;
var klikBlok_size = [];
var klikanieFun = new Array('F06e(0,1);', 'F050(1);', 'F06c(1);', 'F02u(1);');
var klikBlok_shopbut_xy = new Array(100, 92);

function Vypis_kontainer_klikanie() {
	if (!F055() && PredchadzajuciLevel < 3) {
		F068('kontainer_klikanie', '');
		return false;
	}
	if (!focused)
		return false;
	klikBlok_size = new Array(161, 136);
	if (PredchadzajuciLevel < 190) {
		var rozpal = 145;
		var uvod_y = 20;
	} else {
		var rozpal = 140;
		var uvod_y = 40;
	}
	klikBlok_xy[0] = new Array(5, uvod_y);
	klikBlok_xy[1] = new Array(klikBlok_xy[0][0], klikBlok_xy[0][1] + rozpal);
	klikBlok_xy[2] = new Array(klikBlok_xy[0][0], klikBlok_xy[1][1] + rozpal);
	klikBlok_xy[3] = new Array(klikBlok_xy[0][0], klikBlok_xy[2][1] + rozpal);
	klikBlok_but_xy[0] = new Array(630, 75);
	klikBlok_but_xy[1] = new Array(klikBlok_but_xy[0][0], klikBlok_but_xy[0][1] + rozpal);
	klikBlok_but_xy[2] = new Array(klikBlok_but_xy[0][0], klikBlok_but_xy[1][1] + rozpal);
	klikBlok_but_xy[3] = new Array(klikBlok_but_xy[0][0], klikBlok_but_xy[2][1] + rozpal);
	klikBlok_icon_xy = new Array(9, 110);
	klikBlok_value_xy = new Array(8, 112);
	klikBlok_fakebut_xy = new Array(40, 18);
	var _out = '';
	_out += F08q('consumDiv', 0, 0, 1, ConsumDivVnutro(), '', 190, 40);
	_out += KlikaciblokVytvor(0);
	_out += KlikaciblokVytvor(1);
	_out += KlikaciblokVytvor(2);
	_out += '<div id="quickSaleDiv" class="wbh" onclick="QuickSaleClick();"></div>';
	if (JeAmmoVis()) _out += KlikaciblokVytvor(3);
	F068('kontainer_klikanie', _out);
	SetKBlokValues();
	if (queueUtok > 0) F07g('klikBut_fake_n0');
	if (queueGold > 0) F07g('klikBut_fake_n1');
	if (queueHeal > 0) F07g('klikBut_fake_n2');
	if (queueAmmo > 0) F07g('klikBut_fake_n3');
	if (!F055())
		if (najlepsiGemPomer > 0)
			if (F07z(0, 100) <= 20) {
				F068('quickSaleDiv', '+<b>' + F080(najlepsiGemPomer, 10) + '</b>' + IconPic('icons2/icon_skull', -15) + ' for 1$');
				F08c('quickSaleDiv');
			}
}

function QuickSaleClick() {
	SpecialOfferPopup();
}

function PrazdnyBlok(_i) {
	return PicAt('disabled_' + _i, 'ui2/grey_' + (jeSvetJS == 1 ? 'klikfake2.png' : '4.png'), klikBlok_xy[_i][0], klikBlok_xy[_i][1], 2, '', 161, 136);
}
cons1 = 20;
cons1b = 50;
cons2 = 50;
cons3 = 1000;

function MaConsum() {
	if (PredchadzajuciLevel < 190) return false;
	return true;
}

function ConsumDivVnutro() {
	if (!MaConsum()) return '';
	var bombhints = [LOC_C1, LOC_C2, LOC_C3];
	var _out = '';
	var cons_hint = ['', LOC_cons1 + ': ' + PCisloJS2(F0w(1) * cons1 + itemBonusOverview[181]), LOC_cons2 + ': ' + PCisloJS2(F09f(F05u() * 0.01 * cons2))
		, LOC_cons1 + ': ' + PCisloJS2(F0w(1) * cons1b + itemBonusOverview[181] * 2) + '<br>' + LOC_cons2 + ': ' + PCisloJS2(F09f(F05u() * 0.01 * cons2)) + '<br>' +
		LOC_cons3 + ': ' + PCisloJS2(ClickGoldValue(1) * cons3)];
	if (itemBonusOverview[154] > 0) cons_hint[1] += '<br>(' + PCisloJS2(KratPercentoJS(F0w(1) * cons1 + itemBonusOverview[181], itemBonusOverview[154])) + ')';
	for (var i = 3; i >= 1; i--) {
		var _pocetSTR = LOC_amount + ': ' + PCisloJS2(hrac[91 + i]);
		if (hrac[91 + i] <= 0) {
			_pocetSTR = LOC_clicktobuy;
			if (i == 3) continue;
		}
		if (pomocBonusyEffects[219]) cons_hint[2] = cons_hint[1];
		if (pomocBonusyEffects[220]) {
			if (pomocBonusyEffects[219]) cons_hint[2] += '<br>' + LOC_cons2 + ': ' + PCisloJS2(F09f(F05u() * 0.2));
			else cons_hint[2] = LOC_cons2 + ': ' + PCisloJS2(F09f(F05u() * 0.2));
		}
		if (itemBonusOverview[190] > 0) cons_hint[i] += '<br>+' + PCisloJS2(itemBonusOverview[190]) + '&nbsp;XP';
		if (hrac[91 + i] > 0) cons_hint[i] += '<br><br>' + F08s(LOC_shiftshop);
		cons_hint[i] += '<br><br>' + FCol('#696969', LOC_shift_tomass);
		var _extra = '';
		if (i == 2) {
			if (pomocBonusyEffects[219] && pomocBonusyEffects[220]) _extra = '_3';
			else if (pomocBonusyEffects[219]) _extra = '_1';
			else if (pomocBonusyEffects[220]) _extra = '_2';
		}
		_out += PicAt('consum' + i, 'ui2/consum' + i + (hrac[91 + i] > 0 ? _extra : 'd') + '.jpg', 50 * i - 25, -5, 1, '<b>' + bombhints[i - 1] + '</b><br>' +
			cons_hint[i] + '<br><br>' + _pocetSTR, 40, 40, '', 'wbh', 'UseConsum(event,' + i + ');');
	}
	return _out;
}
var drzimBombyZaGule = 0;

function UseConsum(evn, _i) {
	drzimBombyZaGule = _i;
	F011();
	F03b();
	if (hrac[91 + _i] > 0 && !evn.shiftKey && F055()) {
		if (_i == 2)
			if (!pomocBonusyEffects[219] && !pomocBonusyEffects[220])
				if (hrac[17] >= F05u()) return false;
		useConsumQueue.push(_i);
	} else {
		if (_i == 1) OpenShop(51, -1);
		if (_i == 2) OpenShop(-157, -1);
	}
	setTimeout('if(drzimBombyZaGule) UseConsum3(' + _i + ');', 400);
}

function UseConsum3(_i) {
	if (_i == 2)
		if (!pomocBonusyEffects[219] && !pomocBonusyEffects[220])
			if (hrac[17] >= F05u()) return false;
	useConsumQueue.push(_i);
	if (drzimBombyZaGule) setTimeout('if(drzimBombyZaGule) UseConsum3(' + _i + ');', 70);
}

function UseConsum2(_i) {
	if (hrac[91 + _i] <= 0)
		return false;
	F03b();
	hrac[91 + _i]--;
	hrac[95]++;
	F02t(55, _i);
	if (_i == 1) {
		if (PocetPrejdeni(F055()) > 0) F0h(KratPercentoJS(KratPercentoJS(F0w(1) * cons1 + itemBonusOverview[181], itemBonusOverview[154]), itemBonusOverview[110]), 1
			, 0);
		else F0h(KratPercentoJS(F0w(1) * cons1 + itemBonusOverview[181], itemBonusOverview[110]), 1, 0);
	}
	if (_i == 2) {
		if (pomocBonusyEffects[219] > 0 || pomocBonusyEffects[220] > 0) {
			if (pomocBonusyEffects[219]) {
				if (PocetPrejdeni(F055()) > 0) F0h(KratPercentoJS(KratPercentoJS(F0w(1) * cons1 + itemBonusOverview[181], itemBonusOverview[154]), itemBonusOverview[110])
					, 1, 0);
				else F0h(KratPercentoJS(F0w(1) * cons1 + itemBonusOverview[181], itemBonusOverview[110]), 1, 0);
			}
			if (pomocBonusyEffects[220]) {
				F03c(F09f(F05u() * 0.20), 1);
			}
		} else
			F03c(F09f(F05u() * 0.01 * cons2));
	}
	if (_i == 3) {
		F0h(KratPercentoJS(F0w(1) * cons1b + itemBonusOverview[181] * 2, itemBonusOverview[110]), 1, 0);
		F03c(F09f(F05u() * 0.01 * cons2));
		F038(ClickGoldValue(1) * cons3, 0);
	}
	F06n(itemBonusOverview[190]);
	F068('consumDiv', ConsumDivVnutro());
}

function KlikaciblokVytvor(_i) {
	if (!jeLoged)
		if (IsTutorial2() && bestPresielLevel < 1 && _i == 2) return PrazdnyBlok(_i);
	if (IsSimpleTutorialLog()) {
		if (_i == 1)
			if (bestPresielLevel < 3 && F055() < 3) return PrazdnyBlok(_i);
		if (_i == 2) return PrazdnyBlok(_i);
	}
	if (_i == 3 && !IsPuVisible()) return PrazdnyBlok(_i);
	var klikBlok_hint = '';
	if (jeSvetJS == 1 && !jeLoged) {
		var _KpicBG = PicAt('klikBlok_bg', 'ui2/klikBlok_bg_fake' + _i + '.jpg', 0, 0, 1, '', 161, 136, '', '', '');
		var _KpicD = '';
		var _KpicN = '';
	} else {
		var _KpicBG = F08q('klikBlok_bg' + _i, 0, 0, 2, '', '', klikBlok_size[0], klikBlok_size[1], '', 'klikBlok_bg' + (jeBoostedClick[_i] ? '2' : ''));
		var _KpicD = F08q('klikBut_fake_d' + _i, 0, 0, 2, '', '', 78, 78, '', 'klikBlok_fakebut_' + _i + '_d');
		var _KpicN = F08q('klikBut_fake_n' + _i, 0, 0, 3, '', '', 78, 78, '', 'klikBlok_fakebut_' + _i + '_n');
	}
	var _KpicK = F08q('klikBut_fake_k' + _i, 0, 0, 1002, '', '', 78, 78, '', '', 'KlikF05i(' + _i + ',1);', 'KlikActionButUP(' + _i + ');');
	var _KpicAll = F08q('klikBut_fake' + _i, klikBlok_fakebut_xy[0], klikBlok_fakebut_xy[1], 0, _KpicD + _KpicN + _KpicK, '', 78, 78, '', 'klikBlok_fakebut_' + _i);
	var _Kicon = '';
	var _Kvalue = F08q('klikBlok_value' + _i, klikBlok_value_xy[0], klikBlok_value_xy[1] + (PredchadzajuciLevel < 200 ? -1 : 2), 2, '---', LOC_ACTION_NAME_all[_i]
		, 100, 20, '', 'pomoc_value' + (PredchadzajuciLevel < 200 ? 2 : ''));
	if ((_i <= 1 && PredchadzajuciLevel < 2) || (_i == 2 && PredchadzajuciLevel < 5) || (_i == 3 && PredchadzajuciLevel < 11)) var _Kshopbut = '';
	else var _Kshopbut = F08q('klikBlok_shopbut' + _i, klikBlok_shopbut_xy[0], klikBlok_shopbut_xy[1], 2, '', LOC_SHOP_LABEL1 + ' :: ' + LOC_ACTION_NAME_all[_i]
		, shopButSize2, shopButSize2, 'OpenQuickShop(' + (30 + (_i + 1) * 2 - 1) + ',-1);', 'pomoc_shopbut');
	if (_i == 0)
		if (itemBonusOverview[101] > 0 || itemBonusOverview[153] > 0 || itemBonusOverview[79] > 0) _Kshopbut += PicAt('miniinfoclick' + _i, 'ui2/miniinfo.png', 135
			, 108, 1001, LOC_informacie, 24, 24, 'MiniClickInfo(' + _i + ');');
	return F08q('klikBlok_div' + _i, klikBlok_xy[_i][0], klikBlok_xy[_i][1], 0, _KpicBG + _KpicAll + _Kicon + _Kvalue + _Kshopbut, klikBlok_hint, klikBlok_size[0]
		, klikBlok_size[1], '', 'klikdivClass' + (PredchadzajuciLevel > 10 ? 'nic' : ''));
}

function MiniClickInfo(_i) {
	if (_i == 0) {
		var _out = '<table cellspacing="10" style="margin-left:auto;margin-right:auto;text-align:right;">';
		_out += '<tr><td class="mini6">' + LOC_ATTACK_INFO1 + '</td><td>' + PCisloJS2(totalDamageKlikBezC4) + '</td><td></td></tr>';
		if (itemBonusOverview[79] > 0) _out += '<tr><td class="mini6">' + LOC_ATTACK_INFO2 + '<br>(' + LOC_SHOP_MAX + ': ' + PCisloJS2(MAX_PRELEV_DPC) + ')</td><td>' +
			PCisloJS2(ClickAttackValue(0)) + '</td><td>(' + itemBonusOverview[79] + '%)</td></tr>';
		if (itemBonusOverview[101] > 0)
			_out += '<tr><td class="mini6">' + LOC_ATTACK_INFO3 + '</td><td>' + PCisloJS2(KratPercentoJS(ClickAttackValue(0), itemBonusOverview[101])) + '</td><td>(+' +
			itemBonusOverview[101] + '%)</td></tr>';;
		if (itemBonusOverview[153] > 0)
			_out += '<tr><td class="mini6">' + LOC_ATTACK_INFO4 + '</td><td>' + PCisloJS2(KratPercentoJS(KratPercentoJS(ClickAttackValue(0), itemBonusOverview[153])
				, itemBonusOverview[101])) + '</td><td>(+' + itemBonusOverview[153] + '%)</td></tr>';;
		if (itemBonusOverview[153] > 0)
			_out += '<tr><td class="mini6">' + LOC_ATTACK_INFO5 + '</td><td>' + PCisloJS2(KratPercentoJS(ClickAttackValue(0), itemBonusOverview[153])) + '</td><td>(+' +
			itemBonusOverview[153] + '%)</td></tr>';;
		if (itemBonusOverview[128] > 0)
			_out += '<tr><td class="mini6">' + LOC_ATTACK_INFO6 + '</td><td>+' + PCisloJS2(itemBonusOverview[128]) + '</td><td></td></tr>';;
		DoPopup2(_out, LOC_informacie, 'infoPopup2', 600, 1);
	}
}
var klikamHACK = -1;
var klikamHACK2 = 0;

function KlikF05i(_i, _real) {
	if (!_real) _real = 0;
	klikamHACK = _i;
	if (_i == 0) F06e(0, _real);
	if (_i == 1) F050(1);
	if (_i == 2) F06c(1);
	if (_i == 3) F02u(1);
	if (!F055())
		if (_i != 1 || PredchadzajuciLevel < 40) {
			F07g('autoclickergif');
			ZrobFtext3(klikBlok_but_xy[_i][0], klikBlok_but_xy[_i][1] - 40, '<b>' + FCol('#c50', LOC_start_mis_first) + '</b>', 15, 200);
		}
}

function KlikActionButUP(_i) {
	klikamHACK = -1;
	if (_i == 0 && queueUtok == 0) F08c('klikBut_fake_n' + _i);
	if (_i == 1 && queueGold == 0) F08c('klikBut_fake_n' + _i);
	if (_i == 2 && queueHeal == 0) F08c('klikBut_fake_n' + _i);
	if (_i == 3 && queueAmmo == 0) F08c('klikBut_fake_n' + _i);
}

function SetKBlokValues() {
	SetKBlokValue(0);
	SetKBlokValue(1);
	SetKBlokValue(2);
	SetKBlokValue(3);
}
var jeBoostedClick = new Array(0, 0, 0, 0, 0);

function SetKBlokValue(_i) {
	if (_i == 0) _outT_cisto = ClickAttackValue(1);
	if (_i == 1) _outT_cisto = ClickGoldValue(1);
	if (_i == 2) _outT_cisto = ClickHealValue(1);
	if (_i == 3) _outT_cisto = ClickAmmoValue(1);
	if (_i == 0) _outT = ClickAttackValue();
	if (_i == 1) _outT = ClickGoldValue();
	if (_i == 2) _outT = ClickHealValue();
	if (_i == 3) _outT = ClickAmmoValue();
	jeBoostedClick[_i] = (_outT_cisto < _outT ? 1 : 0);
	if (PredchadzajuciLevel >= 5) F068('klikBlok_value' + _i, PCisloJS2(_outT, (jeBoostedClick[_i] ? 'buffedText' : '')));
	else {
		if (_i == 0) _doplnok = 'dmg';
		if (_i == 1) _doplnok = 'gold';
		if (_i == 2) _doplnok = 'life';
		if (_i == 3) _doplnok = 'ammo';
		F068('klikBlok_value' + _i, (_i != 0 ? FSize(12, '+') : '') + PCisloJS2(_outT, (jeBoostedClick[_i] ? 'buffedText' : '')) + FSize(9, '&nbsp;' + _doplnok +
			' per click'));
	}
}
var pomocnik_xy = [];
var pomocnik_size = [];
var pomocnik_icon_xy = [];
var pomocnik_upgbut_xy = [];
var pomocnik_shopbut_xy = new Array(72, 65);
var pomocnik_value_xy = [];
var pom_w = 76;
var pom_h = 95;
var pom_t = 12;
var pom_l = 0;
var pom_u_x = 72;
var pom_u_y = 0;

function PomocnickaVytvor(_i) {
	if (_i == 0) var _outT_cisto = F0w(1) + (bestPresielLevel >= 2 ? 1 : 0);
	if (_i == 1) var _outT_cisto = F012(1) + (PredchadzajuciLevel >= 3 ? 1 : 0);
	if (_i == 2) var _outT_cisto = F01o(1) + (PredchadzajuciLevel >= 15 ? 1 : 0);
	if (_i == 3) var _outT_cisto = F0v(1) + (PredchadzajuciLevel >= 31 ? 1 : 0);
	if (_outT_cisto == 0) {
		return PicAt('pomocpic' + _i, 'ui2/grey_0.png?v2=' + picversion, pomocnik_xy[_i][0], pomocnik_xy[_i][1], 2, '', 126, 150, '');
	}
	var pomoc_hint = LOC_pomoc_popis[_i] + '<br><br>' + F09a('mini3', LOC_pomoc_HINT[_i] + '<br><br>' + LOC_LEN_KED_HRAS);
	if (_i == 1)
		if (itemBonusOverview[159] > 0) {
			var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
				.join(itemBonusOverview[55]);
			pomoc_hint += FSize(12, '<br><hr>+' + PCisloJS2(KratPercentoJS(itemBonusOverview[159], itemBonusOverview[55])) + ' ' + LOC_item_popis[159]);
			pomoc_hint += FSize(12, '<br>(' + _LOC_WITHOUT_PER + ':&nbsp;' + PCisloJS2(itemBonusOverview[159]) + ')');
		}
	if (suHelpers) {
		var __i = _i * 1 + 1;
		var _Ppic = PicAt('pomocpic' + _i, 'ui2/pomoc/pom' + (GetPomocHelper(__i)) + '_' + __i + '.png?v=' + picversion, pom_l, pom_t, 2, pomoc_hint, pom_w, pom_h, (
			PredchadzajuciLevel >= 150 ? 'F02i(1); ZobrazPomocSub(' + __i + ');' : 'OpenQuickShop(' + (30 + (_i + 1) * 2) + ',-1);'));
	} else
		var _Ppic = PicAt('pomocpic' + _i, 'ui2/pomoc_pic' + _i + (hrac[48 + _i] > 0 ? '_u' : '') + '.png?v=' + picversion, pom_l, pom_t, 2, pomoc_hint, pom_w, pom_h
			, 'OpenQuickShop(' + (30 + (_i + 1) * 2) + ',-1);');
	var _Picon = '';
	if (PredchadzajuciLevel >= MODULE_LVL_REQ || itemBonusOverview[167] > 0)
		var _Pupgradebut = F08q('pomoc_upgbut' + _i, pomocnik_upgbut_xy[0], pomocnik_upgbut_xy[1], 101, PomocBonusPerSTR(_i), F09a('imper', LOC_pomoc2power), 50, 50
			, 'F02i(1); UpgradePomPop(' + _i + ');', 'pomoc_upgbut');
	else var _Pupgradebut = '';
	var _Pshopbut = F08q('pomoc_shopbut' + _i, pomocnik_shopbut_xy[0], pomocnik_shopbut_xy[1], 101, '', LOC_SHOP_LABEL2 + ' :: ' + LOC_ACTION_NAME_all[_i]
		, shopButSize2, shopButSize2, 'OpenQuickShop(' + (30 + (_i + 1) * 2) + ',-1);', 'pomoc_shopbut');
	var _Pvalue = F08q('pomoc_value' + _i, pomocnik_value_xy[0], pomocnik_value_xy[1] - (PredchadzajuciLevel < 200 ? 2 : 0), 2, '---', '', 110, 20, ''
		, 'pomoc_value' + (PredchadzajuciLevel < 200 ? 2 : ''));
	return F08q('pomocnik_div' + _i, pomocnik_xy[_i][0], pomocnik_xy[_i][1], 10 - _i, _Ppic + _Picon + _Pvalue + _Pupgradebut + _Pshopbut, '', pomocnik_size[0]
		, pomocnik_size[1], '', 'pomocnik_bg' + (jeBoostedSec[_i] ? '2' : ''));
}

function GetPomocHelper(__i) {
	var _helperPic = F079('moj_pom' + __i, (__i == 1 || __i == 4 ? 1 : 2));
	if (!MamPomocnicku(_helperPic, __i)) return 1;
	return _helperPic;
}

function UpgradePomBuy(_pomi) {}

function StrongerCheck() {
	var _forceVypisHraca = false;
	if (hrac[48] > 0 && hrac[48] <= PHPtime2) {
		hrac[48] = 0;
		F02t(45, 0);
		_forceVypisHraca = true;
	}
	if (hrac[49] > 0 && hrac[49] <= PHPtime2) {
		hrac[49] = 0;
		F02t(45, 1);
		_forceVypisHraca = true;
	}
	if (hrac[50] > 0 && hrac[50] <= PHPtime2) {
		hrac[50] = 0;
		F02t(45, 2);
		_forceVypisHraca = true;
	}
	if (hrac[51] > 0 && hrac[51] <= PHPtime2) {
		hrac[51] = 0;
		F02t(45, 3);
		_forceVypisHraca = true;
	}
	if (_forceVypisHraca) F046();
}
pomocnik_upgbut_xy = new Array(78, 7);

function Vypis_kontainer_pomocnicky() {
	if (!focused)
		return false;
	pomocnik_size = new Array(126, 150);
	var rozpal = -1;
	pomocnik_xy[0] = new Array(2, 2);
	pomocnik_xy[1] = new Array(pomocnik_xy[0][0], pomocnik_xy[0][1] + pomocnik_size[1] + rozpal);
	pomocnik_xy[2] = new Array(pomocnik_xy[0][0], pomocnik_xy[1][1] + pomocnik_size[1] + rozpal);
	pomocnik_xy[3] = new Array(pomocnik_xy[0][0], pomocnik_xy[2][1] + pomocnik_size[1] + rozpal);
	pomocnik_icon_xy = new Array(13, 123);
	pomocnik_value_xy = new Array(14, 127);
	var _out = '';
	_out += PomocnickaVytvor(0);
	_out += PomocnickaVytvor(1);
	_out += PomocnickaVytvor(2);
	if (JeAmmoVis()) _out += PomocnickaVytvor(3);
	F068('kontainer_pomocnicky', _out);
	SetPomocValues();
}

function SetPomocValues() {
	SetPomocValue(0);
	SetPomocValue(1);
	SetPomocValue(2);
	SetPomocValue(3);
}
var jeBoostedSec = new Array(0, 0, 0, 0, 0);
var skutocneHodnoty = [0, 0, 0, 0, 0, 0, 0];

function SetPomocValue(_i) {
	if (_i == 0) _outT_cisto = F0w(1);
	if (_i == 1) _outT_cisto = F012(1);
	if (_i == 2) _outT_cisto = F01o(1);
	if (_i == 3) _outT_cisto = F0v(1);
	if (_i == 0) _outT = F0w();
	if (_i == 1) _outT = F012();
	if (_i == 2) _outT = F01o();
	if (_i == 3) _outT = F0v();
	jeBoostedSec[_i] = (_outT_cisto < _outT ? 1 : 0);
	if (skutocneHodnoty[_i] > 0) _outT = skutocneHodnoty[_i];
	F068('pomoc_value' + _i, PCisloJS2(_outT, (_outT_cisto < _outT ? 'buffedText' : '')) + (PredchadzajuciLevel > 100 ? '' : '&nbsp;/s'));
}

function MaAutoclikery() {
	if (PredchadzajuciLevel >= autoclickerlevel - 10 * Math.max(0, hrac[11] - 5)) return true;
	return false;
}
jeautoclicker = 0;
var autoclickerlevel = 50;

function Vypis_kontainer_kliker() {
	if (PredchadzajuciLevel > 40 && PredchadzajuciLevel < autoclickerlevel) {
		var _out = '';
		_out += PicAt('autodis', 'ui2/clicker_dis.png', 0, 0, 1, LOC_AUTODIS, 114, 41, 'F07b(LOC_AUTODIS);');
		F068('kontainer_kliker', _out);
		return false;
	}
	if (PredchadzajuciLevel < autoclickerlevel) {
		F068('kontainer_kliker', '');
		return false;
	}
	var AUTO_CLI_HINT = LOC_AUTOCLIKER_LABEL + F08s('<br>' + LOC_AUTOCLIKER_skratka) + '<br><br>' + F09a('mini3', LOC_AUTOCLIKER_HINT);
	var _out = '';
	_out += F08q('autoklikerdiv' + (jeautoclicker ? 1 : 0), 0, 0, 1, '', AUTO_CLI_HINT, '', '', 'ToggleAutoClicker(-1);');
	_out += F08q('autoklikerValue', 7, 41, 2, PCisloJS2(hrac[65]), AUTO_CLI_HINT, 70, '', '', '', 'ToggleAutoClicker(-1);');
	_out += PicAt('autoclickerplusbut', 'ui2/pu_plus.png', 3, 8, 3, LOC_SHOP_LABEL2, 24, 24, '', '', 'OpenQuickShop(41,-1); return false;');
	F068('kontainer_kliker', _out);
}

function ToggleAutoClicker(_forceTo) {
	manualKlik = 0;
	ResetQueue();
	if (jeautoclicker) jeautoclicker = 0;
	else jeautoclicker = 1;
	if (_forceTo >= 0) jeautoclicker = _forceTo;
	if (jeautoclicker == 0)
		if (jeAutoPilot) {
			AutopilotEnd();
		}
	if (jeautoclicker == 0) F07g('autoclickergif');
	F067('jeautok' + idHracaHlava, jeautoclicker, DEFCAS);
	Vypis_kontainer_kliker();
	ZobrazActioniButs();
}

function PridajAutoKlicker(_kolko) {
	hrac[65] += _kolko * 1;
	F068('autoklikerValue', PCisloJS2(hrac[65]));
	F068('hs_autoclickery', PCisloJS2(hrac[65]));
}

function JeFuelVisible() {
	if (PredchadzajuciLevel >= 10 || hrac[18] < 20) return true;
	return false;
}

function VisibleChests() {
	if (PredchadzajuciLevel >= 120) return true;
	return false;
}
chestBut_x = 240;
chestBut_y = 57;
var chest_keyREQ = [0, 1, 3, 5, 6, 10];

function ZoberObsahChesty(_openChestMenu) {
	chestodmeny = hrac[108].split(';');
	for (var i in chestodmeny) {
		var _odmena1 = chestodmeny[i].split('x');
		if (_odmena1[1] * 1 == 40)
			F03z(_odmena1[0] * 1, 1);
		if (_odmena1[1] * 1 == 44)
			PridajAutoKlicker(_odmena1[0] * 1);
		if (_odmena1[1] * 1 == 45)
			PridajPlatinu(_odmena1[0] * 1);
		if (_odmena1[1] * 1 == 156)
			hrac[92] = hrac[92] * 1 + _odmena1[0] * 1;
		if (_odmena1[1] * 1 == 157)
			hrac[93] = hrac[93] * 1 + _odmena1[0] * 1;
		if (_odmena1[1] * 1 == 158)
			hrac[94] = hrac[94] * 1 + _odmena1[0] * 1;
		if (_odmena1[1] * 1 == 185)
			hrac[98] = hrac[98] * 1 + _odmena1[0] * 1;
		if (_odmena1[1] * 1 == 668) {
			var _chi = _odmena1[0] * 1;
			hracVeciA[_chi] = 1;
			hrac[H_VECI] = hracVeciA.join(';');
		}
		if (_odmena1[1] * 1 == 666) {
			var _plusStackIndex = _odmena1[0] * 1;
			if (!extraStacksA[_plusStackIndex]) extraStacksA[_plusStackIndex] = 1;
			else extraStacksA[_plusStackIndex] += 1;
		}
	}
	hrac[108] = '';
	F02t(123);
	F061('event_chest_pop');
	F061('infoPopup2');
	F046();
	if (_openChestMenu) OpenChestMenu();
	if (hrac[106] < 6)
		F06o(1, 1, 0, 1);
}
var eventChestaPHP = 0;

function ZobrazOtvorenuChestu(_chestID) {
	var _out = '';
	var eventChesta = eventChestaPHP;
	chestodmeny = hrac[108].split(';');
	for (var i in chestodmeny) {
		var _odmena1 = chestodmeny[i].split('x');
		if (_odmena1[1] * 1 == 40)
			_out += PCisloJS2(_odmena1[0]) + 'x ' + IconPic('icons2/icon_fuel', -10);
		if (_odmena1[1] * 1 == 44)
			_out += PCisloJS2(_odmena1[0]) + 'x ' + IconPic('icons2/icon_clicker', -10);
		if (_odmena1[1] * 1 == 45)
			_out += PCisloJS2(_odmena1[0]) + 'x ' + IconPic('icons2/icon_platina', -10);
		if (_odmena1[1] * 1 == 156)
			_out += PCisloJS2(_odmena1[0]) + 'x ' + IconPicWH('veci/vec585', -10, 40);
		if (_odmena1[1] * 1 == 157)
			_out += PCisloJS2(_odmena1[0]) + 'x ' + IconPicWH('veci/vec586', -10, 40);
		if (_odmena1[1] * 1 == 158)
			_out += PCisloJS2(_odmena1[0]) + 'x ' + IconPicWH('veci/vec655', -10, 40);
		if (_odmena1[1] * 1 == 185) {
			eventChesta = true;
			_out += PCisloJS2(_odmena1[0]) + 'x ' + IconPic('icons2/icon_event' + event_picK, -10);
		}
		if (_odmena1[1] * 1 == 666)
			_out += '<br><br>' + LOC_STACKEXTRA + '<div><img alt="item" ' + F02o(VypisBonusNEW(itemyVShopeA[_odmena1[0]], 1)) + ' style="margin-bottom:-40px;" src="' +
			PicPrefix() + 'veci/vec' + _odmena1[0] + '.png?v=' + (picversion + picversionVeci) + '">' + SPC + F07f(LOC_SHOP_LABEL1, 'ZoberObsahChesty(0); OpenShop1(' +
				1000000 + _odmena1[0] + ',0,1);') + '</div>';
		if (_odmena1[1] * 1 == 668)
			_out += '<br><br><div><img alt="item" ' + F02o(VypisBonusNEW(itemyVShopeA[_odmena1[0]], 1)) + ' style="margin-bottom:-40px;" src="' + PicPrefix() +
			'veci/vec' + _odmena1[0] + '.png?v=' + (picversion + picversionVeci) + '">' + '</div>';
		if (_odmena1[1] * 1 == 667)
			_out += LOC_CHESTFULL;
		if (i > 0 && i % 3 == 0) _out += '<br><br>';
		else _out += SPC + SPC;
	}
	if (!eventChesta) _out += '<br>';
	_out += '<br>' + F09d(LOC_TAKE, 'ZoberObsahChesty(1);', '');
	if (eventChesta) {
		F068('event_chest_pop', '<img class="vobj" src="' + PicPrefix() + 'ui2/chest_popup_' + (_chestID ? JeChestaSpecial() : 0) + '.png?v=' + picversion +
			'"><div class="chestpopupdivin">' + _out + '</div>');
		ShowJSxy('event_chest_pop', F09f((sirkaScreenuTotal - 800) * 0.5), 220);
		F061('infoPopup2');
	} else
		F07e(_out, LOC_CHEST_LABEL, 'infoPopup2', 600, 1, '', 1, 0, 0, 40, 0, '', '', 0, 0);
	F061('infoPopup');
}

function UnlockChest(_i) {
	if (hrac[106] < chest_keyREQ[_i]) {
		F061('infoPopup');
		OpenShop(-39, 0);
	} else if (chest_keyREQ[_i] && chest_keyREQ[_i] > 0) {
		if (F055())
			return F03t(LOC_CHEST_MIS);
		if (hrac[108] == 0 || hrac[108] == '') {
			if (IsRewardVisible()) {
				F061('infoPopup');
				TakeNewF08b();
				return F03t(LOC_TAKE_REWARD_FIRST, ' ');
			}
			hrac[106] -= chest_keyREQ[_i];
			F068('hs_kluc', hrac[106]);
			F02t(122, _i);
			var _out = 'LOADING ...';
			DoPopup2(_out, LOC_CHEST_LABEL, 'infoPopup2', 600, 1);
			OpenChestMenu();
			F06o(1, 1, 1, 1);
		} else {
			ZobrazOtvorenuChestu(i);
		}
	}
}
var kluceNaBednu4 = 30;
var bedneXY = -100;
var _pocetBedien = 0;
var specialChestTime = 0;

function JeChestaSpecial() {
	if (PredchadzajuciLevel < 500) return false;
	if (PHPtime2 < specialChestTime) return eventChestaPHP;
	return 0;
}

function OpenChestMenu() {
	if (F055()) return false;
	if (hrac[108] != 0 && hrac[108] != '') {
		ZobrazOtvorenuChestu(0);
		F061('infoPopup');
		return false;
	}
	var keyPic = '<img style="margin-bottom:-16px;" src="' + PicPrefix() + 'ui2/chest_key.png?v=' + picversion + '" ' + F02o(LOC_CHEST_KEY) + '>';
	F03e();
	var _out = '';
	_out += '<div id="chesty_hlavicka">' + LOC_YOU_KEYS + hrac[106] + keyPic + SPC + F09d(LOC_SHOP_BUYBUT, 'F061(\'infoPopup\');OpenShop(-39,0);') + '</div>';
	try {
		var mozneEventChestItemyIds = [];
		for (var i in itemyVShopeA)
			if (i > 2000)
				if (F05p(i) == 0)
					if (itemyVShopeA[i][3] == 'et') {
						mozneEventChestItemyIds.push(i);
					}
		_pocetBedien = 0;
		_out += '<div id="chesty_div">';
		for (var i = 1; i <= 5; i++) {
			if (i != 4 || (PredchadzajuciLevel >= 200 && hrac[107] >= kluceNaBednu4)) {
				if (i == 3 && PredchadzajuciLevel < 200)
					continue;
				if (i == 5 && !JeChestaSpecial()) continue;
				_pocetBedien++;
				var chestHint = LOC_CHEST_CHANCES[i];
				if (i == 5) {
					if (mozneEventChestItemyIds.length == 0) chestHint += LOC_EVE_CHEST2;
					else {
						chestHint += LOC_EVE_CHEST1 + '<br>';
						for (var j in mozneEventChestItemyIds) chestHint += '<img src="' + PicPrefix() + 'veci/vec' + mozneEventChestItemyIds[j] + '.png?v=' + picversion +
							'" width="80">';
					}
				}
				_out += '<div class="chestDiv" style="left:' + ((i - 1) * chest_sizeX) + 'px;' + (i == 5 ? 'background-image:url(\'' + PicPrefix() + 'ui2/chest_special_' +
					JeChestaSpecial() + '.jpg?v=' + picversion + '\');' : '') + '" ' + (i == 5 ? F02o(chestHint, 500, 'chesta' + i) : 'id="chesta' + i + '"') + '>';
				_out += '<div class="chestKeyReq">' + chest_keyREQ[i] + 'x ' + keyPic + '</div>';
				_out += '<br>' + F09d((hrac[106] >= chest_keyREQ[i] ? LOC_CHEST_OPEN : LOC_SHOP_BUYBUT), 'UnlockChest(' + i + ');', '') + '<br><br>';
				if (i != 5) _out += '<img width="160" ' + F02o(chestHint, 500) + ' src="' + PicPrefix() + 'ui2/chest' + i + '.png?v=' + picversion + '"><br><br>' + F09k(
					'chest' + i, LOC_CHEST[i]);
				_out += '</div>';
			} else if (i == 4 && PredchadzajuciLevel >= 200) {
				_pocetBedien++;
				var chestHint = LOC_CHEST_CHANCES[i];
				var chestKeyTextA = LOC_POUZIKLUCE4bedna.split('XXX');
				var chestKeyText = chestKeyTextA[0] + ' ' + kluceNaBednu4 + ' ' + chestKeyTextA[1];
				_out += '<div id="chesta' + i + '" class="chestDiv">';
				_out += '<br>' + F09k('chest4', chestKeyText) + '<br><br>';
				_out += '<img width="160" ' + F02o(chestHint) + ' src="' + PicPrefix() + 'ui2/chest' + i + '.png?v=' + picversion + '">';
				_out += '</div>';
			}
		}
		if (bedneXY == -100) bedneXY = _pocetBedien - 3;
		_out += '</div>';
		_out += '<div id="sipkach1" class="sipka_hor" style="left:20px;top:230px;"><img src="' + PicPrefix() + 'ui2/sipka_left.png?v=' + picversion +
			'" onmousedown="return false;" onclick="ZobrazChestyLeft();"></div>';
		_out += '<div id="sipkach2" class="sipka_hor" style="left:700px;top:230px;"><img src="' + PicPrefix() + 'ui2/sipka_right.png?v=' + picversion +
			'" onmousedown="return false;" onclick="ZobrazChestyRight();"></div>';
	} catch (e) {
		alert(e);
	}
	DoPopup2(_out, LOC_CHEST_LABEL, 'infoPopup', 750, 1);
	SetChestyX();
}

function ZobrazChestyLeft() {
	bedneXY--;
	if (bedneXY < 0) bedneXY = 0;
	else miliposunChestX -= chest_sizeX;
	SetChestyX_a();
}

function ZobrazChestyRight() {
	bedneXY++;
	if (bedneXY > _pocetBedien - 3) bedneXY = _pocetBedien - 3;
	else miliposunChestX += chest_sizeX;
	SetChestyX_a();
}
var chest_sizeX = 205;
var miliposunChestX = 0;

function SetChestyX_a() {
	if (miliposunChestX > 0) {
		miliposunChestX -= 15;
		if (miliposunChestX < 0) miliposunChestX = 0;
		setTimeout('SetChestyX_a();', 30);
	}
	if (miliposunChestX < 0) {
		miliposunChestX += 15;
		if (miliposunChestX > 0) miliposunChestX = 0;
		setTimeout('SetChestyX_a();', 30);
	}
	SetChestyX();
}

function SetChestyX() {
	DeselectAll();
	if (bedneXY <= 0) F07g('sipkach1');
	else F08c('sipkach1');
	if (bedneXY >= _pocetBedien - 3) F07g('sipkach2');
	else F08c('sipkach2');
	for (var i = 1; i <= 5; i++)
		SetXY('chesta' + i, miliposunChestX + (i - 1 - bedneXY) * chest_sizeX, 5);
}
shopButSize = 29;
shopBut_x = 110;
shopBut_y = 159;

function Vypis_kontainer_primary() {
	if (IsSimpleTutorialLog()) {
		if (bestPresielLevel < 1) {
			F07g('kontainer_primary');
			return false;
		} else
			F08c('kontainer_primary');
	}
	var FUEL_HINT = LOC_HINT_FUEL + F081('<br><br>' + LOC_HINT_FUEL_ako + '<br>(' + LOC_SHOP_MAX + ': ' + $maxFuelCap2 + ')');
	var _out = '';
	_out += F08q('skull_div_bg', 9, 10, 1, '', LOC_DIA + F09a('mini5', LOC_DIA2), '', '', 'F0d(14,\'\',event);') + F05s('i_diamant', PCisloJS2(hrac[9]), LOC_DIA +
		F09a('mini5', LOC_DIA2), '', 0, 0, 'F0d(14,\'\',event);');
	if (PredchadzajuciLevel > 10) _out += F08q('skull_plus', 110, 22, 4, '', LOC_KUP_DIA, 24, 24, 'F0d(14,\'\',event);');
	if (jeLoged && JeFuelVisible()) _out += F08q('celfuel', 136, 5, 0, F08q('fuel_div_bg', 0, 0, 1, '', '', '', '', '') + F05s('i_fuel', hrac[18], '', '', 35, 22) +
		(PredchadzajuciLevel >= 30 && (hrac[18] < $maxFuelCap2 || PredchadzajuciLevel > 500) ? F08q('fuel_plus', 108, 17, 4, '', LOC_KUP_FUEL, 24, 24, 'F01y();') +
			F08q('i_fuelTimer', 49, 8, 100, '') : ''), FUEL_HINT);
	_zlatoHint = '';
	var _zlatoHourRew = 0;
	if (itemBonusOverview[72] > 0) _zlatoHourRew += itemBonusOverview[72];
	if (itemBonusOverview[47] > 0 && itemBonusOverview[46] > 0) _zlatoHourRew += itemBonusOverview[46] * itemBonusOverview[47];
	if (_zlatoHourRew > 0) _zlatoHint += '<br>+' + LOC_HINT_ZLATO2 + F06j(_zlatoHourRew);
	var _LOC_GOLD_CAP = LOC_GOLD_CAP.split('XXX')
		.join(PCisloJS2(MAXGOLD));
	_out += F05s('i_zlato', (bestPresielLevel * 1 < 2 ? F09k('mini6', LOC_HINT_ZLATO + ': ') : '') + PCisloJS2(F04s(), (F04s() > 0.9 * MAXGOLD ? 'goldfont2' : ''))
			, LOC_HINT_ZLATO + _zlatoHint + '<br><br>' + F08s(_LOC_GOLD_CAP)) +
		(PredchadzajuciLevel >= 10 ? F08q('gold_plus', 209, 62, 4, '', LOC_HINT_ZLATO3, 24, 24, 'OpenQuickShop(43,-1);') : '');
	if (bestPresielLevel >= 1)
		_out += MenuBigButton('shop_button', 'shop', shopBut_x + (IsAutoPilotAvailable() ? -44 : 0), shopBut_y, LOC_SHOP_LABEL2 + '<br>' + F09a('mini4', LOC_HOTKEY +
			': [H]'), (PredchadzajuciLevel < 5 ? 'OpenShop(0,-1);' : 'OpenShopX(event);'), 0, '', 0);
	if (PredchadzajuciLevel >= 750)
		if (F055() <= 0) {
			_out += F08q('itemmisiabut', -8, 157, 1, '<img class="vobj imisionBut" src="' + PicPrefix() + 'ui2/itemmisie.png?v2=' + picversion + '">'
				, 'Show Item-Special Missions<br><br>These missions are special because you <b>win items</b> in them.', 85, 85, 'OpenItemMissionDiv();');
		}
	if (IsAutoPilotAvailable()) {
		_out += MenuBigButton('automenu_button', 'autopilot', shopBut_x + 88 + (IsAutoPilotAvailable() ? -44 : 0), shopBut_y, LOC_AUTOP_set, 'AutoPilotSettings();'
			, 0, '', 0);
		_out += F08q('autopilotpacka', shopBut_x + 88 + 40, shopBut_y + 19, 1, '', LOC_AUTOP_set2);
	}
	var maPlatinu = JePlatina();
	if (maPlatinu) {
		_out += F08q('i_platina', 43, 96, 10, PCisloJS2(hrac[89]), LOC_platina, 98, 25, '', '', 'KlikShopPlatina(event);');
		_out += F08q('plat_plus', 135, 96, 4, '', LOC_platina + (PredchadzajuciLevel >= 356 ? '<br>' + LOC_platinaSHOP : ''), 24, 24, 'KlikShopPlatina(event);');
	}
	if (SuRubiny()) {
		_out += F08q('i_rubiny', 180, 96, 10, PCisloJS2(hrac[118]), LOC_rubiny + '<br>Rubies are given for every fuel spent in mission x' + RubinyMultiplikator(), 70
			, 25, '', '', 'KlikShopRubiny(event);');
		_out += F08q('kupitXPveci', 250, 96, 4, '', 'Ruby Items', 24, 24, 'KlikShopRubiny(event);');
	}
	_out += F05s('i_hlevel', PCisloJS2(F04v()), LOC_UI_level, '', (maPlatinu ? 19 : 48), (maPlatinu ? 132 : 102));
	_out += F05n('bar_xp', (maPlatinu ? 101 : 51), 129, (maPlatinu ? 150 : 200), 22, LOC_UI_XP, '', (levelTable[PredchadzajuciLevel] < 1000000000 ? '' :
		'line-height:10px;'));
	if (PredchadzajuciLevel < 10) _out += F08q('xp_xp_hint', 16, 122, 5, '', LOC_UI_XP, '', '', '');
	_out += (PredchadzajuciLevel >= 9 ? F08q('kupitXPveci', 250, 128, 4, '', LOC_KUP_XP, 24, 24, 'OpenQuickShop(42,-1);') : '');
	F068('kontainer_primary', _out);
	F06n(0);
	VypisFuel();
	NastavAPBut();
}

function MenuBigButton(_id, _src, _x, _y, _hint, _clickfun, _reqLVL, _reqHint, _sirkaHintu) {
	var _out = '<div style="position:absolute;left:' + _x + 'px;top:' + _y + 'px;" ';
	if (PredchadzajuciLevel < _reqLVL) {
		if (_reqHint || _reqLVL != 99999) _out += F02o((_reqLVL == 99999 ? _reqHint : LOC_POTREBUJES_LEVEL + ' ' + _reqLVL), (_sirkaHintu ? _sirkaHintu : 150), _id);
		_out += '>';
	} else
		_out += F02o(_hint, (_sirkaHintu ? _sirkaHintu : 150), _id) + '>';
	_out += '<img style="" src="' + PicPrefix() + 'ui2/mainbuts/' + _src + '.png?v2=' + picversion + '" class="bigmenubut' + (PredchadzajuciLevel < _reqLVL ?
		'DIS' : '') + '" ' + (_clickfun && PredchadzajuciLevel >= _reqLVL ? 'onclick="' + _clickfun + ';F03b();" ' : '') + '>';
	_out += '</div>';
	return _out;
}

function OpenItemMissionDiv(__listall) {
	var _out = '';
	var _mpor = 0;
	var lastISmission = 0;
	for (var i = 20001; i < 21000; i++)
		if (herne_levelyA[i]) {
			var kvoc500 = herne_levelyA[i][16] - itemBonusOverview[108];
			if (kvoc500 < 175) kvoc500 = 175;
			_mpor++;
			var _akyItem = herne_levelyA[i][15];
			if (!__listall)
				if (PocetPrejdeni(i) >= kvoc500 && F05p(_akyItem) >= 3) continue;
			lastISmission = i;
			_out += '<div class="">';
			_out += 'Mission order #' + _mpor + '; ';
			_out += SPC + 'Spent Fuel: ' + PCisloJS2(PocetPrejdeni(i)) + ' / ' + kvoc500 + ';<br>';
			var _esteMinFuel = 5;
			var _ktoryStack = 1;
			if (PocetPrejdeni(i) < 5) _esteMinFuel = 5;
			else if (PocetPrejdeni(i) < 150) {
				_ktoryStack = 2;
				_esteMinFuel = 150 - PocetPrejdeni(i);
			} else if (PocetPrejdeni(i) < kvoc500 || F05p(_akyItem) < 3) {
				_ktoryStack = 3;
				_esteMinFuel = kvoc500 - PocetPrejdeni(i);
			} else
				_ktoryStack = 3;
			if (PocetPrejdeni(i) < kvoc500 || F05p(_akyItem) < 3) {
				if (_esteMinFuel < 0) _out += 'Play this mission at least once to earn item:&nbsp;<b>' + LOC_itemy[_akyItem] + '</b> (' + _ktoryStack + '/3)<br>';
				else _out += 'Spend <b>' + _esteMinFuel + '</b> more fuel on this mission to earn item:&nbsp;<b>' + LOC_itemy[_akyItem] + '</b> (' + _ktoryStack +
					'/3)<br>';
			}
			var bonusySTR = VypisBonusNEW(itemyVShopeA[_akyItem], 3);
			_out += '<img class="specialitem" ' + (__listall ? 'width="30"' : '') + F02o(bonusySTR) + ' alt="special-item-mission" src="' + PicPrefix() + 'veci/vec' +
				_akyItem + '.png?v=' + (picversion + picversionVeci) + '">';
			if (PocetPrejdeni(i) < kvoc500 || F05p(_akyItem) < 3) {
				_out += '<br>' + F09d('PLAY', 'F03x(' + i + ');');
			}
			_out += '</div>';
			if (PocetPrejdeni(i) < kvoc500 || F05p(_akyItem) < 3) break;
		} else {
			_out += 'Currently all missions Done!<br>Check this next week to see if new missions were added.';
			break;
		}
	if (!__listall)
		if (_mpor > 2) {
			var pocetItemsInList = 1 + itemBonusOverview[103];
			var listofitems = '';
			for (var i = 20001; i < 21000; i++)
				if (herne_levelyA[i])
					if (lastISmission != i)
						if (pocetItemsInList > 0) {
							var kvoc500 = herne_levelyA[i][16] - itemBonusOverview[108];
							if (kvoc500 < 175) kvoc500 = 175;
							if (PocetPrejdeni(i) < kvoc500) {
								pocetItemsInList--;
								var _akyItem = herne_levelyA[i][15];
								var bonusySTR = VypisBonusNEW(itemyVShopeA[_akyItem], 3);
								listofitems += '<img class="specialitem" width="20" style="margin-bottom:-10px;" ' + F02o(bonusySTR) + ' alt="special-item-mission" src="' + PicPrefix() +
									'veci/vec' + _akyItem + '.png?v=' + (picversion + picversionVeci) + '">';
							}
						}
			if (listofitems != '') _out += '<br><br>upcoming items: ' + listofitems;
			_out += '<br><br>' + F07f('[list aquired items]', 'OpenItemMissionDiv(1);');
		}
	F07e(_out, 'ITEM-SPECIAL missions', 'infoPopup', 700);
}

function KlikShopPlatina(e) {
	if (e.shiftKey && PredchadzajuciLevel >= 396) KupVec2(1727, 0, 1);
	else if (e.shiftKey && PredchadzajuciLevel >= 356) {
		KupVec2(614, 0, 1);
	} else
		OpenShop(49, -1);
}

function OpenShopX(evn) {
	costfilter = 0;
	if (evn.shiftKey) OpenShop1(8, 0);
	else OpenShop1(0, 0);
}

function JeAmmoVis() {
	return true;
}

function StartingLife(_bezmax) {
	return Math.max(1, F05u(hrac, _bezmax) - itemBonusOverview[125]);
}

function Vypis_kontainer_secondary() {
	if (IsSimpleTutorialLog()) {
		if (bestPresielLevel < 3) {
			F07g('kontainer_secondary');
			return false;
		} else
			F08c('kontainer_secondary');
	}
	var _out = '';
	_out += F08q('bar_text_div', 30, 15, 1, '', '', 220, 20);
	_out += F05n('bar_quest', 51, 35, 200, 22, '', '') + (PredchadzajuciLevel >= 48 ? F08q('quest_plus', 250, 34, 4, '', LOC_SHOP_LABEL + ' ' + LOC_quest, 24, 24
		, 'OpenQuickShop(45,-1);') : '');
	var _plusXP = itemBonusOverview[94] + 100;
	var _plusZlato = KratPercentoJS(500 + itemBonusOverview[95], itemBonusOverview[116]);
	var _questHint = LOC_quest_hint + '<br>' + LOC_QUEST[robimQuest[0]] + '<hr>+' + PCisloJS2(_plusZlato) + IconPicWH('shop/valuta0', -2, 19, 18) + '<br>+' +
		PCisloJS2(_plusXP) + IconPicWH('shop/xp', -2, 19, 19);
	if (itemBonusOverview[57]) _questHint += '<hr>' + FSize(10, LOC_item_popis[57] + ': ') + PCisloJS2(itemBonusOverview[57]);
	_out += F08q('quest_hint', 7, 6, 201, '', _questHint, 240, 50);
	var _lifeHint = LOC_UI_heal1 + '<br>' + F081(LOC_UI_heal2);
	if (itemBonusOverview[125] > 0) _lifeHint += '<br>' + LOC_STARTWITH + ': ' + PCisloJS2(StartingLife(1));
	if (itemBonusOverview[178] > 0) _lifeHint += '<br>+' + PCisloJS2(itemBonusOverview[178]) + ' ' + '=' + ' ' + PCisloJS2(StartingLife(1) + itemBonusOverview[178]);
	if (itemBonusOverview[78] > 0) _lifeHint += '<br><br>' + LOC_heal_reducedmg + ' ' + PCisloJS2(EnemyDamageReduction(0));
	if (itemBonusOverview[184])
		_lifeHint += '<br>(+' + PCisloJS2(itemBonusOverview[184]) + ')';
	_out += F05n('i_heal', 51, 67, 200, 22, _lifeHint, '', (F05u() > 1000000000 ? 'font-size:9px;' : '')) + (PredchadzajuciLevel >= 3 ? F08q('heal_max_plus', 250
		, 66, 4, '', LOC_KUP_HEALMAX, 24, 24, 'OpenQuickShop(30,-1);') : '') + (PredchadzajuciLevel >= 46 ? F08q('quick_heal', 45, 66, 4, '', LOC_KUP_QUICKHEAL, 24
		, 24, 'OpenQuickShop(40,-1);') : '');
	_out += F08q('powerup_container', 16, 132, 2, '', '', 271, 195);
	if (IsPuVisible()) {
		var AMMO_HINT = LOC_UI_energia + '<br>' + F09a('mini3', LOC_UI_energiaHINT);
		if (itemBonusOverview[98] > 0) {
			AMMO_HINT += '<br><br>+' + PCisloJS2(itemBonusOverview[98]) + ' ' + F09a('mini3', LOC_item_popis[98]);
		}
		if (JeAmmoVis()) {
			_out += F08q('pu_plus', 250, 98, 4, '', LOC_SHOP_LABEL + LOC_item_popis[54], 24, 24, 'OpenQuickShop(44,-1);');
			_out += F08q('ammo_div_bg', 5, 93, 1, '', AMMO_HINT, '', '', '');
			_out += F05n('i_energia', 51, 99, 200, 22, AMMO_HINT, 'z-index:2;');
		}
		_out += F08q('pu_plus', 238, 300, 4, '', LOC_KUPUJ_PU, 24, 24, 'OpenQuickShop(7,-1);');
		if (!F055() && itemBonusOverview[138] > 0) _out += F08q('clearPUp', 248, 140, 4, 'X', LOC_PU_clearlist, 0, 0, 'ClearPreprogram();', 'closeButSmall');
		if (jeSvetJS == 1 && PredchadzajuciLevel > 200) _out += F08q('clearPUp', 248, 170, 4, ':)', LOC_ZMEN_OBR, 0, 0, 'ChangePUPics();', 'closeButSmall');
		if (jeSvetJS == 1 && PredchadzajuciLevel > 200 && itemBonusOverview[138] > 0) _out += F08q('greenpu', 248, 200, 4, 'G', LOC_GREENPU, 0, 0, 'ToggleGreenPU();'
			, 'closeButSmall');
	} else {
		_out += F08q('teasernaPU', 36, 174, 4, LOC_PU_TEASER, '', 206, 66, '');
		_out += F08q('recshopdiv', 0, 110, 4, '', '', 265, 230, '');
	}
	F068('kontainer_secondary', _out);
	if (PUprog.length <= 0) F07g('clearPUp');
	RecommendedShop();
	F027();
	F03w();
	F01g();
	VypisQuest();
}
var togglegreenSTAV = 1;

function ToggleGreenPU() {
	var asponnejakeoff = false;
	for (var j in puArray) {
		var _i = puArray[j];
		if (IsInArray(_i, PUprog))
			if (!IsInArray(_i, spustiZnovaPU)) asponnejakeoff = true;
	}
	if (asponnejakeoff) togglegreenSTAV = 0;
	spustiZnovaPU = [];
	for (var j in puArray) {
		var _i = puArray[j];
		if (IsInArray(_i, PUprog)) {
			if (togglegreenSTAV == 1) OdoberZPola(_i, spustiZnovaPU);
			else spustiZnovaPU.push(_i);
		}
	}
	togglegreenSTAV = (togglegreenSTAV ? 0 : 1);
	F01g();
	SavePUcoockie();
}

function ClearPreprogram() {
	spustiZnovaPU = [];
	PUprog = [];
	F01g();
	F07g('clearPUp');
	SavePUcoockie();
}

function KoloCisloStr(_cislo) {
	if (_cislo > 10000) return LOC_EVENT3 + '-' + (_cislo - 10000);
	return _cislo;
}

function TryNextMission(_ktoru) {
	var _misIndx = _ktoru;
	if (PocetPrejdeni(_ktoru - 1) <= 0) _misIndx--;
	F03x(_misIndx);
}
var MODULE_LVL_REQ = 140;
RESTART_BUT_X = 31;

function SetVyberLevelDiv() {
	var _bx = 94;
	var _by = 76;
	var _bbx = 20;
	var _bby = 30;
	var _out = '';
	if (bestPresielLevel >= 7) {
		_out += MenuBigButton('koloBut', 'mission', 0 * _bx + _bbx, 0 * _by + _bby, LOC_MENU_1, 'F05m(1);', 0, '', 250);
		if (PredchadzajuciLevel > 30) _out += F08q('skull_plus', 0 * _bx + _bbx + 70, 0 * _by + _bby + 47, 2501, '', LOC_SHOP_LABEL3, 24, 24, 'OpenQuickShop(53,-1);');
	} else
		_out += MenuBigButton('koloBut', 'mission_next', 0 * _bx + _bbx, 0 * _by + _bby, LOC_MENU_1, 'F03x(bestPresielLevel*1+1);', 0, '', 0);
	var _missioninfo2 = '<br>' + LOC_fuelcost + ': ' + herne_levelyA[hralsomlevel][7] + IconValuta2(2) + (pomocBonusyEffects[212] > 0 ? '(+' + pomocBonusyEffects[
		212] + ')' : '');
	if (!JeFuelVisible()) _missioninfo2 = '';
	_out += MenuBigButton('replayBut', 'restart', 1 * _bx + _bbx, 0 * _by + _bby, LOC_MENU_2 + '<br><br>' + LOC_KOLO_POPIS[herne_levelyA[hralsomlevel][4]] +
		'<br><br>' + LOC_KOLO + KoloCisloStr(herne_levelyA[hralsomlevel][0] % 7 == 0 ? herne_levelyA[hralsomlevel][0] : hralsomlevel) + ('<br>' +
			LOC_PRESIEL_LEVEL_pocet + PocetPrejdeni(hralsomlevel) + '' + _missioninfo2), 'if(!zobrazujError)return false;F03x(hralsomlevel);', 3, '', 250);
	if (!F055()) {
		_out += MenuBigButton('arenaMBut', 'arena', 2 * _bx + _bbx, 0 * _by + _bby, LOC_ARENA_BUT, 'OpenArena();', _ARENALEVEL, 0, '', 250);
		if (MaArenu()) {
			_out += ' ' + F08q('fuel_plus', 2 * _bx + _bbx + 70, 0 * _by + _bby + 47, 4, '', LOC_ARENA_SHOP, 24, 24, 'KupitArenaItems();');
			if (!F098('dailyrewardbub') && !F098('inbubhoreDiv'))
				if (!F098('infopopupIN'))
					if (!F098('dailyrewardbub'))
						if (hrac[85] >= 10) BublinaHore('<br>Play in the<br>ARENA!!!', 385, 150);
		}
	}
	_out += MenuBigButton('modulMBut', 'modul', 0 * _bx + _bbx, 1 * _by + _bby, LOC_MODULES, 'OpenModules(0);', MODULE_LVL_REQ, '', 250);
	if (PredchadzajuciLevel > MODULE_LVL_REQ + 10) _out += F08q('skull_plus', 0 * _bx + _bbx + 70, 1 * _by + _bby + 47, 2501, '', LOC_SHOP_LABEL3, 24, 24
		, 'OpenQuickShop(9,-1);');
	_out += MenuBigButton('edithelpersMBut', 'edithelpers', 1 * _bx + _bbx, 1 * _by + _bby, LOC_EDITHELPER, 'ZobrazVlastnychPomocnikov();', 175, '', 250);
	_out += MenuBigButton('itemoverviewMBut', 'itemoverview', 2 * _bx + _bbx, 1 * _by + _bby, LOC_MENU_6, 'PlayerDetails();', 15, '', 250);
	if (PredchadzajuciLevel >= 800) {
		if (PHPtime2 >= event_start && eventStarterItem > 0 && premiumEvent && PHPtime2 < premiumEventEndBuy && !hracVeciA[eventStarterItem]) {
			_out += MenuBigButton('premiumminibut', 'premiumevent_mini' + premiumEvent, 3 * _bx + _bbx, 1 * _by + _bby
				, 'Click here to check out the cool new Premium Event!', 'BuyEventMenu();', 15, '', 250);
		}
	}
	_out += MenuBigButton('dailybonus', 'daily_light', 0 * _bx + _bbx, 2 * _by + _bby, LOC_MENU_7, 'ZoberDaily(event);', (PHPtime3 - hrac[75] >= dennaOdmenaPauza ?
		[KLANLEVEL] : [99999]), LOC_MENU_7b, 250);
	if (PredchadzajuciLevel >= 69) _out += F08q('skull_plus', 0 * _bx + _bbx + 70, 2 * _by + _bby + 47, 4, '', LOC_IMPROVEDAILY, 24, 24, 'OpenQuickShop(46,-1);');
	_out += MenuBigButton('activityrewardBUT', 'activity_light', 1 * _bx + _bbx, 2 * _by + _bby, LOC_MENU_8, 'TakeClanBonus();', (hrac[70] < 100 ? 99999 : 500)
		, LOC_MENU_8b, 250);
	if (PredchadzajuciLevel >= 128) _out += PicAt('autoclickerplusbut', 'ui2/skull_plus.png', 1 * _bx + _bbx + 70, 2 * _by + _bby + 47, 3, LOC_SHOP_LABEL3, 24, 24
		, '', '', 'OpenShop(52,-1); return false;');
	_out += MenuBigButton('chestMBut', 'chest' + (hrac[106] >= 6 ? '_light' : ''), 2 * _bx + _bbx, 2 * _by + _bby, LOC_MENU_9, 'OpenChestMenu();', 100, '', 250);
	if (IsEvent())
		if (JeChestaSpecial()) _out += '<img src="' + PicPrefix() + 'icons2/icon_event' + event_picK + '.png?v=' + picversion +
			'" style="position:absolute;width:35px;left:' + (2 * _bx + 70 + _bbx) + 'px;top:' + (2 * _by + _bby) + 'px;">';
	_out += MenuBigButton('guncollectionBut', 'guncollection', 0 * _bx + _bbx, 3 * _by + _bby, LOC_MENU_10, 'ZobrazSkrinu();', 10, '', 250);
	_out += MenuBigButton('achievmentyMBut', 'achievmenty', 1 * _bx + _bbx, 3 * _by + _bby, LOC_MENU_11
		, 'if(F098(\'achievemLabel\')) F061(\'achievem\');else F0i();', 35, '', 250);
	_out += MenuBigButton('albumBut', 'album', 2 * _bx + _bbx, 3 * _by + _bby, LOC_MENU_12, 'OtvorAlbum();', 45, '', 250);
	_out += MenuBigButton('topMBut', 'top', 3 * _bx + _bbx, 3 * _by + _bby, LOC_MENU_13, 'F014();', (nacitanaTopka ? 75 : 99999), '', 250);
	if (GetLevelHraca() >= 600) _out += MenuBigButton('specialshopMBut', 'specialshop', 3 * _bx + _bbx, 2 * _by + _bby
		, 'Shop with caravan items - random items from special offers.<br><br>Automatically changes once per 3 days.', 'OpenSpecialShop();', 1100, '', 300);
	F068('vyber_levelDiv', _out);
	NastavAutoclickerBasePos();
	if (F055()) F07g('tipoftheday');
	else F08c('tipoftheday');
}
var _obchodikPonuka = [];
var _obchodikPonukaCakaj = 0;

function OpenSpecialShop() {
	var _out = '';
	_out += '<div style="text-align:justify;">';
	if (_obchodikPonukaCakaj == 1) _out += 'Please Wait and try again in few seconds.';
	else if (hrac[124] == '') {
		_out += 'Empty Caravan - please return later.';
	} else {
		_obchodikPonuka = hrac[124].split(';');
		for (var i in _obchodikPonuka) {
			_obchodikPonuka[i] = F01z(_obchodikPonuka[i], ',');
			var _itemID = _obchodikPonuka[i][0];
			_out += '<div class="caravan_item">';
			var _popiskaHint = F06m(_itemID) + '<br>' + VypisBonusNEW(itemyVShopeA[_itemID], 0, itemyVShopeA[_itemID][1][3]);
			_out += '<img src="' + PicPrefix() + 'veci/vec' + _itemID + '.png?v=' + (picversion + picversionVeci) + '" ' + F02o(_popiskaHint, 350) + '>';
			_out += '<div class="caravan_popiska" ' + F02o(_popiskaHint, 350) + '>';
			_out += VypisBonusNEW(itemyVShopeA[_itemID], 5, itemyVShopeA[_itemID][1][3]);
			_out += '</div>';
			_out += '<div class="caravan_buy">';
			if (F05p(_itemID) <= 0) {
				var _costSTR = '';
				if (_obchodikPonuka[i][2] == 0) _costSTR += '<img src="' + PicPrefix() + 'icons2/icon_skull.png">';
				if (_obchodikPonuka[i][2] == 1) _costSTR += '<img src="' + PicPrefix() + 'icons2/icon_rubiny.png">';
				_costSTR += '<br>' + PCisloJS2(_obchodikPonuka[i][1]) + '<br>';
				_out += _costSTR;
				_out += F09d(LOC_SHOP_BUYBUT, 'KupitCaravanItem(' + i + ',' + _itemID + ');', LOC_ITEM_cena + '<br>' + _costSTR);
			} else {
				_out += '<br><br>already unlocked';
			}
			_out += '</div>';
			_out += '</div>';
		}
	}
	_out += '</div>';
	if (_obchodikPonukaCakaj == 0) {
		_out += F09d('Reset for Fuel', 'ResetCaravan(1);', 'You will reset the caravan offer for ' + GetCaravanResetCost() +
			' Fuel!<br><br>There is higher chance to get items that you havent bought yet.') + SPC;
		_out += F09d('Reset for Skulls', 'ResetCaravan(2);', 'You will reset the caravan offer for ' + CARAVAN_SKULL_RESET +
			' Skulls<br><br>There is even higher chance to get items that you havent bought yet.') + SPC + SPC + SPC + SPC;
		_out += IconPicWH('icons2/icon_fuel', -13, 40, 40) + '' + PCisloJS2(hrac[18]) + SPC;
		_out += IconPicWH('icons2/icon_skull', -13, 40, 40) + '' + PCisloJS2(hrac[9]) + SPC;
		_out += IconPicWH('icons2/icon_rubiny', -13, 40, 40) + '' + PCisloJS2(hrac[118]);
	}
	F07e(_out, 'Random Caravan Offer', 'infoPopup', 900, 1, '', '', '', '', 50);
}
var CARAVAN_FUEL_RESET_BASE = 300;
var CARAVAN_SKULL_RESET = 400;

function GetCaravanResetCost() {
	return CARAVAN_FUEL_RESET_BASE - itemBonusOverview[82];
}

function ResetCaravan(_typ, _force) {
	if (_typ == 1) {
		if (GetCaravanResetCost() > hrac[18]) F03t('Not enough Fuel to reset the Caravan!');
		else {
			F02t(199, 1);
			F061('infoPopup');
			hrac[18] -= GetCaravanResetCost();
			_obchodikPonukaCakaj = 1;
			VypisMaterialHeader();
			F06o(1, 1, 0, 1);
		}
	}
	if (_typ == 2) {
		if (CARAVAN_SKULL_RESET > hrac[9]) F03t('Not enough Skulls to reset the Caravan!');
		else if (!_force) {
			F03r('This reset cots ' + CARAVAN_SKULL_RESET + ' Skulls. Are you sure to reset the caravan?', 'ResetCaravan(2,1);');
		} else {
			F02t(199, 2);
			F061('infoPopup');
			hrac[9] -= CARAVAN_SKULL_RESET;
			_obchodikPonukaCakaj = 1;
			VypisMaterialHeader();
			F06o(1, 1, 0, 1);
		}
	}
}

function KupitCaravanItem(_caravanIndex, _itemID) {
	F061('infoPopup');
	var _caravanItem = _obchodikPonuka[_caravanIndex];
	if ((_caravanItem[2] == 1 && hrac[118] >= _caravanItem[1]) || (_caravanItem[2] == 0 && hrac[9] >= _caravanItem[1])) {
		if (_caravanItem[2] == 1) hrac[118] -= _caravanItem[1];
		if (_caravanItem[2] == 0) hrac[9] -= _caravanItem[1];
		hracVeciA = F05r();
		if (!hracVeciA[_itemID]) hracVeciA[_itemID] = 1;
		hrac[H_VECI] = hracVeciA.join(';');
		PridajJednorazBonusZveci(itemyVShopeA[_itemID][4]);
		F046();
		if (itemyVShopeA[_itemID][1][3] > 1) OpenShop(1000000 + _itemID, -1);
		F02t(198, 1000000 * _caravanIndex + _itemID);
	} else {
		if (_caravanItem[2] == 1) F03t('resources', 'Not enough');
		else F0d(20);
	}
}

function GetLevelHraca() {
	return PredchadzajuciLevel;
}

function SpecialRecruit() {
	var _out = '';
	_out += '<div style="text-align:justify;padding:10px;">';
	_out +=
		'We would like to offer you a chance to earn a hefty sum of Skulls for showing Army Clicker to some new people around the internet! If youâ€™d like to know how to qualify for this, read on!';
	_out += '<ul>';
	_out += '<li>You will have to make a post about Army Clicker on some sort of a public board with active viewers.</li>';
	_out +=
		'<li>Then, send us a link to your post through the Ticket system, or as a private message on our Facebook page. We will be watching how it goes, and look at people coming into the game.</li>';
	_out +=
		'<li>If we see your post performing well, we will reward you with an amount of Skulls ranging from 1000 to 15000. Each player will only receive this prize once. If you write more posts than one, we will consider the performance of all of them combined.</li>';
	_out += '<li>You are free to post in any language. While we donâ€™t speak all languages, we can see if new people are coming from a specific country.</li>';
	_out +=
		'<li>The â€œformâ€ of the post is free for you to choose. It can be an album with screenshots somewhere with some texts added to them, a regular forum post recommendation, a blog, a review, a Facebook post, anything at all.</li>';
	_out += '<li>You do not have to include a â€œreferral linkâ€ in your post in order for it to qualify. Just the plain link to the game is alright.</li>';
	_out += '</ul>';
	_out += 'Itâ€™s as simple as that. There are a few cases that can get a post disqualified, though. Those are, as follows:';
	_out += '<ul>';
	_out += '<li>If your post gets deleted shortly after we see it, it will not qualify for the prize.</li>';
	_out += '<li>If your post is located on a private website that is invisible for us unless we register on the site, it will not qualify for the prize.</li>';
	_out += '<li>Excessive amounts of posts, spamming, copying from others, and similar will not be rewarded.</li>';
	_out +=
		'<li>A post will never qualify for a reward right away. We will watch it for a couple of days, up to a week, and decide on a reward after that period of time.</li>';
	_out +=
		'<li>Posts will be rewarded based on how effective they were at making new people interested. There is no exact scale that would match a reward to an amount of views, or anything like that.</li>';
	_out += '</ul>';
	_out +=
		'Lastly, there are a few recommendations we would like to give you for your posts. You should definitely go by these if you would like your post to qualify:';
	_out += '<ul>';
	_out +=
		'<li>Be honest and feel free to speak your mind. We are not asking you to only talk about the game on good terms. We are not going to disqualify your post if you criticise the game in your post in some manner.</li>';
	_out += '<li>Always be aware of the rules for posting on any pages you decide to post on. If a forum forbids promotional posts, donâ€™t post there.</li>';
	_out += '</ul>';
	_out += '</div>';
	F07e(_out, '<br>Help us show Army Clicker to some new people, and you can earn Skulls!', 'infoPopup', 900, 1, '', '', '', '', 50);
}
var bolAutoclicker = 0;
var pauzaStart = 0;
var pauzaEnd = 0;

function F02i(_lenPauze) {
	if (isGamePaused && !_lenPauze) F011();
	else {
		if (!F055()) return false;
		bolAutoclicker = 0;
		if (jeautoclicker) {
			if (queueUtok) bolAutoclicker = 1;
			if (queueGold) bolAutoclicker = 2;
			if (queueHeal) bolAutoclicker = 3;
			if (queueAmmo) bolAutoclicker = 4;
		}
		queueUtok = queueHeal = queueGold = queueAmmo = 0;
		VymazCastice();
		SetZIndex('mis_kotol', 1);
		isGamePaused = true;
		F07g('autoclickergif');
		var JS_currentTime = new Date();
		var milisecondTime = JS_currentTime.getTime();
		pauzaStart = milisecondTime;
		F08c('gamepause');
		F044();
	}
	MenuSound();
}

function F011() {
	manualPauzaBola = 0;
	if (offlineTimer < offlineTimeLimit) offlineTimer = 0;
	if (!isGamePaused) return false;
	var JS_currentTime = new Date();
	var milisecondTime = JS_currentTime.getTime();
	milisecondTimeLast = milisecondTime;
	pauzaEnd = milisecondTime;
	buffHodinyPauza += (pauzaEnd - pauzaStart);
	pauzaStart = pauzaEnd = 0;
	isGamePaused = false;
	F07g('gamepause');
	F044();
	if (bolAutoclicker >= 1) ZapniAutoClickerNa(bolAutoclicker - 1);
}

function HodnotaZaKlik(_i) {
	if (_i == 1) {
		var _value_base = ClickAmmoValue(1);
		var _value_buf = ClickAmmoValue();
	}
	if (_i == 2) {
		var _value_base = ClickAttackValue(1);
		var _value_buf = ClickAttackValue();
	}
	if (_i == 3) {
		var _value_base = ClickHealValue(1);
		var _value_buf = ClickHealValue();
	}
	if (_i == 4) {
		var _value_base = ClickGoldValue(1);
		var _value_buf = ClickGoldValue();
	}
	return new Array(_value_base, _value_buf);
}

function F045() {
	if (IsSimpleTutorialLog()) return false;
	var _out = ' :: ';
	var _jazyky = '';
	var _pocetJazykov = 0;
	for (var jaz in jazyky)
		if (jazyky[jaz] != 0) {
			_jazyky += F07f(F06v(jazyky[jaz]), 'F06l(\'?lng=' + jazyky[jaz] + '\');') + ' ';
			_pocetJazykov++;
		}
	if ($zFCBindex == 100 || jeLoged)
		if (_pocetJazykov > 1) _out += _jazyky + ' :: ';
	_out += F07f(LOC_schovajBar, 'F02c();MenuSound();');
	_out += ' :: ' + F07f(LOC_RULES_label, 'F04t();MenuSound();');
	if (jeLoged && nacitanaTopka) _out += ' :: ' + F07f(LOC_tophraci, 'F014();MenuSound();');
	if (jeLoged) _out += ' :: ' + F07f(LOC_sendticket, 'OpenTicketSender();MenuSound();');
	_out += ' :: ' + '<a target="_blank" class="clickspan" href="' + FAN_PAGE_LINK + '">FAN page</a>';
	if (!testingP) {
		if (jeLoged) {
			_out += ' :: ' + '<b><span class="clickspan skullspan" onclick="F0d(15);">' + LOC_KUP_DIA + '</span></b>';
			_out += ' :: ' + F07f(LOC_logout + '-' + hrac[1], ' budeSaveTeraz=1; F03r(\'' + LOC_SURETO_LOGOUT + '\',\'F09b(\\\'logout\\\');\')');
		} else
			_out += ' :: ' + F07f(LOC_loginbut.toUpperCase() + ' / ' + LOC_register, 'F0k(1);MenuSound();');
	}
	F068('header2', _out);
	if (PredchadzajuciLevel > 20) F068('footer2', _out);
	else F07g('footer2');
}

function VypisMaterialHeader() {
	var sirkaHeadru = 930;
	var _pisKluciky = false;
	if (PredchadzajuciLevel >= 150) _pisKluciky = true;
	if (_pisKluciky)
		sirkaHeadru = 1000;
	var _out = '';
	var _posunX = 0;
	if (SuRubiny()) {
		_out += '<div id="h_zlato" class="headerDiv" onclick="OpenQuickShop(43,-1);" style="width:130px; right:110px; font-size:13px;" ' + F02o(LOC_HINT_ZLATO) + '>' +
			IconPic('icons2/icon_gold', -15) + ' <span id="hs_zlato">' + PCisloJS2(Math.floor(hrac[H_ZLATO] / 1000000000)) + ' <b>G</b></span></div>';
		_out += '<div id="h_rubiny" class="headerDiv" onclick="KlikShopRubiny(event);" style="width:130px; right:-5px; font-size:13px;" ' + F02o(LOC_rubiny) + '>' +
			IconPic('icons2/icon_rubiny', -15) + ' <span id="hs_rubiny>' + PCisloJS2(hrac[118]) + '</span></div>';
	} else
		_out += '<div id="h_zlato" class="headerDiv" onclick="OpenQuickShop(43,-1);" style="width:220px; right:10px;" ' + F02o(LOC_HINT_ZLATO) + '>' + IconPic(
			'icons2/icon_gold', -15) + ' <span id="hs_zlato" ' + (F04s() > 0.9 * MAXGOLD ? 'class="goldfont2"' : '') + '>' + PCisloJS2(hrac[H_ZLATO]) + '</span></div>';
	if (JePlatina()) {
		_posunX = 170;
		_out += '<div id="h_platina" class="headerDiv" onclick="OpenShop(49,-1);" style="width:150px; right:220px;" ' + F02o(LOC_platina) + '>' + IconPic(
			'icons2/icon_platina', -15) + ' <span id="hs_platina">' + PCisloJS2(hrac[89]) + '</span></div>';
	}
	if (_pisKluciky) _out += '<div id="h_level" class="headerDiv" style="left:' + (130) + 'px;" onclick="OpenChestMenu();" ' + F02o(LOC_CHEST_KEY) + '>' + IconPic(
		'icons2/icon_kluc', -15) + ' <span id="hs_kluc">' + PCisloJS2(hrac[106]) + '</span></div>';
	if (PredchadzajuciLevel >= 12) _out += '<div id="h_level" class="headerDiv" style="right:' + (230 + _posunX) + 'px;" onclick="F0d(18);" ' + F02o(
		LOC_item_popis[41]) + '>' + IconPic('icons2/icon_skull', -15) + ' <span id="hs_diamant">' + PCisloJS2(hrac[9]) + '</span></div>';
	var _posun1e = _posun2e = 0;
	if (IsEvent(4 * 86400)) {
		_posun1e = 30;
		_posun2e = 25;
		_out += '<div id="h_level" class="headerDiv" onclick="OpenQuickShop(10,0,1);" style="right:' + (440 + _posunX) + 'px;" ' + F02o(LOC_EVENT7) + '>' + IconPic(
			'icons2/icon_event' + event_picK, -15) + ' ' + PCisloJS2(hrac[98]) + '</div>';
	}
	_out += '<div id="h_level" class="headerDiv" onclick="OpenQuickShop(42,-1);" style="right:' + (370 + _posunX - _posun1e) + 'px;" ' + F02o(LOC_LEVEL) + '>' +
		IconPic('icons2/icon_xp', -15) + ' ' + PCisloJS2(PredchadzajuciLevel) + '</div>';
	if (JeFuelVisible()) _out += '<div id="h_fuel" class="headerDiv" onclick="F01y();" style="right:' + (510 + _posunX + _posun2e) + 'px;" ' + F02o(LOC_FUEL) +
		'>' + IconPic('icons2/icon_fuel', -15) + ' <span id="hs_fuel">' + PCisloJS2(hrac[18]) + '</span></div>';
	if (PredchadzajuciLevel >= autoclickerlevel) _out +=
		'<div id="h_autoclicker" class="headerDiv" onclick="OpenQuickShop(41,-1);" style="text-align:left; top:2px; width:140px; left:-10px;" ' + F02o(
			LOC_AUTOCLIKER_LABEL) + '>' + IconPic('icons2/icon_clicker', -12) + ' <span id="hs_autoclickery">' + PCisloJS2(hrac[65]) + '</span></div>';
	F068('materialHeader', _out);
	SetWidth('materialHeader', sirkaHeadru);
	ShowJSxy('materialHeader', F09f((window.innerWidth - sirkaHeadru) * 0.5), 0);
}

function F04t() {
	var _out = '<ul class="rules">';
	for (var i in LOC_RULES_ALL) _out += '<li>' + LOC_RULES_ALL[i] + '</li>';
	_out += '</ul>';
	F07e(_out, LOC_RULES_label.toUpperCase() + ':', 'infoPopup', 500);
}

function ZobrazAutoRegDiv() {
	if (somvofcbJS) return false;
	if ((hrac[55] == 1 || hrac[55] == 2) || hrac[56] != '') {
		var _out = LOC_auto_popis + '<br>';
		if (hrac[55] == 1 || hrac[55] == 2) {
			_loginNameHack = hrac[1];
			if (_loginNameHack.indexOf('player_') >= 0) {
				var lnhA = _loginNameHack.split('_');
				_loginNameHack = lnhA[1];
			}
			_out += F09k('mini4', LOC_auto_login) + '<br><b>' + _loginNameHack + '</b><br>';
		}
		if (hrac[56] != '') _out += F09k('mini4', LOC_auto_pasw) + '<br><b>' + hrac[56] + '</b><br>';
		_out += F09k('mini4', LOC_auto_change + '<span class="clickspan clickspan2" onclick="GameOptions(\'mh\');">[ ' + LOC_auto_changehere + ' ]</span>');
		_out += '<br><br>';
		F068('autoRegDiv', _out);
		F08c('autoRegDiv');
	} else
		F07g('autoRegDiv');
}

function F07p(ako, _startLevel) {
	try {
		if (!loginovanie) return false;
		if (ako == 3 || !F01t('login_menoEF', 'name'))
			if (ako == 3 || !F01t('hesloEF1', 'password'))
				if (ako == 3 || ako == 1 || !F01t('hesloEF2', 'confirm password')) {
					if (ako != 3) {
						if (ako == 2 && F09j('hesloEF1') != F09j('hesloEF2')) return F03t(LOC_WRONG_2PASS);
					}
					$extraReg = '';
					$extraReg += '&getlevel1=' + hrac[14];
					$extraReg += '&startXP=' + hrac[15];
					$extraReg += '&hramlevel=' + hrac[35];
					$extraReg += '&startZlato2=' + hrac[6];
					$extraReg += '&totalZlato=' + hrac[7];
					$extraReg += '&quest_por=' + hrac[58];
					$extraReg += '&kliky_gold=' + hrac[21];
					$extraReg += '&kliky_utok=' + hrac[4];
					$extraReg += '&kliky_total=' + hrac[5];
					$extraReg += '&mojDPS=' + hrac[13];
					$extraReg += '&quest_progres=' + robimQuest[1];
					if (ako == 3) $extraReg += '&pamataj=1';
					else
						$extraReg += '&pamataj=' + F09h('pamataj');
					$extraReg += '&zeny=' + zenyA.join(';');
					$extraReg += '&veci=' + hracVeciA.join(';');
					if (_startLevel) $extraReg += '&startnlevel=' + _startLevel;
					if (F054()) {
						$extraReg += '&hramlevelAKURAT=' + hralsomlevel;
						$extraReg += '&elife=' + F09i(enemy[ENEMY_ZIVOT]);
					}
					F09b((ako == 3 ? 'autoreg' + (somvofcbJS ? 'fcb' : '') : 'registruj') + '&r_meno=' + F09j('login_menoEF') + '&r_heslo1=' + F09j('hesloEF1') + '&r_heslo2=' +
						F09j('hesloEF2') + '&fcbid=' + somvofcbJS + $extraReg, 1);
				}
	} catch (e) {
		alert('error in login: ' + e);
	}
}

function MenMenoHeslo() {
	if (!F01t('novemeno1', LOC_auto_login_new))
		if (!F01t('hesloEF1', LOC_zmenahesla3))
			if (!F01t('hesloEF2', LOC_zmenahesla4)) {
				if (F09j('hesloEF1') != F09j('hesloEF2')) return F03t(LOC_WRONG_2PASS);
				F09b('zmenmeno&r_novemeno=' + F09j('novemeno1') + '&r_hesloOld=' + hrac[56] + '&r_heslo1=' + F09j('hesloEF1') + '&r_heslo2=' + F09j('hesloEF2'), 1);
			}
}

function MenHeslo() {
	if (!trebaStareHeslo || !F01t('hesloEFold', LOC_zmenahesla2))
		if (!F01t('hesloEF1', LOC_zmenahesla3))
			if (!F01t('hesloEF2', LOC_zmenahesla4)) {
				if (F09j('hesloEF1') != F09j('hesloEF2')) return F03t(LOC_WRONG_2PASS);
				F09b('zmenheslo&r_hesloOld=' + F09j('hesloEFold') + '&r_heslo1=' + F09j('hesloEF1') + '&r_heslo2=' + F09j('hesloEF2'), 1);
			}
}

function F014() {
	F03(120 + 500, 1);
}

function SoundOnOff(_onoff) {
	doSounds = _onoff;
	F067('doSounds', doSounds, DEFCAS * 10);
}

function F044() {
	if (!focused)
		return false;
	if (IsSimpleTutorialLog()) {
		if (bestPresielLevel < 5) {
			F07g('rightBottom');
			return false;
		} else
			F08c('rightBottom');
	}
	var _out = '';
	butSize = 24;
	MBX = butSize + 8;
	_mbby = -40;
	_mbxpos = -13;
	if (jeLoged) {
		_out += ' ' + F02l(LOC_FCB_FANPAGE, 'fcb', 'F02m(\'' + FAN_PAGE_LINK + '\');', '', 'fcbfanBut', _mbxpos + 4 * MBX, _mbby, butSize);
	}
	if (jeSvetJS != 5) {}
	if (jeLoged)
		_out += ' ' + F02l(LOC_BUT_options, 'options', 'GameOptions();MenuSound();', '', 'optionsBut', _mbxpos + 1 * MBX, _mbby, butSize);
	if (jeLoged) {
		if (saveGameAvaiIn <= 0 && !budeSaveTeraz && saveGameAvailable) _out += ' ' + F02l(LOC_BUT_save + '<br>' + LOC_BUT_save3 + F08k(saveGameDate, 0, 0, -10)
			, 'save', 'budeSaveTeraz=1; MenuSound(); F044();', '', 'saveBut', _mbxpos + 2 * MBX, _mbby, butSize);
		else
			_out += ' ' + F02l(LOC_BUT_save2, 'save2', 'PlaySoundLoad(\'error\');', '', 'saveBut', _mbxpos + 2 * MBX, _mbby, butSize);
	}
	if (F054() && PredchadzajuciLevel >= 35) {
		if (isGamePaused) _out += ' ' + F02l(LOC_BUT_unpause, 'continue', 'F02i();', '', 'pauseBut', _mbxpos + 5 * MBX, 0 * MBX + _mbby, butSize);
		else
			_out += ' ' + F02l(LOC_BUT_pause, 'pause', 'manualPauzaBola=1;F02i();', '', 'pauseBut', _mbxpos + 5 * MBX, 0 * MBX + _mbby, butSize);
	}
	if (jeLoged && PredchadzajuciLevel >= 20) {
		if (noveSysMsg > 0) {
			F08c('prisla_sprava_bublina');
			ZapniSkok('prisla_sprava_bublina', 999, 40, 3);
		} else
			F07g('prisla_sprava_bublina');
		_out += ' ' + F02l((noveSysMsg > 0 ? LOC_BUT_sysmsg2 : LOC_BUT_sysmsg), 'mail' + (noveSysMsg > 0 ? '3' : ''), 'LoadSysMsg();', '', 'sysmsgbut', _mbxpos + 3 *
			MBX, _mbby, butSize);
	}
	if (hrac[20] > 0 && PredchadzajuciLevel > 35) _out += ' ' + F02l(LOC_achieve_BUT, 'ach'
		, 'if(F098(\'achievemLabel\')) F061(\'achievem\');else F0i(); MenuSound();', '', 'achBut', _mbxpos + 0 * MBX, 0 * MBX + _mbby, butSize);
	if (F054() && PredchadzajuciLevel >= 35)
		_out += ' ' + F02l(LOC_CANCEL_LEVEL, 'cancel', 'F010(); MenuSound();', '', 'cancelLevelBut', _mbxpos + 6 * MBX, 0 * MBX + _mbby, butSize);
	if (!F054() && JeOffer())
		_out += ' ' + F02l(LOC_BUT_BONUSOFFER, 'bonusoffer', 'OfferClick(23);', '', 'miniofferbut', _mbxpos + 5 * MBX, 0 * MBX + _mbby, butSize);
	if (_out != '') F08c('rightBottom');
	else F07g('rightBottom');
	F068('rightBottom', _out);
	F045();
}
var manualPauzaBola = 0;

function ExtrasMenu() {
	var _out = '';
	F02i(1);
	_out += F09d(LOC_PLAYER_DETAILS.toUpperCase(), 'F061(\'infoPopup\'); PlayerDetails();');
	if (jeKolekcia && PredchadzajuciLevel >= 5) _out += SPC + F09d(LOC_SHOWCOLLECTION, 'F061(\'infoPopup\');ZobrazSkrinu();');
	if (suHelpers && PredchadzajuciLevel >= 150) _out += SPC + F09d(LOC_edithelpers, 'F061(\'infoPopup\');ZobrazVlastnychPomocnikov();');
	if (PredchadzajuciLevel >= 30 && jeSvetJS == 1) _out += SPC + F09d(LOC_ALBUM.toUpperCase(), 'OtvorAlbum();');
	_out += '<br><br>' + LOC_NEXTPATCH;
	F07e(_out, LOC_MENUBUT, 'infoPopup', 700, 1);
}

function PlayerDetails() {
	try {
		F03e();
		MenuSound();
		var _out = '';
		var $co = 0;
		_out += LOC_ITEM_pocetkusov + ': ' + F06j(pocetItemov) + ' ' + LOC_ITEM_pocetkusov2 + ' ' + F06j(pocetItemovGem) + ' ' + LOC_ITEM_pocetkusov3 + ';<br>' +
			LOC_ITEM_pocetFinishes + ': ' + F06j($pocetMisii) + ';' + MEDZ + LOC_ITEM_pocetFinQ + ': ' + F06j(hrac[58]) + '; ' + (VisibleValorPoints() ? MEDZ +
				LOC_ITEM_pocetValorPoints + ': ' + F06j(itemBonusOverview[46]) + ' ' + F07f('[+]', 'OpenQuickShop(-46,-1);') : '');
		_out += '<br>' + F09k('imper', LOC_PD_0);
		_out += DetailsTable([99, 69, 87, 100, 70, 92, 66, 94, 101, 106, 77, 64, 71, 111, 59, 126, 144]);
		_out += F09k('imper', LOC_PD_1);
		_out += DetailsTable([65, 67, 73, 79, 89, 102, 57, 35, 36, 37, 128, 38, 63, 139, 80]);
		_out += F09k('imper', LOC_PD_2);
		_out += DetailsTable([0, 82, 104, 93, 115, 116, 55, 48, 49, 129, 122, 124, 159, 143, 113, 72, 47, 95, 87, 109, 140, 187, 186]);
		_out += F09k('imper', LOC_PD_3);
		_out += DetailsTable([83, 84, 86, 78, 105, 131, 123, 125, 178, 137, 56, 192]);
		_out += F09k('imper', LOC_PD_4);
		_out += DetailsTable([76, 98, 22, 23, 26, 27, 28, 29, 117]);
		F07e(_out, LOC_P_DETAILS, 'iteminfos', 700, 1);
	} catch (e) {
		alert(e);
	}
}

function DetailsTable(_mnozina) {
	var _out1 = '<table class="tabulka_details">';
	var _out2 = '';
	for (var $co1 in _mnozina) {
		var $co = _mnozina[$co1];
		if (itemBonusOverview[$co] > 0) {
			if ($co == 80) var _cislo1 = PCisloJS2(HealingReducedJS());
			else if ($co == 70) var _cislo1 = 2 + itemBonusOverview[$co];
			else if ($co == 79) var _cislo1 = itemBonusOverview[$co];
			else if ($co == 37 || $co == 39) var _cislo1 = PCisloJS2(KratPercentoJS(itemBonusOverview[$co], itemBonusOverview[152]));
			else var _cislo1 = PCisloJS2(F09f(($co == 64 || $co == 66 || $co == 86 ? 1 + XPperAchP : 1) * itemBonusOverview[$co]));
			var _popiska = LOC_item_popis[$co].split('<br>');
			var _popiska = _popiska.join(' ');
			if ($co == 140 || $co == 187) {
				_popiska = _popiska.split('XXX');
				_popiska = _popiska.join(SekundNaDoubleRew());
			}
			_out2 += '<tr><td class="tdr" valign="top">' + F037($co) + '' + _cislo1 + '</td><td>' + F09k('pdf', _popiska) + InfoDodatok($co) +
				'&nbsp;<span class="clickspan" onclick="OpenShop(-' + $co + ',-1);">[+]</span>' + (somTESTER ? '[' + $co + ']' : '') + '</td></tr>';
		}
	}
	_out1 += _out2 + '</table>';
	if (_out2 == '') return '<br>------------------------------<br><br>';
	return _out1;
}

function InfoDodatok(_co) {
	var _out = '';
	if (_co == 102 || _co == 104 || _co == 105) _out += '<br>' + LOC_TOTAL + ': +' + PCisloJS2(itemBonusOverview[_co] * pocetItemov);
	if (_co == 35 || _co == 47 || _co == 48 || _co == 49) _out += '<br>' + LOC_TOTAL + ': +' + PCisloJS2(itemBonusOverview[_co] * itemBonusOverview[46]);
	if (_co == 131) _out += '<br>' + LOC_TOTAL + ': +' + PCisloJS2(itemBonusOverview[_co] * pocetItemov);
	if (_co == 89)
		_out += '<br>' + LOC_TOTAL + ': +' + PCisloJS2(Math.min(MAX_PRELEV_DPS, KratPercentoJS2(totalDamageKlikBezC4, itemBonusOverview[89]))) + (MAX_PRELEV_DPS <=
			KratPercentoJS2(totalDamageKlikBezC4, itemBonusOverview[89]) ? '(' + LOC_SHOP_MAX + ')' : '');
	if (_co == 79)
		_out += '<br>' + LOC_TOTAL + ': +' + PCisloJS2(Math.min(MAX_PRELEV_DPC, F09f(itemBonusOverview[79] * 0.01 * totalDamageTime2))) + (MAX_PRELEV_DPC <= F09f(
			itemBonusOverview[79] * 0.01 * totalDamageTime2) ? '(' + LOC_SHOP_MAX + ')' : '');
	return F09k('mini4', _out);
}
var menimAjMeno = false;
var trebaStareHeslo = false;

function GameOptions(_co) {
	deselectuj = false;
	if (rewardPoradie3 < rewardPoradie2) return F03t(LOC_TAKE_REWARD_FIRST, ' ');
	var _out = '';
	menimAjMeno = false;
	if (showNarodky)
		if (!testingP)
			if (_co != 'mh') _out += '<div id="narodenie2"></div><hr><br>';
	if ((hrac[55] == 1 || hrac[55] == 2)) {
		menimAjMeno = true;
		_out += LOC_auto_login_new + '<input type="meno" id="novemeno1" name="novemeno1" value="" size="18" maxlength="32" "><br>';
		_out += '<br>';
	}
	if (hrac[56] == '') _out += '<b>' + LOC_zmenahesla + '</b><br><table class="tabulka2">';
	_out += '<table class="tabulka2">';
	if (hrac[56] == '') {
		trebaStareHeslo = true;
		_out += '<tr><td class="tdr2">' + LOC_zmenahesla2 +
			'</td><td><input type="password" id="hesloEFold" name="hesloEFold" value="" size="18" maxlength="32" "></td></tr>';
	}
	_out += '<tr><td class="tdr2">' + LOC_zmenahesla3 +
		'</td><td><input type="password" id="hesloEF1" name="hesloEF1" value="" size="18" maxlength="32" "></td></tr>';
	_out += '<tr><td class="tdr2">' + LOC_zmenahesla4 +
		'</td><td><input type="password" id="hesloEF2" name="hesloEF2" value="" size="18" maxlength="32" "></td></tr>';
	_out += '</table>';
	if (menimAjMeno && (hrac[56] != '' || hrac[55] == 1 || hrac[55] == 2)) {
		_out += F09d(LOC_zmenahesla5, 'MenMenoHeslo();');
	} else
		_out += F09d(LOC_zmenahesla5, 'MenHeslo();');
	if (_co != 'mh') {
		_out += '<hr><br>' + F09k('mini1', LOC_identifikovat) + '<br><table class="tabulka2">';
		_out += '<tr><td class="tdr2">' + LOC_iden_mail + '</td><td>' + F035('set_mail', hrac[100], 25, 50) + '</td></tr>';
		_out += '<tr><td class="tdr2">' + LOC_iden_fcbid + '</td><td>' + F035('set_fcbid', hrac[101], 25, 30) + '</td></tr>';
		_out += '<tr><td class="tdr2">' + LOC_iden_fcbname + '</td><td>' + F035('set_fcbname', hrac[102], 25, 50) + '</td></tr>';
		_out += '</table>' + F09d(LOC_NASTAV_BUT, 'NastavSettings();');
		_out += '<hr>';
		_out += LOC_options_1 + '<input name="togleflingicons" type="checkbox" ' + (jeLietajuceIkony ? 'checked="checked"' : '') +
			' onclick="LowDetailsToggle();"><br>';
		_out += LOC_options_4 + '<input name="togleflingicons2" type="checkbox" ' + (jeLietajuceIkony2 ? 'checked="checked"' : '') +
			' onclick="LowDetailsToggle2();"><br>';
		_out += LOC_options_2 + '<input name="togleshopinfo" type="checkbox" ' + (jeExtraShopInfo ? 'checked="checked"' : '') +
			' onclick="ExtraShopInfoToggle();"><br>';
		_out += LOC_options_3 + '<input name="togleshopinfo2" type="checkbox" ' + (jeVzdyVelkyShop ? 'checked="checked"' : '') +
			' onclick="ExtraShopInfoToggle2();"><br>';
		_out += LOC_options_5 + '<input name="toggleOption5" type="checkbox" ' + (optionsss[5] ? 'checked="checked"' : '') + ' onclick="OptionToggle(5);"><br>';
		if (mojvek >= 21) _out += LOC_cenzuraSetting + '<input name="toggleOption6" id="toggleOption6" type="checkbox" ' + (JeCenzura() ? 'checked="checked"' : '') +
			' onclick="ToggleCenzura();"><br>';
		_out += '<br>' + LOC_sendticket_popis + F09d(LOC_contactS, 'OpenTicketSender(0,0);');
	}
	_out += '<br><br>' + F07f('[Change Leader Board Avatar]', 'ChangeRamcekMenu()');
	DoPopup2(_out, LOC_BUT_options.toUpperCase(), 'infoPopup', 500, '');
	F061('narodenie');
	if (!testingP) F0r('narodenie2');
}
jeExtraShopInfo = F079('shopdetails', 0) * 1;

function ExtraShopInfoToggle() {
	jeExtraShopInfo = F079('shopdetails', 0) * 1;
	if (jeExtraShopInfo) jeExtraShopInfo = 0;
	else jeExtraShopInfo = 1;
	F067('shopdetails', jeExtraShopInfo, 86400 * 90);
}
jeVzdyVelkyShop = F079('shopdetails2', 0) * 1;

function ExtraShopInfoToggle2() {
	jeVzdyVelkyShop = F079('shopdetails2', 0) * 1;
	if (jeVzdyVelkyShop) jeVzdyVelkyShop = 0;
	else jeVzdyVelkyShop = 1;
	F067('shopdetails2', jeVzdyVelkyShop, 86400 * 90);
}
var optionsss = [];
optionsss[5] = F079('optionsss5', 0) * 1;

function OptionToggle(_ktory) {
	optionsss[5] = F079('optionsss' + _ktory, 0) * 1;
	if (optionsss[5]) optionsss[5] = 0;
	else optionsss[5] = 1;
	F067('optionsss' + _ktory, optionsss[5], 86400 * 90);
}

function LowDetailsToggle() {
	jeLietajuceIkony = (jeLietajuceIkony == 1 ? 0 : 1);
	if (jeLietajuceIkony) F098('bodyId')
		.className = "bodyBGimage";
	else
		F098('bodyId')
		.className = "";
	F067('jeLietajuceIkonyS', jeLietajuceIkony, 259200 * 10);
	F039(0);
}

function LowDetailsToggle2() {
	jeLietajuceIkony2 = (jeLietajuceIkony2 == 1 ? 0 : 1);
	F067('jeLietajuceIkony2S', jeLietajuceIkony2, 259200 * 10);
}

function NastavSettings() {
	F09b('nastavset&posta=' + F09j('set_mail') + '&fcbi=' + F09j('set_fcbid') + '&fcbm=' + F09j('set_fcbname'), 1);
}
nacitaneSpravy = false;
noveSysMsg = F079('novesysmsgK', 0);

function LoadSysMsg() {
	F02i(1);
	MenuSound();
	if (noveSysMsg > 0 || !nacitaneSpravy) F09b('sysmsg', 1);
	else ShowSysMsg();
}
sysSpravy = [];

function ShowSysMsg(_kolkonovych) {
	try {
		if (!_kolkonovych) _kolkonovych = 0;
		_kolkonovych = 3;
		var _out = LOC_onlyinenglish + '<br><br>';
		var _outOdpoved = '';
		var odpovede = [];
		if (sysSpravy.length > 0) {
			_out += '<table class="sysTable" cellpadding="3" cellspacing="3"><tr><th width="100">' + LOC_sys_datum + '</th><th width="600">' + LOC_sys_popis +
				'</th><th width="100">' + LOC_tick_kategoria + '</th><th width="100">' + LOC_sys_autor + '</th><th>&nbsp;</th></tr>';
			var _kategoria = '';
			for (var isys in sysSpravy)
				if (sysSpravy[isys] != 0) {
					_kategoria_i = sysSpravy[isys][4];
					if (_kategoria_i > 0 && _kategoria_i < 99) _kategoria = LOC_tick_kategorie[sysSpravy[isys][4]];
					else if (_kategoria_i == 99) _kategoria = 'ADMIN MSG';
					else if (_kategoria_i == -1) _kategoria = 'chat';
					else if (_kategoria_i == 0) _kategoria = 'system';
					else _kategoria = '';
					if (sysSpravy[isys][11] > 0) {
						if (!odpovede[sysSpravy[isys][11]]) {
							odpovede[sysSpravy[isys][11]] = [];
							odpovede[sysSpravy[isys][11]][0] = sysSpravy[isys];
						} else {
							odpovede[sysSpravy[isys][11]].push(sysSpravy[isys]);
						}
					} else {
						text_sysm = sysSpravy[isys][1];
						text_sysm = text_sysm.split('[e.br]')
							.join('<br>');
						text_sysm = text_sysm.split('\\\'')
							.join('\'');
						text_sysm = text_sysm.split('\\\\')
							.join('\\');
						_out += '<tr class="ticketTR' + sysSpravy[isys][6] + '" id="tickedTR_' + sysSpravy[isys][0] + '"><td>' + F08k(sysSpravy[isys][2]) + F09k('mini2'
								, '<br>[#' + sysSpravy[isys][0] + ']') + '</td><td>' + text_sysm + '<br><br></td><td>' + F09k('mini2', _kategoria) + '</td><td>' + sysSpravy[isys][3] +
							'</td><td>' + F07f(LOC_REPLY, 'ReplyTo(' + sysSpravy[isys][0] + ',' + sysSpravy[isys][9] + ',' + sysSpravy[isys][4] + ');') + '<br>' + F07f(LOC_delete
								, 'DeleteTicket(' + sysSpravy[isys][0] + ',' + sysSpravy[isys][9] + ');') + '</td></tr>';
						if (odpovede[sysSpravy[isys][0]]) {
							_outOdpoved = '';
							var _poradieSub = 0;
							for (var osys in odpovede[sysSpravy[isys][0]]) {
								_poradieSub++;
								odpoved = odpovede[sysSpravy[isys][0]][osys];
								text_sysm = odpoved[1];
								text_sysm = text_sysm.split('[e.br]')
									.join('<br>');
								text_sysm = text_sysm.split('\\\'')
									.join('\'');
								text_sysm = text_sysm.split('\\\\')
									.join('\\');
								_outOdpoved = '<tr id="tickedTR_' + sysSpravy[isys][0] + '_' + _poradieSub + '" class="ticketTR' + odpoved[6] + '" onclick="ReplyTo(' + sysSpravy[isys]
									[0] + ',' + sysSpravy[isys][9] + ',' + sysSpravy[isys][4] + ');"><td>' + F08k(odpoved[2]) + F09k('mini2', '<br>[#' + odpoved[0] + ']') +
									'</td><td style="padding-left:25px;" colspan="2">' + text_sysm + '<br><br></td><td>' + odpoved[3] + '</td></tr>' + _outOdpoved;
							}
							_out += _outOdpoved;
						}
					}
				}
			_out += '</table>';
		} else
			_out += LOC_nosysmsg;
		_out += '<br>' + LOC_sendticket_popis + F09d(LOC_contactS, 'OpenTicketSender(0,0);');
		noveSysMsg = 0;
		F067('novesysmsgK', noveSysMsg, DEFCAS);
		DoPopup2(_out, LOC_BUT_sysmsg, 'infoPopup', 980, 1);
	} catch (e) {
		alert(e);
	}
}

function DeleteTicket2(_toticket, _testh) {
	F09b('deleteticketuser&ticketid=' + _toticket + '&testh=' + _testh, 1);
}

function HideTickets(_tickid) {
	F07g('tickedTR_' + _tickid);
	for (var i = 1; i < 100; i++) F07g('tickedTR_' + _tickid + '_' + i);
	for (var isys in sysSpravy)
		if (sysSpravy[isys][11] == _tickid || sysSpravy[isys][0] == _tickid) sysSpravy[isys] = 0;
}

function DeleteTicket(_toticket, _testh) {
	F03r(LOC_delete2, 'DeleteTicket2(' + _toticket + ',' + _testh + ');');
}

function ReplyTo(_toticket, _testh, _category) {
	if (_category == 0) {
		F03t(LOC_REPLY_disabled, '...');
		return false;
	}
	if (!_category) _category = 0;
	OpenTicketSender(_toticket, _testh, _category);
}

function OpenTicketSender(_toticket, _testh, _category) {
	deselectuj = false;
	if (!_toticket) _toticket = 0;
	if (!_testh) _testh = 0;
	var _out = '<span class="warning">' + LOC_ticket_jazyky + '</span><br><br>' + (!_toticket ? LOC_tick_kategoria + ' ' + F05d(LOC_tick_kategorie, 'tick_cat_sel'
			, 0, 1) : '<input type="hidden" id="tick_cat_sel" value="' + _toticket + '">') + '<input type="hidden" id="testh" value="' + _testh +
		'"><br><br><textarea id="tickettext" cols="80" rows="10"></textarea><br>' + F09d(LOC_sendticket_BUT, 'SendTicket();');
	F07e(_out, LOC_sendticket.toUpperCase(), 'infoPopup', 700);
	F02i(1);
	F07k('tickettext', 1);
}

function SendTicket() {
	if (F09m('tick_cat_sel') == 0) return F03t(LOC_tick_zvolkat);
	if (F09j('tickettext')
		.length < 10) return F03t(LOC_tick_pistik);
	if (F09j('tickettext')
		.length > 2500) return F03t(LOC_tick_LONG);
	F09b('sendticket&cat=' + F09j('tick_cat_sel') + '&testh=' + F09j('testh') + '&sprava=' + LinkFixer(F09j('tickettext')), 1);
}
var testAkc = 0;

function F01b(klaves, e) {
	_kdek = (e.target || e.srcElement);
	if (klaves == 13) {
		if (_kdek.id == 'login_menoEF') F07k('hesloEF1');
		else if (klaves == 13)
			if (_kdek.id == 'hesloEF1') F07p(1);
			else if (klaves == 13)
			if (_kdek.id == 'hesloEF2') F07p(2);
	}
	shiftPressed = e.shiftKey;
	if (shiftPressed && disabledTestSave) {
		KlavesnicaHitnuta(klaves, e);
		return false;
	}
	if (klaves == 192) {
		testAkc++;
		if (somTESTER) {
			F07h(101);
		}
		if (testAkc == 6) {
			testAkc = 0;
			if (SOM_INDUSTRIES) StartMisoveTesty();
		}
	}
	if (klaves == 86) {
		TakeAllRewards();
	}
	if (klaves == 27) {
		if (F098('warPopupIN')) F061('warPopup');
		else if (F098('areyousurepopIN')) F061('areyousurepop');
		else if (F098('shopPopupIN')) {
			CloseShop();
		} else if (F098('shopPopupFCBIN')) {
			CloseShop();
		} else if (F098('infoPopupDIN')) F061('infoPopupD');
		else if (F098('infoPopupDesIN')) F061('infoPopupDes');
		else if (F098('infoPopupD2IN')) F061('infoPopupD2');
		else if (F098('infoPopup2IN')) F061('infoPopup2');
		else if (F098('infoPopupIN')) F061('infoPopup');
		else if (F098('koloPopupIN')) F061('koloPopup');
		else if (F098('iteminfosIN')) F061('iteminfos');
		else if (F098('obrazkyPopIN')) F061('obrazkyPop');
		else if (F098('itemEditPopIN')) F061('itemEditPop');
		else if (F098('achievemIN')) F061('achievem');
		else if (F098('tutorial1divIN')) {
			F061('tutorial1div');
			ObrazkovyTutorialStart();
		} else
			TakeAllRewards();
		F03e();
		MenuSound();
		startedGame = true;
		return false;
	}
	if (_kdek && _kdek.type && (_kdek.type == 'textarea' || (_kdek.type == 'text' && klaves != 13) || _kdek.type == 'password')) {} else {
		if (klaves == 84 && F098('new_shop_div')) {
			posledne_kupeneVeci = [];
			ajKupene++;
			OpenShop(activeShopFilter, -1);
			return false;
		}
		if (klaves == 71 && F098('new_shop_div')) {
			shopSort += 1;
			if (shopSort > 1) shopSort = 0;
			SortItems();
			OpenShop(activeShopFilter, 0);
			return false;
		}
		if (klaves == 70 && F098('new_shop_div')) {
			costfilter += 1;
			if (!JePlatina())
				if (costfilter == 5) costfilter++;
			if (PredchadzajuciLevel < 200)
				if (costfilter == 6) costfilter++;
			if (PredchadzajuciLevel < 150)
				if (costfilter == 7) costfilter++;
			if (PredchadzajuciLevel < 950)
				if (costfilter == 8) costfilter++;
			if (costfilter > 8) costfilter = 0;
			OpenShop(activeShopFilter, 0);
			return false;
		}
		if (klaves >= 49 && klaves <= 57) {
			if (IsPuVisible()) {
				F03l(0, 15 + klaves - 49);
				return false;
			}
		} else if (klaves == 48) {
			F03l(0, 24);
			return false;
		} else if (klaves == 73) {
			F03l(0, 25);
			return false;
		} else if (klaves == 79) {
			F03l(0, 69);
			return false;
		}
		for (var puk in hotkeysK)
			if (klaves == hotkeysK[puk]) {
				if (IsPuVisible()) {
					if (puk == 11) F03l(0, 69);
					else
						F03l(0, 15 + puk * 1);
				}
				return false;
			}
		if (klaves == 88) {
			ToggleAutoClicker();
			return false;
		} else if (klaves == 79) {
			F03l(0, 69);
			return false;
		} else if (klaves == 80) {
			if (F055()) {
				pauzePocetKey++;
				if (pauzePocetKey < 20) {
					manualPauzaBola = 2;
					F02i();
				}
			}
		} else if (klaves == 78 && bestPresielLevel >= 1) LoadSysMsg();
		else if (klaves == 77) {
			if (F098('missionRewardNew')) {
				breakAutoPilot = 1;
				TakeNewF08b();
				return false;
			}
			F05m(1);
		} else if (!e.ctrlKey && klaves == 67) {
			if (F098('missionRewardNew')) {
				TakeNewF08b();
				return false;
			}
			if (!F098('jeShopOpen')) {
				F02i(1);
				F03x(hralsomlevel);
			}
		} else if (klaves == 76) {
			if (!jeAutoPilot)
				AutopilotStart();
			else AutopilotEnd();
		} else if (klaves == 72) {
			if (F098('new_shop_div')) CloseShop();
			else if (PredchadzajuciLevel > 1)
				OpenShop1(activeShopFilter, shop_riadok);
		} else if (klaves == 90) {
			if (IN_TEST) {}
		}
		if (klaves == 75) {
			seizure += 1;
		}
	}
}

function SortItems() {
	for (var i in itemyVShopeA)
		if (i > 0) itemyVShopeA[i][1][21] = F02h(i);
	for (var ifil in filtre)
		if (filtre[ifil].length > 0) {
			if (shopSort) shopItemyFiltered[ifil].sort(function(a, b) {
				return a[1][6] - b[1][6];
			});
			else
				shopItemyFiltered[ifil].sort(function(a, b) {
					if ((a[1][9] >= 2 && a[1][9] != 5) || (b[1][9] >= 2 && b[1][9] != 5)) return b[1][9] - a[1][9];
					return b[1][21] - a[1][21];
				});
		}
}
pauzePocetKey = 0;
$jeLoginVisible = false;
$jeLoginVisible2 = false;

function F0k(_lenLogin) {
	if (!jeLoged) {
		if (_lenLogin) {
			F03(32, 1);
			F08c('loginDiv');
			F07k('login_menoEF');
			$jeLoginVisible = true;
		}
		if (PredchadzajuciLevel >= 3) F036();
	}
}

function F036() {
	deselectuj = false;
	$jeLoginVisible = true;
	F08c('loginDiv');
	F03(32, 1);
	F07g('loginbut1');
	F062('teg_TR');
	F068('loginlabel', LOC_NOVE_MENO);
	F07g('createnewaccbut');
}
xp_xy = [];
gold_xy = [];
heal_xy = [];
dia_xy = [];
fuel_xy = [];
ammo_xy = [];
clicker_xy = [];
hplocha_xy = [];
RAND_POS = 30;
ACT_BUT_UTOK_X = ACT_BUT_ZLATO_X = ACT_BUT_ENERGY_X = ACT_BUT_HEAL_X = 0;
ACT_BUT_Y = 0;
ENEMY_X = ENEMY_Y = 0;

function F085(_x, _y, _x2, _y2) {
	F034(_x + F07o(5), _y + F07o(5), 'icon_xp', _x2, _y2, xp_xy[0], xp_xy[1]);
}

function ZrobPlatinu(_x, _y, _x2, _y2) {
	F034(_x + F07o(5), _y + F07o(5), 'icon_platina', _x2, _y2, platina_xy[0], platina_xy[1]);
}

function F051(_x, _y, _x2, _y2) {
	F034(_x + F07o(5), _y + F07o(5), 'icon_gold', _x2, _y2, gold_xy[0], gold_xy[1]);
}

function ZrobZlato2(_x, _y) {
	F051(_x, _y, _x + F05v(40, 80), _y + F05v(40, 80));
}

function ZrobHeal2(_x, _y) {
	F034(_x + F07o(5), _y + F07o(5), 'icon_heal', _x + F05v(40, 80), _y + F05v(40, 80), heal_xy[0], heal_xy[1]);
}
var hrac = [];
var achieveA = [];
H_ACH = 33;
JE_TESTER = false;
jeLogedCOOKIE = false;
var presets = [];

function F043(_newhrac) {
	try {
		hrac = F01z(_newhrac, ',,');
		hrac[65] = hrac[65] - 20;
		if (hrac[65] < 0) hrac[65] = 0;
		PredchadzajuciLevel = hrac[H_LEVEL];
		if (hrac[0] > 0) jeLoged = true;
		hracVeciA = F05r();
		extraStacksA = F01z(hrac[105], ';');
		kupenePomoc = F01z(hrac[110], ';');
		if (kupenePomoc.length <= 10) kupenePomoc = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		aktivnySet = hrac[116];
		slot_freeA = [2, 2, 2, 2];
		slot_usedA = F01z(hrac[109], ';');
		presets[1] = F01z(hrac[112], ';');
		if (aktivnySet < 1) {
			aktivnySet = 1;
			presets[1] = CopyArray(slot_usedA);
		}
		presets[2] = F01z(hrac[113], ';');
		presets[3] = F01z(hrac[114], ';');
		presets[4] = F01z(hrac[115], ';');
		hrac[80] = 0;
		if (jeLoged) {
			F067('nonlgd_je', 0, 86400 * 90);
		} else {
			var load_nonlgd = F079('nonlgd_je', 0);
			if (load_nonlgd > 0) {
				hrac[6] = F079('nonlgd_gold', 500);
				hrac[15] = F079('nonlgd_exp', 0);
				PredchadzajuciLevel = hrac[14] = F079('nonlgd_level', 1);
				hrac[H_VECI] = F079('nonlgd_items', '0a0a0');
				hracVeciA = F01z(hrac[H_VECI], 'a');
				hrac[H_VECI] = hracVeciA.join(';');
				hrac[H_ZENY] = F079('nonlgd_misie', '1a1a0');
				zenyA = F01z(hrac[H_ZENY], 'a');
				zenyA_E = F01z(hrac[H_ZENY_E], 'a');
				zenyA_I = F01z(hrac[H_ZENY_I], 'a');
				hrac[H_ZENY] = zenyA.join(';');
				hrac[H_ZENY_E] = zenyA_E.join(';');
				hrac[H_ZENY_I] = zenyA_I.join(';');
				jeLogedCOOKIE = true;
				hrac[30] = 0;
				hrac[82] = 0;
				hrac[19] = 0;
				bestPresielLevel = hrac[43] = F079('nonlgd_bestPresielLevel', 1);;
				enemyZije2 = false;
				hrac[61] = hrac[HRALEVEL];
				hrac[HRALEVEL] = 0;
				hrac[60] = enemy[ENEMY_ZIVOT];
				enemy[ENEMY_ZIVOT] = 0;
				F01i();
			}
		}
		zenyA = F01z(hrac[H_ZENY], ';');
		zenyA_E = F01z(hrac[H_ZENY_E], ';');
		zenyA_I = F01z(hrac[H_ZENY_I], ';');
		achieveA = F01z(hrac[H_ACH], ';');
		hralsomlevel = hrac[35];
		sekundZaKoloSAVE = sekundZaKolo = hrac[37];
		zivotMaxMinus = hrac[52];
		klikovZaKolo = hrac[38];
		JE_TESTER = hrac[77] * 1;
		F0a();
		if (F054()) enemyZije2 = true;
		else
			enemyZije2 = false;
		sekundZaKoloAttack = sekundZaKolo % $akoCastoUtociEnemy;
		noveSysMsg = hrac[42];
		F067('novesysmsgK', noveSysMsg, DEFCAS);
		ExplodeToQuests(hrac[57]);
		F045();
		F046();
		F02t(131, sekundZaKoloAttack);
	} catch (e) {
		alert('error in sethraca:' + e);
	}
}

function KratBuffJS(_base, _perI) {
	return KratPercentoJS(_base, F070(_perI));
}

function PlusBuffJS(_base, _perI) {
	return _base + F070(_perI);
}

function F0v(_bezbuffov) {
	if (_bezbuffov) return (hrac[51] <= 0 ? 1 : 2) * itemBonusOverview[53];
	return (hrac[51] <= 0 ? 1 : 2) * PlusBuffJS(itemBonusOverview[53], 9);
}

function F01o(_bezbuffov) {
	var baseHeal = KratPercentoJS(itemBonusOverview[61], itemBonusOverview[56]) + itemBonusOverview[105] * pocetItemov;
	if (_bezbuffov) return (hrac[50] <= 0 ? 1 : 2) * baseHeal;
	return (hrac[50] <= 0 ? 1 : 2) * PlusBuffJS(baseHeal, 10);
}
PLUS_NICIVOST = 13;

function F0w(_bezbuffov) {
	if (_bezbuffov) return (hrac[48] > 0 ? 2 : 1) * hrac[PLUS_NICIVOST];
	return (hrac[48] <= 0 ? 1 : 2) * PlusBuffJS(hrac[PLUS_NICIVOST] * 1, 8);
}

function F012(_bezbuffov) {
	var zlatoPod30Sec = itemBonusOverview[159];
	if (!F055() || sekundZaKolo > 30) zlatoPod30Sec = 0;
	var zlatoBase = KratPercentoJS((PredchadzajuciLevel > 2 ? 50 : 0) + itemBonusOverview[51] + zlatoPod30Sec + itemBonusOverview[104] * pocetItemov +
		itemBonusOverview[49] * itemBonusOverview[46], itemBonusOverview[55]);
	if (_bezbuffov) return (hrac[49] <= 0 ? 1 : 2) * zlatoBase;
	var _zlatoPerSec = (hrac[49] <= 0 ? 1 : 2) * PlusBuffJS(zlatoBase, 11);
	return _zlatoPerSec;
}

function F04u(_hrac) {
	if (!_hrac) _hrac = hrac;
	return hrac[1];
}

function F013(_i, _aky, _index2) {
	if (!_index2) _index2 = 0;
	if (itemyVShopeA[_i][4][0][1] == _aky) return itemyVShopeA[_i][4][0][_index2];
	else return 0;
}

function SecondStatItemu(_i, _aky, _index2) {
	if (!_index2) _index2 = 0;
	if (itemyVShopeA[_i][4][1][1] == _aky) return itemyVShopeA[_i][4][1][_index2];
	else return 0;
}
KLIK_NICIVOST = 12;

function ClickAttackValue(_lenBase) {
	var _baseValue = hrac[12];
	if (_lenBase) return _baseValue;
	return PlusBuffJS(_baseValue, 12);
}
H_XP = 15;
var _LEVEL = 0;

function F025(_hrac) {
	if (PredchadzajuciLevel < 1) return new Array(0, 100);
	if (!_hrac) _hrac = hrac;
	var kolkoXP = F07u(_hrac);
	var kolkoXP2 = levelTable[PredchadzajuciLevel];
	if (kolkoXP >= kolkoXP2) {
		kolkoXP = kolkoXP - kolkoXP2;
		kolkoXP2 = levelTable[PredchadzajuciLevel + 1];
	}
	return Array(kolkoXP, kolkoXP2);
}

function F07u(_hrac) {
	if (!_hrac) _hrac = hrac;
	return _hrac[H_XP] * 1;
}
H_LEVEL = 14;
PredchadzajuciLevel = 0;

function F04v() {
	return hrac[H_LEVEL];
}
var rewardPoradie = rewardPoradie2 = rewardPoradie3 = 0;
var rewTabid = lastRewTabid = 0;
var odmenyPrevziat = [];
var bolLevelUpClosedShop = false;

function F07h(_lvl) {
	F05x(_lvl, rewardPoradie2);
	VytvorFilterNewItems();
	if (F098('new_shop_div')) {}
	if (_lvl == 10) Vypis_kontainer_primary();
	if (_lvl == 17 || _lvl == 5) F046();
	if (_lvl == 5 || _lvl == 285 || _lvl == 190) F039();
	if (_lvl == 50) {
		tutorialACpomisii = false;
		TUT_dajautoclickers = 1;
		PridajAutoKlicker(4000);
		ObrazkovyTutorialStart(TUT_dostalLVLup, 500);
		TUT_dajautoclickers = 0;
		Vypis_kontainer_kliker();
		CloseShop();
		setTimeout('CloseShop();', 500);
	}
	if (_lvl == 30) bolLevelUpClosedShop = true;
}

function ZobrazSipky(_vsetky) {
	return false;
}
var NIsipkyS = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var stunnedPopups = false;
var _lvlupout = 'level up ...';

function F05x(_lvl, _por) {
	var _doFloatLvlup = true;
	if (PredchadzajuciLevel < 5) _doFloatLvlup = false;
	if (_doFloatLvlup)
		FloatingText2(845, 122, LOC_LEVELUP, '#00ff00');
	_lvlupout = CloseBut('levelUPtop', -1) + '<center><b>' + LOC_LEVELUP + '</b></center>';
	costfilter = 0;
	if (jeLoged) {
		var plusFuel = 1;
		if (PredchadzajuciLevel >= 250) plusFuel = 2;
		if (PredchadzajuciLevel >= 600) plusFuel = 3;
		var _pridanyFuel = F03z(plusFuel);
		if (_pridanyFuel > 0 && JeFuelVisible()) {
			if (_doFloatLvlup)
				ZrobFtext(980, 32, '+' + _pridanyFuel + ' ' + LOC_FUEL, 10, 0, '#04FF06', '', 100, 0);
			_lvlupout += '+' + F06j(_pridanyFuel) + ' ' + LOC_FUEL + '<br>';
		}
	}
	if (_lvl % 5 == 0) {
		$DIAlvl = 4;
		if (PredchadzajuciLevel >= 297) $DIAlvl = 10;
		if (PredchadzajuciLevel >= 397) $DIAlvl = 20;
		if (_doFloatLvlup)
			ZrobFtext(850, 32, '+' + $DIAlvl, 10, 0, '#04FF06', '', 100, 0);
		F01r($DIAlvl);
		_lvlupout += ' +' + F06j($DIAlvl) + ' ' + LOC_item_popis[41] + '<br>';
	}
	PlaySoundLoad('levelup');
	if (_lvl == 11) {
		tutorialACpomisii = true;
	}
	if (PredchadzajuciLevel >= 10) {
		F068('levelUPtop', _lvlupout);
		UpperNotification('levelUPtop', 100, 8000);
	}
}
var tutorialACpomisii = false;
H_ZLATO = 6;

function F04s(_hrac) {
	if (!_hrac) _hrac = hrac;
	return _hrac[H_ZLATO] * 1;
}

function ClickGoldValue(_lenBase, bez30sec) {
	if (!bez30sec) bez30sec = 0;
	var zlatoPod30Sec = itemBonusOverview[124];
	if ((!F055() || sekundZaKolo > 15 || bez30sec)) zlatoPod30Sec = 0;
	var _baseValue = zlatoPod30Sec + itemBonusOverview[50] + 30 + itemBonusOverview[46] * itemBonusOverview[48];
	_baseValue = KratPercentoJS(_baseValue, itemBonusOverview[122]);
	if (_lenBase) return _baseValue;
	return PlusBuffJS(_baseValue, 17);
}
H_ZENY = 32;
H_ZENY_E = 96;
H_ZENY_I = 119;
H_VECI = 22;
var hracVeciA = [];

function F05r(_hrac) {
	if (!_hrac) _hrac = hrac;
	if (!_hrac[H_VECI]) _hrac[H_VECI] = '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;0';
	return F01z(_hrac[H_VECI], ';');
}

function F0u(_hrac) {
	if (!_hrac) _hrac = hrac;
	var $_klikxp = 30 + itemBonusOverview[64];
	$_klikxp = F09f($_klikxp * (1 + XPperAchP * hrac[20]));
	return $_klikxp;
}

function F08(_podlaLevel, _menaStr) {
	var _menaStrA = _menaStr.split(';');
	if (PredchadzajuciLevel >= _podlaLevel) {
		for (var i in _menaStrA) F08c(_menaStrA[i]);
	} else {
		for (var i in _menaStrA) F07g(_menaStrA[i]);
	}
}

function F026() {
	if (F09m('n_dni') == 1 && F09m('n_mesiace') == 1 && F09m('n_roky') == 1999) return F03t(LOC_NAOZAJ);
	F09b('datumnar&datumnar1=' + F09m('n_dni') + '&datumnar2=' + F09m('n_mesiace') + '&datumnar3=' + F09m('n_roky'), 1);
	F061('infoPopup');
}
bestPresielLevel = 0;
pulzovalonarodenie = -1;
narod_1 = narod_2 = narod_3 = 1999;
mojvek = 0;

function F0r(_kam) {
	if (testingP) return false;
	try {
		if (!_kam) _kam = 'narodenie';
		if (mojvek <= 0 || _kam != 'narodenie')
			for (var i in narodky)
				if (hralsomlevel == narodky[i] || F055() == narodky[i] || hrac[35] == narodky[i] || _kam != 'narodenie') {
					var _out = '';
					_out += GetCenzuraText() + F09d('CHANGE', 'CenzuraPopup1();');
					F068(_kam, _out);
					F08c(_kam);
					if (_kam == 'narodenie') {
						if (pulzovalonarodenie <= 0) {
							setTimeout('F05h(\'narodenie\',2);', 750);
							pulzovalonarodenie = 5;
						} else
							pulzovalonarodenie--;
					}
					break;
				}
	} catch (e) {
		alert(e);
	}
}

function JeCenzura() {
	if (hrac[117] * 1 > 0) return true;
	if (mojvek < 21) return true;
	return false;
}

function ToggleCenzura() {
	if (mojvek < 21) {
		hrac[117] = 1;
	} else
		hrac[117] = F09h('toggleOption6');
	F02t(190, hrac[117]);
}

function GetCenzuraText() {
	return LOC_cenzura.split('XXX')
		.join(JeCenzura() ? 'ON' : 'OFF');
}

function CenzuraPopup1() {
	try {
		var _out = '';
		var dni = [];
		for (var i = 1; i <= 31; i++) dni.push(i);
		var mesiace = [];
		for (var i = 1; i <= 12; i++) mesiace.push(i);
		var roky = [];
		for (var i = 1940; i <= 2010; i++) roky.push(i);
		_out += '' + LOC_NAR0 + '<br><br>' + LOC_NAR1 + F05d(mesiace, 'n_mesiace', narod_2) + SPC + LOC_NAR2 + F05d(roky, 'n_roky', narod_3) + '<br><br>' +
			LOC_NAR_INFO + '<br><br>' + F09d(LOC_NASTAV_BUT, 'F026();');
		DoPopup2(_out, LOC_NAR_LABEL, 'infoPopup', 600, 1);
		F03b();
	} catch (e) {
		alert(e);
	}
}
MAXGOLD = 999999999999;
var totalDamageTime2 = 0;

function VypisPlatinu() {
	F072('i_platina', PCisloJS2(hrac[89]));
	F072('hs_platina', PCisloJS2(hrac[89]));
}

function VypisZlato() {
	if (!focused)
		return false;
	if (hrac[H_ZLATO] > MAXGOLD) hrac[H_ZLATO] = MAXGOLD;
	F072('i_zlato', (bestPresielLevel * 1 < 2 ? F09k('mini6', LOC_HINT_ZLATO + ': ') : '') + PCisloJS2(hrac[H_ZLATO], (F04s() > 0.9 * MAXGOLD ? 'goldfont2' : '')));
	if (SuRubiny()) F068('hs_zlato', PCisloJS2(Math.floor(hrac[H_ZLATO] / 1000000000)) + ' <b>G</b>');
	else F068('hs_zlato', PCisloJS2(hrac[H_ZLATO], (F04s() > 0.9 * MAXGOLD ? 'goldfont2' : '')));
}

function F046(_hrac) {
	if (!_hrac) _hrac = hrac;
	F0z();
	hrac[26] = KratPercentoJS($energiaBase + itemBonusOverview[54], itemBonusOverview[63]);
	for (var i in zenyA)
		if (i > 0 && i < 10000)
			if (PocetPrejdeni(i) > 0) {
				if (bestPresielLevel < i * 1) hrac[43] = bestPresielLevel = i * 1;
			}
	VypisZlato();
	VypisPlatinu();
	VypisRubiny();
	F06a('i_diamant', _hrac[9]);
	F06a('i_klik_zlato', ClickGoldValue());
	F03z(0);
	F027(_hrac);
	VypisIHlevel();
	VypisGameTime();
	VypisMaterialHeader();
	var _pocetVeciCoMaHrac = 0;
	for (var hvi in itemyVShopeA) {
		_pocetVeciCoMaHrac++;
		_pocetVeci = F05p(hvi);
		if (_pocetVeci > 0) {
			damageMulti_kde = F013(hvi, 32, 2);
			if (hvi == 1971) damageMulti_kde2 = SecondStatItemu(hvi, 34, 2);
			else damageMulti_kde2 = F013(hvi, 34, 2);
			damageTime = F015(hvi, 30);
			damageKlik = F015(hvi, 31);
			if (damageTime > 0 && damageKlik > 0) itemDamageOverview[hvi] = Array(33, damageKlik, 0, _pocetVeci, damageTime);
			else if (damageTime > 0) itemDamageOverview[hvi] = Array(30, 0, 0, _pocetVeci, damageTime);
			else if (damageKlik > 0) itemDamageOverview[hvi] = Array(31, damageKlik, 0, _pocetVeci, 0);
			if (damageMulti_kde > 0)
				if (itemDamageOverview[damageMulti_kde]) {
					damageMulti = F013(hvi, 32);
					itemDamageOverview[damageMulti_kde][2] += damageMulti * _pocetVeci;
				}
			if (damageMulti_kde2 > 0)
				if (itemDamageOverview[damageMulti_kde2]) {
					if (hvi == 1971) damageMulti = SecondStatItemu(hvi, 34);
					else
						damageMulti = F013(hvi, 34);
					itemDamageOverview[damageMulti_kde2][2] += damageMulti * _pocetVeci;
				}
			if (!mamNabojoveVeci) {
				potrebujeNaboje = F015(hvi, 5);
				if (potrebujeNaboje > 0) mamNabojoveVeci = true;
			}
		}
	}
	var totalDamageKlik = 0;
	var totalDamageTime = 0;
	for (var d in itemDamageOverview)
		if (itemDamageOverview[d][0] > 0) {
			if (itemDamageOverview[d][0] == 33) {
				totalDamageKlik += F09i(itemDamageOverview[d][3] * itemDamageOverview[d][1] * (100 + itemDamageOverview[d][2]) * 0.01);
				totalDamageTime += F09i(itemDamageOverview[d][3] * itemDamageOverview[d][4] * (100 + itemDamageOverview[d][2]) * 0.01);
			} else if (itemDamageOverview[d][0] == 31) totalDamageKlik += F09i(itemDamageOverview[d][3] * itemDamageOverview[d][1] * (100 + itemDamageOverview[d][2]) *
				0.01);
			else if (itemDamageOverview[d][0] == 30) totalDamageTime += F09i(itemDamageOverview[d][3] * itemDamageOverview[d][4] * (100 + itemDamageOverview[d][2]) *
				0.01);
		}
	totalDamageTime += hrac[67] * 1 + pocetItemov * itemBonusOverview[102];
	totalDamageTime2 = totalDamageTime * (hrac[48] <= 0 ? 1 : 2);
	totalDamageKlikBezC4 = 10 + totalDamageKlik + pomocBonusyEffects[210] + itemBonusOverview[35] * itemBonusOverview[46];
	hrac[12] = totalDamageKlikBezC4 + Math.min(MAX_PRELEV_DPC, F09f(itemBonusOverview[79] * 0.01 * totalDamageTime2));
	hrac[PLUS_NICIVOST] = totalDamageTime + Math.min(MAX_PRELEV_DPS, KratPercentoJS2(totalDamageKlikBezC4, itemBonusOverview[89]));
	F044();
	RefreshPomocValues();
	Vypis_kontainer_pomocnicky();
	Vypis_kontainer_klikanie();
	Vypis_kontainer_primary();
	Vypis_kontainer_secondary();
	Vypis_kontainer_kliker();
	F08((IsPuVisible() ? 0 : 9999), 'i_energia');
	F08(levelDiamanty + (!jeLoged ? 100 : 0), 'i_diamant;skull_plus;skull_div_bg');
	F08((jeLoged ? 0 : 9999), 'i_fuel;detailsBut;saveBut');
	F08((F054() && jeLoged ? 0 : 9999), 'cancelLevelBut;pauseBut');
	F08((F054() ? 0 : 9999), 'gametimediv');
	F08((F054() ? 0 : 9999), 'speedRewardDiv');
	if (jeLoged) {} else
		MaxKlikPocSec = 12;
	PrveCiele();
	VypisClan();
	VypisNoFuelDiv();
	VypisEventDiv();
	VypisKacicky();
	VypisMiniSales();
}
var ms_itemId = 0;

function VypisMiniSales() {
	return false;
}

function KupMiniSale(e, _itemid, _cost, _stacks) {
	if (hrac[9] < _cost) {
		kupVecQueue = [];
		disabledShoping2 = false;
		return OtvorOknoGemyLepsie(18, F09k('white', LOC_NEMASDIA) + '<br>');
		return false;
	}
	F0z();
	hrac[9] -= _cost;
	F046();
}
var totalDamageKlikBezC4 = 0;
var PU_LEVEL_ENABLED = 30;

function IsPuVisible() {
	if (PredchadzajuciLevel >= PU_LEVEL_ENABLED || F05p(15) > 1 || F05p(16) > 1) return true;
	return false;
}
var pocetItemov = 0;
var pocetItemovGem = 0;
var pocetItemovVIP = 0;
var pocetItemovModul = 0;
var $pocetMisii = 0;
var ammoCosts = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var cooldownReduces = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

function F0z() {
	itemBonusOverview = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	);
	ammoCosts = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	cooldownReduces = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	itemDmgPerOverv = [];
	$pocetMisii = pocetItemov = pocetItemovGem = pocetItemovVIP = pocetItemovModul = 0;
	var _bestPrestigeItem = hrac[120];
	var _bestPrestigeLVL = F015(hrac[120], 198);
	for (var i in zenyA)
		if (i < 10000)
			if (PocetPrejdeni(i) > 0)
				$pocetMisii += PocetPrejdeni(i) * 1;
	for (var i in hracVeciA) {
		jedenItem = itemyVShopeA[i];
		if (jedenItem)
			if (jedenItem[4]) {
				if (hracVeciA[i] * 1 > jedenItem[1][3] + ExtraStack(i)) hracVeciA[i] = jedenItem[1][3] * 1 + ExtraStack(i);
				var _pocetVeci = F05p(i);
				var jedenItemBon = jedenItem[4];
				var uzRatalModulItem = false;
				for (var j in jedenItemBon) {
					var jedenBonus = jedenItemBon[j];
					if (!uzRatalModulItem)
						if (jedenBonus[1] == 167 || jedenBonus[1] == 174 || jedenBonus[1] == 175 || jedenBonus[1] == 176 || jedenBonus[1] >= 200) {
							pocetItemovModul += _pocetVeci;
							uzRatalModulItem = true;
						}
					if (jedenBonus[1] == 18) ammoCosts[jedenBonus[2]] += jedenBonus[0] * _pocetVeci;
					else if (jedenBonus[1] == 6) cooldownReduces[jedenBonus[2]] += jedenBonus[0] * _pocetVeci;
					else if (jedenBonus[1] == 32 || jedenBonus[1] == 34) {
						if (!itemDmgPerOverv[jedenBonus[2]]) itemDmgPerOverv[jedenBonus[2]] = 0;
						itemDmgPerOverv[jedenBonus[2]] += jedenBonus[0] * _pocetVeci;
					} else
						itemBonusOverview[jedenBonus[1]] += jedenBonus[0] * _pocetVeci;
					if (_pocetVeci > 0)
						if (jedenBonus[1] == 198)
							if (jedenBonus[0] > _bestPrestigeLVL) {
								hrac[120] = i * 1;
							}
				}
				if (jedenItem[1][2] > 0) {
					pocetItemov += _pocetVeci;
					if (jedenItem[1][1] == 1) pocetItemovGem += _pocetVeci;
					if (jedenItem[1][9] == 1) pocetItemovVIP += _pocetVeci;
				}
			}
	}
	ZratajPomocBonusyJS();
	slot_freeA = [2 + itemBonusOverview[169], 2 + itemBonusOverview[170], 2 + itemBonusOverview[171], 2 + itemBonusOverview[172]];
	NavyseItemPreratavacku();
	if (hrac[120] != _bestPrestigeItem) {
		F02t(195, hrac[120]);
	}
}

function F03w() {
	var zivotMAX1 = F05u();
	if (jeSvetJS != 2) {
		if (hrac[17] < 0.50 * zivotMAX1 && F055()) F08c('quick_heal');
		else
			F07g('quick_heal');
	}
	if (F055() == 0) F086('i_heal', F09i(zivotMAX1), zivotMAX1, 1, '', '', zivotMAX1);
	else if (hrac[17] < 0.15 * zivotMAX1) {
		if (PredchadzajuciLevel < 80) F086('i_heal', F09i(hrac[17]), F05u(hrac, 1), 1, '', '', zivotMAX1, LOC_KRITIKAL_LIFE + ' ' + LOC_LIFE_KLIK_HEAL);
		else F086('i_heal', F09i(hrac[17]), F05u(hrac, 1), 1, '', '', zivotMAX1);
		blikaZivot = true;
	} else if (hrac[17] < zivotBlikPer * zivotMAX1) {
		if (PredchadzajuciLevel < 80) F086('i_heal', F09i(hrac[17]), F05u(hrac, 1), 1, '', '', zivotMAX1, LOC_LOW_LIFEGOLD + ' ' + LOC_LIFE_KLIK_HEAL);
		else F086('i_heal', F09i(hrac[17]), F05u(hrac, 1), 1, '', '', zivotMAX1);
		blikaZivot = true;
	} else
		F086('i_heal', F09i(hrac[17]), F05u(hrac, 1), 1, (PredchadzajuciLevel < 10 ? LOC_YourLife + ':&nbsp;' : ''), '', zivotMAX1, 0, 0, 1);
}

function F03c(_kolko, _ignorujMax) {
	var zivotMaxim = F05u();
	if (!_ignorujMax)
		if (_kolko > zivotMaxim - hrac[17]) _kolko = Math.max(0, zivotMaxim - hrac[17]);
	hrac[17] += _kolko;
	if (_kolko > 0) DoQuestJS(33, _kolko);
	F03w();
	if (_kolko > 0) {
		hrac[24] += _kolko;
		if (hrac[17] > zivotMaxim * zivotBlikPer && blikaZivotFarba > 0) {
			VypniZivotBlikanie();
		}
	}
}
var zivotBlikPer = 0.33;
var blikaZivot = false;
var blikaZivotFarba = 0;

function KritickyZivotStart() {
	if (F055()) blikaZivot = true;
	FloatingText2(heal_xy[0] + 130, heal_xy[1] - 25, '<b>' + LOC_KRITIKAL_HIT + '</b>', '#f00');
	TrasenieObrazovky(6);
}
var _kriticalColor1 = '#550000';
var _kriticalColor2 = '#004400';

function KritickyZivotBlik() {
	if (!focused) return false;
	blikaZivotFarba++;
	if (F098('i_heal_span')) {
		F098('i_heal_span')
			.style.fontWeight = "bold";
		F098('i_heal_span')
			.style.color = _kriticalColor1;
	}
	if (blikaZivotFarba % 4 >= 2) {
		F098('i_heal')
			.style.marginTop = '-3';
		F098('i_heal')
			.style.marginLeft = '-3';
		F098('i_heal')
			.style.border = '3px solid #990000';
	} else {
		F098('i_heal')
			.style.marginTop = '0';
		F098('i_heal')
			.style.marginLeft = '0';
		F098('i_heal')
			.style.border = '1px none transparent';
	}
}

function VypniZivotBlikanie() {
	blikaZivot = false;
	if (F098('i_heal_span')) {
		F098('i_heal_span')
			.style.fontWeight = "normal";
		F098('i_heal_span')
			.style.color = _kriticalColor2;
	}
	if (F098('i_heal')) {
		F098('i_heal')
			.style.marginTop = '0';
		F098('i_heal')
			.style.marginLeft = '0';
		F098('i_heal')
			.style.border = '1px none transparent';
	}
}
var zivotMaxMinus = 0;

function F05u(_hrac, _bezmax) {
	if (!_hrac) _hrac = hrac;
	var _returnzivot = 1000 + itemBonusOverview[68] + pomocBonusyEffects[209] + itemBonusOverview[131] * pocetItemov - (_bezmax ? 0 : zivotMaxMinus);
	if (_returnzivot < 1) _returnzivot = 1;
	return _returnzivot;
}

function F027() {
	F086('i_energia', hrac[10], hrac[26], 1);
}

function ValutaToIndexJS(_cotxt) {
	if (_cotxt == 'zlato_time') return 0;
	else if (_cotxt == 'icon_gold') return 1;
	else if (_cotxt == 'icon_fuel') return 2;
	else if (_cotxt == 'icon_skull') return 3;
	else if (_cotxt == 'icon_ammo') return 4;
	else if (_cotxt == 'icon_xp') return 5;
	else if (_cotxt == 'icon_achp') return 6;
	else if (_cotxt == 'icon_clicker') return 7;
	else if (_cotxt == 'icon_platina') return 8;
	else if (_cotxt == 'icon_event' + event_picK) return 9;
	else if (_cotxt == 'icon_rubiny') return 10;
}

function F024(_cotxt, _kolko) {
	if (_cotxt == 'icon_gold') F038(_kolko);
	else if (_cotxt == 'icon_fuel') F03z(_kolko);
	else if (_cotxt == 'icon_skull') F01r(_kolko);
	else if (_cotxt == 'icon_ammo') F01x(_kolko);
	else if (_cotxt == 'icon_xp') F06n(_kolko, 2);
	else if (_cotxt == 'icon_achp') F040(_kolko);
	else if (_cotxt == 'icon_clicker') PridajAutoKlicker(_kolko);
	else if (_cotxt == 'icon_platina') PridajPlatinu(_kolko);
	else if (_cotxt == 'icon_event' + event_picK) PridajEventMenu(_kolko);
	else if (_cotxt == 'icon_rubiny') PridajRubiny(_kolko);
}

function PridajPlatinu(_kolko, _ignorujZarobok) {
	hrac[89] += _kolko;
	VypisPlatinu();
	if (hramMisiuPG)
		if (!_ignorujZarobok) {
			zarobeneZaMisP += _kolko * 1;
			VypisGoldSinceLast();
		}
}

function VypisRubiny() {
	F072('i_rubiny', PCisloJS2(hrac[118]));
	F072('hs_rubiny', PCisloJS2(hrac[118]));
}

function KlikShopRubiny(e) {
	OpenQuickShop(54, -1);
}

function RubinyMultiplikator() {
	return 10 + itemBonusOverview[197];
}

function PridajRubiny(_kolko) {
	hrac[118] += _kolko;
	VypisRubiny();
}

function F040(_kolko) {
	hrac[20] += _kolko;
}

function F038(_kolko, _doNOTquest) {
	hrac[H_ZLATO] = hrac[H_ZLATO] * 1 + _kolko * 1;
	if (hrac[H_ZLATO] > MAXGOLD) hrac[H_ZLATO] = MAXGOLD;
	VypisZlato();
	hrac[7] += F09f(_kolko * 1);
	if (!_doNOTquest) DoQuestJS(31, _kolko);
	if (hramMisiuPG) {
		zarobeneZaMisG += _kolko * 1;
		VypisGoldSinceLast();
	}
	if (!_doNOTquest)
		if (jeAutoPilot && APset[7] == 1 && JePlatina() && hrac[H_ZLATO] >= 70000000000000) {
			KupVec2(1727, 0, 1);
		}
	if (jeLietajuceIkony2)
		if (_kolko > 0) ZrobFtext4(910 - (_kolko + '')
			.length * 3, 70, '+' + PCisloJS2(_kolko), 10, '#ffcc00', 80 + (_kolko + '')
			.length * 7, 300);
}

function F03z(_kolko, _nekontroluj) {
	$maxFuelCap2 = $maxFuelCap + itemBonusOverview[88];
	if (_kolko > 0 && _kolko * 1 + hrac[18] * 1 > $maxFuelCap2 && !_nekontroluj) {
		_kolko = $maxFuelCap2 - hrac[18] * 1;
		if (_kolko < 0) _kolko = 0;
	}
	hrac[18] = hrac[18] * 1 + _kolko * 1;
	VypisFuel();
	return _kolko;
}
hraNacitanaFuel = 0;

function VypisFuel() {
	if (focused) {
		F068('i_fuel', PCisloJS2(hrac[18]) + (hrac[18] >= $maxFuelCap2 ? '&nbsp;<b>MAX</b>' : ''));
		F068('hs_fuel', PCisloJS2(hrac[18]));
	}
	if (hraNacitanaFuel >= 3) {
		var zaKolkoF = HODINA - (PHPtime3 - hrac[31]) % HODINA;
		if (focused) {
			F068('i_fuelTimer', F099(zaKolkoF) + 's');
			F068('nofueldivspan', LOC_nofuel5 + F099(zaKolkoF) + 's');
		}
		var _ubehloHodin = F09i((PHPtime3 - hrac[31]) / HODINA);
		if (_ubehloHodin >= 1) {
			var _ubehloDni1 = F09i((PHPtime3) / (HODINA * 24));
			var _ubehloDni2 = F09i((hrac[31]) / (HODINA * 24));
			var _ubehloDni = _ubehloDni1 - _ubehloDni2;
			if (_ubehloDni > 10) _ubehloDni = 10;
			if (_ubehloDni < 0) _ubehloDni = 0;
			if (_ubehloHodin > 72) _ubehloHodin = 72;
			F03p(_ubehloHodin, _ubehloDni);
			hrac[31] = F09i(PHPtime3 / HODINA) * HODINA;
		}
		F08c('i_fuelTimer');
	} else if (jeLoged) hraNacitanaFuel++;
}
uzDostalHourBonusTeraz = 0;

function F03p(_hodin, _dni) {
	try {
		F02x(_hodin, _dni, rewardPoradie2);
		rewardPoradie2++;
	} catch (e) {
		alert(e);
	}
}

function F02x(_hodin, _dni, _por) {
	if (F098('rewardTable') || rewardPoradie != _por || !F098('LevelUPDiv') || stunnedPopups) {
		setTimeout('F02x(' + _hodin + ',' + _dni + ',' + _por + ');', 800);
		return false;
	}
	if (F098('koloPopupIN')) F061('koloPopup');
	if (doSounds == 1) audio_zvonec.play();
	var _plusFuel = _hodin * (3 + itemBonusOverview[188]);
	if (PredchadzajuciLevel < 100) _plusFuel = _hodin * 5;
	$maxFuelCap2 = $maxFuelCap + itemBonusOverview[88];
	if (_plusFuel + hrac[18] > $maxFuelCap2) {
		_plusFuel = $maxFuelCap2 - hrac[18];
		if (_plusFuel < 0) _plusFuel = 0;
	}
	var _odmeny = [];
	if (_plusFuel > 0) _odmeny.push(Array('icon_fuel', _plusFuel, 1));
	var _pluszlato = _hodin * (500 + itemBonusOverview[72] + itemBonusOverview[46] * itemBonusOverview[47]);
	if (_pluszlato > 0) {
		_odmeny.push(Array('icon_gold', _pluszlato, 1));
	}
	var _plusPlatina = _hodin * (0 + itemBonusOverview[75]);
	if (_plusPlatina > 0) {
		_odmeny.push(Array('icon_platina', _plusPlatina, 8));
	}
	_capsat = '';
	if (_hodin >= 48) _capsat = '<br><span class="mini2">' + LOC_HOUR_REW_popis + '</span>';
	F01k(LOC_HOUR_REW_nadpis + _capsat, _odmeny, 'nazovHourB');
	F02t(90, _hodin * 100 + _dni);
	F02t(99);
	rewardPoradie++;
	if (F098('ArenaEnemiesDiv')) F061('infoPopup');
}

function F01r(_kolko) {
	hrac[9] = hrac[9] * 1 + _kolko * 1;
	F06a('i_diamant', hrac[9]);
	F068('hs_diamant', PCisloJS2(hrac[9]));
}

function F01x(_kolko) {
	if ((hrac[10] < hrac[26] && _kolko > 0) || _kolko < 0) {
		if (_kolko > 0)
			if (_kolko > hrac[26] - hrac[10]) _kolko = Math.max(0, hrac[26] - hrac[10]);
		hrac[10] = hrac[10] * 1 + _kolko * 1;
		if (hrac[10] > hrac[26]) hrac[10] = hrac[26];
		F027();
		if (_kolko > 0) {
			hrac[25] += _kolko;
			DoQuestJS(34, _kolko);
			PU_ammo_visual_check();
		}
	}
}
maxNonLogedXP = 9999;
maxLogedXP = 1;

function F06n(_kolko, _kde) {
	if (!jeLoged)
		if (hrac[H_LEVEL] >= maxNonLogedLevel) _kolko = 0;
	if (hrac[H_LEVEL] >= max_level) _kolko = 0;
	hrac[H_XP] = hrac[H_XP] * 1 + _kolko * 1;
	var jeMaxNonLogLevel = jeMaxLogLevel = false;
	if (!jeLoged)
		if (hrac[H_LEVEL] >= maxNonLogedLevel) {
			jeMaxNonLogLevel = true;
			hrac[H_LEVEL] = maxNonLogedLevel;
			hrac[H_XP] = 0;
		}
	if (hrac[H_LEVEL] >= max_level) {
		jeMaxLogLevel = true;
		hrac[H_LEVEL] = max_level;
		hrac[H_XP] = 0;
	}
	while (hrac[H_XP] >= levelTable[PredchadzajuciLevel]) {
		hrac[H_XP] -= levelTable[PredchadzajuciLevel];
		PredchadzajuciLevel++;
		F02t(70, PredchadzajuciLevel);
		if (PredchadzajuciLevel == PU_LEVEL_ENABLED) {
			F039();
		}
		F07h(PredchadzajuciLevel);
		if (PredchadzajuciLevel >= max_level) {
			hrac[H_XP] = 0;
		}
	}
	hrac[H_LEVEL] = PredchadzajuciLevel;
	VypisIHlevel();
	xpHodnoty = F025();
	F086('bar_xp', xpHodnoty[0], xpHodnoty[1], 1, (jeMaxNonLogLevel ? LOC_MAXLEVEL : (jeMaxLogLevel ? LOC_MAXLEVEL2 : '')), '', '', '', (levelTable[
		PredchadzajuciLevel] < 1000000000 ? ' / ' : ' /<br>'));
	zarobeneZaMisXP += _kolko;
}

function VypisIHlevel() {
	F072('i_hlevel', (PredchadzajuciLevel < 99 ? F09k('LVLfont', LOC_LEVEL.toUpperCase()) + ': ' : '') + PCisloJS2(F04v()));
}

function PocetPrejdeni(_ktory) {
	if (_ktory < 1) return 0;
	if (_ktory > 20000) {
		if (!zenyA_I[_ktory - 20000]) return 0;
		else
			return zenyA_I[_ktory - 20000] * 1;
	} else
	if (_ktory > 10000) {
		if (!zenyA_E[_ktory - 10000]) return 0;
		else
			return zenyA_E[_ktory - 10000] * 1;
	} else {
		if (!zenyA[_ktory]) return 0;
		else
			return zenyA[_ktory] * 1;
	}
}
var balikyDia = new Array(1000, 3400, 7000, 12000, 25000);
var balikyDia2 = new Array(500, 1700, 3500, 6000, 12500);
var balikyUsd = new Array(5, 15, 30, 50, 100);
var $specialPackyG = new Array(350, 1200, 2500, 3700, 5300, 6500, 9300, 13500, 30000, 1750);
var $specialPackyD = new Array(3, 9, 19, 29, 39, 49, 69, 99, 199, 14);

function mojhash(_cena, _so) {
	return PHPtime2 + 'a' + _cena + 'a' + hrac[0] + 'a' + _so;
}
var vymennyKurz = 1;
var vymennyKurzDelitel = 100;
var vymennyKnazov = 'USD';

function getUserCurrency(callback) {
	if (!testingP) return false;
	FB.api('/me/?fields=currency', function(data) {
		if (!data || data.error) {
			console.error("Error fetching user currency");
		} else {
			gUserCurrency = data.currency;
			vymennyKurz = gUserCurrency['usd_exchange_inverse'];
			vymennyKnazov = gUserCurrency['user_currency'];
			vymennyKurzDelitel = gUserCurrency['currency_offset'];
			if (callback) callback();
		}
	});
}

function verifyPayment(data) {
	if (!data) {
		F03t("There was an error processing your payment. Please try again!");
		return;
	}
	if (data['status'] == 'completed') {
		F07e(LOC_KUP_DIA_thx, LOC_KUP_DIA_label, 'infoPopupD2');
		setTimeout('F06o(1,1,1,1);', 1000);
	}
}

function PrerataneDolare(_dol) {
	return Math.round(vymennyKurz * _dol * vymennyKurzDelitel) / vymennyKurzDelitel;
}

function NoveOknoSplatbami() {
	MapujGemy(2);
	var _out = '';
	_out += '<table width="100%" id="skullbaliky"><tr>';
	maxBalikZobraz = 2;
	maxBalikZobraz = 3;
	if (hrac[64] > 3) maxBalikZobraz = 4;
	if (hrac[64] > 5) maxBalikZobraz = 5;
	if (JE_TESTER)
		maxBalikZobraz = 6;
	for (var i in balikyDia)
		if (i < maxBalikZobraz) {
			_out += '<td class="diaTD" onclick="BuyFcbGems(' + i + ');" ' + F02o('+' + F06j(balikyDia[i], 4) + IconValuta2(1) + '<br><br>' + LOC_ITEM_cena +
					PrerataneDolare(balikyUsd[i]) + ' ' + vymennyKnazov) + '><img alt="dia" class="diapic" src="' + PicPrefix() + 'ui2/dia' + i +
				'.png"><br><div class="balikDia">+' + F06j(balikyDia2[i], 4) + F06j(balikyDia2[i], 4) + IconValuta2(1) +
				($jeGemBonus > 0 ? F09k('offerspan', '<br>+' + F06j(F09l((balikyDia[i] * $jeGemBonus) / 100), 4)) + F09k('offerspan2', ' BONUS') : '') +
				'</div><br>' + F09k('balikUsd cierny_outline', PrerataneDolare(balikyUsd[i]) + ' ' + vymennyKnazov) + '</td>';
		}
	_out += '</tr></table>';
	_out = '<br><br><br>Sadly Paymants via Facebook are disabled.<br><br>';
	F07e(_out, '', 'infoPopupD', maxBalikZobraz * 100 + 450, 1, 'diadiv');
}

function BuyFcbGems(_i) {
	F061('infoPopupD');
	_typD = 5;
	if (_i == 1) _typD = 15;
	if (_i == 2) _typD = 30;
	if (_i == 3) _typD = 50;
	if (_i == 4) _typD = 100;
	var requestID = mojhash(_typD, 0);
	FB.ui({
		method: 'pay'
		, action: 'purchaseitem'
		, product: 'http://' + GAME_LINK_JS + '/balikyfcb_' + _sufix1 + '/balik' + _typD + '.html'
		, request_id: requestID
		, quantity: 1
	}, verifyPayment);
}

function BuyFcbGems2(_cena, _so) {
	F061('infoPopupD');
	var requestID = mojhash(_cena, _so);
	FB.ui({
		method: 'pay'
		, action: 'purchaseitem'
		, product: 'http://' + GAME_LINK_JS + '/balikyfcb_' + _sufix1 + '/balik' + _cena + '.html'
		, request_id: requestID
		, quantity: 1
	}, verifyPayment);
}

function F0d(_kde, _text, e) {
	if (e)
		if (e.shiftKey) {
			OpenShop(-41, -1);
			return false;
		}
	skrinaKoef = 0;
	MenuSound();
	if (testingP || somvofcbJS) {
		NoveOknoSplatbami();
		MenuSound();
		return '';
	}
	MapujGemy(_kde);
	if (F055()) F02i(1);
	if (!_text) _text = '';
	var _out =
		'<form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" name="gemform" id="gemform"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="' +
		_PP_hostedvalue + '">';
	_out += '<input type="hidden" name="on0" value="Packs">';
	_out += '<input type="hidden" name="notify_url" value="http://' + GAME_LINK_JS + '/p/pocuvam.php">';
	_out += '<input type="hidden" name="custom" value="' + hrac[0] + 'a' + $jeGemBonus + 'a' + ($jeGemBonus > 0 ? 0 : specialOfferID2) + '">';
	_out += _text + '<table width="100%" id="skullbaliky"><tr>';
	maxBalikZobraz = 3;
	if (hrac[64] > 2) {
		maxBalikZobraz = 4;
		maxBalikZobraz = 5;
	}
	if (somTESTER) maxBalikZobraz = 5;
	for (var i in balikyDia)
		if (i < maxBalikZobraz || JE_TESTER) {
			_out += '<td class="diaTD" onclick="F07m(' + i + ');" ' + F02o('+' + FSize(40, F06j(balikyDia[i], 4)) + IconValuta2(1) + ($jeGemBonus > 0 ? F09a(
						'offerspanT', '<br>+' + F06j(F09l((balikyDia[i] * $jeGemBonus) * 0.01), 4)) + F09a('offerspan2T', ' BONUS') : '') + '<br><br>' + LOC_ITEM_cena +
					balikyUsd[i] + ' USD', 300) + '><img alt="dia" class="diapic" src="' + PicPrefix() + 'ui2/dia' + i + '.png"><br><div class="balikDia cierny_outline">' +
				F06j(balikyDia2[i], 4) + IconValuta2(1) + '<br>' + FCol('#FC0', 'BONUS: ') + '+' + F06j(balikyDia2[i], 4) + IconValuta2(1) +
				($jeGemBonus > 0 ? F09k('offerspan', '<br>+' + F06j(F09l((balikyDia[i] * $jeGemBonus) * 0.01), 4)) + F09k('offerspan2', ' BONUS') : '') +
				'</div><br>' + F09k('balikUsd cierny_outline', balikyUsd[i] + ' USD') + '</td>';
		}
	_out += '</tr></table>';
	_out += '<input type="hidden" name="currency_code" value="USD">';
	_out += '<input type="hidden" id="os0" name="os0" value="' + _PP_mena_meno + ' ' + balikyDia[2] + '">';
	_out +=
		'<input style="display:none;" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" id="submitG" name="submitG" alt="PayPal - The safer, easier way to pay online!">';
	_out += '<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">';
	_out += '</form>';
	if (JeOffer() == 1) _out += '<div id="checkbonusoffer" onclick="SpecialOfferPopup(5);"><br>***' + LOC_BUT_BONUSOFFER + '***</div>';
	F07e(_out, '', 'infoPopupD', maxBalikZobraz * 100 + 450, 1, 'diadiv', '', 0, 0, 0, 0, '', '', -150);
	MenuSound();
	return false;
}

function F07m(_i) {
	try {
		F095('os0', _PP_mena_meno + ' ' + balikyDia[_i]);
		document.getElementById("gemform")
			.submit();
	} catch (e) {}
	F061('infoPopupD');
}

function GetGems2(_kery) {
	try {
		document.getElementById("gemform" + _kery)
			.submit();
	} catch (e) {}
	F061('infoPopupD2');
}
var ENEMY_ID = 0;
var ENEMY_ZIVOT = 2;
var ENEMY_MENO = 4;
var enemy = [];

function F049(_enemy) {
	if (!_enemy) _enemy = enemy;
	if (!_enemy[ENEMY_ZIVOT])
		return 0;
	return _enemy[ENEMY_ZIVOT] * 1;
}
inverzeLife = 0;

function F04i() {
	if (F054()) {
		var _enemyTotalLifeSave = EnemyMaxLifeJS(enemy[0]);
		if (inverzeLife) F086('i_e_zivot', _enemyTotalLifeSave - enemy[ENEMY_ZIVOT], _enemyTotalLifeSave, (hrac[82] > 0 && enemy[13] > 0 ? 0 : 1));
		else F086('i_e_zivot', enemy[ENEMY_ZIVOT], _enemyTotalLifeSave, (hrac[82] > 0 && enemy[13] > 0 ? 0 : 1), (PredchadzajuciLevel < 10 ? LOC_UI_enemylife + ':' +
			SPC : ''));
		F07g('tipoftheday');
	} else {
		F086('i_e_zivot', 0, 100, 0);
	}
}

function VypisEnemyRaz() {
	if (!F054()) return false;
	F08c('armorDiv');
	var _out = '';
	if (F055() % 7 == 0) _out += PicAt('bossindikator', 'ui2/boss2.png', 12, -125);
	_out += F08q('enemyminmaxdamage', 55, 64, 5, (PredchadzajuciLevel < 500 ? '<b>MIN:</b>&nbsp;' : '') + EnemyMinDmgJS2() + '<br>' + (PredchadzajuciLevel < 500 ?
		'<b>MAX:</b>&nbsp;' : '') + EnemyMaxDmgJS2(), (LOC_UI_DAMAGE_enemy2.split(':'))[0].toUpperCase() + '<br>' + LOC_BEFORERED + ':<br>' + PCisloJS2(
		EnemyMinDmgJS(F055())) + ' - ' + PCisloJS2(EnemyMaxDmgJS(F055())), 125, 30);
	_out += F08q('enemyhealinginfo', 60, 137, 5, PCisloJS2(Math.max(0, EnemyHealingBase(enemy) - HealingReducedJS())), (LOC_UI_liecenie_e.split(':'))[0].toUpperCase() +
		'<br>' + LOC_BEFORERED + ': ' + PCisloJS2(enemy[8]) + '<br><br>' + FSize(10, LOC_UI_liecenie3), 120, 20);
	F068('enemy_stats', _out);
	if (randomBonusA[0]) F03j(herne_levelyA[hralsomlevel], enemy[2]);
	NastavAutoclickerBasePos();
	if (sekundZaKolo >= 120) F068('enemyhealinginfo', '---');
}

function NastavAutoclickerBasePos() {
	if (!F054()) SetXY('kontainer_kliker', kontainers_xy[6][0], kontainers_xy[6][1]);
	else
		SetXY('kontainer_kliker', kontainers_xy[6][0] - 25, kontainers_xy[6][1] - 20);
}

function EnemyMinDmgJS2() {
	var _cislo = EnemyMinDmgJS(F055());
	_cislo -= EnemyDamageReduction(PocetPrejdeni(F055()));
	if (_cislo < 1) _cislo = 1;
	return PCisloJS2(_cislo);
}

function EnemyMaxDmgJS2() {
	if (enemy[4] == 9) return LOC_lowering_damage;
	var _cislo = EnemyMaxDmgJS(F055());
	_cislo -= EnemyDamageReduction(PocetPrejdeni(F055()));
	if (_cislo < 1) _cislo = 1;
	return PCisloJS2(_cislo);
}

function F010() {
	return F03r(LOC_AREYOUSURE_to_cancellevel, 'F09();');
}

function F09() {
	hrac[HRALEVEL] = 0;
	F04i();
	enemy = [];
	enemyZije2 = false;
	F01i();
	buffs = [];
	F046();
	BuffsOverview();
	aktivnychPU = 0;
	zivotMaxMinus = hrac[52] = 0;
	VymazCastice();
	F02t(21);
	F06o(1, 2);
	KoniecMisie(1);
}

function F01i() {
	F07g('armorDiv');
}
_defEnemy = [];
loadStartEnemy = [];

function F06d(_newEnemy, _inyZivot, _inyArmor) {
	loadStartEnemy[0] = _newEnemy;
	loadStartEnemy[1] = _inyZivot;
	loadStartEnemy[2] = _inyArmor;
	hrac[82] = _inyArmor;
	if (_newEnemy == '' || _inyZivot == 0) {
		F07g('i_e_zivot');
		hrac[HRALEVEL] = 0;
		F04i();
		enemy = new Array();
		return false;
	}
	_defEnemy = enemy = F01z(_newEnemy, ',');
	hralsomlevel = hrac[HRALEVEL] = hrac[35] = enemy[0];
	VypisEnemyRaz();
	maxMisiaCas = maxMisiaCasDef;
	if (enemy[4] == 10) maxMisiaCas = 60;
	if (_inyZivot || _inyZivot == 0) enemy[2] = Math.min(_inyZivot * 1, EnemyMaxLifeJS(hralsomlevel));
	maxminEZivot = enemyTotalLifeSave = enemy[2];
	F03j(herne_levelyA[hralsomlevel], enemy[2]);
	F04i();
	F08c('i_e_zivot');
	F07g('vyber_levelDiv');
	_enemyHint = (enemy[4] > 1 ? '<br>[' + LOC_KOLO_POPIS[enemy[4]] + ']' : '') + '<br>' + LOC_KOLO + KoloCisloStr(enemy[0] % 7 == 0 ? LOC_BONUS_KOLO + enemy[0] :
		enemy[0]) + ('<br>' + LOC_PRESIEL_LEVEL_pocet + PocetPrejdeni(hralsomlevel) + '') + (EnemyMinDmgJS(enemy[0]) > 0 ? '<br><br>' + LOC_UI_DAMAGE_enemy + ': ' +
		F06j(EnemyMinDmgJS(enemy[0])) + F08g('ui2/action_icon0') + ' - ' + (enemy[4] == 8 ? '??? ' + LOC_raising_damage : (enemy[4] == 9 ? '??? ' +
			LOC_lowering_damage : F06j(EnemyMaxDmgJS(enemy[0])))) + F08g('ui2/action_icon0') : '') + (itemBonusOverview[78] > 0 ? '<br>' + LOC_heal_reducedmg + F06j(
		EnemyDamageReduction(PocetPrejdeni(hralsomlevel)), 4) : '') + (enemy[8] > 0 ? '<br>' + LOC_UI_liecenie_e + F08g('icons2/enemy_healing') + F06j(
		EnemyHealingBase(enemy), 4) + (itemBonusOverview[80] > 0 ? '<br>' + LOC_UI_liecenie2 + ' ' + F06j(HealingReducedJS(), 4) : '') : '');
}

function F054() {
	if (!enemy) return false;
	if (enemy.length < 1 || enemy[2] <= 0 || hrac[HRALEVEL] == 0) return false;
	return true;
}

function HealingReducedJS() {
	return KratPercentoJS(itemBonusOverview[80], itemBonusOverview[81]);
}

function EnemyDamageReduction(_uzpresielViac) {
	return (_uzpresielViac >= 10 ? itemBonusOverview[184] : 0) + pomocBonusyEffects[222] + KratPercentoJS(itemBonusOverview[78], itemBonusOverview[137]);
}

function XPza5Click() {
	return 0;
}
ComboColor1 = '#ff0';
ComboColor2 = '#fff';
klikovZaSec = 0;
var LastComboId1 = -1;
var LastComboId2 = -1;
var lastKomboSec = 0;

function F06f(_x, _y, _t) {
	anyActivity = 1;
	deselectuj = true;
	skrinaKoef = 0;
	klikovZaKolo++;
	hrac[5] += 1;
	DoQuestJS(5, 1);
	offlineTimer = 0;
	if (!jeLoged) {
		if (mapuj1c <= 0 && hrac[4] * 1 == 0) {
			F09b('mapuj1c');
			mapuj1c = 1;
		}
		if (mapuj5c <= 0 && hrac[4] * 1 == 5) {
			F09b('mapuj5c');
			mapuj5c = 1;
		}
		if (mapuj15c <= 0 && hrac[4] * 1 == 15) {
			F09b('mapuj15c');
			mapuj15c = 1;
		}
	}
	if (hrac[81] != _t || Math.abs(sekundZaKolo - lastKomboSec) > 1) {
		hrac[80] = 0;
		hrac[81] = _t;
		DoQuestJS(30, 0);
	}
	lastKomboSec = sekundZaKolo;
	if (F055()) {
		hrac[80] = hrac[80] * 1 + 1;
		DoQuestJS(30, hrac[80]);
	}
	var __x = _x + 75;
	var __y = _y - 32;
	if (MaConsum() && (_t == 2 || _t == 6)) {
		__x = _x;
		__y = _y;
	}
	if (enemyZije2) {
		if (itemBonusOverview[129] > 0) {
			if (hrac[80] % 10 == 0) {
				if (LastComboId1 >= 0) {
					SchovajFtext(LastComboId1);
					LastComboId1 = 0;
				}
				if (LastComboId2 >= 0) {
					SchovajFtext(LastComboId2);
					LastComboId2 = 0;
				}
				LastComboId1 = ZrobFtext(__x, __y, '<b>' + hrac[80] + 'x<br>' + F09k('minicombo', LOC_combo) + '</b>', 20, 1, ComboColor1, '', 100);
				var _pridajzlato = ClickGoldValue() + itemBonusOverview[129];
				F02t(59, _pridajzlato);
				F038(_pridajzlato);
			} else if (jeLietajuceIkony) {
				if (LastComboId1 >= 0) {
					SchovajFtext(LastComboId1);
					LastComboId1 = 0;
				}
				if (LastComboId2 >= 0) {
					SchovajFtext(LastComboId2);
					LastComboId2 = 0;
				}
				LastComboId1 = ZrobFtext(__x, __y, '<b>' + hrac[80] + 'x<br>' + F09k('minicombo', LOC_combo) + '</b>', 20, 1, ComboColor2, '', 100);
			}
		}
	}
}
var zobrazujError = 1;

function F0f(_test) {
	if (!zobrazujError) return false;
	return F03t(LOC_START_NEW_LEVEL + '<br><br>' + F09d(LOC_CHOOSE_LEVEL, 'F061(\'warPopup\'); F05m(1);'));
}
hralsomlevel = 1;
bestPresielLevel = 0;
HRALEVEL = 19;

function F055() {
	return hrac[HRALEVEL];
}
var randomBonusA = new Array();
var rndBonusCheck = 0;
var MAM_RANDOMBON = 12;

function RandomBonusClearAll() {
	randomOdmenyCisla = new Array();
	randomBonusA = new Array();
	for (var _i = 0; _i < MAM_RANDOMBON; _i++) {
		randomBonusA[_i] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		F07g('randomBonusDiv' + _i);
	}
}

function RandomBonusShow(_ktory, _armorIdx) {
	try {
		if (_armorIdx == -1) _armorIdx = randomBonusA[_ktory][3];
		setTimeout('SchovajRndBonus(' + _ktory + ',' + GetRndBonusChecker(_armorIdx) + ');', 10000 + itemBonusOverview[150] * 1000);
		F08c('randomBonusDiv' + _ktory);
		if (F098('randomBonusDiv' + _ktory)) {
			F098('randomBonusDiv' + _ktory)
				.style.opacity = 1;
			F098('randomBonusDiv' + _ktory)
				.style.zIndex = 5900 + zIndexBonusPlus;
			randomBonusVisible[_ktory] = 1;
		}
	} catch (e) {
		alert('randombonusshow-error:' + e);
	}
}
var premiumEvent = 0;
var eventPicRB = 0;
randomBonsSufix = new Array('gold', 'xp', 'auto', 'halloween', 'xmas', 'valent', 'easter', 'summer', 'hokej', 'premium');
randomBonusStats = [];

function RandomBonusCreate(_pocet) {
	RandomBonusClearAll();
	if (bestPresielLevel < 4) return false;
	var randKoef = F09i(20 / _pocet);
	for (var _i = 0; _i < _pocet; _i++)
		if (F098('randomBonusDiv' + _i)) {
			rndBonusCheck++;
			var randomTyp = F07z(0, 2);
			if (bestPresielLevel < 6) randomTyp = 0;
			else {
				if (randomTyp == 0)
					if (PredchadzajuciLevel >= autoclickerlevel + 5 || hrac[65] < 700)
						randomTyp = 2;
				if (randomTyp == 2)
					if (PredchadzajuciLevel < autoclickerlevel + 5 || hrac[65] > 1500)
						randomTyp = 0;
			}
			if (IsEvent())
				if (PredchadzajuciLevel > 50 && F07z(0, 10) <= 5) randomTyp = eventPicRB;
			var _randombonusInnerhtml = '<img class="rb_pic" id="rb_pic_' + _i + '" src="' + PicPrefix() + 'ui2/random_' + randomBonsSufix[randomTyp] + '.png?v=' +
				picversion + '" alt="random" onmousedown="F098(\'rb_pic_' + _i + '\').style.top=\'10%\';" onmouseup="F098(\'rb_pic_' + _i + '\').style.top=\'5%\';">';
			F068('randomBonusDiv' + _i, _randombonusInnerhtml);
			var randomKoef2 = _i * randKoef + F07z(0, randKoef - 1);
			while (randomKoef2 == 20 || randomKoef2 == 19) randomKoef2 = _i * randKoef + F07z(0, randKoef - 1);
			var _leftx = hplocha_xy[0] + ArmorLeftX(randomKoef2);
			var _topy = hplocha_xy[1] + ArmorTopY(randomKoef2);
			randomBonusStats[_i] = [_leftx, _topy, _randombonusInnerhtml, minca_w, minca_w];
			F098('randomBonusDiv' + _i)
				.style.left = _leftx;
			F098('randomBonusDiv' + _i)
				.style.top = _topy;
			F098('randomBonusDiv' + _i)
				.style.width = (minca_w) + 'px';
			F098('randomBonusDiv' + _i)
				.style.height = (minca_w) + 'px';
			F098('randomBonusDiv' + _i)
				.style.zIndex = 900 + zIndexBonusPlus;
			var _pocetB = 1;
			randomBonusVisible[_i] = 0;
			randomBonusA[_i] = new Array(1, _pocetB, 1, randomKoef2, rndBonusCheck, randomTyp, _leftx, _topy);
		}
}
klikNaRandomBonus = [];

function RandomBonusClick(_i) {
	FocusTeraz();
	KlikniRandomBonus3(_i);
	PlayMultiSound(3);
}

function KlikniRandomBonus3(_i) {
	if (!klikNaRandomBonus[_i]) klikNaRandomBonus[_i] = 0;
	if (klikNaRandomBonus[_i] <= 6 + itemBonusOverview[97]) {
		randomBonusKlikQueue.push(_i);
		klikNaRandomBonus[_i]++;
	}
}
var randomOdmenyCisla = new Array();
randomBonusVisible = new Array();

function RandomBonusClick2(_i) {
	if (F098('randomBonusDiv' + _i)) {
		F011();
		if (randomBonusA[_i])
			if (randomBonusA[_i][0]) {
				var __x = randomBonusA[_i][6] + 50;
				var __y = randomBonusA[_i][7];
				if (itemBonusOverview[182] > 0) {
					var _pridajPlatinu = itemBonusOverview[182];
					var _akaMis = F055();
					if (_akaMis == 0) _akaMis = hralsomlevel;
					if (_akaMis > 0) {
						var presielLevel = herne_levelyA[_akaMis];
						if (presielLevel[7] > 1) _pridajPlatinu *= presielLevel[7];
					}
					PridajPlatinu(_pridajPlatinu);
					ZrobFtext2(__x, __y - 28, '+ ' + F06j(_pridajPlatinu, 4) + ' ' + LOC_REW[8], '#ddd');
				}
				if (randomBonusA[_i][5] == 0) {
					_hodnota = 2000 + itemBonusOverview[93];
					if (bestPresielLevel < 5) _hodnota = 200 + 20 * (bestPresielLevel + 1);
					else {
						var _akaMis = F055();
						if (_akaMis == 0) _akaMis = hralsomlevel;
						if (_akaMis > 0) {
							var presielLevel = herne_levelyA[_akaMis];
							if (presielLevel[7] > 1) _hodnota = KratPercentoJS(_hodnota, (presielLevel[7] - 1) * 40);
						}
					}
					F02t(10, _hodnota);
					F038(_hodnota);
					F051(__x, __y, __x + F07o(50), __y - 40);
					if (randomOdmenyCisla[_i]) {
						_hodnota += randomOdmenyCisla[_i][0];
						SchovajFtext(randomOdmenyCisla[_i][1][0], 0);
						SchovajFtext(randomOdmenyCisla[_i][1][1], 0);
					}
					var _idecka12 = ZrobFtext2(__x, __y, '+ ' + F06j(_hodnota, 4) + ' ' + LOC_REW[0], '#ff0');
					randomOdmenyCisla[_i] = new Array(_hodnota, _idecka12, 0);
				} else if (randomBonusA[_i][5] == 1) {
					var _hodnota = F0u() * 4 + itemBonusOverview[92];
					var _akaMis = F055();
					if (_akaMis == 0) _akaMis = hralsomlevel;
					if (_akaMis > 0) {
						var presielLevel = herne_levelyA[_akaMis];
						if (presielLevel[7] > 1) _hodnota = KratPercentoJS(_hodnota, (presielLevel[7] - 1) * 40);
					}
					F02t(11, _hodnota);
					F06n(_hodnota, 4);
					F085(__x, __y, __x + F07o(50), __y - 40);
					if (randomOdmenyCisla[_i]) {
						_hodnota += randomOdmenyCisla[_i][0];
						SchovajFtext(randomOdmenyCisla[_i][1][0], 0);
						SchovajFtext(randomOdmenyCisla[_i][1][1], 0);
					}
					var _idecka12 = ZrobFtext2(__x, __y, '+ ' + F06j(_hodnota, 4) + ' XP', '#0f5');
					randomOdmenyCisla[_i] = new Array(_hodnota, _idecka12, 0);
				} else if (randomBonusA[_i][5] == 3 || randomBonusA[_i][5] == 4 || randomBonusA[_i][5] == 5 || randomBonusA[_i][5] == 6 || randomBonusA[_i][5] == 7) {
					var _hodnota = KratPercentoJS(ClickGoldValue() * 3 + itemBonusOverview[93], itemBonusOverview[115]);
					var _hodnota2 = 50;
					F02t(13, _hodnota);
					F038(_hodnota);
					PridajAutoKlicker(_hodnota2);
					F051(__x, __y, __x + F07o(50), __y - 40);
					if (randomOdmenyCisla[_i]) {
						_hodnota += randomOdmenyCisla[_i][0];
						_hodnota2 += randomOdmenyCisla[_i][2];
						SchovajFtext(randomOdmenyCisla[_i][1][0], 0);
						SchovajFtext(randomOdmenyCisla[_i][1][1], 0);
					}
					var _idecka12 = ZrobFtext2(__x, __y, '+ ' + F06j(_hodnota, 4) + ' ' + LOC_REW[0] + '<br>+' + _hodnota2 + ' ' + LOC_REW[7], '#fc0');
					randomOdmenyCisla[_i] = new Array(_hodnota, _idecka12, _hodnota2);
					F034(__x, __y, 'icon_clicker', __x + F07o(50), __y - 40, clicker_xy[0], clicker_xy[1]);
				} else {
					var _hodnota = 150;
					F02t(12, _hodnota);
					PridajAutoKlicker(_hodnota);
					F034(__x, __y, 'icon_clicker', __x + F07o(50), __y - 40, clicker_xy[0], clicker_xy[1]);
					if (randomOdmenyCisla[_i]) {
						_hodnota += randomOdmenyCisla[_i][0];
						SchovajFtext(randomOdmenyCisla[_i][1][0], 0);
						SchovajFtext(randomOdmenyCisla[_i][1][1], 0);
					}
					var _idecka12 = ZrobFtext2(__x, __y, '+ ' + F06j(_hodnota, 4) + ' ' + LOC_AUTOCLIKER_LABEL, '#0090FF');
					randomOdmenyCisla[_i] = new Array(_hodnota, _idecka12, 0);
				}
				hrac[62] += 1;
				F08n(14);
				DoQuestJS(10, 1);
				randomBonusA[_i][1]--;
				if (randomBonusA[_i][1] <= 0) {
					F07g('randomBonusDiv' + _i);
					randomBonusA[_i][4] = 0;
					randomBonusA[_i][0] = 0;
					randomBonusVisible[_i] = 0;
				}
			}
	}
}

function GetRndBonusIndex(_index) {
	for (var _i = 0; _i < MAM_RANDOMBON; _i++) {
		if (randomBonusA[_i][0] == 1 && randomBonusA[_i][3] == _index) return _i;
	}
	return -1;
}

function GetRndBonusChecker(_index) {
	for (var _i = 0; _i < MAM_RANDOMBON; _i++) {
		if (randomBonusA[_i][0] == 1 && randomBonusA[_i][3] == _index) return randomBonusA[_i][4];
	}
}

function SchovajRndBonus(_i, _rndBonusCheck) {
	if (randomBonusA[_i][4] == _rndBonusCheck && randomBonusA[_i][0] > 0 && F055()) {
		F074('randomBonusDiv' + _i);
		randomBonusVisible[_i] = 0;
	}
}

function ClickAmmoValue(_lenBase) {
	var _baseValue = baseEnergia + itemBonusOverview[52];
	if (_lenBase) return _baseValue;
	return PlusBuffJS(_baseValue, 14);
}

function F02u(_manualKliked) {
	if (!isGamePaused)
		if (_manualKliked) {
			AutopilotEnd();
			FocusTeraz();
		}
	KlikAny0(4);
	if (itemBonusOverview[90] > 0)
		if (klikovZaKolo % 10 == 9) queueAmmo++;
	if (jeautoclicker)
		ZapniAutoClickerNa(3);
	queueAmmo++;
	if (itemBonusOverview[136] > 0) queueAmmo++;
	manualKlik++;
}

function VyletovanieCasticHoreY() {
	return F07o(30) - 5;
}

function VyletovanieCasticHoreX() {
	return 65 + F07o(5);
}

function KlikEnergia2(_isAuto) {
	var _x = klikBlok_but_xy[3][0];
	var _y = klikBlok_but_xy[3][1];
	klikovZaSec++;
	if (klikovZaSec >= MaxKlikPocSec + 1) return false;
	if (!F054()) return F0f(1);
	AutoClickerUse(4);
	F02t(1, 1 + (_isAuto ? 4 : 0));
	if (sekundZaKolo <= 30) {
		if (_isAuto)
			if (itemBonusOverview[106] > 0) F06n(itemBonusOverview[106], 21);
	}
	F01x(KratPercentoJS(ClickAmmoValue(), (_isAuto ? itemBonusOverview[101] : 0)));
	if (hrac[10] < hrac[26]) F034(_x, _y, 'icon_ammo', _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY(), ammo_xy[0], ammo_xy[1]);
	if (hrac[59] % 5 == 1 && itemBonusOverview[76] > 0) {
		F038(itemBonusOverview[76]);
		F051(_x, _y, _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY());
	}
	hrac[59]++;
	F06f(_x, _y, 4);
	DoQuestJS(4, 1);
	if (_isAuto) DoQuestJS(9, 1);
	if (itemBonusOverview[145] > 0 && _isAuto && hrac[10] >= hrac[26] && !jeAutoPilot)
		if (robimQuest[0] != 4) {
			queueAmmo = 0;
			KlikF05i(pamatKlikTypes2 - 1, 0);
		}
}

function KlikBulletFloat(e) {
	ZrobFtext2(e.clientX + 30, e.clientY - 5, LOC_CLICK_BULLET, '#0f0');
}
utokRandC = zabilManual = 0;

function UtokRand() {
	utokRandC++;
	return utokRandC % 2;
}

function UtokPic(_x, _y) {
	F034(_x + F07o(10), _y + F07o(10), 'boom_tiny' + UtokRand(), _x + F07o(5), _y - F07o(5), 0, 0, 1, '', 0.5);
}

function KlikUtokA() {
	F06e(0, 1);
	if (jeUtokPic)
		if (F055()) {
			var _utok_X = ENEMY_X + 25;
			var _utok_Y = ENEMY_Y + 25;
			UtokPic(_utok_X, _utok_Y);
		}
}
var firstStrike = false;
var pamatKlikTypes1 = 2;
var pamatKlikTypes2 = 1;

function KlikAny0(_buton) {
	if (pamatKlikTypes2 != _buton && _buton != 3 && _buton != 4) {
		pamatKlikTypes1 = pamatKlikTypes2;
		pamatKlikTypes2 = _buton;
	}
	F011();
}
silaRandomu = 0;
Zemetrasenie = 0;
seizure = 0;
Rozposuvane = 0;

function TrasenieObrazovky(_kolko) {
	if (jeSvetJS == 2) return false;
	if (!_kolko) _kolko = 0;
	else Zemetrasenie = _kolko;
	if (Zemetrasenie <= 0 && _kolko == 0 && Rozposuvane == 0)
		return false;
	Zemetrasenie -= 2;
	var _silaRandomu = _kolko;
	if (_silaRandomu < 0) _silaRandomu = 0;
	_i = 0;
	SetXY('pomocnik_div' + _i, pomocnik_xy[_i][0] + kontainers_xy[1][0] + F07o(_silaRandomu), pomocnik_xy[_i][1] + kontainers_xy[1][1] + F07o(_silaRandomu));
	_i = 1;
	SetXY('pomocnik_div' + _i, pomocnik_xy[_i][0] + kontainers_xy[1][0] + F07o(_silaRandomu), pomocnik_xy[_i][1] + kontainers_xy[1][1] + F07o(_silaRandomu));
	_i = 2;
	SetXY('pomocnik_div' + _i, pomocnik_xy[_i][0] + kontainers_xy[1][0] + F07o(_silaRandomu), pomocnik_xy[_i][1] + kontainers_xy[1][1] + F07o(_silaRandomu));
	_i = 3;
	SetXY('pomocnik_div' + _i, pomocnik_xy[_i][0] + kontainers_xy[1][0] + F07o(_silaRandomu), pomocnik_xy[_i][1] + kontainers_xy[1][1] + F07o(_silaRandomu));
	_i = 0;
	var randtras1 = F07o(_silaRandomu);
	var randtras2 = F07o(_silaRandomu);
	SetXY('klikBlok_bg' + _i, randtras1, randtras2);
	SetXY('klikBut_fake' + _i, klikBlok_fakebut_xy[0] + randtras1, klikBlok_fakebut_xy[1] + randtras2);
	_i = 1;
	var randtras1 = F07o(_silaRandomu);
	var randtras2 = F07o(_silaRandomu);
	SetXY('klikBlok_bg' + _i, randtras1, randtras2);
	SetXY('klikBut_fake' + _i, klikBlok_fakebut_xy[0] + randtras1, klikBlok_fakebut_xy[1] + randtras2);
	_i = 2;
	var randtras1 = F07o(_silaRandomu);
	var randtras2 = F07o(_silaRandomu);
	SetXY('klikBlok_bg' + _i, randtras1, randtras2);
	SetXY('klikBut_fake' + _i, klikBlok_fakebut_xy[0] + randtras1, klikBlok_fakebut_xy[1] + randtras2);
	_i = 3;
	var randtras1 = F07o(_silaRandomu);
	var randtras2 = F07o(_silaRandomu);
	SetXY('klikBlok_bg' + _i, randtras1, randtras2);
	SetXY('klikBut_fake' + _i, klikBlok_fakebut_xy[0] + randtras1, klikBlok_fakebut_xy[1] + randtras2);
	SetXY('nadpis', nadpis_xy[0] + F07o(_silaRandomu), nadpis_xy[1] + F07o(_silaRandomu));
	SetXY('enemy_stats', elifebg_xy[0] - 13 + F07o(_silaRandomu), elifebg_xy[1] + 248 + F07o(_silaRandomu));
	SetXY('enemy_div', elifebg_xy[0] + F07o(_silaRandomu), elifebg_xy[1] + F07o(_silaRandomu));
	SetXY('armorDiv', hplocha_xy[0] + F07o(_silaRandomu), hplocha_xy[1] + F07o(_silaRandomu));
	SetXY('kontainer_primary', kontainers_xy[4][0] + F07o(_silaRandomu), kontainers_xy[4][1] + F07o(_silaRandomu));
	SetXY('kontainer_secondary', kontainers_xy[5][0] + F07o(_silaRandomu), kontainers_xy[5][1] + F07o(_silaRandomu));
	if (Zemetrasenie >= 0) setTimeout('TrasenieObrazovky(' + Zemetrasenie + ');', 50);
	if (_silaRandomu == 0) Rozposuvane = 0;
	else Rozposuvane = 1;
}

function AutoClickerGif(_kery) {
	if (F055() || _kery == 1) {
		ShowJSxy('autoclickergif', kontainers_xy[3][0] + klikBlok_xy[_kery][0] + 70, kontainers_xy[3][1] + klikBlok_xy[_kery][1] + 75);
		F07g('klikBut_fake_n' + _kery);
	}
}

function ZapniAutoClickerNa(_kery) {
	ResetQueue(_kery + 1);
	var novequeue = 0;
	if (_kery == 0) novequeue = queueUtok;
	if (_kery == 1) novequeue = queueGold;
	if (_kery == 2) novequeue = queueHeal;
	if (_kery == 3) novequeue = queueAmmo;
	if (novequeue > 100) {
		novequeue = 0;
		F07g('autoclickergif');
	} else {
		novequeue = 999999;
		AutoClickerGif(_kery);
	}
	if (_kery == 0) queueUtok = novequeue;
	if (_kery == 1) queueGold = novequeue;
	if (_kery == 2) queueHeal = novequeue;
	if (_kery == 3) queueAmmo = novequeue;
	ZobrazActioniButs2();
}

function F06e(necekujAkliker, _manualKliked) {
	if (!isGamePaused)
		if (_manualKliked) {
			AutopilotEnd();
			FocusTeraz();
		}
	if (seizure > 6 && seizure % 2 == 0) TrasenieObrazovky(seizure);
	firstStrike = true;
	KlikAny0(1);
	if (itemBonusOverview[90] > 0)
		if (klikovZaKolo % 10 == 9) queueUtok++;
	if (!necekujAkliker || queueUtok == 0)
		if (jeautoclicker) ZapniAutoClickerNa(0);
	queueUtok++;
	if (itemBonusOverview[133] > 0) queueUtok++;
	manualKlik++;
}

function KlikUtok2(_isAuto) {
	if (seizure > 6 && seizure % 2 == 0) TrasenieObrazovky(seizure);
	klikovZaSec++;
	if (klikovZaSec >= MaxKlikPocSec + 1) return false;
	AutoClickerUse(1);
	var _x = klikBlok_but_xy[0][0];
	var _y = klikBlok_but_xy[0][1];
	if (!enemyZije2) {
		if (PredchadzajuciLevel < 5) {
			F03x(bestPresielLevel * 1 + 1);
			return false;
		} else
			return F05m(1);
	}
	if (bestPresielLevel > 1 && PredchadzajuciLevel < 4) {
		kazdy5warning++;
		if (kazdy5warning % 9 == 0)
			if (bestPresielLevel >= 1 && hrac[H_ZLATO] < 400 && ClickAttackValue() < 40) FloatingText(_x + 30, _y + 155, LOC_CLICK_clickme, '#ff0');
	}
	F02t(1, 2 + (_isAuto ? 4 : 0));
	if (sekundZaKolo <= 30 || PredchadzajuciLevel < 2) {
		var _pridajXP = F0u() + (_isAuto ? itemBonusOverview[106] : 0);
		F06n(_pridajXP, 5);
		F085(_x, _y, _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY());
		if (PredchadzajuciLevel < 10) ZrobFtext4(xp_xy[0] + 190, xp_xy[1] + 5, '+' + PCisloJS2(_pridajXP) + ' XP', 10, '#09DA73', 90, 300);
	}
	var EnemyZivotPred = F049();
	var _DAMAGE = KratPercentoJS(KratPercentoJS(ClickAttackValue(), (PocetPrejdeni(F055()) >= 10 ? itemBonusOverview[153] : 0)), (_isAuto ? itemBonusOverview[101] :
		0)) + (F055() > 9999 && F055() < 20000 ? itemBonusOverview[128] : 0);
	F0h(_DAMAGE, 1, 2);
	if (EnemyZivotPred > 0 && F049() <= 0) {
		zabilManual = 1;
		zobrazujError = 0;
	}
	if (hrac[4] % kazdyXYntyKlik == kazdyXYntyKlik - 1) {
		var _zlatoKolko = F0c();
		F038(_zlatoKolko);
		if (bestPresielLevel > 5 && _zlatoKolko > 0) {
			F051(_x, _y, _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY());
		}
	}
	if (hrac[4] % 5 == 2) {
		var healZaKlik = HracKlikHealUtok();
		if (healZaKlik > 0) {
			F03c(HracKlikHealUtok());
			F034(_x, _y, 'icon_heal', _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY(), heal_xy[0], heal_xy[1]);
		}
	}
	OdoberLifeClik();
	F06f(_x, _y, 2);
	hrac[4] += 1;
	DoQuestJS(2, 1);
	DoQuestJS(6, 1);
	DoQuestJS(7, 1);
	DoQuestJS(22, 1);
	if (pomocBonusyEffects[213] > 0) {
		DoQuestJS(3, 1, 1);
		DoQuestJS(23, 1, 1);
		DoQuestJS(7, 1, 1);
		DoQuestJS(8, 1, 1);
	}
	if (pomocBonusyEffects[214] > 0) {
		DoQuestJS(1, 1, 1);
		DoQuestJS(21, 1, 1);
		DoQuestJS(6, 1, 1);
		DoQuestJS(8, 1, 1);
	}
	if (_isAuto) DoQuestJS(9, 1);
}
bolUtokPic = false;

function LifeZaClick() {
	return Math.max(10, bestPresielLevel);
}

function F0c() {
	return 0 + F09f(itemBonusOverview[65] * (100 + itemBonusOverview[67]) * 0.01);
}

function HracKlikHealUtok() {
	return F09f(itemBonusOverview[73] * (100 + itemBonusOverview[74]) * 0.01);
}

function HracKlikZlatoHeal() {
	return 0;
}

function HracKlikHealZlato() {
	return F09f(itemBonusOverview[84]);
}

function OdoberLifeClik() {
	if (DO_DRAIN_LIFE_KLICK) {
		hrac[17] = hrac[17] - LifeZaClick();
		if (hrac[17] < 0) {
			hrac[17] = 0;
			GameOver(1);
		}
		F03w();
	}
}
var prehralSom = false;

function F04n() {
	if (!firstStrike && !jeLoged) return false;
	if (IsSimpleTutorialLog()) return false;
	if (!F054()) return false;
	if (hrac[17] > 0) {
		var _kolko = 1;
		if (enemy[4] == 9) var $enemyDamage = Math.max(1, EnemyMinDmgJS(enemy[0]) - EnemyMaxDmgJS(enemy[0]) * hrac[44]);
		else var $enemyDamage = MyRandFJS(EnemyMinDmgJS(enemy[0]), EnemyMaxDmgJS(enemy[0]), 0.111 * $randomArray[hrac[39] % $randomArrayLen]) + (enemy[4] == 8 ?
			EnemyMaxDmgJS(enemy[0]) * hrac[44] : 0);
		if ($enemyDamage < F09f(EnemyMinDmgJS(enemy[0]) * 0.1)) $enemyDamage = F09f(EnemyMinDmgJS(enemy[0]) * 0.1);
		var _totalDmgReduction = EnemyDamageReduction(PocetPrejdeni(enemy[0]));
		$enemyDamage -= _totalDmgReduction;
		if ($enemyDamage < 1) $enemyDamage = 1;
		ZrobFtext(heal_xy[0] + 130, heal_xy[1] - 5, '-' + F06j($enemyDamage, 4) + '&nbsp;' + LOC_MINUSLIFE, 5, '', '#f00');
		hrac[44]++;
		hrac[17] = F09i(hrac[17] - $enemyDamage);
		F02t(81, $enemyDamage);
		F02t(86, _totalDmgReduction);
		if (hrac[17] <= 0)
			if (hrac[63] > 0) {
				KritickyZivotStart();
				hrac[17] = 1 + itemBonusOverview[192];
				hrac[63]--;
			}
		F02t(80, hrac[17]);
		F02t(82, hrac[39]);
		F02t(83, hrac[44]);
		F06n(itemBonusOverview[77], 6);
		hrac[39]++;
		if (hrac[17] <= 0)
			GameOver(1);
		F03w();
		if (bestPresielLevel >= 5 && tut_krok == TUT_stratilsiEnergiu - 1) {
			F02i(1);
			ObrazkovyTutorialStart(TUT_stratilsiEnergiu);
		}
		if (itemBonusOverview[139] > 0) F0h(itemBonusOverview[139], 0, 0);
		if (IsInArray(17, spustiZnovaPU))
			if (hrac[17] < F05u()) usePUQueue.push(17);
	}
}

function EnemyHealingBase(_enemy) {
	var enemyHeal = _enemy[8] - F09f(0.07 * PocetPrejdeni(_enemy[0]) * _enemy[8]);
	if (enemyHeal < 0) enemyHeal = 0;
	return enemyHeal;
}

function EnemyHealingJS() {
	if (enemy[ENEMY_ZIVOT] > 0) {
		var enemyHeal = EnemyHealingBase(enemy);
		enemyHeal -= HealingReducedJS();
		if (enemyHeal < 0) enemyHeal = 0;
		F02t(102, enemyHeal);
		if (enemyHeal > 0) {
			var eMaxLife = EnemyMaxLifeJS(F055());
			enemy[ENEMY_ZIVOT] += enemyHeal;
			ZrobFtext(ENEMY_X + 250, ENEMY_Y + 95, (inverzeLife ? '-' : '+') + F06j(enemyHeal, 4) + ' ' + (PredchadzajuciLevel < 150 ? LOC_PLUS_enemyLIFE : ''), 5, ''
				, '#f90', '', 160);
			if (enemy[ENEMY_ZIVOT] > eMaxLife) enemy[ENEMY_ZIVOT] = eMaxLife;
			F04i();
			if (bestPresielLevel < 10)
				if (tut_krok < TUT_enemyHealing) {
					F02i(1);
					tut_krok = TUT_enemyHealing;
					ObrazkovyTutorialStart(tut_krok);
				}
		}
	}
}

function GameOver(_typGO) {
	FocusTeraz();
	try {
		prehralSom = true;
		enemyZije2 = false;
		hrac[61] = hrac[HRALEVEL];
		hrac[HRALEVEL] = 0;
		if (_typGO == 1) hrac[60] = enemy[ENEMY_ZIVOT];
		enemy[ENEMY_ZIVOT] = 0;
		F04i();
		F046();
		F01i();
		hrac[17] = 0;
		zivotMaxMinus = hrac[52] = 0;
		var gameoverButs = F09d(LOC_BUT_replay2, 'F061(\'infoPopupDes\'); F03x(hralsomlevel);', '') + (jeLoged ? F09d(LOC_CHOOSE_LEVEL
			, 'F061(\'infoPopupDes\'); F05m(1);', '') : '');
		F07e('<img src="' + PicPrefix() + 'ui2/gameover.png" alt="o"><br>' + '<br>' + gameoverButs + '<br>' + F09k('mini6', (_typGO == 1 ? LOC_NEPRESIEL_LEVEL_LEBO :
			LOC_NEPRESIEL_LEVEL_LEBO2)), (_typGO == 1 ? LOC_ZNICILI_TA : LOC_ZNICILI_CAS), 'infoPopupDes', 500, 0);
		F02t(23);
		F038(itemBonusOverview[113]);
		if (!somTESTER)
			F06o(1, 2);
		KoniecMisie(1);
	} catch (e) {
		alert(e);
	}
}

function F04y() {
	if (!firstStrike && !jeLoged) return false;
	if (IsSimpleTutorialLog()) return false;
	F034(heal_xy[0] - 5, heal_xy[1] - 10, 'boom_tiny0', heal_xy[0] - 5 + F07o(20), heal_xy[1] - 20, 0, 0, 1);
	if (jeLoged) PlaySoundLoad('utoknamna');
}

function DmgToEnemyArmorJS(_dmg) {
	return 0;
}
var maxminEZivot = 0;

function F0h(_kolko, _manualne, _dposun, _LOC) {
	if (enemy[ENEMY_ZIVOT] > 0) {
		{
			enemy[ENEMY_ZIVOT] -= _kolko;
			avrgdmg_d += _kolko;
			if (_kolko > 0) {
				DoQuestJS(32, _kolko);
				if (enemy[ENEMY_ZIVOT] <= 0) {
					zobrazujError = 0;
					enemy[ENEMY_ZIVOT] = 0;
				}
				var dmgArmor = 0;
				if (maxminEZivot > enemy[ENEMY_ZIVOT]) {
					dmgArmor = maxminEZivot - enemy[ENEMY_ZIVOT];
					maxminEZivot = enemy[ENEMY_ZIVOT];
				}
				if (dmgArmor > 0) PostupHru(dmgArmor, _manualne);
				PostupHru2(_manualne);
			}
			if (jeLietajuceIkony2)
				if (_kolko > 0) ZrobFtext(520 - (_LOC ? 120 : 0) - 7 * (_kolko + '')
					.length, 295 - _dposun * 30, (_LOC ? _LOC : '') + '-' + PCisloJS2(_kolko) + ' HP', 10, '', '#f00', '', (_LOC ? 120 : 0) + 45 + 15 * (_kolko + '')
					.length, 600);
		}
	}
	F04i();
}

function F050(_manualKliked) {
	if (!isGamePaused)
		if (_manualKliked) {
			if (F055()) AutopilotEnd();
			FocusTeraz();
		}
	KlikAny0(2);
	if (itemBonusOverview[90] > 0)
		if (klikovZaKolo % 10 == 9) queueGold++;
	if (jeautoclicker)
		ZapniAutoClickerNa(1);
	queueGold++;
	if (itemBonusOverview[134] > 0) queueGold++;
	manualKlik++;
}

function KlikZlato2(_isAuto) {
	if (PredchadzajuciLevel < 40)
		if (!F054()) return false;
	if (!F055() && !_isAuto) {
		hrac[97]++;
		if (hrac[97] > MAX_GOLD_CLICKS * (PredchadzajuciLevel > 100 ? 1 : 5)) {
			queueGold = 0;
			F07g('autoclickergif');
			F03t('Max gold clicks per day outside of a mission reached (' + MAX_GOLD_CLICKS + ')');
			return false;
		}
	}
	klikovZaSec++;
	if (klikovZaSec >= MaxKlikPocSec + 1) return false;
	AutoClickerUse(2);
	var _x = klikBlok_but_xy[1][0];
	var _y = klikBlok_but_xy[1][1];
	F02t(1, 3 + (_isAuto ? 4 : 0));
	var _pridajZlato = KratPercentoJS(ClickGoldValue(), (_isAuto ? itemBonusOverview[101] : 0)) * (itemBonusOverview[148] > 0 && _isAuto ? 2 : 1);
	F038(_pridajZlato);
	if (F055())
		if (sekundZaKolo <= 30) {
			F06n(F0u(), 22);
			if (_isAuto)
				if (itemBonusOverview[106] > 0) F06n(itemBonusOverview[106], 22);
		}
	if (jeLoged)
		if (OdoberMaxZivot()) {
			kazdy5warning++;
			if (kazdy5warning % 5 == 0) ZrobFtext2(_x + 30, _y - 35, LOC_LOW_LIFEGOLD, '#a00');
		}
	F051(_x, _y, _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY());
	OdoberLifeClik();
	F06f(_x, _y, 1);
	if (hrac[21] % 5 == 1) {
		var healZaKlik = HracKlikZlatoHeal();
		if (healZaKlik > 0) {
			F03c(healZaKlik);
			F034(_x, _y, 'icon_heal', _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY(), heal_xy[0], heal_xy[1]);
		}
	}
	hrac[21] += 1;
	DoQuestJS(1, 1);
	DoQuestJS(6, 1);
	DoQuestJS(8, 1);
	DoQuestJS(21, 1);
	if (_isAuto) DoQuestJS(9, (itemBonusOverview[148] > 0 && _isAuto ? 2 : 1));
	if (!hajdolSomGoldNote) {
		F07g('zlatoMimoMisiuNote');
		hajdolSomGoldNote = true;
	}
}
hajdolSomGoldNote = false;

function OdoberMaxZivot() {
	return false;
}
var kazdy5warning = 0;

function ClickHealValue(_lenBase) {
	var _baseValue = 100 + itemBonusOverview[60];
	if (_lenBase) return _baseValue;
	return PlusBuffJS(_baseValue, 15);
}

function F06c(_manualKliked) {
	if (!isGamePaused)
		if (_manualKliked) {
			AutopilotEnd();
			FocusTeraz();
		}
	KlikAny0(3);
	if (itemBonusOverview[90] > 0)
		if (klikovZaKolo % 10 == 9) queueHeal++;
	if (jeautoclicker)
		ZapniAutoClickerNa(2);
	queueHeal++;
	if (itemBonusOverview[135] > 0) queueHeal++;
	manualKlik++;
}

function KlikHeal2(_isAuto) {
	var _x = klikBlok_but_xy[2][0];
	var _y = klikBlok_but_xy[2][1];
	klikovZaSec++;
	if (klikovZaSec >= MaxKlikPocSec + 1) return false;
	if (!F054()) return F0f(2);
	AutoClickerUse(3);
	F02t(1, 4 + (_isAuto ? 4 : 0));
	if (sekundZaKolo <= 30) {
		if (_isAuto)
			if (itemBonusOverview[106] > 0) F06n(itemBonusOverview[106], 23);
	}
	F03c(KratPercentoJS(ClickHealValue(), (_isAuto ? itemBonusOverview[101] : 0)));
	if (hrac[17] < F05u()) F034(_x, _y, 'icon_heal', _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY(), heal_xy[0], heal_xy[1]);
	F06f(_x, _y, 3);
	if (hrac[46] % 5 == 1) {
		var zlatoZaKlik = HracKlikHealZlato();
		if (zlatoZaKlik > 0) {
			F038(zlatoZaKlik);
			F051(_x, _y, _x + VyletovanieCasticHoreX(), _y + VyletovanieCasticHoreY());
		}
	}
	hrac[46] += 1;
	DoQuestJS(3, 1);
	DoQuestJS(7, 1);
	DoQuestJS(8, 1);
	DoQuestJS(23, 1);
	if (_isAuto) DoQuestJS(9, 1);
	if (itemBonusOverview[145] > 0 && jeautoclicker && hrac[17] >= F05u())
		if (robimQuest[0] != 3)
			if (robimQuest[0] != 7)
				if (robimQuest[0] != 8)
					if (robimQuest[0] != 23) {
						queueHeal = 0;
						if (!jeAutoPilot) KlikF05i(pamatKlikTypes2 - 1, 0);
					}
}

function GoldForMissionJS($_misiaGold, $_bestM, _fuelcost) {
	return $_misiaGold + itemBonusOverview[87] * _fuelcost;
}

function PlatinaForMissionJS($_cislo, _fuelcost) {
	return $_cislo + itemBonusOverview[166] * _fuelcost + pomocBonusyEffects[206] * _fuelcost;
}
var zenyA = new Array();
var zenyA_E = new Array();
var zenyA_I = new Array();
var plusGoldZaFinishLevel = 0;

function F01d() {
	try {
		if (enemy[ENEMY_ZIVOT] <= 0 && enemyZije2) {
			HideTutorial();
			buffs = new Array();
			enemyZije2 = false;
			zobrazujError = 0;
			setTimeout('zobrazujError=1;', 1200);
			var presielLevel = enemy;
			lastPrejdenaMisia = enemy[0];
			hrac[HRALEVEL] = 0;
			hrac[70] += 1 * presielLevel[7];
			if (PredchadzajuciLevel < KLANLEVEL && hrac[70] > 90) hrac[70] = 90;
			zenyA = F01z(hrac[H_ZENY], ';');
			zenyA_E = F01z(hrac[H_ZENY_E], ';');
			zenyA_I = F01z(hrac[H_ZENY_I], ';');
			HnedPoPrejdeniMisie();
			var _extraFuelSpent = 0;
			if (pomocBonusyEffects[212] > 0) _extraFuelSpent += pomocBonusyEffects[212];
			if (presielLevel[0] * 1 < 10000) {
				if (!zenyA[presielLevel[0]]) zenyA[presielLevel[0]] = presielLevel[7] + _extraFuelSpent;
				else zenyA[presielLevel[0]] = zenyA[presielLevel[0]] * 1 + presielLevel[7] + _extraFuelSpent;
				hrac[H_ZENY] = zenyA.join(';');
			} else if (presielLevel[0] * 1 < 20000) {
				if (!zenyA_E[presielLevel[0] - 10000]) zenyA_E[presielLevel[0] - 10000] = presielLevel[7] + _extraFuelSpent;
				else zenyA_E[presielLevel[0] - 10000] = zenyA_E[presielLevel[0] - 10000] * 1 + presielLevel[7] + _extraFuelSpent;
				hrac[H_ZENY_E] = zenyA_E.join(';');
			} else {
				if (!zenyA_I[presielLevel[0] - 20000]) zenyA_I[presielLevel[0] - 20000] = presielLevel[7] + _extraFuelSpent;
				else zenyA_I[presielLevel[0] - 20000] = zenyA_I[presielLevel[0] - 20000] * 1 + presielLevel[7] + _extraFuelSpent;
				hrac[H_ZENY_I] = zenyA_I.join(';');
			}
			F04i();
			F07g('armorDiv');
			F046();
			plusGoldZaFinishLevel = -1;
			if (bestPresielLevel < presielLevel[0] * 1 && presielLevel[0] * 1 < 10000) hrac[43] = bestPresielLevel = presielLevel[0] * 1;
			var clanBodyCast = (presielLevel[0] > 10000 ? bestPresielLevel : presielLevel[0]);
			var clanPlusScore = presielLevel[7] * (clanBodyCast + F09f(bestPresielLevel * 0.3 + F09f(sekundZaKolo <= SekundNaDoubleRew() ? clanBodyCast * 0.3 : 0)));
			if (bestPresielLevel >= maxMisii) clanPlusScore += presielLevel[7] * 50;
			hrac[73] += clanPlusScore;
			DajRewardZaMisiuNEW(presielLevel[0], presielLevel[7]);
			if (!jeLoged) {
				SaveNonLoged();
			}
			F01i();
			zivotMaxMinus = hrac[52] = 0;
			if (sekundZaKolo <= SekundNaDoubleRew()) {
				hrac[111]++;
				F02t(28);
			}
			F02t(24, plusGoldZaFinishLevel);
			F02t(30, hrac[H_ZLATO]);
			F02t(32, F012());
			F02t(33, sekundZaKolo);
			FloatingClanScore(clanPlusScore);
			mozemDalsiQuest = true;
			DoQuestJS(20, 1);
			if (sekundZaKolo < 51) DoQuestJS(25, 1);
			buffsBonuses = new Array();
			SetPomocValues();
			SetKBlokValues();
			if (!jeLoged && mapujPrvyLevel) {
				F09b('mapujprvylevel');
				mapujPrvyLevel = false;
			}
			if (!jeLoged && mapuj2l <= 0 && bestPresielLevel == 2) {
				F09b('mapuj2l');
				mapuj2l = 1;
			}
			if (!jeLoged && mapuj3l <= 0 && bestPresielLevel == 3) {
				F09b('mapuj3l');
				mapuj3l = 1;
			}
			if (!jeLoged && mapuj4l <= 0 && bestPresielLevel == 4) {
				F09b('mapuj4l');
				mapuj4l = 1;
			}
			if (!jeLoged && mapuj5l <= 0 && bestPresielLevel == 5) {
				F09b('mapuj5l');
				mapuj5l = 1;
			}
			if (bestPresielLevel >= 11) ZobrazAutoRegDiv();
			aktivnychPU = 0;
			F01g();
			VypniZivotBlikanie();
			if (bestPresielLevel >= 10) F0r();
			else F07g('narodenie');
			KoniecMisie(0);
			anyActivity = 1;
			if (jeAutoPilot) {
				setTimeout('TakeNewF08b();', 3500);
				setTimeout('StartLevelAutoPilot();', 5000);
			}
			F08c('tipoftheday');
			VypisTipOfTheDay(0);
		}
	} catch (e) {
		alert('mission end error - please send us a support ticket!' + e);
	}
}

function KoniecMisie(_hned) {
	skutocneHodnoty = [0, 0, 0, 0, 0, 0];
	skutocneHodnoty[0] = F0w();
	skutocneHodnoty[1] = F012();
	skutocneHodnoty[2] = F01o();
	skutocneHodnoty[3] = F0v();
	TrasenieObrazovky(0);
	queueUtok = queueHeal = queueGold = queueAmmo = 0;
	if (zobrazilLastXSec) F061('bublinahore');
	F07g('autoclickergif');
	aktivnychPU = 0;
	buffs = new Array();
	buffsBonuses = new Array();
	VypniZivotBlikanie();
	for (var i = 0; i < MAM_RANDOMBON; i++)
		if (randomBonusVisible[i])
			for (var j = 0; j < 2; j++) randomBonusKlikQueue.push(i);
	if (JeOffer()) {
		if (_hned) F08c('bonusOfferDiv');
		else setTimeout('TryToShowOffer();', 10000);
	}
	SetVyberLevelDiv();
	DebugPridaj('pocetEachSec: ' + pocetEachSec);
	F07g('typMisieLabel');
	queueUtok = queueHeal = queueGold = queueAmmo = 0;
	ZobrazActioniButs();
	if (_hned) {
		RefreshPomocValues();
		setTimeout('Vypis_kontainer_klikanie(); Vypis_kontainer_pomocnicky(); ', 1000);
	}
	if (IsEvent(86400 * 3)) VypisEventDiv();
}

function TryToShowOffer() {
	if (JeOffer()) {
		if (IsRewardVisible()) setTimeout(' TryToShowOffer();', 5000);
		else
			F08c('bonusOfferDiv');
	}
}

function SaveNonLoged() {
	if (jeLoged)
		return false;
	F067('nonlgd_je', 1, 86400 * 90);
	F067('nonlgd_bestPresielLevel', bestPresielLevel, 86400 * 90);
	F067('nonlgd_gold', hrac[6], 86400 * 90);
	F067('nonlgd_exp', hrac[15], 86400 * 90);
	F067('nonlgd_level', PredchadzajuciLevel, 86400 * 90);
	F067('nonlgd_items', hracVeciA.join('a'), 86400 * 90);
	F067('nonlgd_misie', zenyA.join('a'), 86400 * 90);
}

function IsRewardVisible() {
	if (!F098('rewardTable') && rewardPoradie3 >= rewardPoradie2) return false;
	else return true;
}

function DajRewardZaMisiuNEW(_kolky, _kolkokrat) {
	DajRewardZaMisiuNEW2(_kolky, rewardPoradie2, _kolkokrat);
	rewardPoradie2++;
}
var missionOdmena = [];

function DajRewardZaMisiuNEW2(_kolky, _por, _kolkokrat) {
	F03b();
	if (F098('rewardTable') || rewardPoradie != _por) {
		setTimeout('DajRewardZaMisiuNEW2(' + _kolky + ',' + _por + ',' + _kolkokrat + ');', 750);
		return false;
	}
	var presielLevel = herne_levelyA[_kolky];
	praveSomPresielMisiu = presielLevel[0];
	var _LEVEL_poradie = presielLevel[0];
	missionOdmena = [];
	var _xpZaMisiu = F09f(presielLevel[6] * presielLevel[7] * ((100 + itemBonusOverview[69]) * 0.01));
	if (_xpZaMisiu > 0) missionOdmena.push([5, _xpZaMisiu, 1]);
	var _kolkokrat2 = _kolkokrat + (itemBonusOverview[191] ? pomocBonusyEffects[212] : 0);
	if (_LEVEL_poradie > 9999 && _LEVEL_poradie < 20000 && itemBonusOverview[13] > 0)
		for (var im = 0; im < _kolkokrat2; im++)
			if ((PocetPrejdeni(_LEVEL_poradie) % 200) - im == 0) missionOdmena.push([10, itemBonusOverview[13], 1]);
	var _goldZaMisiu = GoldForMissionJS(presielLevel[5], bestPresielLevel, presielLevel[7]);
	if (PocetPrejdeni(_LEVEL_poradie) == presielLevel[7] + pomocBonusyEffects[212]) {
		_goldZaMisiu = KratPercentoJS(_goldZaMisiu, itemBonusOverview[109]);
		lastMisiaPrvyKrat = 1;
	}
	if (_goldZaMisiu > 0) missionOdmena.push([1, _goldZaMisiu, 1]);
	if (_kolky < 20000)
		if (presielLevel[15] > 0) missionOdmena.push([9, presielLevel[15], 1]);
	plusGoldZaFinishLevel = 0;
	plusGoldZaFinishLevel += _goldZaMisiu;
	var _platinaZaMisiu = PlatinaForMissionJS(presielLevel[14], presielLevel[7]);
	if (_platinaZaMisiu > 0) {
		if (PocetPrejdeni(_LEVEL_poradie) == presielLevel[7] + pomocBonusyEffects[212]) _platinaZaMisiu = KratPercentoJS(_platinaZaMisiu, itemBonusOverview[109]);
		missionOdmena.push([8, _platinaZaMisiu, 1]);
	}
	var _bonustxt = '';
	for (var im = 0; im < _kolkokrat; im++)
		if ((PocetPrejdeni(_LEVEL_poradie) % 10) - im == 0) {
			_bonustxt += LOC_bonus_za_10_level;
		}
	if (sekundZaKolo <= SekundNaDoubleRew()) {
		if (_xpZaMisiu > 0) missionOdmena.push([5, _xpZaMisiu, 2]);
		if (itemBonusOverview[187]) _goldZaMisiu += itemBonusOverview[187];
		if (_goldZaMisiu > 0) missionOdmena.push([1, _goldZaMisiu, 2]);
		if (itemBonusOverview[186]) _platinaZaMisiu += itemBonusOverview[186];
		if (_platinaZaMisiu > 0) missionOdmena.push([8, _platinaZaMisiu, 2]);
		if (_kolky < 20000)
			if (presielLevel[15] > 0) missionOdmena.push([9, presielLevel[15], 2]);
		plusGoldZaFinishLevel += _goldZaMisiu;
	} else {}
	rewardPoradie++;
	if (PredchadzajuciLevel < 4) {
		if (bestPresielLevel == 1) F038(300, 1);
		if (bestPresielLevel == 2) F038(500, 1);
	}
	var _out = '<span id="missionRewardNew"></span>';
	_out += '<div style="position:relative;height:560px;">';
	_out += '<div id="odmenyVLavo">' + FSize(25, LOC_CIELE_rew2) + '<br>' + FSize(25, PIC_REWARD3) + '<br>';
	missionOdmenaItem = 0;
	missionOdmenaItemPor = 0;
	if (_kolky >= 20000) {
		var _pomocc = 0;
		var _fuelspent2 = _kolkokrat + pomocBonusyEffects[212];
		var _akyItem = presielLevel[15] * 1;
		var bonusySTR = VypisBonusNEW(itemyVShopeA[_akyItem], 3);
		var kvoc500 = presielLevel[16] * 1 - itemBonusOverview[108];
		if (kvoc500 < 175) kvoc500 = 175;
		for (var im = 0; im < _fuelspent2; im++) {
			_pomocc = PocetPrejdeni(_LEVEL_poradie) - im;
			if (_pomocc == 1 || _pomocc == 150 || _pomocc == kvoc500 || (_pomocc > kvoc500 && F05p(presielLevel[15] * 1) < 3)) {
				missionOdmenaItem = presielLevel[15] * 1;
				missionOdmenaItemPor = 1;
				if (_pomocc == 150) missionOdmenaItemPor = 2;
				if (_pomocc >= kvoc500) missionOdmenaItemPor = 3;
				_out += 'Item given: <b>' + LOC_itemy[missionOdmenaItem] + '</b><br>';
				_out += '<img ' + F02o(bonusySTR) + ' alt="bonus" src="' + PicPrefix() + 'veci/vec' + missionOdmenaItem + '.png?v=' + (picversion + picversionVeci) + '">';
				_out += '<br>';
				if (APset[11] * 1 == 1)
					if (missionOdmenaItemPor == 3) AP_fuelPauzaBude = true;
				break;
			}
		}
		if (PocetPrejdeni(_LEVEL_poradie) < 150)
			if (missionOdmenaItem == 0) {
				_out += 'Spend ' + (150 - PocetPrejdeni(_LEVEL_poradie)) + ' more fuel to earn 2nd stack of the item: ';
				_out += '<img width="30" ' + F02o(bonusySTR) + ' alt="bonus" src="' + PicPrefix() + 'veci/vec' + _akyItem + '.png?v=' + (picversion + picversionVeci) +
					'">';
			}
		if (PocetPrejdeni(_LEVEL_poradie) > 150 && PocetPrejdeni(_LEVEL_poradie) < kvoc500)
			if (missionOdmenaItem == 0) {
				_out += 'Spend ' + (kvoc500 - PocetPrejdeni(_LEVEL_poradie)) + ' more fuel to earn 3rd stack of the item: ';
				_out += '<img width="30" ' + F02o(bonusySTR) + ' alt="bonus" src="' + PicPrefix() + 'veci/vec' + _akyItem + '.png?v=' + (picversion + picversionVeci) +
					'">';
			}
	}
	if (missionOdmenaItem == 0) _out += '<hr>' + PIC_REWARD2 + ':';
	var prvaOdmena = true;
	for (var i in missionOdmena)
		if (missionOdmena[i][2] == 1) {
			if (prvaOdmena) {
				_out += '<br>';
				prvaOdmena = false;
			} else
				_out += '<br><br>';
			_out += MisionOdmenaPic(missionOdmena[i][0]) + FSize(20, '+' + PCisloJS2(missionOdmena[i][1]));
		}
	_out += '<br><br><hr><br><img style="margin-bottom:-10px;" src="' + PicPrefix() + 'ui2/speedreward.png?v=' + picversion + '">' + SPC + PIC_REWARD4 + SPC +
		'<img style="margin-bottom:-10px;" src="' + PicPrefix() + 'ui2/speedreward.png?v=' + picversion + '">';
	if (sekundZaKolo > SekundNaDoubleRew()) _out += '<br><br>' + InfoBlok(FSize(13, PIC_REWARD5.split('KOLKO')
		.join(SekundNaDoubleRew())));
	else {
		for (var i in missionOdmena)
			if (missionOdmena[i][2] == 2) {
				_out += '<br><br>' + MisionOdmenaPic(missionOdmena[i][0]) + FSize(20, '+' + PCisloJS2(missionOdmena[i][1]));
			}
	}
	_out += '<br><hr>';
	_out += F09d(LOC_TAKE, 'TakeNewF08b();');
	if (PredchadzajuciLevel > 50) _out += F09d(LOC_BUT_replay2, 'TakeNewF08b(); setTimeout(\'F03x(hralsomlevel);\',1000);');
	if (jeAutoPilot) _out += F09d(LOC_TAKE2, 'breakAutoPilot=1;TakeNewF08b();', LOC_TAKE3);
	_out += '</div>';
	var _sirokaRewarda = false;
	if (_kolky < 20000)
		if (!somvofcbJS) {
			_sirokaRewarda = true;
			_out += '<div id="odmenyVPravo">';
			if (_kolky < 10000) _out += PIC_REWARD + ':&nbsp;<b>' + _kolky + '</b>&nbsp;/&nbsp;<b>' + maxMisii2 + '</b>';
			_out += '<br><br>' + ReturnMainPic(herne_levelyA[_kolky], 530, 424) + '</div>';
			_out += '</div>';
		}
	F07e(_out, '', 'misreward2', (_sirokaRewarda ? 980 : 530), 1, '', 1);
	F061('bublinahore');
}

function ToggleGrafikaCensor() {}

function InfoBlok(_infotxt) {
	return '<div class="infodiv"><img style="position:absolute;left:15px;top:25px;"src="' + PicPrefix() + 'ui2/miniinfo.png?v=' + picversion + '">' + _infotxt +
		'</div>';
}

function MisionOdmenaPic(_pic) {
	if (_pic == 5) return IconPic('icons2/icon_xp', -10);
	if (_pic == 1) return IconPic('icons2/icon_gold', -10);
	if (_pic == 8) return IconPic('icons2/icon_platina', -10);
	if (_pic == 9) return IconPic('icons2/icon_event' + event_picK, -10);
	if (_pic == 10) return IconPic('icons2/icon_kluc', -10);
}
var missionOdmenaItem = 0;
var missionOdmenaItemPor = 0;

function TakeNewF08b() {
	try {
		if (missionOdmena.length > 0) {
			for (var i in missionOdmena) {
				F02t(160 + missionOdmena[i][0], missionOdmena[i][1]);
				if (missionOdmena[i][0] == 5) {
					F06n(missionOdmena[i][1]);
					F085(280, 350, 280 - missionOdmena[i][2] * 30, 300);
				}
				if (missionOdmena[i][0] == 1) {
					F038(missionOdmena[i][1]);
					ZrobZlato2(300, 350);
				}
				if (missionOdmena[i][0] == 8) {
					PridajPlatinu(missionOdmena[i][1]);
					ZrobPlatinu(320, 350, 320 - missionOdmena[i][2] * 30, 300);
				}
				if (missionOdmena[i][0] == 9) PridajEventMenu(missionOdmena[i][1]);
				if (missionOdmena[i][0] == 10) PridajKluce(missionOdmena[i][1]);
			}
			rewardPoradie3++;
		}
		missionOdmena = [];
		FocusRefresh();
		VypisGoldSinceLast();
		F061('misreward2');
		saveTick += 1;
		if (focused && !jeAutoPilot) saveTick += 1;
		if (saveTick >= 4 || questyA.length < 13 || lastMisiaPrvyKrat) {
			saveTick = 0;
			lastMisiaPrvyKrat = 0;
			setTimeout('F06o(0,2,1,1);', 500);
		}
		VypisMaterialHeader();
		if (IsEvent(86400 * 3)) VypisEventDiv();
		if (tut_krok <= 2 && !presielTutorial) ObrazkovyTutorialStart(3, 1500);
		else if (tut_krok <= 9 && !presielTutorial) ObrazkovyTutorialStart(9, 1000);
		if (missionOdmenaItem > 0) {
			hracVeciA[missionOdmenaItem] = missionOdmenaItemPor;
			if (missionOdmenaItemPor == 2) extraStacksA[missionOdmenaItem] = 1;
			if (missionOdmenaItemPor == 3) extraStacksA[missionOdmenaItem] = 2;
			hrac[H_VECI] = hracVeciA.join(';');
			F0z();
		}
	} catch (e) {
		alert(e);
	}
}

function DajRewardZaMisiu(_kolky, _kolkokrat) {
	DajRewardZaMisiu2(_kolky, rewardPoradie2, _kolkokrat);
	rewardPoradie2++;
}
praveSomPresielMisiu = 0;

function SekundNaDoubleRew() {
	return SPEED_REWARD_TIME + itemBonusOverview[140];
}

function DajRewardZaMisiu2(_kolky, _por, _kolkokrat) {
	if (F098('rewardTable') || rewardPoradie != _por) {
		setTimeout('DajRewardZaMisiu2(' + _kolky + ',' + _por + ',' + _kolkokrat + ');', 750);
		return false;
	}
	var presielLevel = herne_levelyA[_kolky];
	praveSomPresielMisiu = presielLevel[0];
	var _LEVEL_poradie = presielLevel[0];
	var _odmeny = new Array();
	var _xpZaMisiu = F09f(presielLevel[6] * presielLevel[7] * ((100 + itemBonusOverview[69]) * 0.01));
	if (_xpZaMisiu > 0) _odmeny.push(Array('icon_xp', _xpZaMisiu, 1));
	var _goldZaMisiu = GoldForMissionJS(presielLevel[5], bestPresielLevel, presielLevel[7]);
	if (PocetPrejdeni(_LEVEL_poradie) == presielLevel[7] + pomocBonusyEffects[212]) {
		_goldZaMisiu = KratPercentoJS(_goldZaMisiu, itemBonusOverview[109]);
		lastMisiaPrvyKrat = 1;
	}
	if (_goldZaMisiu > 0) _odmeny.push(Array('icon_gold', _goldZaMisiu, 1));
	if (presielLevel[15] > 0) _odmeny.push(Array('icon_event' + event_picK, presielLevel[15], 1));
	plusGoldZaFinishLevel = 0;
	plusGoldZaFinishLevel += _goldZaMisiu;
	var _platinaZaMisiu = PlatinaForMissionJS(presielLevel[14], presielLevel[7]);
	if (_platinaZaMisiu > 0) {
		if (PocetPrejdeni(_LEVEL_poradie) == presielLevel[7] + pomocBonusyEffects[212]) _platinaZaMisiu = KratPercentoJS(_platinaZaMisiu, itemBonusOverview[109]);
		_odmeny.push(Array('icon_platina', _platinaZaMisiu, 1));
	}
	var _bonustxt = '';
	var budeRewOdmena = 0;
	for (var im = 0; im < _kolkokrat; im++)
		if ((PocetPrejdeni(_LEVEL_poradie) % 10) - im == 0) {
			_bonustxt += LOC_bonus_za_10_level;
			budeRewOdmena = 1;
		}
	if ((sekundZaKolo <= SekundNaDoubleRew())) {
		var _popiska = LOC_bonus_za_fast_level;
		_popiska = _popiska.split('XXX');
		_popiska = _popiska.join('' + SekundNaDoubleRew());
		_bonustxt += _popiska;
		budeRewOdmena = 1;
	}
	if (budeRewOdmena == 1)
		if (_goldZaMisiu > 0) _odmeny.push(Array('medzera', _bonustxt, 0));
	for (var im = 0; im < _kolkokrat; im++)
		if ((PocetPrejdeni(_LEVEL_poradie) % 10) - im == 0)
			if (presielLevel[6] > 0) _odmeny.push(Array('icon_xp', presielLevel[6], 1));
	if (sekundZaKolo <= SekundNaDoubleRew()) {
		if (_xpZaMisiu > 0) _odmeny.push(Array('icon_xp', _xpZaMisiu, 1));
		if (itemBonusOverview[187]) _goldZaMisiu += itemBonusOverview[187];
		if (_goldZaMisiu > 0) _odmeny.push(Array('icon_gold', _goldZaMisiu, 1));
		if (itemBonusOverview[186]) _platinaZaMisiu += itemBonusOverview[186];
		if (_platinaZaMisiu > 0) _odmeny.push(Array('icon_platina', _platinaZaMisiu, 1));
		if (presielLevel[15] > 0) _odmeny.push(Array('icon_event' + event_picK, presielLevel[15], 1));
		plusGoldZaFinishLevel += _goldZaMisiu;
	} else {}
	F01k(LOC_GRATULACIA + ' ' + LOC_PRESIEL_LEVEL, _odmeny, 'nazovGold');
	rewardPoradie++;
	if (bestPresielLevel > 6) PlaySoundLoad('rewarddiv');
	if (PredchadzajuciLevel < 4) {
		if (bestPresielLevel == 1) F038(300, 1);
		if (bestPresielLevel == 2) F038(500, 1);
	}
}
var moveBLup = false;

function F0o(_posun) {
	UpperNotification('leftTop', _posun);
}

function UpperNotification(_kam, _posun, _delay) {
	F08c(_kam);
	if (_posun > 0)
		if (F098(_kam)) {
			if (!_delay) _delay = 2000;
			moveBLup = true;
			_posun -= 5;
			F098(_kam)
				.style.top = -_posun + 'px';
			if (_posun <= 0) {
				moveBLup = false;
				setTimeout('UpperNotifyDOWN(\'' + _kam + '\',0);', _delay);
			} else
				setTimeout('UpperNotification(\'' + _kam + '\',' + _posun + ',' + _delay + ');', 40);
		}
}

function UpperNotifyDOWN(_kam, _posun) {
	if (!moveBLup && _posun < 120)
		if (F098(_kam)) {
			_posun += 5;
			setTimeout('UpperNotifyDOWN(\'' + _kam + '\',' + _posun + ');', 40);
			F098(_kam)
				.style.top = -_posun + 'px';
		}
}
var enemyTotalLifeSave = 99999999999999;

function EnemyMinDmgJS(_i) {
	return herne_levelyA[_i][10];
}

function EnemyMaxDmgJS(_i) {
	return herne_levelyA[_i][11];
}

function EnemyMaxLifeJS(_i) {
	return herne_levelyA[_i][2];
}

function F0q(_i) {
	if (herne_levelyA[_i][3] == 0) return 0;
	var _diamondCost = 0;
	var _odj = ((F09i(_i / 7) - 1) * 7) + 1;
	var _doj = (F09i(_i / 7) * 7) - 1;
	for (var _j = _odj; _j <= _doj; _j++)
		if (PocetPrejdeni(_j) < F00(_i)) _diamondCost = herne_levelyA[_i][3];
	return _diamondCost;
}

function F01y() {
	F061('warPopup');
	OpenQuickShop(39, -1);
}

function KupitArenaItems() {
	F061('warPopup');
	OpenQuickShop(48, -1, 1);
}
var saveKapitolaStrana = 0;
$fuelZaChapter = 5;

function F05m(_rychlo, _strana) {
	try {
		F061('bublinahore');
		MenuSound();
		if (!zobrazujError) return false;
		if (rewardPoradie3 < rewardPoradie2) {
			TakeNewF08b();
			return F03t(LOC_TAKE_REWARD_FIRST, ' ');
		}
		_rychlo = 1;
		if (F054()) return F03t(LOC_hram_level_nemozem_zmenit);
		var _out = '';
		_out += '<div id="choselevel_exists" style="position:relative; height:' + (PocetPrejdeni(herne_levelyA[7][0]) + PocetPrejdeni(herne_levelyA[8][0]) == 0 ? 170 :
			440) + 'px;">';
		var totalLevelPresiel = 0;
		var mojaKapitola = hrac[11];
		if (!_strana) {
			_strana = mojaKapitola * 1;
			if (saveKapitolaStrana > 0) _strana = saveKapitolaStrana;
			if (_strana >= 2)
				if (bestPresielLevel >= (mojaKapitola + 1) * 7 - 1)
					if (bestPresielLevel <= (_strana + 1) * 7)
						if (_strana <= mojaKapitola) _strana = _strana * 1 + 1;
		}
		var odkial = (_strana - 2) * 7;
		if (odkial < 0) odkial = 0;
		var pokial = odkial + 21;
		_koloRiadok = 0;
		for (var i in herne_levely)
			if (herne_levely[i] != '')
				if (i <= ($maxKapitol + 1) * 7)
					if (i > odkial && i <= pokial) {
						level_jeden = herne_levelyA[i];
						var presielTento = PocetPrejdeni(level_jeden[0]);
						if (i == 7 && PocetPrejdeni(herne_levelyA[6][0]) == 0) break;
						if (i == 8 && PocetPrejdeni(herne_levelyA[7][0]) == 0 && bestPresielLevel < 8) break;
						var disabledlvl = (PocetPrejdeni(Math.max(level_jeden[0] - 1, 1)) >= level_jeden[12] || (level_jeden[0] > 7 && level_jeden[0] % 7 == 1 && PocetPrejdeni(
							level_jeden[0] - 2) >= level_jeden[12]) ? 0 : 1);
						if (level_jeden[9] == 1) disabledlvl = 1;
						if (i % 7 == 1) _koloRiadok++;
						if (i % 7 == 0) {
							_out += '<div class="kapitola_label" id="mapRiadok' + _koloRiadok + '" style="top:' + ((_koloRiadok - 1) * 155 - 15) + 'px">' + LOC_Chapter + ' ' + F09f(
								i / 7) + ':' + (jeSvetJS == 1 && somvofcbJS ? '' : LOC_KAPITOL[F09f(i / 7) - 1]) + '</div>';
						}
						if (i % 7 == 1 && i > 1)
							if (mojaKapitola < F09i(i / 7)) {
								if (PocetPrejdeni(i - 1) > 0) {
									_out += '';
									_out += '<div style="position:absolute; left:130px;top:300px;" id="kapitolaUnlockDiv">' + (!somvofcbJS || jeSvetJS != 1 ? '<div ' + F03a(i
											, 'background-color:#383;') + ' onclick="F0y(); " class="hernylevel' + (level_jeden[3] > 0 ? ' bonusLVL' : '') + ' unlockchappic"></div>' : '') +
										'<div style="display:inline-block;">' +
										(JeFuelVisible() ? '<div id="chap_emr">' + LOC_REWARD2 + '<br>' + F09k('big1', '<b>+' + $fuelZaChapter + '</b>') + IconPic('icons2/icon_fuel', -10) +
											'</div>' : '') +
										LOC_DALSI_RIADOK_LABLE + ':' + F09k('nextChapter', LOC_KAPITOL[mojaKapitola + 1]) + '<br>' + FSize(10, LOC_LEVEL_DALSI_RIADOK) + '<br>' + FSize(26
											, PCisloJS2(kapitolCeny[mojaKapitola])) +
										(mojaKapitola < 77 ? IconValuta2(0, 1) : IconValuta2(5, 1)) + '<br>' +
										F09d(LOC_ODOMKNI, 'F0y();', LOC_ZAPLAT + ' ' + F06j(kapitolCeny[mojaKapitola]) + (mojaKapitola < 77 ? IconValuta2(0) : IconValuta2(5)) + ' ' +
											LOC_ZAPLAT_aby_si_ODOMKOL + '<br>' + LOC_KAPITOL[mojaKapitola + 1]) + '</div></div>';
								} else if (PocetPrejdeni(i - 2) > 0) {
									_out += '';
									_out += '<div style="position:absolute; left:130px;top:320px;height:60px;" id="kapitolaUnlockDiv"><br>' + LOC_KILLBOSSTOUNLOCK + '</div>';
								}
								break;
							}
						totalLevelPresiel += PocetPrejdeni(i);
						var _goldzamisiu = GoldForMissionJS(level_jeden[5], bestPresielLevel, level_jeden[7]);
						var _robCisla = false;
						var _hint = LOC_KOLO + ' #' + i + SPC + (bestPresielLevel > 6 && level_jeden[4] > 0 ? '<span class="bonusSpan' + level_jeden[4] + '">' + LOC_KOLO_POPIS[
								level_jeden[4]] + '</span><br>' + (F0q(i) > 0 ? F09a('mini3', LOC_ZRUS_GEM_CENA_A + F00(i) + LOC_ZRUS_GEM_CENA_B + '<br><br>') : '') : '') +
							'<center><table class="misiontable"><tr><td>' + (PredchadzajuciLevel > 10 ? (level_jeden[13] > 0 ? F09a('mmap1', LOC_UI_enemyArmor) + PCisloJS2(F09f(
								level_jeden[13] / 10)) + '<br>' : '') + F09a('mmap1', LOC_UI_enemylife + ': ') + PCisloJS2(EnemyMaxLifeJS(i)) : '') +
							(bestPresielLevel > 7 && (EnemyMinDmgJS(i) > 0 || EnemyMaxDmgJS(i) > 0) ? '<br>' + (F09a('mmap1', LOC_UI_DAMAGE_enemy + ': ') + F06j(EnemyMinDmgJS(i), 4) +
								'&nbsp;-&nbsp;' + (level_jeden[4] == 8 ? '??? ' + LOC_raising_damage : (level_jeden[4] == 9 ? '??? ' + LOC_lowering_damage : F06j(EnemyMaxDmgJS(i), 4)))
							) : '') +
							(level_jeden[8] > 0 ? '<br>' + (F09a('mmap1', LOC_UI_liecenie_e) + F06j(herne_levelyA[i][8], 4)) + (PocetPrejdeni(i) > 0 && (itemBonusOverview[132] > 0) ?
								' (' + PCisloJS2(EnemyHealingBase(level_jeden)) + ')' : '') : '') +
							'<br>' +
							(itemBonusOverview[132] > 0 ? '<br>' + F09a('mmap2', LOC_heal_reducedmg) + PCisloJS2(EnemyDamageReduction(PocetPrejdeni(i))) : '') +
							(itemBonusOverview[132] > 0 ? '<br>' + F09a('mmap2', LOC_UI_liecenie2) + PCisloJS2(HealingReducedJS()) : '') +
							(bestPresielLevel > 13 ? '</td><td style="padding-left:40px;">' + (jeLoged ? LOC_ITEM_cena + (F0q(i) > 0 ? '</td><td>' : '') + (JeFuelVisible() ? F09a((
								herne_levelyA[i][7] > 1 ? 'herror' : ''), herne_levelyA[i][7]) + 'x ' + IconValuta2(2, -2) : '') + (pomocBonusyEffects[212] > 0 ? '(+' +
								pomocBonusyEffects[212] + ')' : '') : '') : '') +
							(F0q(i) > 0 ? '<br>' + F06j(F0q(i)) + 'x' + IconValuta2(1, 0) : '') +
							'</td></tr></table></center><hr>' + (_goldzamisiu > 0 ? '+' + F06j(_goldzamisiu, 'velkec0') + IconGold(-9) : '') +
							(level_jeden[14] > 0 || itemBonusOverview[166] > 0 ? SPC + '+' + F06j(PlatinaForMissionJS(level_jeden[14], level_jeden[7]), 'big1') + IconPic(
								'icons2/icon_platina', -9) : '') +
							(bestPresielLevel > 1 ? SPC + '+' + F06j(level_jeden[6] * level_jeden[7], 'xpc') + F088() : '') +
							'<br>' + (bestPresielLevel > 10 && presielTento > 0 ? F08s(LOC_PRESIEL_LEVEL_pocet + ' ' + presielTento + '') : '');
						if (disabledlvl) _hint = LOC_najprv_prejdi_mensi_level;
						if (herne_levelyA[i][9] == 1) _hint = LOC_TEASER + '<br><br>';
						var fuelCostySTR = '';
						if (!disabledlvl)
							if (JeFuelVisible())
								for (var ff = 0; ff < herne_levelyA[i][7]; ff++) fuelCostySTR += '<img ' + F02o(LOC_fuelcost, 150) + ' style="position:absolute;left:100px;top:' + (80 -
									ff * 16) + 'px;" src="' + PicPrefix() + 'shop/valuta2.png?v=' + picversion + '">';
						_out += '<div class="missionBlok' + (disabledlvl ? 'Dis' : (i % 7 == 0 ? 'Bonus' : '') + (jeSvetJS == 1 && somvofcbJS ? '2' : '')) + '" style="left:' + (
								45 + (((i - 1) % 7) * 120)) + 'px;top:' + (5 + 155 * (_koloRiadok - 1)) + 'px;">' +
							(jeSvetJS == 1 && somvofcbJS ? '<div class="missionBlokCensor">' + i + '</div>' : '') +
							(i % 7 == 0 && !disabledlvl ? '<img class="bossindic" src="' + PicPrefix() + 'ui2/boss.png?v=' + picversion + '">' : '') +
							'<div ' + F03a(i) + ' ' + (!disabledlvl ? F02o(_hint, (bestPresielLevel > 13 ? 580 : 350)) : F02o(_hint)) + ' class="hernylevel' + (hralsomlevel == i &&
								PredchadzajuciLevel > 10 ? '_last' : (disabledlvl ? '_dis' : '')) + (level_jeden[3] > 0 ? ' bonusLVL' : '') + (PocetPrejdeni(i) == 0 && !disabledlvl ?
								' hrajdalsi' : '') + '" ' +
							(disabledlvl ? 'onclick="FFTPM(' + level_jeden[12] + ');"' : 'onclick="F02q(' + (F0q(i) > 0 ? 1 : 0) + ',\'' + LOC_SURE_TO_START_GEMLVL +
								'!\',\'StartMisiuMenu(' + i + ');\',event);"') + '>' +
							KoloCislovaniePic(i) +
							(missions_lock_pic && (disabledlvl || presielTento == 0) ? PicAt('mlock' + i, 'ui2/mission_' + (disabledlvl ? '' : 'un') + 'locked.png?v=' + picversion
								, 0, 0, 2, '', 80, 80) : '') +
							(_robCisla ? F08q('cislomap' + i, -15, 1, 50000, i, '', 100, 100, '', '', '', '', 'font-size:64px; text-align:center;') : '') +
							(!disabledlvl && presielTento == 0 && herne_levelyA[i][9] != 1 ? '<img alt="new" class="mis_new" src="' + PicPrefix() + 'ui2/mission_new.png">' : '') +
							((presielTento > 0 && PocetPrejdeni(6)) || presielTento > 1 ? '<div class="itempocetMap">' + PCisloJS2(presielTento, 't3') + 'x</div>' : '') +
							'</div>' +
							(!somvofcbJS && $showOko && bestPresielLevel > 8 && presielTento > 0 ? F08q('oko_' + i, 100, 100, 1, '', LOC_OKO, 14, 13, 'ShowPicture(' + i + ',-1);'
								, 'okoclass') : '') +
							fuelCostySTR + '</div>';
						if (i % 7 == 0) {
							if (bestPresielLevel >= 6) {
								_chapter = F09f(i / 7) - 1;
								var _hviezdyTreba = kapitolyHviezdyA[_chapter];
								var _hviezdyMam = new Array();
								var _hviezdickyTXT = '';
								var _totalPrejdeniVChapter = 0;
								var _mamVsetkyXYkrat = true;
								var _mamJedenXYkrat = false;
								for (var _hi = i - 6; _hi <= i; _hi++) {
									if (PocetPrejdeni(_hi) >= _hviezdyTreba[0]) _mamJedenXYkrat = true;
									if (PocetPrejdeni(_hi) < _hviezdyTreba[1] && _hi != i) _mamVsetkyXYkrat = false;
									_totalPrejdeniVChapter += PocetPrejdeni(_hi);
								}
								var _hx = 8;
								var _h_hint = '<br><br>' + '<div class="itempopiska">' + F081(LOC_HVIEZDA_BONUS) + '<br><img alt="bonus" src="' + PicPrefix() + 'veci/vec' +
									_hviezdyTreba[3] + '.png?v=' + (picversion + picversionVeci) + '" width="60"><br>' + VypisBonusNEW(itemyVShopeA[_hviezdyTreba[3]], 3, itemyVShopeA[
										_hviezdyTreba[3]][1][3]) + F09a('mini7', LOC_HVIEZDA_TOTAL) + '</div>';
								var _trebafuelna3 = Math.max(5, _hviezdyTreba[2] - itemBonusOverview[107]);
								var _fullhviezda = (_mamJedenXYkrat && _mamVsetkyXYkrat && _totalPrejdeniVChapter >= _trebafuelna3 ? 1 : 0);
								if (_fullhviezda && F05p(_hviezdyTreba[3]) > 0) _h_hint = '<br><br><img alt="bonus" src="' + PicPrefix() + 'veci/vec' + _hviezdyTreba[3] + '.png?v=' +
									(picversion + picversionVeci) + '" width="80"><br>' + LOC_CIELE_TEXT_4;
								if (JeFuelVisible()) {
									_hviezdickyTXT += PicAt('hviezda' + _chapter + '_1', 'icons2/star' + (_mamJedenXYkrat ? 1 : 0) + '.png', _hx, 5, 1, F09a('nazov', LOC_hviezdicka1) +
										'<br>' + LOC_HVIEZDA_1b.split('XXX')
										.join(PCisloJS2(_hviezdyTreba[0], 'big3') + '' + IconPicWH('icons2/icon_fuel', -5, 25, 25)) + '<br>' + _h_hint, 41, 39, 'KlikHviezda(' +
										_fullhviezda + ',' + _hviezdyTreba[3] + ');', 'hviezdicka', '', 320);
									_hviezdickyTXT += PicAt('hviezda' + _chapter + '_2', 'icons2/star' + (_mamVsetkyXYkrat ? 1 : 0) + '.png', _hx, 40, 2, F09a('nazov', LOC_hviezdicka2) +
										'<br>' + LOC_HVIEZDA_2b.split('XXX')
										.join(PCisloJS2(_hviezdyTreba[1], 'big3') + '' + IconPicWH('icons2/icon_fuel', -5, 25, 25)) + _h_hint, 41, 39, 'KlikHviezda(' + _fullhviezda + ',' +
										_hviezdyTreba[3] + ');', 'hviezdicka', '', 320);
									_hviezdickyTXT += PicAt('hviezda' + _chapter + '_3', 'icons2/star' + (_totalPrejdeniVChapter >= _trebafuelna3 ? 1 : 0) + '.png', _hx, 75, 3, F09a(
											'nazov', LOC_hviezdicka3) + '<br>' + LOC_HVIEZDA_3b.split('XXX')
										.join(PCisloJS2(_trebafuelna3, 'big3') + '' + IconPicWH('icons2/icon_fuel', -5, 25, 25)) + F06j(_totalPrejdeniVChapter) + ' / ' + F06j(_trebafuelna3) +
										_h_hint, 41, 39, 'KlikHviezda(' + _fullhviezda + ',' + _hviezdyTreba[3] + ');', 'hviezdicka', '', 320);
								} else {
									_hviezdickyTXT += PicAt('hviezda' + _chapter + '_1', 'icons2/star' + (_mamJedenXYkrat ? 1 : 0) + '.png', _hx, 5, 1, F09a('nazov', LOC_hviezdicka1) +
										'<br>' + PCisloJS2(_hviezdyTreba[0], 'big3') + LOC_HVIEZDA_1 + '<br>' + _h_hint, 41, 39, 'KlikHviezda(' + _fullhviezda + ',' + _hviezdyTreba[3] +
										');', 'hviezdicka', '', 320);
									_hviezdickyTXT += PicAt('hviezda' + _chapter + '_2', 'icons2/star' + (_mamVsetkyXYkrat ? 1 : 0) + '.png', _hx, 40, 2, F09a('nazov', LOC_hviezdicka2) +
										'<br>' + PCisloJS2(_hviezdyTreba[1], 'big3') + LOC_HVIEZDA_2 + _h_hint, 41, 39, 'KlikHviezda(' + _fullhviezda + ',' + _hviezdyTreba[3] + ');'
										, 'hviezdicka', '', 320);
									_hviezdickyTXT += PicAt('hviezda' + _chapter + '_3', 'icons2/star' + (_totalPrejdeniVChapter >= _trebafuelna3 ? 1 : 0) + '.png', _hx, 75, 3, F09a(
											'nazov', LOC_hviezdicka3) + '<br>' + LOC_HVIEZDA_3 + F06j(_totalPrejdeniVChapter) + ' / ' + F06j(_trebafuelna3) + _h_hint, 41, 39, 'KlikHviezda(' +
										_fullhviezda + ',' + _hviezdyTreba[3] + ');', 'hviezdicka', '', 320);
								}
								if (_fullhviezda && F05p(_hviezdyTreba[3]) <= 0) {
									_hviezdickyTXT += PicAt('chapteritem' + _chapter, 'veci/vec' + _hviezdyTreba[3] + '.png?v=' + (picversion + picversionVeci) + '', -5, 27, 4
										, LOC_HVIEZDA_GRAB, 65, 65, 'GrabChapterItem(' + _chapter + ',' + _hviezdyTreba[3] + ');');
								}
								_out += '<div class="missionBlokKoniec" style="left:880px;top:' + (5 + 155 * (_koloRiadok - 1)) + 'px;"><div class="inMBK">' + _hviezdickyTXT +
									'</div></div>';
							}
						}
						if (_strana == $maxKapitol + 1 && i == ($maxKapitol + 1) * 7 && PocetPrejdeni(i - 1) > 0) _out += F08q('comingsoonDiv', 220, 350, 10, LOC_COMING_SOON, ''
							, 500, 50, '', 'bonusSpan6');
					}
		if (_strana > 2) {
			_out += '<div class="shop_sipka up_arrow" id="map_up_left" style="left:5px;top:20px;" ' + F02o(LOC_SHOP_up_line, 170) + ' onmousedown="F05m(1,' + (_strana -
				1) + '); return false;"></div>';
			_out += '<div class="shop_sipka up_arrow" id="map_up_right" style="right:5px;top:20px;" ' + F02o(LOC_SHOP_up_page, 170) + ' onmousedown="F05m(1,' + (_strana -
				1) + '); return false;"></div>';
		}
		if (_strana < mojaKapitola || (_strana <= mojaKapitola && bestPresielLevel >= ((mojaKapitola + 1) * 7) - 1)) {
			_out += '<div class="shop_sipka down_arrow" id="map_down_left" style="left:5px;top:350px;" ' + F02o(LOC_SHOP_down_line, 170) + ' onmousedown="F05m(1,' + (
				_strana + 1) + '); return false;"></div>';
			_out += '<div class="shop_sipka down_arrow" id="map_down_right" style="right:5px;top:350px;" ' + F02o(LOC_SHOP_down_page, 170) + ' onmousedown="F05m(1,' + (
				_strana + 1) + '); return false;"></div>';
		}
		_out += '</div>';
		if (PredchadzajuciLevel >= 15) {
			var _pomocka = LOC_CHOOSE_LEVEL3;
			_pomocka = _pomocka.split('XXX');
			_pomocka = _pomocka.join(SekundNaDoubleRew());
			_out += F09k('mini1', _pomocka);
		}
		F07e(_out, LOC_CHOOSE_LEVEL, 'koloPopup', 980, _rychlo, '', '', '', '', 20);
		F03e();
		saveKapitolaStrana = _strana;
	} catch (e) {
		alert(e);
	}
	for (var _fil = 0; _fil <= 17; _fil++) HideShopSipka(_fil + 30);
}

function KlikHviezda(_jefull, _chi) {
	if (_jefull) {
		ajKupene = 1;
		OpenShop1(1000000 + _chi, 0, 1);
		ajKupene = 0;
	}
}

function MiniMisRewSTR(_level_jeden) {
	if (GoldForMissionJS(_level_jeden[5], bestPresielLevel, _level_jeden[7]) <= 0) return '';
	if (PocetPrejdeni(13) <= 0) return '+' + PCisloJS2(GoldForMissionJS(_level_jeden[5], bestPresielLevel, _level_jeden[7])) + IconValuta2(0, -6);
	if (_level_jeden[0] <= 105 && itemBonusOverview[166] <= 0) return '+' + PCisloJS2(GoldForMissionJS(_level_jeden[5], bestPresielLevel, _level_jeden[7]));
	else
		return PCisloJS2(F09i(GoldForMissionJS(_level_jeden[5], bestPresielLevel, _level_jeden[7]) * 0.000001)) + 'M' + (_level_jeden[14] > 0 || itemBonusOverview[
			166] > 0 ? ' + <b>' + PlatinaForMissionJS(_level_jeden[14], _level_jeden[7]) + '</b>' : '');
}
var requiredLVLforMT = new Array(0, 0, 100, 130);

function StartMisiuMenu(_misia_i) {
	F03x(_misia_i);
}

function GrabChapterItem(_ch, _chi) {
	if (F05p(_chi) <= 0) {
		F07g('koloPopup');
		F07g('chapteritem' + _ch);
		hracVeciA[_chi] = 1;
		hrac[H_VECI] = hracVeciA.join(';');
		PridajJednorazBonusZveci(itemyVShopeA[_chi][4]);
		F02t(46, _ch);
		F046();
		OpenShop1(1000000 + _chi, 0, 1);
	}
}

function FFTPM(_kolko) {
	F03t(LOC_najprv_prejdi_mensi_level + '!', '...');
}

function ShowPicture(_i, _skoc) {
	if (!$showOko) return false;
	if (_i > bestPresielLevel) {
		if (_i < 10000 || PocetPrejdeni(_i) <= 0) return false;
	}
	var _chapter = F09i((_i - 1) / 7);
	var _hviezdyTreba = kapitolyHviezdyA[_chapter];
	if (PocetPrejdeni(_i) < 1) {
		if (_i <= 1) return false;
		ShowPicture(_i + _skoc, _skoc);
		return false;
	}
	if (_i <= 0) return false;
	F03e();
	var _out = '<div id="album_div" style="height:' + _show_oko_h + 'px; width:' + _show_oko_w + 'px; background-image:url(\'' + PicPrefix() +
		'ui2/mission_bg.png?v=' + picversion + '\');"><img alt="level" class="wb" style="height:' + _show_oko_h + 'px; width:' + _show_oko_w + 'px;" src="' +
		PicPrefix() + 'zeny/' + F07n(_i) + PIC_KONC + '?v2=' + picversion + '"></div><br>' + F09d('&lt;&lt;&lt;', 'ShowPicture(' + (_i - 1) + ',-1);') + F09d(
			LOC_CLOSE, 'F061(\'infoPopup\');') + F09d('&gt;&gt;&gt;', 'ShowPicture(' + (_i + 1) + ',1);');
	F07e(_out, '', 'infoPopup', 530, 1, '', '', '', '', -100);
}
var odomkniLenRaz = 0;

function F0y() {
	var _cenaK = kapitolCeny[hrac[11]];
	var _AKAMENA = H_ZLATO;
	if (hrac[11] >= 77) _AKAMENA = 89;
	if (hrac[_AKAMENA] >= _cenaK) {
		F03z($fuelZaChapter, 1);
		if (odomkniLenRaz == 1 && !disabledTestSave) {
			odomkniLenRaz += 1;
			hrac[_AKAMENA] -= _cenaK;
			VypisZlato();
			VypisPlatinu();
			F02t(100, hrac[11]);
			F07g('koloPopup');
			F06o(1, 1);
		}
		if (odomkniLenRaz == 0 || disabledTestSave) {
			odomkniLenRaz += 1;
			hrac[_AKAMENA] -= _cenaK;
			F02t(101, hrac[11]);
			hrac[11]++;
			saveKapitolaStrana += 2;
			F039();
			F05m();
			shopSort = 1;
			SortItems();
			shopSort = 0;
			SortItems();
		}
	} else
		return F03t((hrac[11] >= 77 ? 'Not enough Platinum: ' : LOC_NEMASGOLD) + F06j(_cenaK));
}

function ProblematicSave() {
	F06o(1, 0, 1);
	ErrorPop('GAME SAVE error 2 - connection lost[2] - please send a ticket to support with recapitulation of actions you have done. Thank You<br>' + F09d(
		'refresh', 'F06l(THIS_PAGE)'));
}

function F00(_i) {
	return Math.min(10, F09i(_i / 7) * 5 - 5);
}

function F06q(_i) {
	return '<div class="missionLabel">' + _i + '</div>';
}
klikovZaKolo = sekundZaKolo = sekundZaKoloSAVE = 9999;
sekundZaKoloAttack = 0;
var lastPrejdenaMisia = 0;
var jeAutoPilot = 0;
var breakAutoPilot = 0;

function IsAutoPilotAvailable() {
	if (PredchadzajuciLevel < 150 || jeSvetJS == 2) {
		jeAutoPilot = 0;
		F067('jeautopil', jeAutoPilot, DEFCAS);
		return false;
	}
	return true;
}

function AutopilotStart() {
	if (!IsAutoPilotAvailable()) return false;
	jeAutoPilot = 1;
	F067('jeautopil', jeAutoPilot, DEFCAS);
	NastavAPBut();
	if (hrac[65] > 10) ToggleAutoClicker(1);
}

function AutopilotEnd() {
	if (!IsAutoPilotAvailable()) return false;
	terazLenLiecimAP = 0;
	terazLenAmmoAP = 0;
	jeAutoPilot = 0;
	F067('jeautopil', jeAutoPilot, DEFCAS);
	NastavAPBut();
	ZobrazActioniButs();
}

function ZobrazActioniButs2() {
	if (queueUtok <= 0) F08c('klikBut_fake_n0');
	if (queueGold <= 0) F08c('klikBut_fake_n1');
	if (queueHeal <= 0) F08c('klikBut_fake_n2');
	if (queueAmmo <= 0) F08c('klikBut_fake_n3');
}

function ZobrazActioniButs() {
	for (var _i = 0; _i < 4; _i++) F08c('klikBut_fake_n' + _i);
}

function StartLevelAutoPilot(_pokus) {
	if (AP_fuelPauzaBude) return false;
	if (breakAutoPilot) {
		breakAutoPilot = 0;
		return false;
	}
	if (!_pokus) _pokus = 0;
	var uspesneRestartol = false;
	if (hrac[18] > 0 && jeAutoPilot && !F098('choselevel_exists') && !F098('ArenaEnemiesDiv') && !F098('jeShopOpen') && !F098('autoclickerdiv2') && !F098(
			'chesttable') && !F098('upgradeHelperDivPic'))
		if (lastPrejdenaMisia > 0)
			if (APset[4] * 1 == 1)
				if (hrac[18] >= herne_levelyA[lastPrejdenaMisia][7])
					if (!F055()) {
						uspesneRestartol = F03x(lastPrejdenaMisia, 1);
					}
	if (!uspesneRestartol) {
		if (_pokus == 0)
			if (anyActivity) {
				saveGameAvaiIn = 2;
			}
		setTimeout('if(!focused) StartLevelAutoPilot(' + (_pokus + 1) + ');', 2000);
	}
}
var sel0100v = new Array(0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 105);
var sel0100 = [];
var sel050s = [];
var APset = new Array(5, 2, 21, 1, 1, 9, 1, 0, 1, 0, 0, 0, 0);
var APsetMax = APset.length;
var terazLenLiecimAP = 0;
var terazLenAmmoAP = 0;
for (var kukii = 0; kukii < APsetMax; kukii++) APset[kukii] = 1 * F079('kukap' + kukii, APset[kukii]);
povolenyOdFocus = APset[6];
var APBombsAfterFirstSecond = APset[12];

function Select0100(_id, _selected, arraymnoz) {
	return F05d(arraymnoz, _id, arraymnoz[_selected], sel0100v);
}
var APfuelSpent = F079('APfuelSpent', 0);
var AP_fuelPauzaBude = false;

function AutoPilotSettings() {
	var sel0100 = ['0 %', '10 %', '20 %', '30 %', '40 %', '50 %', '60 %', '70 %', '80 %', '90 %', '100 %', LOC_NIKDY];
	var sel050s = [];
	for (var _si_ = 1; _si_ <= 100; _si_++) sel050s[_si_] = (_si_ * 3) + ' ' + LOC_seconds;
	sel050s[0] = LOC_NIKDY;
	sel050s[101] = LOC_NIKDY;
	try {
		F02i(1);
		var _out = '<div id="autoclickerdiv2">';
		_out += '' + LOC_AUTOP[0] + Select0100('APs_0', APset[0], sel0100) + SPC + LOC_AUTOP[5] + Select0100('APs_5', APset[5], sel0100);
		_out += '<br><br>' + LOC_AUTOP[1] + Select0100('APs_1', APset[1], sel0100);
		_out += '' + LOC_AUTOPammo;
		var _autoclickergoldtext = LOC_AUTOP[2];
		_autoclickergoldtext = _autoclickergoldtext.split('XXX')
			.join(Select0100('APs_2', APset[2], sel050s));
		_out += '<br><br>' + _autoclickergoldtext;
		_out += '<input type="hidden" ' + (APset[3] == 1 ? 'checked="checked"' : '') + ' name="APs_3" id="APs_3" value="1">';
		_out += '<br>' + '<input class="bigchb" type="checkbox" ' + (APset[4] == 1 ? 'checked="checked"' : '') + ' name="APs_4" id="APs_4" value="1">' + LOC_AUTOP[4];
		if (PredchadzajuciLevel >= 356 && JePlatina()) _out += '<br>' + '<input class="bigchb" type="checkbox" ' + (APset[7] == 1 ? 'checked="checked"' : '') +
			' name="APs_7" id="APs_7" value="1">' + LOC_AUTOP[7];
		_out += '<br>' + '<input class="bigchb" type="checkbox" ' + (APset[8] == 1 ? 'checked="checked"' : '') + ' name="APs_8" id="APs_8" value="1">' + LOC_AUTOP[8];
		_out += '<br>' + '<input class="bigchb" type="checkbox" ' + (APset[9] == 1 ? 'checked="checked"' : '') + ' name="APs_9" id="APs_9" value="1">' + LOC_AUTOP[9];
		_out += '<br>' + '<input class="bigchb" type="checkbox" ' + (APset[6] == 1 ? 'checked="checked"' : '') + ' name="APs_6" id="APs_6" value="1">' + LOC_AUTOP[6];
		AP_fuelPauzaBude = false;
		if (APfuelSpent < 0) APfuelSpent = 0;
		_out += '<br><br>' + LOC_AUTOP[10] + '<input type="text" name="APs_10" id="APs_10" value="' + APfuelSpent + '" size="4" maxlength="5">';
		if (PredchadzajuciLevel >= 750) _out += '<br>' + '<input class="bigchb" type="checkbox" ' + (APset[11] == 1 ? 'checked="checked"' : '') +
			' name="APs_11" id="APs_11" value="1">' + LOC_AUTOP[11];
		if (APBombsAfterFirstSecond < 0) APBombsAfterFirstSecond = 0;
		if (MaConsum()) _out += '<br><br>' + LOC_AUTOP[12] + '<input type="text" name="APs_12" id="APs_12" value="' + APBombsAfterFirstSecond +
			'" size="4" maxlength="5">';
		_out += '</div>';
		_out += F09d(LOC_AUTOP_save, 'SaveAutoP();');
		_out += '<div id="AutoPilotDiv1"></div>';
		_out += '<br><br><br>' + F09k('mini5', LOC_AUTOP_P);
		DoPopup2(_out, LOC_AUTOP_set, 'infoPopup', 700, 1);
		NastavAPBut();
	} catch (e) {
		alert(e);
	}
}

function NastavAPBut() {
	if (jeAutoPilot) var _out = ButC(LOC_AUTOP_1, 'AutopilotEnd();', LOC_AUTO_HINT + '<br><br>' + F081(LOC_AUTO_work), 'button2');
	else var _out = ButC(LOC_AUTOP_0, 'AutopilotStart();', LOC_AUTO_HINT, 'button2');
	F068('AutoPilotDiv1', _out);
	if (jeAutoPilot) _out = '<img src="' + PicPrefix() + 'ui2/lever2_1.png?v=' + picversion + '" alt="1" onmousedown="AutopilotEnd(); return false;">';
	else _out = '<img src="' + PicPrefix() + 'ui2/lever2_0.png?v=' + picversion + '" alt="0" onmousedown="AutopilotStart(); return false;">';
	F068('autopilotpacka', _out);
}

function SaveAutoP() {
	for (var kukii = 0; kukii < APsetMax; kukii++)
		if (kukii == 3 || kukii == 4 || kukii == 6 || kukii == 7 || kukii == 8 || kukii == 9 || kukii == 11)
			APset[kukii] = F09h('APs_' + kukii);
		else
			APset[kukii] = F09j('APs_' + kukii);
	for (var kukii = 0; kukii < APsetMax; kukii++) F067('kukap' + kukii, APset[kukii], 86400 * 31);
	APfuelSpent = F09m('APs_' + 10);
	APBombsAfterFirstSecond = F09m('APs_' + 12);
	AP_fuelPauzaBude = false;
	F061('infoPopup');
	povolenyOdFocus = APset[6];
}
prvyBoj = true;
ideVidejko = false;
maxMisiaCas = 300;

function F03x(_levelIndex, _autopilotovo) {
	klikNaRandomBonus = [];
	var mozemHratMaxMisiu = hrac[11] * 7 + 7 + 1;
	if (_levelIndex >= mozemHratMaxMisiu && _levelIndex < 10000) {
		F05m();
		return false;
	}
	if (_levelIndex > 10000 && _levelIndex < 20000 && !IsEvent()) {
		return false;
	}
	if (_levelIndex > 10000 + 1 * event_ktore[event_ktore.length - 1] && _levelIndex < 20000) {
		_levelIndex = 10000 + 1 * event_ktore[event_ktore.length - 1];
	}
	skrinaKoef = 0;
	useConsumQueue = [];
	try {
		if (bestPresielLevel > 0 && bestPresielLevel < 2 && ClickAttackValue(1) <= 10) {
			F068('tutfirstupgdmg', LOC_TUT_shopdmg);
			F08c('tutfirstupgdmg');
			return false;
		}
		if (bestPresielLevel == 2 && PredchadzajuciLevel > 1 && (F0w(1) <= 0 && hrac[6] > 700)) {
			F068('tutfirstupgdmg', LOC_TUT_shopdmg2);
			F08c('tutfirstupgdmg');
			return false;
		}
		if (waitingForArena) return F03t(LOC_ARENA_WAIT);
		F061('bublinahore');
		manualKlik = 0;
		zobrazilLastXSec = false;
		queueUtok = 0;
		queueHeal = 0;
		queueGold = 0;
		queueAmmo = 0;
		usePUQueue = new Array();
		kupVecQueue = new Array();
		randomBonusKlikQueue = new Array();
	} catch (e) {
		alert('starting mission error1: ' + e);
	}
	try {
		MenuSound();
		presielTutorial = true;
		if (!zobrazujError) return false;
		if (F054()) {
			PlaySoundLoad('error');
			return F03t(LOC_hram_level_nemozem_zmenit);
		}
		if (rewardPoradie3 < rewardPoradie2) {
			F07g('koloPopup');
			PlaySoundLoad('error');
			if (focused) {
				TakeNewF08b();
				return F03t(LOC_TAKE_REWARD_FIRST, ' ');
			} else
				return false;
		}
	} catch (e) {
		alert('starting mission error2: ' + e);
	}
	try {
		if (!jeLoged && _levelIndex > 5) {
			F07g('koloPopup');
			F07p(3, _levelIndex);
			return false;
		}
		avrgdmg_s = avrgdmg_d = 0;
		hramMisiuPG = true;
		zarobeneZaMisXP = zarobeneZaMisG = zarobeneZaMisP = 0;
		FunkcieHnedNaStarte();
	} catch (e) {
		alert('starting mission error3: ' + e);
	}
	try {
		var _level_jeden = herne_levelyA[_levelIndex];
		if (_level_jeden[9] == 1)
			return F03t(LOC_TEASER, ' ');
		var nutnyFuel = _level_jeden[7];
		if (hrac[18] < nutnyFuel) {
			PlaySoundLoad('error');
			return F03t(LOC_NEDOSTATOK_FUEL + '<br>' + LOC_FUEL_NA_LEVEL + '<br>' + F09d(LOC_KUP_FUEL, 'F01y();'));
		}
		var odobratyAutoc = pomocBonusyEffects[223] * 1000;
		if (odobratyAutoc > 0) {
			if (hrac[65] < odobratyAutoc) {
				var _reqfuel = LOC_MODULE_AUTO.split('XXX')
					.join(odobratyAutoc);
				if (jeAutoPilot && _autopilotovo) return false;
				return F03t(_reqfuel + '<br><br>' + F09d(LOC_MODULE_FUEL_BUT, 'F061(\'warPopup\'); UpgradePomPop(0);'));
			}
		}
		var odobratyFuel = nutnyFuel + pomocBonusyEffects[212];
		if (pomocBonusyEffects[212] > 0) {
			if (hrac[18] < odobratyFuel) {
				var _reqfuel = LOC_MODULE_FUEL.split('XXX')
					.join(pomocBonusyEffects[212])
					.split('YYY')
					.join(nutnyFuel + pomocBonusyEffects[212]);
				if (jeAutoPilot && _autopilotovo) return false;
				return F03t(_reqfuel + '<br><br>' + F09d(LOC_MODULE_FUEL_BUT, 'F061(\'warPopup\'); UpgradePomPop(0);'));
			}
			F03z(-pomocBonusyEffects[212]);
			if (pomocBonusyEffects[221]) hrac[70] += 1 * pomocBonusyEffects[212];
		}
		if (odobratyAutoc) hrac[65] -= odobratyAutoc;
		F08c('armorDiv');
		var diaCena = F0q(_level_jeden[0]);
		if (diaCena > 0 && hrac[9] < diaCena) {
			return F03t(LOC_NEMASDIA + ' ' + PCisloJS2(diaCena) + IconValuta2(1) + '<br><br>------------------<br><br>' + LOC_ZRUS_GEM_CENA_A + F00(_levelIndex) +
				LOC_ZRUS_GEM_CENA_B);
		}
		if (jeLoged)
			if (secOdLastSave > 45) hraSaUspesneSejvla2--;
	} catch (e) {
		alert('starting mission error4: ' + e);
	}
	try {
		if (hraSaUspesneSejvla2 < 0 && jeLoged && !disabledTestSave) {
			ProblematicSave();
			return false;
		}
		F07g('miniSaleDiv');
		sekundZaKolo = 0;
		if (diaCena > 0 && hrac[9] >= diaCena) {
			hrac[9] -= diaCena;
			F06a('i_diamant', hrac[9]);
		}
		PHPtimeSAVE = buffHodiny;
	} catch (e) {
		alert('starting mission error5: ' + e);
	}
	try {
		F06d(herne_levely[_levelIndex], EnemyMaxLifeJS(_levelIndex), herne_levelyA[_levelIndex][13]);
	} catch (e) {
		alert('starting mission error5-B: ' + e);
	}
	try {
		buffs = new Array();
		buffsBonuses = new Array();
		hrac[80] = 0;
		hrac[81] = 0;
		DoQuestJS(30, 0);
		terazLenLiecimAP = 0;
		terazLenAmmoAP = 0;
		hrac[63] = 1;
		hrac[84] = 0;
		zabilManual = false;
		zivotMaxMinus = 0;
		hrac[17] = StartingLife(0);
		F03c(itemBonusOverview[178], 1);
		F07g('koloPopupIN');
		F02k('koloPopup');
		F046();
		prehralSom = false;
		hrac[44] = klikovZaKolo = sekundZaKolo = sekundZaKoloSAVE = sekundZaKoloAttack = 0;
		F03b();
		F03e();
	} catch (e) {
		alert('starting mission error6: ' + e);
	}
	try {
		F02t(20, _levelIndex);
		if (pomocBonusyEffects[226]) DoQuestJS(1, 1, 0, 1);
		F03z(-_level_jeden[7]);
		F038(pomocBonusyEffects[207]);
		if (pomocBonusyEffects[208] > 0) PridajPlatinu(pomocBonusyEffects[208]);
		if (SuRubiny()) {
			var _kolko = odobratyFuel * RubinyMultiplikator();
			PridajRubiny(_kolko);
		}
		F02t(30, hrac[H_ZLATO]);
		F02t(32, F012());
		F01x(itemBonusOverview[98]);
		if (_levelIndex >= 10000 && _levelIndex < 20000)
			if (itemBonusOverview[183] > 0) {
				PridajEventMenu(itemBonusOverview[183]);
				VypisMaterialHeader();
				F068('eventMena', PCisloJS2(hrac[98]));
			}
		F06n(itemBonusOverview[99] * nutnyFuel);
		if (itemBonusOverview[191] > 0 && pomocBonusyEffects[212] > 0) F06n(itemBonusOverview[191] * pomocBonusyEffects[212]);
		F06n(odobratyFuel * pomocBonusyEffects[225]);
		F02t(36, hrac[15]);
		aktivnychPU = 0;
		pauzePocetKey = 0;
		offlineTimer = 0;
		var kolkoBonusov = F07z(1, 2);
		if (_levelIndex % 7 == 0) kolkoBonusov = 3;
		if (!jeLoged) kolkoBonusov = 2;
		if (itemBonusOverview[91] > 0) kolkoBonusov += itemBonusOverview[91];
		if (bestPresielLevel > 2)
			RandomBonusCreate(kolkoBonusov);
		F07g('autoRegDiv');
		F07g('bonusOfferDiv');
	} catch (e) {
		alert('starting mission error7: ' + e);
	}
	try {
		for (var i in castice) F07g('castica' + i);
		PU_ammo_visual_check();
		VypisGameTime();
		F01g();
		FunkciePoStarte();
		F08c('enemy_stats');
		F08c('enemy_div');
	} catch (e) {
		alert('starting mission error8: ' + e);
	}
	try {
		if (bestPresielLevel < 3)
			if (_levelIndex == 3) ObrazkovyTutorialStart(13);
		SaveNonLoged();
		if (!jeLoged) Vypis_kontainer_klikanie();
		enemyZije2 = true;
		var _backstab = 0;
		if (itemBonusOverview[37] > 0 || pomocBonusyEffects[215] > 0) {
			F0h(KratPercentoJS(itemBonusOverview[37], itemBonusOverview[152]) + pomocBonusyEffects[215], 0, 0, LOC_BACKSTAB);
		}
		if (itemBonusOverview[121] > 0)
			if (!(robimQuest[0] == 21 && robimQuest[1] > 0) && !(robimQuest[0] == 23 && robimQuest[1] > 0))
				F06e();
	} catch (e) {
		alert('starting mission error9: ' + e);
	}
	try {
		for (var pui in PUprog) {
			usePUQueue.push(PUprog[pui]);
		}
		F061('infoPopup');
		F07g('clearPUp');
		pocetEachSec = 0;
		anyActivity = 1;
		if (bestPresielLevel == 1 && tut_krok == 7) {
			ObrazkovyTutorialStart(8);
			return false;
		}
		VypisMissionLabel();
		FocusRefresh();
		F07g('zlatoMimoMisiuNote');
		breakAutoPilot = 0;
		if (JeFuelVisible()) ZrobFtext(995, 32, '-' + odobratyFuel + ' ' + LOC_FUEL, 10, 0, '#ffcc00', '', 100, 0);
		if (jeAutoPilot && APfuelSpent > 0) {
			APfuelSpent -= odobratyFuel;
			if (APfuelSpent <= 0) {
				AP_fuelPauzaBude = true;
				APfuelSpent = 0;
			}
		}
		BombsAfterFirstSecond = APBombsAfterFirstSecond;
	} catch (e) {
		alert('starting mission error10: ' + e);
	}
	return true;
}
var BombsAfterFirstSecond = 0;
var NIsipkyX = new Array(1000, 688, 122, 688, 122, 688, 122, 688, 122, 0, 0, 505, 999, 914, 999, 999, 0, 990);
var NIsipkyY = new Array(228, 114, 68, 258, 217, 405, 367, 551, 514, 0, 0, 5, 118, 42, 261, 196, 0, 463);
var maxFiltrov = 56;
var filtre = new Array();
for (var ifif = 0; ifif < maxFiltrov; ifif++) filtre[ifif] = new Array();
filtre[0] = new Array(0, 0);
filtre[1] = new Array(30, 31, 32, 34, 75, 79, 102, 80, 57, 35, 36, 37, 133, 128, 139, 126, 89, 152, 101, 153, 181, 210);
filtre[2] = new Array(50, 51, 55, 65, 67, 72, 76, 82, 84, 85, 109, 87, 93, 115, 116, 117, 95, 21, 104, 41, 113, 47, 48, 49, 129, 122, 97, 134, 124, 140, 148
	, 151, 159, 182, 183, 207, 208, 186, 187, 207, 189);
filtre[3] = new Array(60, 61, 56, 74, 68, 73, 74, 82, 83, 78, 105, 131, 135, 123, 137, 178, 184, 209, 192);
filtre[4] = new Array(98, 52, 53, 54, 76, 136);
filtre[5] = new Array(179, 40, 42, 43, 21, 44, 41, 156, 157, 39, 45, 181, 188, 149);
filtre[6] = new Array(179, 99, 71, 64, 66, 69, 77, 86, 92, 94, 98, 70, 78, 80, 88, 90, 91, 93, 115, 116, 117, 95, 96, 100, 101, 106, 107, 108, 111, 113, 59
	, 132, 121, 97, 140, 62, 126, 138, 141, 144, 145, 150, 151, 181, 190, 191, 149);
filtre[7] = new Array(2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 22, 23, 24, 25, 26, 27, 62, 28, 29, 118, 119, 120, 117, 6, 138, 180);
filtre[8] = new Array(0, 0);
filtre[9] = new Array(167, 169, 170, 171, 172, 174, 175, 176, 201, 202, 203, 204, 224, 205);
filtre[10] = new Array();
filtre[11] = new Array(112, 130);
filtre[30] = new Array(68, 78, 131, 123, 137, 178, 184, 209, 192);
filtre[31] = new Array(31, 32, 64, 65, 67, 71, 73, 74, 79, 90, 66, 35, 128, 101, 133, 153, 210);
filtre[32] = new Array(30, 34, 102, 80, 41, 36, 121, 37, 89, 139, 146, 152, 169, 176, 174, 175);
filtre[33] = new Array(50, 75, 82, 83, 90, 66, 48, 129, 122, 134, 124);
filtre[34] = new Array(51, 55, 104, 49, 146, 159, 87, 74, 170, 174, 175, 186, 187, 207);
filtre[35] = new Array(60, 74, 84, 85, 86, 135, 145);
filtre[36] = new Array(61, 56, 105, 146, 171, 174, 175);
filtre[37] = new Array(52, 90, 136, 145);
filtre[38] = new Array(53, 53, 146, 172, 174, 175);
filtre[39] = new Array(40, 70, 88, 188);
filtre[40] = new Array(42, 42);
filtre[41] = new Array(44, 100, 101, 106, 111, 59, 121);
filtre[42] = new Array(99, 71, 64, 66, 69, 77, 86, 92, 94, 90, 91, 96, 106, 97, 140, 150, 22, 190, 191);
filtre[43] = new Array(72, 109, 87, 95, 91, 93, 115, 116, 117, 21, 41, 113, 47, 129, 97, 140, 148, 150, 151, 159, 182, 207, 187, 189);
filtre[44] = new Array(54, 98, 63);
filtre[45] = new Array(94, 95, 116, 57);
filtre[46] = new Array(111, 70, 144, 165, 173, 189);
filtre[47] = new Array(2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 22, 23, 24, 25, 26, 27, 62, 28, 29, 118, 119, 120, 117, 6, 138, 180, 211);
filtre[48] = new Array(126, 127, 143, 147, 161, 162, 163, 164);
filtre[49] = new Array(45, 155, 177, 180, 182, 208, 166, 186);
filtre[50] = new Array(167, 169, 170, 171, 172, 174, 175, 176, 201, 202, 203, 204, 224);
filtre[51] = new Array(156, 173, 154, 190, 110);
filtre[52] = new Array(59, 141, 177, 146);
filtre[53] = new Array(87, 187, 99, 140, 186, 69, 109, 113, 166, 206);
filtre[54] = new Array(197, 197);
var DAILY_ITEMS_LEVEL = 575;
var filre_lvls = new Array(0, 2, 2, 5, 11, 10, 9, 30, 2, 0, 150, DAILY_ITEMS_LEVEL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0);

function ExplodeToItems() {
	try {
		for (var ihl in itemyVShope) {
			itemyVShopeA[ihl] = F01z(itemyVShope[ihl], ',');
			if (itemyVShopeA[ihl] != '') {
				totalVeciVshope += itemyVShopeA[ihl][2];
				itemyVShopeA[ihl][1] = F01z(itemyVShopeA[ihl][1], ';');
				itemyVShopeA[ihl][4] = F01z(itemyVShopeA[ihl][4], ';');
				for (var jhl in itemyVShopeA[ihl][4]) {
					itemyVShopeA[ihl][4][jhl] = F01z(itemyVShopeA[ihl][4][jhl], 'x');
				}
			}
		}
		for (var ifil in filtre)
			if (filtre[ifil].length > 0) {
				var uzPridane = new Array();
				for (var ifil2 in filtre[ifil])
					for (var ihl in itemyVShopeA)
						if (!uzPridane[ihl])
							if (F015(ihl, filtre[ifil][ifil2]) > 0) {
								if (ifil == 32 || ifil == 34 || ifil == 36 || ifil == 38)
									if (itemyVShopeA[ihl][4][1] && itemyVShopeA[ihl][4][1][1] == 205)
										if ((ifil == 32 && itemyVShopeA[ihl][4][0][1] != 201) || (ifil == 34 && itemyVShopeA[ihl][4][0][1] != 202) || (ifil == 36 && itemyVShopeA[ihl][4][0][
												1] != 203) || (ifil == 38 && itemyVShopeA[ihl][4][0][1] != 204)) continue;
								uzPridane[ihl] = 1;
								shopItemyFiltered[ifil].push(itemyVShopeA[ihl]);
							}
			}
		for (var ihl in itemyVShopeA)
			if (ihl > 0) shopItemyFiltered[0].push(itemyVShopeA[ihl]);
	} catch (e) {
		alert(e);
	}
}

function VytvorFilterNewItems() {
	shopItemyFiltered[8] = new Array();
	for (var ihl in itemyVShopeA) {
		var itemLVLreq = F02h(ihl);
		if (ihl > 0)
			if ((ihl > $lastPatch || itemLVLreq >= PredchadzajuciLevel - 2) && itemLVLreq <= PredchadzajuciLevel) {
				shopItemyFiltered[8].push(itemyVShopeA[ihl]);
			}
	}
	shopItemyFiltered[8].sort(function(a, b) {
		return b[1][6] - a[1][6]
	});
}

function VytvorFilterEventItems() {
	shopItemyFiltered[10] = new Array();
	for (var ihl in itemyVShopeA)
		if (ihl > 0)
			if (itemyVShopeA[ihl][1][9] == 6) {
				shopItemyFiltered[10].push(itemyVShopeA[ihl]);
			}
	shopItemyFiltered[10].sort(function(a, b) {
		return b[1][6] - a[1][6]
	});
}
var shopItemyFiltered = new Array();
for (var sif = 0; sif < maxFiltrov; sif++) shopItemyFiltered[sif] = new Array();
var activeShopFilter = 0;
var ajKupene = 0;
var shop_riadok = 0;
var shop_riadkov_total = 0;
var shop_riadkov_nastranu = 0;
var shop_stlpcov_nastranu = 5;
var shop_pocet_nastranu = 0;
var sirkaShopScreenu2 = 1000;
var poslednyFilter = -1;
costfilter = 0;
bigitems = false;

function SediCostFilter(_item) {
	if (costfilter <= 0 || costfilter > 8) return 1;
	if (costfilter == 1 && (_item[1][1] == 1 || _item[1][12] > 0))
		return 1;
	if (costfilter == 2 && (_item[1][9] != 1 && _item[1][1] != 1))
		return 1;
	if (costfilter == 3 && _item[1][1] == 2)
		return 1;
	if (costfilter == 4 && _item[1][1] == 0)
		return 1;
	if (costfilter == 5 && _item[1][1] == 5)
		return 1;
	if (costfilter == 6 && _item[1][1] == 3)
		return 1;
	if (costfilter == 7 && _item[1][1] == 7)
		return 1;
	if (costfilter == 8 && _item[1][1] == 8)
		return 1;
	return 0;
}

function OpenShop1(_filter, _riadok, _zrusfiltre) {
	skrinaKoef = 0;
	if (_zrusfiltre) costfilter = 0;
	OpenShop(_filter, _riadok);
}

function HideShopSipka(_fil) {
	return false;
}
var itemyVyssie = '';
var itemyVyssiePocet = 0;

function OpenShop(_filter, _riadok) {
	F061('quickshoppopup');
	itemyVyssie = '';
	itemyVyssiePocet = 0;
	FocusTeraz();
	HideShopSipka(_filter);
	F061('iteminfos');
	HideTutorial();
	offlineTimer = 0;
	if (_filter == 3 && PredchadzajuciLevel < 2) {
		ZrobFtext2(708, 255, LOC_POTREBUJES_LEVEL + '2', '#DE582B');
		return false;
	}
	if (!boloPrveNacitanie) return false;
	if (F055())
		F02i(1);
	sirkaShopScreenu2 = window.innerWidth;
	vyskaScreenu2 = window.innerHeight;
	if (PredchadzajuciLevel < 5) {
		sirkaShopScreenu2 = 1000;
		vyskaScreenu2 = Math.min(vyskaScreenu2, 600);
	}
	for (var i in ftexts) SchovajFtext(i);
	var vyskaShopBloku = vyskaScreenu2 - 15 - 115;
	shop_riadkov_nastranu = F09i(vyskaShopBloku / 200);
	if (somvofcbJS) shop_riadkov_nastranu = 2;
	if (shop_riadkov_nastranu < 2) shop_riadkov_nastranu = 2;
	shop_stlpcov_nastranu = F09i((sirkaShopScreenu2 - 20) / 310);
	shop_pocet_nastranu_max = shop_riadkov_nastranu * shop_stlpcov_nastranu;
	if (_riadok == -1)
		if (poslednyFilter == _filter) _riadok = shop_riadok;
		else _riadok = 0;
	if (_riadok < 0) _riadok = 0;
	if (_riadok == -1) _riadok = 0;
	if (!_filter) _filter = 0;
	poslednyFilter = _filter;
	activeShopFilter = _filter;
	shop_riadok = _riadok;
	if (ajKupene > 1) ajKupene = 0;
	var _out = (jeExtraShopInfo ? '<br>' : '') +
		'<div id="shop_hornyGradient"></div><div id="jeShopOpen"></div><div id="shopfilterCap"></div><div id="shop_hornyContainer">' + (1 ?
			'<img id="shop_hl_left" alt="logo" src="' + PicPrefix() + 'shop/hlavicka_nadpis' + Fake_Armypic('_fake.jpg', '.png') + '?v=' + picversion + '">' : '') + (!
			IsSimpleTutorialLog() && jeSvetJS != 1 && jeSvetJS != 5 && PredchadzajuciLevel >= 3 ? '<img id="shop_hl_right" alt="logo" src="' + PicPrefix() +
			'shop/hlavicka_shop.png?v=' + picversion + '">' : '') + '<div id="new_shop_div"></div><div id="shop_label">' + LOC_SHOP_LABEL2 + '</div>';
	if (!IsSimpleTutorialLog()) {
		_out += '<div id="filter_selected_text">' + (jeLoged ? LOC_FILTER_SELECTED + ':' : '') + '</div><div id="shopFiltreAll">';
		if (PredchadzajuciLevel >= 3)
			for (var i in filtre)
				if (i < 30)
					if (PredchadzajuciLevel >= filre_lvls[i])
						if (filtre[i].length > 0) _out += '<div class="shop_filter" style="left:' + (i * 46) + 'px;" ' + F02o(LOC_FILTRE[i], 200, 'shop_filter_' + i
								, 'FilterOut(' + i + ');') + ' onmouseover="FilterIn(' + i + ');" onmousedown="OpenShop(' + i + ',-1); return false;"><img id="sf_' + i +
							'_a" class="shop_fil_img_a" alt="f' + i + '" src="' + PicPrefix() + 'shop/filter' + i + 'a.png?v=' + picversion + '"><img id="sf_' + i +
							'_s" class="shop_fil_img" alt="f' + i + '" src="' + PicPrefix() + 'shop/filter' + i + '.png?v=' + picversion + '"><img id="sf_' + i +
							'_h" class="shop_fil_img_h" alt="f' + i + 'h" src="' + PicPrefix() + 'shop/filter' + i + 'h.png?v=' + picversion + '"></div>';
		if (PredchadzajuciLevel >= 40)
			_out += F08q('infoinshopbut', 468, 12, 1, '?', LOC_PLAYER_DETAILS, 29, 26, 'CloseShop();PlayerDetails();');
		_out += '</div>';
	}
	for (var i = 0; i < 17; i++) _out += ShopInfo(i);
	if (PredchadzajuciLevel > 10) _out += '<div ' + F02o(LOC_SHOP_AJKUPENE, 200, 'ajPlneKupeneBut' + ajKupene) +
		' onclick="posledne_kupeneVeci=new Array(); ajKupene++;OpenShop(' + activeShopFilter + ',-1);"></div>';
	_out += '</div>';
	if (_filter >= 1000000) {
		var _cofilt = Math.abs(_filter % 1000000);
		var _subshop = new Array();
		_subshop.push(itemyVShopeA[_cofilt]);
	} else if (_filter < 0) {
		var _cofilt = Math.abs(_filter);
		var _subshop = new Array();
		var uzPridane = new Array();
		var _filter1 = Math.abs(_filter % 1000);
		var _filter2 = Math.floor(Math.abs(_filter) / 1000);
		for (var ihl in itemyVShopeA)
			if (F015(ihl, _filter1) > 0 || (_filter2 > 0 && F015(ihl, _filter2) > 0))
				if (!uzPridane[ihl]) {
					uzPridane[ihl] = 1;
					_subshop.push(itemyVShopeA[ihl]);
				}
		_subshop.sort(function(a, b) {
			return a[1][6] - b[1][6]
		});
	} else
		var _subshop = shopItemyFiltered[_filter];
	if (_filter == 0 && PredchadzajuciLevel <= 2) _subshop = [itemyVShopeA[1], itemyVShopeA[2], itemyVShopeA[3]];
	var _out2 = '';
	var pocet_na_stranu = 0;
	var _budeSipkaDole = false;
	var shop_item_vsetky_pocet = 0;
	for (var i in _subshop)
		if (pocet_na_stranu < shop_pocet_nastranu_max + 1)
			if (SediCostFilter(_subshop[i]))
				if (_subshop[i][0] > 0) {
					_out3 = ShopItemBlok(_subshop[i]);
					if (_out3 != '') {
						if (pocet_na_stranu >= shop_pocet_nastranu_max) {
							_budeSipkaDole = true;
							break;
						} else {
							if (shop_item_vsetky_pocet >= shop_riadok * shop_stlpcov_nastranu) {
								_out2 += _out3;
								pocet_na_stranu++;
								if (pocet_na_stranu % shop_stlpcov_nastranu == 0) _out2 += '<div class="linedivider"></div>';
							}
							shop_item_vsetky_pocet++;
						}
					}
				}
	if (_out2 == '') {
		if (shop_riadok > 0) {
			OpenShop(activeShopFilter, shop_riadok - 1);
			return false;
		}
		_out2 += '<table class="prazdnyshopTable"><tr>' + ThumbsUpGirl('<td><br>', '</td>') + '<td width="500">' + F09k('imper', LOC_SHOP_PRAZDNE) +
			'</td></tr></table>';
	}
	if (shop_riadok > 0) {
		_out += '<div class="shop_sipka" id="up_page" ' + F02o(LOC_SHOP_up_page, 170) + ' onmousedown="OpenShop(' + activeShopFilter + ',' + Math.max(0, shop_riadok -
			shop_riadkov_nastranu) + '); return false;"></div>';
		_out += '<div class="shop_sipka" id="up_page2" ' + F02o(LOC_SHOP_up_page, 170) + ' onmousedown="OpenShop(' + activeShopFilter + ',' + Math.max(0, shop_riadok -
			shop_riadkov_nastranu) + '); return false;"></div>';
	}
	if (shop_riadok > 0) {
		_out += '<div class="shop_sipka" id="up_line" ' + F02o(LOC_SHOP_up_line, 170) + ' onmousedown="OpenShop(' + activeShopFilter + ',' + (shop_riadok - 1) +
			'); return false;"></div>';
		_out += '<div class="shop_sipka" id="up_line2" ' + F02o(LOC_SHOP_up_line, 170) + ' onmousedown="OpenShop(' + activeShopFilter + ',' + (shop_riadok - 1) +
			'); return false;"></div>';
	}
	if (_budeSipkaDole && pocet_na_stranu >= shop_pocet_nastranu_max) {
		var _sipkaposun = -15;
		_out += '<div class="shop_sipka" id="down_line" style="top:' + (198 * shop_riadkov_nastranu + _sipkaposun) + 'px;" ' + F02o(LOC_SHOP_down_line, 170) +
			' onmousedown="OpenShop(' + activeShopFilter + ',' + (shop_riadok + 1) + '); return false;"></div>';
		_out += '<div class="shop_sipka" id="down_page" style="top:' + (198 * shop_riadkov_nastranu + _sipkaposun + 70) + 'px;" ' + F02o(LOC_SHOP_down_page, 170) +
			' onmousedown="OpenShop(' + activeShopFilter + ',' + (shop_riadok + shop_riadkov_nastranu) + '); return false;"></div>';
		_out += '<div class="shop_sipka" id="down_line2" style="top:' + (198 * shop_riadkov_nastranu + _sipkaposun) + 'px;" ' + F02o(LOC_SHOP_down_line, 170) +
			' onmousedown="OpenShop(' + activeShopFilter + ',' + (shop_riadok + 1) + '); return false;"></div>';
		_out += '<div class="shop_sipka" id="down_page2" style="top:' + (198 * shop_riadkov_nastranu + _sipkaposun + 70) + 'px;" ' + F02o(LOC_SHOP_down_page, 170) +
			' onmousedown="OpenShop(' + activeShopFilter + ',' + (shop_riadok + shop_riadkov_nastranu) + '); return false;"></div>';
	}
	_out += _out2;
	_out += '<div></div>';
	if (PredchadzajuciLevel > 30 && PredchadzajuciLevel < 75 && itemyVyssiePocet > 0) _out +=
		'<div id="higherlevelitems"><span style="position:relative;top:-20px;">' + LOC_higherLVLitems + '</span>' + itemyVyssie + '</div>';
	if (PredchadzajuciLevel > 4) _out += F09d(LOC_CLOSE, 'CloseShop();', '', '', 'shopclosebut');
	if (PredchadzajuciLevel >= 75 && itemyVyssiePocet > 0) _out += '<div id="higherlevelitems"><span style="position:relative;top:-20px;">' + LOC_higherLVLitems +
		'</span>' + itemyVyssie + '</div>';
	if (PredchadzajuciLevel >= 20)
		_out += SPC + F09k('mini2', LOC_SHOP_HOTKEYS1);
	if (somvofcbJS || PredchadzajuciLevel < 5) {
		F07e(_out, '', 'shopPopupFCB', sirkaShopScreenu2 - 60, 1, '', '', '', '', 50, '', 'CloseShop();', '', 0);
		F098('shopPopupFCBIN')
			.style.height = (shop_riadkov_nastranu * 200 + 180) + 'px';
	} else {
		F07e(_out, '', 'shopPopup', sirkaShopScreenu2 - 40, 1, '', '', '', 10, saved_shop_y, '', 'CloseShop();', '', -30);
		if (F098('shopPopupIN')) F098('shopPopupIN')
			.style.height = (shop_riadkov_nastranu * 200 + 180 + 70) + 'px';
	}
	F07g('vyber_levelDiv');
	F07g('powerup_container');
	F07g('div_top_xp');
	F07g('div_top_zlato');
	F061('infoPopupD');
	F061('infoPopup2');
	F061('infoPopupD2');
	F061('infoPopupDes');
	F098('ftexts')
		.style.zIndex = 11002;
	F08c('sf_' + activeShopFilter + '_a');
	F07g('sf_' + activeShopFilter + '_s');
	F07g('sf_' + activeShopFilter + '_h');
	F03e();
	F07g('tutfirstupgdmg');
	if (tut_krok == 3) ObrazkovyTutorialStart(4);
	if ((tut_krok == 9 || tut_krok == 10) && _filter == 32) ObrazkovyTutorialStart(11);
	NastavShopFilterCap();
	saved_shop_y = F08e('shopPopupIN') + 30;
	DeselectAll();
}
saved_shop_y = 0;

function NastavShopFilterCap() {
	F068('shopfilterCap', LOC_ShopCostFilter[costfilter]);
	if (costfilter == 0) F07g('shopfilterCap');
	else F08c('shopfilterCap');
}

function CloseShop() {
	kupVecQueue = [];
	saved_shop_y = 0;
	if (!F055()) {
		F08c('vyber_levelDiv');
		F07g('enemy_stats');
		F07g('enemy_div');
	} else if (!jeLoged) {
		F011();
	}
	F08c('powerup_container');
	F08c('div_top_xp');
	F08c('div_top_zlato');
	F098('castice')
		.style.zIndex = 1000;
	F098('ftexts')
		.style.zIndex = 1000;
	F046();
	F061('shopPopup');
	F061('shopPopupFCB');
	posledne_kupeneVeci = new Array();
	if (tut_krok <= TUT_zacnimisiu3 && tut_krok >= TUT_zacnimisiu3 - 3) {
		if ((hrac[6] < 700 || F0w(1) > 0)) ObrazkovyTutorialStart(TUT_zacnimisiu3);
		else
			ObrazkovyTutorialStart(10);
	}
	if (tut_krok == 4 || tut_krok == 5) {
		return ObrazkovyTutorialStart(3);
		return ObrazkovyTutorialStart(3);
	}
	if (tut_krok == 7) return ObrazkovyTutorialStart(7);
	if (tut_krok == 6) {
		ObrazkovyTutorialStart(7);
		return false;
	}
	if (otvoreneModuly) {
		UpgradePomPop(0);
		otvoreneModuly = false;
	}
	if (manualPauzaBola == 0) setTimeout('F011();', 350);
}
var shopinfoLefts = new Array(380, 525, 704, 840);

function SetShopInfoValue(_ki) {
	var __prefix = '';
	if (_ki == 8 || _ki == 9 || _ki == 10 || _ki == 11) {
		if (PredchadzajuciLevel < 30) __prefix = LOC_pers;
		else
			__prefix = '/s ';
	}
	if (_ki == 12 || _ki == 13 || _ki == 14 || _ki == 15) {
		if (PredchadzajuciLevel < 30) __prefix = LOC_perc;
		else
			__prefix = '/c ';
	}
	if (_ki == 0) __prefix = LOC_LEVEL + ': ';
	F068('shop_info_span_' + _ki, __prefix + PCisloJS2(GetShopInfoValue(_ki), ''));
}

function GetShopInfoIcon(_ki) {
	var _lnk = '';
	if (_ki == 0) _lnk = 'xp';
	if (_ki == 1) _lnk = 'valuta0';
	if (_ki == 2) _lnk = 'valuta1';
	if (_ki == 3) _lnk = 'valuta5';
	if (_ki >= 4 && _ki < 12) _lnk = 'shop_i' + _ki;
	if (_ki == 7) _lnk = 'autoclickershop';
	if (_ki >= 12) _lnk = 'shop_i' + (_ki - 4);
	if (_ki == 16) _lnk = 'valuta' + (100 + event_picK);
	return PicPrefix() + 'shop/' + _lnk + '.png';
}

function GetShopInfoValue(_ki) {
	var cislo = 0;
	if (_ki == 0) cislo = PredchadzajuciLevel;
	if (_ki == 1) cislo = hrac[H_ZLATO];
	if (_ki == 2) cislo = hrac[9];
	if (_ki == 3) cislo = hrac[89];
	if (_ki == 4) cislo = hrac[18];
	if (_ki == 5) cislo = F05u();
	if (_ki == 6) cislo = hrac[26];
	if (_ki == 7) cislo = hrac[65];
	if (PredchadzajuciLevel < 4) return cislo;
	if (_ki == 8) cislo = F0w();
	if (_ki == 9) cislo = F012();
	if (_ki == 10) cislo = F01o();
	if (_ki == 11) cislo = F0v();
	if (_ki == 12) cislo = ClickAttackValue();
	if (_ki == 13) cislo = ClickGoldValue();
	if (_ki == 14) cislo = ClickHealValue();
	if (_ki == 15) cislo = ClickAmmoValue();
	if (_ki == 16 && IsEvent()) cislo = hrac[98];
	return cislo;
}

function ShopInfo(_ki) {
	if (jeExtraShopInfo == 0) return '';
	if (_ki == 4 && !JeFuelVisible()) return '';
	if ((_ki == 2 || _ki == 4 || _ki == 5 || _ki == 6) && !jeLoged) return '';
	var __prefix = '';
	if (_ki == 3 && !JePlatina()) return '';
	if (_ki == 7 && PredchadzajuciLevel < autoclickerlevel) return '';
	if (_ki == 8 || _ki == 9 || _ki == 10 || _ki == 11) __prefix = (PredchadzajuciLevel < 30 ? LOC_pers : '/s ');
	if (_ki == 12 || _ki == 13 || _ki == 14 || _ki == 15) __prefix = (PredchadzajuciLevel < 30 ? LOC_perc : '/c ');
	if (_ki == 0) __prefix = LOC_LEVEL + ': ';
	var cislo = GetShopInfoValue(_ki);
	if (_ki == 16) {
		var leftX = 685;
		var topY = 110;
	} else if (_ki < 8) {
		var leftX = shopinfoLefts[F09i((_ki + 8) / 4)] - 6;
		var topY = (_ki % 4) * 25 + 12;
	} else {
		var leftX = shopinfoLefts[F09i((_ki - 8) / 4)];
		var topY = (_ki % 4) * 19 + 12;
	}
	if (cislo <= 10 && _ki == 14) return '';
	if (cislo <= 20 && _ki == 15) return '';
	if (_ki == 6 && !IsPuVisible()) return '';
	if (cislo == 0 && _ki >= 8) return '';
	var _fontSize = '';
	if (_ki == 1 && cislo < 9999999999) _fontSize = 'font-size:13px;font-weight:bold';
	if (_ki == 1 && cislo > 999999999999) _fontSize = 'font-size:10px;';
	if ((_ki == 5 || _ki == 6) && cislo > 99999999) _fontSize = 'font-size:10px;';
	return '<div class="shop_info_div' + (_ki < 8 || _ki == 16 ? '2' : '') + '" id="shop_info_div_' + _ki + '" style="left:' + (leftX - 12) + 'px;top:' + topY +
		'px; ' + _fontSize + '"><img alt="." class="shop_info_img' + (_ki < 8 || _ki == 16 ? '2' : '') + '" ' + (_ki == 16 ? 'width="16"' : '') + ' src="' +
		GetShopInfoIcon(_ki) + '"><span class="shop_info_span' + (_ki < 8 ? '' : '2') + '" id="shop_info_span_' + _ki + '">' + __prefix + PCisloJS2(cislo, '') +
		'</span>' + (_ki == 2 ? '<img alt="." class="shop_gem_plus" src="' + PicPrefix() + 'shop/plusko.png" onclick="CloseShop();F0d(16);">' : '') + (_ki == 3 ?
			'<img alt="." class="shop_gem_plus" src="' + PicPrefix() + 'shop/plusko.png" onclick="CloseShop();OpenShop(49,-1);">' : '') + '</div>';
}

function FilterIn(_ktory) {
	if (activeShopFilter == _ktory) return false;
	F08c('sf_' + _ktory + '_h');
	F07g('sf_' + _ktory + '_s');
}

function FilterOut(_ktory) {
	if (activeShopFilter == _ktory) return false;
	F08c('sf_' + _ktory + '_s');
	F07g('sf_' + _ktory + '_h');
}

function Buyhintshift(_stacks) {
	if (PredchadzajuciLevel < 10 || _stacks < 10) return '';
	return '<br><br><img alt="info" style="float:left;" src="' + PicPrefix() + 'ui2/info.png?v=' + picversion + '">' + F09a('mini6', LOC_SHIFT10x);
}

function ExtraStack(_index) {
	if (!extraStacksA[_index]) return 0;
	return extraStacksA[_index];
}

function ShopItemBlok(_vec1, _len_vnutro, _robSoldout, _lenCiSaDa) {
	var _vec_cena = _vec1[1];
	var _cena = F06b(_vec1);
	var _xpZaCenu = F03h(_cena, _vec_cena[1], _vec_cena[6], _vec_cena[4]);
	var _vecID = _vec1[0];
	var _lvlrequired = 1 * F02h(_vecID);
	var maxVec1 = F05j(_vec1);
	var _jeVypredane = false;
	if (!_robSoldout) _robSoldout = 0;
	if (_vec_cena[5] > hrac[11]) return '';
	var _dosiaholMax = (F05p(_vecID) >= maxVec1 ? 1 : 0);
	if (maxVec1)
		if (!ajKupene && !IsInArray(_vecID, posledne_kupeneVeci))
			if (_dosiaholMax) {
				_jeVypredane = true;
				if (!_robSoldout) return '';
			}
	var jeEventItem = (_vec_cena[9] == 6 || _vec_cena[1] == 6 ? 1 : 0);
	if (_vec_cena[1] == 8 && !SuRubiny())
		return '';
	if ((_vec_cena[9] == 8) && F05p(_vecID) == 0)
		return '';
	if ((_vec_cena[7] == 7 || _vec1[3] == 'et') && F05p(_vecID) == 0)
		return '';
	if (jeEventItem && !IsEvent(86400 * 4) && F05p(_vecID) == 0)
		return '';
	if (jeEventItem && !IsEvent(86400 * 4) && !ajKupene)
		return '';
	else if (jeEventItem && (!IsEvent(604800) && (F05p(_vecID) <= 0 || !ajKupene)))
		return '';
	if (jeEventItem && (activeShopFilter != 11 && activeShopFilter != 10 && activeShopFilter != 0)) return '';
	if ((_vec_cena[9] == 2 || _vec_cena[9] == 3 || _vec_cena[9] == 4) && F05p(_vecID) == 0)
		return '';
	if (_vec_cena[9] == 5 && hrac[64] <= 0)
		return '';
	if (_lvlrequired * 1 > PredchadzajuciLevel * 1 && _lvlrequired * 1 <= PredchadzajuciLevel * 1 + 30 && _vecID != 3 && itemyVyssiePocet < 13) {
		itemyVyssie += ' ' + '<img class="previewitem" src="' + PicPrefix() + 'veci/vec' + _vecID + '.png?v=' + (picversion + picversionVeci) + '">' + ' ';
		itemyVyssiePocet++;
	}
	if (_lvlrequired > PredchadzajuciLevel * 1 && F05p(_vecID) == 0 && _vecID != 3) return '';
	if (!MaArenu() && _vec1[3] == 'a') return '';
	if (hrac[18] >= $maxFuelCap2 && PredchadzajuciLevel < 500)
		for (var vb in _vec1[4])
			if (_vec1[4][vb][1] == 40) return '';
	if (_lenCiSaDa) {
		if (_dosiaholMax) return '';
		if (PredchadzajuciLevel < _lvlrequired) return '';
		return 1;
	}
	if (PredchadzajuciLevel >= _lvlrequired) var buyClickStr = 'onclick="F02q(' + ((_vec_cena[1] == 1 || _vec_cena[1] == 2) && uzKupilVec[_vecID] == 0 && !
			somTESTER && !JE_TESTER && _vec_cena[12] <= 0 ? 1 : 0) + ',\'' + (_vec_cena[1] == 1 ? LOC_SI_SI_ISTY_UPOU_ITEMU : LOC_SI_SI_ISTY_UPOU_ITEMU_f) +
		'\',\'F08a(event,' + _vecID + ',' + (_vec_cena[12] > 0 ? 3 : 0) + ');\',event);"';
	else var buyClickStr = 'onclick="F08a(event,' + _vecID + ',0);" ';
	var _item1 = '';
	if (jeEventItem && jeSvetJS != 5) _item1 += '<img class="shopitembg" src="' + PicPrefix() + 'shop/eventbg' + (event_picK) + (_vecID % 2 == 0 ? 'a' : 'b') +
		'.png?v2=' + picversion + '_3" alt="1">';
	_item1 += '<img class="shop_pic' + (jeLietajuceIkony ? 'pulz' : '') + '" ' + (PredchadzajuciLevel < 8 ? F02o(LOC_SHOP_BUYBUT, 100) : '') + ' ' + buyClickStr +
		' src="' + PicPrefix() + 'veci/vec' + _vecID + '.png?v2=' + (picversion + picversionVeci) + '" ' + (jeEventItem ? 'style="top:40px;"' : '') + ' alt="1">';
	if (!_jeVypredane || !_robSoldout) {
		if (F05p(_vecID) >= maxVec1 && maxVec1 > 0) _item1 += '<div class="shop_item_xp">' + LOC_SOLD_OUT + '</div>';
		else {
			if (_vec_cena[12] > 0) {
				var _cena2 = _vec_cena[12];
				var _xpZaCenu2 = F03h(_cena2, 1, _vec_cena[6], _vec_cena[4]);
				if (PredchadzajuciLevel >= _lvlrequired) var buyClickStr1 = 'onclick="F02q(' + ((_vec_cena[1] == 1 || _vec_cena[1] == 2) && uzKupilVec[_vecID] == 0 && !
						somTESTER && !JE_TESTER ? 1 : 0) + ',\'' + (_vec_cena[1] == 1 ? LOC_SI_SI_ISTY_UPOU_ITEMU : LOC_SI_SI_ISTY_UPOU_ITEMU_f) + '\',\'F08a(event,' + _vecID +
					',' + (1) + ');\',event);"';
				else var buyClickStr1 = 'onclick="F08a(event,' + _vecID + ',0);" ';
				if (PredchadzajuciLevel >= _lvlrequired) var buyClickStr2 = 'onclick="F02q(' + (uzKupilVec[_vecID] == 0 ? 1 : 0) + ',\'' + LOC_SI_SI_ISTY_UPOU_ITEMU +
					'\',\'F08a(event,' + _vecID + ',2);\',event);"';
				else var buyClickStr2 = buyClickStr;
				_item1 += '<div class="shop_item_cena1" ' + (_cena > hrac[CostTypeReal(_vec_cena[1])] ? '' : buyClickStr1) + ' ' + F02o('+' + PCisloJS2(_xpZaCenu) + ' XP'
						, 150, 'shop_vec_' + _vecID + '_cena') + ' ' + (_cena > hrac[CostType(_vec_cena[1])] ? 'style="color:#AA0000;"' : '') + '>' + LOC_ALT + '&nbsp;' +
					IconValuta2(_vec_cena[1]) + PCisloJS2(_cena, '') + (_vec_cena[1] == 5 && _cena > hrac[CostType(_vec_cena[1])] ?
						' <span class="clickspan" onclick="OpenShop1(49,-1);return false;">[+]</span>' : '') + (_vec_cena[1] == 1 && PredchadzajuciLevel >= 20 && _cena > hrac[9] ?
						' <span class="clickspan" onclick="OtvorOknoGemyLepsie(19);return false;">[+]</span>' : '') + '</div>';
				_item1 += '<div class="shop_item_cena2" ' + (_cena2 > hrac[9] ? '' : buyClickStr2) + ' ' + F02o('+' + PCisloJS2(_xpZaCenu2) + ' XP', 150, 'shop_vec_' +
					_vecID + '_cena2') + ' ' + (_cena2 > hrac[CostType(1)] ? 'style="color:#AA0000;"' : '') + '>' + IconValuta2(1) + PCisloJS2(_cena2, '') + (_cena2 > hrac[9] ?
					' <span class="clickspan" onclick="OtvorOknoGemyLepsie(19);return false;">[+]</span>' : '') + '</div>';
			} else
				_item1 += '<div class="shop_item_cena" ' + (_cena > hrac[CostTypeReal(_vec_cena[1])] ? '' : buyClickStr) + ' ' + F02o('+' + PCisloJS2(_xpZaCenu) + ' XP'
					, 150, 'shop_vec_' + _vecID + '_cena') + ' ' + (_cena > hrac[CostType(_vec_cena[1])] ? 'style="color:#AA0000;"' : '') + '>' + IconValuta2(_vec_cena[1]) +
				PCisloJS2(_cena, '') + (_vec_cena[1] == 5 && _cena > hrac[CostType(_vec_cena[1])] ?
					' <span class="clickspan" onclick="OpenShop1(49,-1);return false;">[+]</span>' : '') + (_vec_cena[1] == 1 && PredchadzajuciLevel >= 20 && _cena > hrac[9] ?
					' <span class="clickspan" onclick="OtvorOknoGemyLepsie(19);return false;">[+]</span>' : '') + '</div>';
		}
	}
	_item1 += '<div class="shop_item_meno' + (_vec_cena[10] > 0 ? ' cs' + _vec_cena[10] : '') + '">' + (IN_TEST ? '[' + _vecID + ']' : '') + LOC_itemy[_vecID] +
		'</div>';
	if (maxVec1 > 0 && (jeLoged || F05p(_vecID) > 0)) _item1 += '<div class="shop_item_pocet" id="shop_vec_' + _vecID + '_pocet">' + F05p(_vecID) + '/' + maxVec1 +
		'</div>'; {
		if (_jeVypredane && _robSoldout) bonusySTR = LOC_SOLD_OUT;
		else
			bonusySTR = VypisBonusNEW(_vec1, 3);
		bonushints2 = '';
		if (plusValor > 0)
			if (VisibleValorPoints(1))
				if (itemBonusOverview[35] > 0 || itemBonusOverview[47] > 0 || itemBonusOverview[48] > 0 || itemBonusOverview[49] > 0) {
					bonushints2 += '<br>----------------<br>' + LOC_VALORG_GIVES + '';
					if (itemBonusOverview[35] > 0) bonushints2 += '<br>+' + PCisloJS3(itemBonusOverview[35] * plusValor) + ' ' + LOC_item_popis[31];
					if (itemBonusOverview[48] > 0) bonushints2 += '<br>+' + PCisloJS3(itemBonusOverview[48] * plusValor) + ' ' + LOC_item_popis[50];
					if (itemBonusOverview[49] > 0) bonushints2 += '<br>+' + PCisloJS3(itemBonusOverview[49] * plusValor) + ' ' + LOC_item_popis[51];
					if (itemBonusOverview[47] > 0) bonushints2 += '<br>+' + PCisloJS3(itemBonusOverview[47] * plusValor) + ' ' + LOC_item_popis[72];
					bonushints2 += '<br>----------------<br>' + F09a('mini6', '' + LOC_ITEM_pocetkusov + ': ' + PCisloJS2(itemBonusOverview[46]) + ' ' +
						LOC_ITEM_pocetValorPoints);
				}
		var _pocetBonusov = _vec1[4].length;
		_item1 += '<div class="shop_item_bonuses" style="" id="shop_vec_' + _vecID + '_bonuses" ' + (PredchadzajuciLevel > 20 ? F02o(bonusySTR + bonushints2, 450) :
			'') + '><table class="itemBonusTable" cellspacing="0" cellpadding="0"><tr><td ' + (_pocetBonusov < 2 ? 'style="font-size:11px;"' : '') + '>'; {
			_item1 += bonusySTR;
		}
		_item1 += '</td></tr></table></div>';
	}
	if (_lvlrequired == PredchadzajuciLevel) _item1 += '<img class="shop_new" src="' + PicPrefix() + 'shop/stuha_new.png?v=2" ' + F02o(LOC_NOVY_ITEM, 90) + '>';
	if (_vec_cena[9] == 1)
		_item1 += '<img class="shop_vip" src="' + PicPrefix() + 'shop/stuha_vip.png" ' + F02o(LOC_SHOP_ITEM_VIP) + '>';
	else if (_vec_cena[10] == 4)
		_item1 += '<img class="shop_top" src="' + PicPrefix() + 'ui2/icon_top.png">';
	else if (jeEventItem) _item1 += '<img class="shop_top" src="' + PicPrefix() + 'shop/eventicon' + event_picK + '.png">';
	if (!_dosiaholMax || _vec_cena[2] == 0) {
		if (PredchadzajuciLevel >= _lvlrequired)
			_item1 += '<img class="shop_buy_but' + (_cena > hrac[CostType(_vec_cena[1])] && _vec_cena[12] <= 0 ? '_n' : (_vec_cena[1] == 1 ? '_g' : '')) + '" src="' +
			PicPrefix() + 'shop/buybut' + (_cena > hrac[CostType(_vec_cena[1])] && _vec_cena[12] <= 0 ? '_n' : (_vec_cena[1] == 1 || (_vec_cena[12] > 0 && _vec_cena[6] +
				plusLevelAlt > PredchadzajuciLevel) ? '_g' : '')) + '.png" ' + buyClickStr + ' ' + F02o((_vec_cena[12] <= 0 ? LOC_SHOP_BUYBUT + Buyhintshift(_vec_cena[2]) :
				LOC_ALT_cost), (_vec_cena[12] ? 300 : 220), 'shop_vec_' + _vecID + '_buy_but') + '>';
		else _item1 += '<div class="shop_lvl_req" id="shop_vec_' + _vecID + '_lvl_req" onmousedown="return false;" ' + buyClickStr + ' ' + F02o(LOC_POTREBUJES_LEVEL +
			_lvlrequired) + '><div class="shop_lvl_req_text">' + (_lvlrequired) + '</div></div>';
	}
	if (_len_vnutro) return _item1;
	return '<div class="shop_item2' + (_lvlrequired == PredchadzajuciLevel && PredchadzajuciLevel > 10 ? '_new' : (_vec_cena[1] == 1 ? '_gem' : (_vec_cena[9] == 1 ?
		'_vip' : ''))) + '" id="shop_vec_' + _vecID + '">' + _item1 + '</div>';
}

function OtvorOknoGemyLepsie(_idx, _text) {
	if (!_text) _text = '';
	if (!JeOffer())
		F0d(_idx, _text);
	else SpecialOfferPopup(6);
	return false;
}

function PocetBonusov(_i) {
	_bonusA = itemyVShopeA[_i][4];
	var _poc = 0;
	for (var i in _bonusA) {
		_poc++;
	}
	return _poc;
}

function CostType(_cenatyp) {
	if (_cenatyp == 1 || _cenatyp == 12) return 5;
	if (_cenatyp == 2) return 18;
	if (_cenatyp == 3) return 65;
	if (_cenatyp == 5) return 89;
	return H_ZLATO;
}

function CostTypeReal(_cenatyp) {
	if (_cenatyp == 1) return 9;
	if (_cenatyp == 2) return 18;
	if (_cenatyp == 3) return 65;
	if (_cenatyp == 5) return 89;
	return H_ZLATO;
}
_shopDefCenaColor = '#000000';

function RefreshShopItem(_itemID) {
	for (var i in itemyVShopeA)
		if (F098('shop_vec_' + itemyVShopeA[i][0] + '_cena')) {
			if (itemyVShopeA[i][1][1] != 1) {
				var _cena = F06b(itemyVShopeA[i]);
				if (_cena > hrac[CostType(itemyVShopeA[i][1][1])]) {
					F098('shop_vec_' + itemyVShopeA[i][0] + '_cena')
						.style.color = '#AA0000';
					if (F098('shop_vec_' + itemyVShopeA[i][0] + '_buy_but')) F098('shop_vec_' + itemyVShopeA[i][0] + '_buy_but')
						.className = 'shop_buy_but_n';
				} else {
					F098('shop_vec_' + itemyVShopeA[i][0] + '_cena')
						.style.color = _shopDefCenaColor;
					if (F098('shop_vec_' + itemyVShopeA[i][0] + '_buy_but')) F098('shop_vec_' + itemyVShopeA[i][0] + '_buy_but')
						.className = 'shop_buy_but';
				}
			}
		}
	if (F098('new_shop_div')) {
		F068('shop_vec_' + _itemID, ShopItemBlok(itemyVShopeA[_itemID], 1, 1));
		for (var i = 0; i < 17; i++) SetShopInfoValue(i);
		return 0;
	}
}

function GetItemBonusAt(_i, _ktory) {
	if (!itemyVShopeA[_i]) return 0;
	if (itemyVShopeA[_i])
		if (itemyVShopeA[_i][4]) return itemyVShopeA[_i][4][_ktory];
	return 0;
}

function F015(_i, _aky, _index2) {
	if (!_index2) _index2 = 0;
	if (!itemyVShopeA[_i]) return 0;
	for (var statIndex in itemyVShopeA[_i][4])
		if (itemyVShopeA[_i][4][statIndex][1] == _aky) return itemyVShopeA[_i][4][statIndex][_index2];
	return 0;
}

function F070(_i) {
	if (buffsBonuses[_i]) return buffsBonuses[_i];
	else
		return 0;
}
itemBonusOverview = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
itemDmgPerOverv = new Array();
itemDamageOverview = new Array();
itemsCosts = new Array();
var shopTriedy = new Array('w', 'd', 'i', 'wa', 'd2', 'ux', 'ug', 'uh', 'u', 'p', 'un', 'up');
var mamNabojoveVeci = false;
mamPocetPowerUp = 0;

function F05k(_pismenko) {
	for (var _i in shopTriedy) {
		if (shopTriedy[_i] == _pismenko) return _i;
	}
	return 0;
}

function F05j(_jedenItem) {
	return Math.min(_jedenItem[1][3], _jedenItem[1][2] + _jedenItem[1][4] * Math.max(0, (hrac[11] - _jedenItem[1][5]))) + ExtraStack(_jedenItem[0]);
}
uzKupilVec = new Array();
disabledShoping = false;
disabledShoping2 = false;
disabledAlerts = false;
ktorydisabled = 0;
ktoryEnabled = 0;

function EnableShoping() {
	disabledShoping = true;
	ktoryEnabled++;
	setTimeout('if(ktoryEnabled==' + ktoryEnabled + '){disabledShoping=false;}', 800);
}

function DisableAlerts() {
	disabledAlerts = true;
	ktorydisabled++;
	setTimeout('if(ktorydisabled==' + ktorydisabled + '){disabledAlerts=false;}', 1100);
}
var _ITEM_LVL_POSUN_ZA_KAPITOLU = 10;

function F02h(_i, _alt) {
	if (itemyVShopeA[_i][1][2] == 0 && itemyVShopeA[_i][4][0][1] != 45) return itemyVShopeA[_i][1][6];
	var _lvlReq = itemyVShopeA[_i][1][6] * 1 + F09i(Math.max(0, (F05p(_i) - itemyVShopeA[_i][1][8])) / itemyVShopeA[_i][1][7]);
	if (_lvlReq > max_level) _lvlReq = max_level;
	var mojaKapitola = hrac[11];
	if (itemyVShopeA[_i][1][1] != 6)
		if (mojaKapitola > itemyVShopeA[_i][1][5])
			if (itemyVShopeA[_i][1][5] > 3) _lvlReq -= (mojaKapitola - itemyVShopeA[_i][1][5]) * _ITEM_LVL_POSUN_ZA_KAPITOLU;
	_lvlReq -= itemBonusOverview[179];
	if (_lvlReq < 1)
		_lvlReq = 1;
	if (_alt) _lvlReq += plusLevelAlt;
	return _lvlReq;
}

function F03u(_i, _pocetVeci, _jedenItem) {
	var _cena = F06b(_jedenItem);
	return (_cena > hrac[6] || PredchadzajuciLevel < F02h(_i) ? '<div class="shop_dis_sed"></div>' : '') + (_pocetVeci > 0 && _jedenItem[1][2] > 0 ?
			'<div class="itempocet">' + _pocetVeci + '</div>' : '') + '<img class="vecimg" alt="vec' + _i + '" src="' + PicPrefix() + 'veci/vec' + _i +
		'.png?picversion=' + (picversion + picversionVeci) + '">';
}

function VypisBonusPU(__item, _multi) {
	if (!_multi) _multi = 1;
	_bonusA = __item[4];
	var _out = '';
	var bonus1 = new Array();
	for (var i in _bonusA) {
		if (_bonusA[i][1] == 5) continue;
		var bonus1 = _bonusA[i];
		if (bonus1[1] == 7 && bonus1[0] == 1) _out += '';
		else if (bonus1[1] == 3) _out += F06j(itemBonusOverview[bonus1[1]] + pomocBonusyEffects[211], 'mediumc') + '<img src="' + PicPrefix() +
			'ui2/action_icon0.png?v=' + picversion + '"><span class="mini3">' + OsekunutyPUpopis(LOC_item_popis[bonus1[1]]) + '</span>';
		else if (bonus1[1] == 20)
			_out += '+' + F06j((bonus1[1] == 19 ? pomocBonusyEffects[218] : 0) + itemBonusOverview[bonus1[1]], 'mediumc') + F03m(bonus1[1]) + '<img src="' + PicPrefix() +
			'shop/valuta3.png?v=' + picversion + '"><span class="mini3">' + OsekunutyPUpopis(LOC_item_popis[bonus1[1]]) + '</span>';
		else if (bonus1[1] == 3 || bonus1[1] == 2 || bonus1[1] == 19) _out += F06j((bonus1[1] == 19 ? pomocBonusyEffects[218] : 0) + itemBonusOverview[bonus1[1]]
				, 'mediumc') + F03m(bonus1[1]) + '<img src="' + PicPrefix() + 'ui2/action_icon' + (bonus1[1] == 19 ? 2 : 1) + '.png?v=' + picversion +
			'"><span class="mini3">' + OsekunutyPUpopis(LOC_item_popis[bonus1[1]]) + '</span>';
		else if (bonus1[1] == 12 || bonus1[1] == 14 || bonus1[1] == 15 || bonus1[1] == 17 || bonus1[1] == 8 || bonus1[1] == 11 || bonus1[1] == 10 || bonus1[1] == 9)
			_out += '+' + F06j(itemBonusOverview[bonus1[1]], 'mediumc') + F03m(bonus1[1]) + ' ' + '<span class="mini3">' + OsekunutyPUpopis(LOC_item_popis[bonus1[1]]) +
			'</span>';
		else if (bonus1[1] == 7) _out += F037(bonus1[1]) + F06j(bonus1[0] + GetBonusDuration(__item[0]), 'mediumc') + ' ' + F03m(bonus1[1]) + '<span class="mini3">' +
			LOC_item_popis[bonus1[1]] + '</span>';
		else if (bonus1[1] == 4) {
			var _duration = F015(__item[0], 7);
			var _cooldown = BonusNasobokPU(bonus1, _multi) - (_duration > 1 ? _duration : 0) + AdditionalCooldown(__item[0]);
			if (_cooldown > 0) _out += F037(bonus1[1]) + F06j(_cooldown, (bonus1[1] < 30 ? 'mediumc' : 'velkec')) + ' ' + F03m(bonus1[1]) + '<span class="mini3">' +
				LOC_item_popis[bonus1[1]] + '</span>';
		} else
			_out += F037(bonus1[1]) + F06j(BonusNasobokPU(bonus1, _multi), (bonus1[1] < 30 ? 'mediumc' : 'velkec')) + F03m(bonus1[1]) + '<span class="mini3">' +
			LOC_item_popis[bonus1[1]] + '</span>';
		if (bonus1[1] == 3 || bonus1[1] == 2 || bonus1[1] == 19) {
			_out += '<br><span class="mini3">';
			if (bonus1[1] == 3 && itemBonusOverview[118] > 0) _out += '(' + PCisloJS2(KratPercentoJS(itemBonusOverview[3], itemBonusOverview[118]) + pomocBonusyEffects[
				211]) + LOC_PU_SUPP + ')';
			if (bonus1[1] == 2 && itemBonusOverview[120] > 0) _out += '(' + PCisloJS2(KratPercentoJS(itemBonusOverview[2], itemBonusOverview[120])) + LOC_PU_SUPP + ')';
			if (bonus1[1] == 19 && itemBonusOverview[119] > 0) _out += '(' + PCisloJS2(KratPercentoJS(itemBonusOverview[19] + pomocBonusyEffects[218], itemBonusOverview[
				119])) + LOC_PU_SUPP + ')';
			_out += '</span>';
		}
		if (bonus1[1] == 2 && (itemBonusOverview[180] > 0 || pomocBonusyEffects[217] > 0)) {
			_out += '<br>+' + PCisloJS2(itemBonusOverview[180], 'mediumc') + (pomocBonusyEffects[217] > 0 ? '+' + PCisloJS2(pomocBonusyEffects[217], 'mediumc') : '') +
				IconPic('shop/valuta5', -1) + ' ' + '<span class="mini3">' + LOC_item_popis[45] + ' ' + (LOC_ONLYIN30) + '</span><br>';
			if (itemBonusOverview[120] > 0) _out += '<span class="mini3">(' + PCisloJS2(KratPercentoJS(itemBonusOverview[180], itemBonusOverview[120]) +
				pomocBonusyEffects[217]) + LOC_PU_SUPP + ')</span>';
		}
		_out += '<br>';
	}
	if (__item[0] == 69) {
		if (itemBonusOverview[118] > 0) _out += FSize(10, '+' + itemBonusOverview[118] + LOC_item_popis[118] + '<br>');
		if (itemBonusOverview[119] > 0) _out += FSize(10, '+' + itemBonusOverview[119] + LOC_item_popis[119] + '<br>');
		if (itemBonusOverview[120] > 0) _out += FSize(10, '+' + itemBonusOverview[120] + LOC_item_popis[120] + '<br>');
	}
	return _out;
}

function OsekunutyPUpopis(_text) {
	_text = _text.split('(');
	return _text[0];
}

function AdditionalCooldown(_i) {
	var extraCool = 0;
	extraCool += itemBonusOverview[26] - itemBonusOverview[27];
	if (_i >= 19 && _i <= 22) extraCool -= itemBonusOverview[28];
	if (_i == 23 || _i == 24 || _i == 25 || _i == 69) extraCool -= itemBonusOverview[29];
	extraCool -= cooldownReduces[_i];
	return extraCool;
}

function BonusNasobokPU(_bonus, _multi) {
	var pu_efekt = _bonus[0];
	if (_bonus[1] == 4 || _bonus[1] == 7) _multi = 1;
	return pu_efekt * _multi;
}
var perEachN = perEachG = perEachM = perEachQ = perEachV = perEachVIP = plusValor = 0;
var mamWPerBonusPer = 0;
var mamWPerBonusComu = 0;

function VypisBonusNEW(__item, __ako, _kolko) {
	if (!_kolko) _kolko = 1;
	_bonusA = __item[4];
	plusValor = 0;
	var _out = '';
	var bonus1 = new Array();
	var _pocetBon = 0;
	var _pocetBonusov = _bonusA.length;
	for (var i in _bonusA) {
		perEachN = perEachG = perEachM = perEachQ = perEachV = perEachVIP = mamWPerBonusPer = mamWPerBonusComu = 0;
		_pocetBon++;
		bonus1 = _bonusA[i];
		var _co = bonus1[1];
		if (__ako == 4 && _co == 168) continue;
		if (_co == 102 || _co == 104 || _co == 105 || _co == 131) perEachN += bonus1[0];
		if (_co == 35 || _co == 47 || _co == 48 || _co == 49) perEachV += bonus1[0];
		if (_co == 32 || _co == 34) {
			mamWPerBonusPer = bonus1[0];
			mamWPerBonusComu = bonus1[2];
		}
		if (bonus1[1] == 46 && (!VisibleValorPoints() || itemBonusOverview[35] == 0 && itemBonusOverview[47] == 0 && itemBonusOverview[48] == 0 && itemBonusOverview[
				49] == 0)) continue;
		if (bonus1[1] == 18 && PredchadzajuciLevel < 50) continue;
		if ((bonus1[1] == 7 && bonus1[0] == 1))
			_out += '';
		else {
			_out += '<div ' + (_pocetBon > 1 && __item[0] != 133 && __item[0] != 144 && __item[0] != 343 && __item[0] != 143 && _pocetBonusov < 4 ?
				'style="padding-top:' + (_pocetBonusov < 3 ? 15 : 7) + 'px;"' : '') + '>';
			if (bonus1[1] == 5) {
				if (PredchadzajuciLevel < 35) continue;
				_out += '+' + PCisloJS2(bonus1[0], 'shop_bonus_cislo') + ' ' + LOC_item_popis[25];
			} else if (bonus1[1] == 221 || bonus1[1] == 220 || bonus1[1] == 219 || bonus1[1] == 112 || bonus1[1] == 130 || bonus1[1] == 142 || bonus1[1] == 226)
				_out += LOC_item_popis[bonus1[1]];
			else if (bonus1[1] == 212)
				_out += '-&nbsp;' + PCisloJS2(bonus1[0], 'shop_bonus_cislo') + '<img src="' + PicPrefix() + '/shop/shop_i4.png?v=' + picversion + '">' + LOC_item_popis[
					bonus1[1]];
			else if (bonus1[1] == 223)
				_out += '-&nbsp;' + PCisloJS2(bonus1[0] * 1000, 'shop_bonus_cislo') + '<img src="' + PicPrefix() + '/shop/valuta3.png?v=' + picversion + '">' +
				LOC_item_popis[bonus1[1]];
			else if (bonus1[1] == 149 || bonus1[1] == 160 || bonus1[1] == 168 || bonus1[1] == 213 || bonus1[1] == 214 || bonus1[1] == 224 || (bonus1[1] >= 201 && bonus1[
					1] <= 205)) {
				_out += HelperPopiska(bonus1[1]);
			} else if (bonus1[1] == 155) {
				_out += '+' + F06j(PlatinaTransmutation(bonus1[0])) + ' ' + LOC_item_popis[bonus1[1]];
			} else if (bonus1[1] == 145 || bonus1[1] == 90 || bonus1[1] == 132 || bonus1[1] == 121 || bonus1[1] == 133 || bonus1[1] == 134 || bonus1[1] == 135 || bonus1[
					1] == 136 || bonus1[1] == 138 || bonus1[1] == 148)
				_out += LOC_item_popis[bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 6) {
				var _komuCooldown = LOC_itemy[bonus1[2]];
				_out += F037(bonus1[1]) + PCisloJS2(bonus1[0] - (_duration > 1 ? _duration : 0), 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[bonus1[1]] + (
					bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '') + _komuCooldown;
			} else if (bonus1[1] == 4) {
				var _duration = F015(__item[0], 7);
				_out += F037(bonus1[1]) + PCisloJS2(bonus1[0] - (_duration > 1 ? _duration : 0), 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[bonus1[1]] + (
					bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			} else if (bonus1[1] == 95) _out += F037(bonus1[1]) + PCisloJS2(PercInfo(bonus1[0], 116) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[
				bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 54) _out += F037(bonus1[1]) + PCisloJS2(PercInfo(bonus1[0], 63) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[
				bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 37) _out += F037(bonus1[1]) + PCisloJS2(PercInfo(bonus1[0], 152) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[
				bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 80) _out += F037(bonus1[1]) + PCisloJS2(PercInfo(bonus1[0], 81) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[
				bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 78) _out += F037(bonus1[1]) + PCisloJS2(PercInfo(bonus1[0], 137) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[
				bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 61) _out += F037(bonus1[1]) + PCisloJS2(PercInfo(bonus1[0], 56) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[
				bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 51 || bonus1[1] == 159) _out += F037(bonus1[1]) + PCisloJS2(PercInfo(bonus1[0], 55) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) +
				LOC_item_popis[bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 50 || bonus1[1] == 124) _out += F037(bonus1[1]) + PCisloJS2(PercInfo(bonus1[0], 122) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) +
				LOC_item_popis[bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 30 || bonus1[1] == 31) _out += F037(bonus1[1]) + PCisloJS2(DMGinfo(bonus1[0], __item[0]) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) +
				LOC_item_popis[bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '');
			else if (bonus1[1] == 198) {
				var _popiska = LOC_item_popis[bonus1[1]];
				_popiska = _popiska.split('XXX');
				_popiska = _popiska.join('<b>' + bonus1[0] + '</b>');
				_out += _popiska;
			} else if (bonus1[1] == 193) {
				var _popiska = LOC_item_popis[bonus1[1]];
				_popiska = _popiska.split('XXX');
				_popiska = _popiska.join('' + __item[1][6]);
				_popiska = _popiska.split('YYY');
				_popiska = _popiska.join('' + (__item[1][3] - 1));
				_out += _popiska;
			} else if (bonus1[1] == 140 || bonus1[1] == 187) {
				var _popiska = LOC_item_popis[bonus1[1]];
				_popiska = _popiska.split('XXX');
				_popiska = _popiska.join('' + SekundNaDoubleRew());
				_out += F037(bonus1[1]) + PCisloJS2(DMGinfo(bonus1[0], __item[0]) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + _popiska + (bonus1[2] ? F03f(bonus1[1]
					, bonus1[2]) : '');
			} else if (bonus1[1] == 140 || bonus1[1] == 195) {
				if (bonus1[2] < PredchadzajuciLevel) continue;
				var _popiska = LOC_item_popis[bonus1[1]];
				_popiska = _popiska.split('XXX');
				_popiska = _popiska.join('' + bonus1[2]);
				_out += '+' + PCisloJS2(bonus1[0], 'shop_bonus_cislo') + ' ' + _popiska;
			} else if (bonus1[1] == 161) {
				var popiskacriticalpvp = LOC_item_popis[bonus1[1]];
				popiskacriticalpvp = popiskacriticalpvp.split('XXX');
				popiskacriticalpvp = popiskacriticalpvp.join('' + (10 + itemBonusOverview[162]));
				_out += F037(bonus1[1]) + PCisloJS2(DMGinfo(bonus1[0], __item[0]) * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + popiskacriticalpvp + (bonus1[2] ? F03f(
					bonus1[1], bonus1[2]) : '');
			} else
				_out += F037(bonus1[1]) + PCisloJS2(bonus1[0] * _kolko, 'shop_bonus_cislo') + F03m(bonus1[1]) + LOC_item_popis[bonus1[1]] + (bonus1[2] ? F03f(bonus1[1]
					, bonus1[2]) : '');
			if (bonus1[1] == 39) _out += '<br>' + LOC_CHEST_SHOPhelp + F07f(LOC_CLICKHERE, 'OpenChestMenu();');
			if (itemDmgPerOverv[__item[0]])
				if (bonus1[1] == 30 || bonus1[1] == 31) _out += F091(' (' + LOC_BASE_DMG + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
			if (itemBonusOverview[55] > 0 && (bonus1[1] == 51 || bonus1[1] == 159)) {
				var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
					.join(itemBonusOverview[55]);
				_out += F091(' <br>(' + _LOC_WITHOUT_PER + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
			} else
			if (itemBonusOverview[56] > 0 && bonus1[1] == 61) {
				var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
					.join(itemBonusOverview[56]);
				_out += F091(' <br>(' + _LOC_WITHOUT_PER + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
			} else
			if (itemBonusOverview[122] > 0 && (bonus1[1] == 50 || bonus1[1] == 124)) {
				var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
					.join(itemBonusOverview[122]);
				_out += F091(' <br>(' + _LOC_WITHOUT_PER + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
			} else
			if (itemBonusOverview[152] > 0 && bonus1[1] == 37) {
				var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
					.join(itemBonusOverview[152]);
				_out += F091(' <br>(' + _LOC_WITHOUT_PER + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
			} else
			if (itemBonusOverview[137] > 0 && bonus1[1] == 78) {
				var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
					.join(itemBonusOverview[137]);
				_out += F091(' <br>(' + _LOC_WITHOUT_PER + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
			} else
			if (itemBonusOverview[63] > 0 && bonus1[1] == 54) {
				var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
					.join(itemBonusOverview[63]);
				_out += F091(' <br>(' + _LOC_WITHOUT_PER + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
			}
			if (perEachN > 0) _out += F09k('', ' (+' + PCisloJS3(perEachN * pocetItemov * _kolko) + ')');
			if (perEachG > 0) _out += F09k('', ' (+' + PCisloJS3(perEachG * pocetItemovGem * _kolko) + ')');
			if (perEachVIP) _out += F09k('', ' (+' + PCisloJS3(perEachVIP * pocetItemovVIP * _kolko) + ')');
			if (perEachV > 0) {
				var _out2 = ' (+' + PCisloJS3(perEachV * itemBonusOverview[46] * _kolko);
				if (itemBonusOverview[48] > 0) _out2 += ';&nbsp;' + LOC_currently + ':&nbsp;' + PCisloJS2(itemBonusOverview[48] * itemBonusOverview[46]);
				_out2 += ')';
				_out += F09k('', _out2) + '<br>' + LOC_VALOR_INFO;
			}
			if (perEachM > 0) _out += F09k('', ' (+' + PCisloJS3(perEachM * $pocetMisii * _kolko) + ')');
			if (perEachQ > 0) _out += F09k('', ' (+' + PCisloJS3(perEachQ * hrac[58] * _kolko) + ')');
			if (mamWPerBonusPer > 0) {
				var wDamage = KratPercentoJS2(F05p(mamWPerBonusComu) * itemyVShopeA[mamWPerBonusComu][4][0][0], mamWPerBonusPer);
				if (wDamage <= 0) _out += '<br>(&nbsp;' + LOC_NO_WEAP + '&nbsp;)';
				else
					_out += '<br>(&nbsp;+' + PCisloJS2(wDamage) + ' ' + LOC_UI_DAMAGE + '&nbsp;)';
			}
			if (bonus1[1] == 46) {
				plusValor += bonus1[0];
			} else if (bonus1[1] == 67) {
				var bon2 = KratPercentoJS2(itemBonusOverview[65], bonus1[0]);
				_out += ' &nbsp;<i>(' + LOC_currently + ': +' + PCisloJS2(bon2) + ')</i>';
			} else if (bonus1[1] == 146) {
				_out += ' &nbsp;<i>(' + LOC_currently + ': ' + PCisloJS2($maxClanClenov + itemBonusOverview[146]) + ')</i>';
			} else if (bonus1[1] == 144 && itemBonusOverview[144] > 0) {
				_out += ' &nbsp;<i>(' + LOC_currently + ': ' + PCisloJS2(itemBonusOverview[144]) + ')</i>';
			} else if (bonus1[1] == 178 && itemBonusOverview[178] > 0) {
				_out += ' &nbsp;<i>(' + LOC_currently + ': ' + PCisloJS2(itemBonusOverview[178]) + ')</i>';
			} else if (bonus1[1] == 196 && itemBonusOverview[196] > 0) {
				_out += ' &nbsp;<i>(' + LOC_currently + ': ' + PCisloJS2(itemBonusOverview[196]) + ')</i>';
			} else if (bonus1[1] == 197 && itemBonusOverview[197] > 0) {
				_out += ' &nbsp;<i>(' + LOC_currently + ': ' + PCisloJS2(RubinyMultiplikator()) + ')</i>';
			} else if (bonus1[1] == 57 && itemBonusOverview[57] > 0) {
				_out += ' &nbsp;<i>(' + LOC_currently + ': ' + PCisloJS2(itemBonusOverview[57]) + ')</i>';
			} else if (bonus1[1] == 64) {
				if (itemBonusOverview[64] > 0) _out += ' ' + SPC + '<i>(' + LOC_currently + ': ' + PCisloJS2(itemBonusOverview[64]) + ')</i>';
			} else if (bonus1[1] == 101) {
				if (itemBonusOverview[bonus1[1]] > 0) _out += '<br><i>(' + LOC_currently + ': ' + PCisloJS2(itemBonusOverview[bonus1[1]]) + '%)</i>';
			} else if (bonus1[1] == 99 && itemBonusOverview[99] > 0) _out += ' ' + SPC + '<i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[99]) + ')</i>';
			else if (bonus1[1] == 22 && itemBonusOverview[22] > 0) _out += ' ' + SPC + '<i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[22]) + ')</i>';
			else if (bonus1[1] == 77 && itemBonusOverview[77] > 0) _out += ' ' + SPC + '<i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[77]) + ')</i>';
			else if (bonus1[1] == 106 && itemBonusOverview[106] > 0) {
				_out += ' ' + SPC + '<i>(' + LOC_currently + ': ' + PCisloJS2(itemBonusOverview[106]) + ')</i>';
			} else if (bonus1[1] == 79) {
				var bon2 = KratPercentoJS2(totalDamageTime2, bonus1[0]);
				_out += '<i>( +' + PCisloJS2(bon2) + ')</i>';
				if (itemBonusOverview[79] > 0) {
					var _currentlyCislo = KratPercentoJS2(totalDamageTime2, itemBonusOverview[79]);
					_out += '<br><i>(' + LOC_currently + ': ' + PCisloJS2(_currentlyCislo) + ')</i>';
					_out += '<br><i>(' + LOC_SHOP_MAX + ': ' + PCisloJS2(MAX_PRELEV_DPC) + ')</i>';
				}
			} else if (bonus1[1] == 55) {
				var bon2 = KratPercentoJS2((PredchadzajuciLevel > 2 ? 50 : 0) + itemBonusOverview[51] + itemBonusOverview[104] * pocetItemov + itemBonusOverview[49] *
					itemBonusOverview[46], bonus1[0]);
				_out += '<br><i>(' + LOC_currently + ': +' + PCisloJS2(bon2) + '&nbsp;&nbsp;/&nbsp;&nbsp;' + PCisloJS2(itemBonusOverview[55]) + '%)</i>';
			} else if (bonus1[1] == 56) {
				if (itemBonusOverview[56] > 0) _out += '<br><i>(' + LOC_currently + ': +' + PCisloJS2(itemBonusOverview[56]) + '%)</i>';
				_out += '<br><i>(+' + PCisloJS2(KratPercentoJS(itemBonusOverview[61], itemBonusOverview[56])) + ')</i>';
			} else if (bonus1[1] == 122) {
				if (itemBonusOverview[122] > 0) _out += ' &nbsp;<i>(' + LOC_currently + ': +' + PCisloJS2(itemBonusOverview[122]) + '%)</i>';
			} else if (bonus1[1] == 152)
				_out += ' &nbsp;<i>(+' + PCisloJS2(KratPercentoJS2(itemBonusOverview[37], bonus1[0])) + ')</i>';
			else if (bonus1[1] == 88)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2($maxFuelCap2) + ')</i>';
			else if (bonus1[1] == 127)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(MaxArenaTickets()) + ')</i>';
			else if (bonus1[1] == 139 && itemBonusOverview[139] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[139]) + ')</i>';
			else if (bonus1[1] == 95 && itemBonusOverview[95] > 0) {
				if (itemBonusOverview[116] > 0) {
					var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
						.join(itemBonusOverview[116]);
					_out += F091(' <br>(' + _LOC_WITHOUT_PER + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
				}
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(KratPercentoJS(itemBonusOverview[95], itemBonusOverview[116])) + ')</i>';
			} else if (bonus1[1] == 94 && itemBonusOverview[94] > 0)
				_out += ' ' + SPC + '<i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[94]) + ')</i>';
			else if (bonus1[1] == 70)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(2 + itemBonusOverview[70]) + ')</i>';
			else if (bonus1[1] == 107 && itemBonusOverview[107] > 0) _out += '<br><i>(' + LOC_currently + ' -' + PCisloJS2(itemBonusOverview[107]) + ')</i>';
			else if (bonus1[1] == 108 && itemBonusOverview[108] > 0) _out += '<br><i>(' + 'currently reduced by: ' + PCisloJS2(itemBonusOverview[108]) + ')</i>';
			else if (bonus1[1] == 116 && itemBonusOverview[116] > 0) _out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[116]) + '%)</i>';
			else if (bonus1[1] == 111)
				_out += ' &nbsp;<i>(' + LOC_currently + ' ' + PCisloJS2(100 + itemBonusOverview[111]) + ')</i>';
			else if (bonus1[1] == 147 && itemBonusOverview[147] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[147]) + ')</i>';
			else if (bonus1[1] == 36 && itemBonusOverview[36] > 0)
				_out += '<br><i>(' + LOC_currently + ' +' + PCisloJS2(itemBonusOverview[36]) + '%)</i>';
			else if (bonus1[1] == 37 && itemBonusOverview[37] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(KratPercentoJS(itemBonusOverview[37], itemBonusOverview[152])) + ')</i>';
			else if (bonus1[1] == 59 && itemBonusOverview[59] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[59]) + ')</i>';
			else if (bonus1[1] == 150)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(10 + itemBonusOverview[150]) + LOC_seconds + ')</i>';
			else if (bonus1[1] == 87 && itemBonusOverview[87] > 20000000)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[87]) + ')</i>';
			else if (bonus1[1] == 92 && itemBonusOverview[92] > 0)
				_out += ' ' + SPC + '<i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[92]) + ')</i>';
			else if (bonus1[1] == 93 && itemBonusOverview[93] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[93]) + ')</i>';
			else if (bonus1[1] == 98 && itemBonusOverview[98] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[98]) + ')</i>';
			else if (bonus1[1] == 182 && itemBonusOverview[182] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[182]) + ')</i>';
			else if (bonus1[1] == 64 && itemBonusOverview[64] > 0 && hrac[20] > 30) {
				var __hint = LOC_ACHBON.split('XXX');
				__hint = __hint.join('+' + F09f(XPperAchP * hrac[20] * 100));
				_out += '<br><i>(' + __hint + ' ' + PCisloJS2(KratPercentoJS(bonus1[0], XPperAchP * hrac[20] * 100)) + ' ' + LOC_XP + ')</i>';
			} else if (bonus1[1] == 65 && itemBonusOverview[65] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(5 + itemBonusOverview[65]) + ')</i>';
			else if (bonus1[1] == 189 && itemBonusOverview[189] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[189]) + ')</i>';
			else if (bonus1[1] == 190 && itemBonusOverview[190] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[190]) + ')</i>';
			else if (bonus1[1] == 81 && itemBonusOverview[81] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[81]) + '%)</i>';
			else if (bonus1[1] == 191 && itemBonusOverview[191] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[191]) + ')</i>';
			else if (bonus1[1] == 89) {
				_out += '<br><i>(+' + PCisloJS2(KratPercentoJS2(totalDamageKlikBezC4, bonus1[0])) + ')</i>';
				_out += '<br><i>(' + LOC_currently + ': ' + PCisloJS2(KratPercentoJS2(totalDamageKlikBezC4, itemBonusOverview[89])) + ')</i>';
				_out += '<br><i>(' + LOC_SHOP_MAX + ': ' + PCisloJS2(MAX_PRELEV_DPS) + ')</i>';
			} else if (bonus1[1] == 129 && itemBonusOverview[129] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[129]) + ')</i>';
			else if (bonus1[1] == 69 && itemBonusOverview[69] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[69]) + '%)</i>';
			else if (bonus1[1] == 78 && itemBonusOverview[78] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(EnemyDamageReduction(0)) + ')</i>';
			else if (bonus1[1] == 80 && itemBonusOverview[80] > 0) {
				var _LOC_WITHOUT_PER = LOC_WITHOUT_PER.split('XXX')
					.join(itemBonusOverview[81]);
				_out += F091(' <br>(' + _LOC_WITHOUT_PER + ': ' + PCisloJS2(bonus1[0] * _kolko) + ')');
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(HealingReducedJS()) + ')</i>';
			} else if (bonus1[1] == 159 && itemBonusOverview[159] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(KratPercentoJS(itemBonusOverview[159], itemBonusOverview[55])) + ')</i>';
			else if (bonus1[1] == 72 && itemBonusOverview[72] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[72]) + ')</i>';
			else if (bonus1[1] == 75 && itemBonusOverview[75] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[75]) + ')</i>';
			else if (bonus1[1] == 126 && itemBonusOverview[126] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[126]) + ')</i>';
			else if (bonus1[1] == 161 && itemBonusOverview[161] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[161]) + ')</i>';
			else if (bonus1[1] == 117 && itemBonusOverview[117] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[117]) + ')</i>';
			else if (bonus1[1] == 73 && itemBonusOverview[73] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[73]) + ')</i>';
			else if (bonus1[1] == 162)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(10 + itemBonusOverview[162]) + '%)</i>';
			else if (bonus1[1] == 143 && itemBonusOverview[143] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[143]) + '%)</i>';
			else if (bonus1[1] == 192 && itemBonusOverview[192] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[192]) + ')</i>';
			else if (bonus1[1] == 163) {
				if (itemBonusOverview[163] > 0) _out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[163]) + ')</i>';
				if (itemBonusOverview[126] > 0) _out += '<br><i>(' + LOC_ARENAap + ' ' + PCisloJS2(itemBonusOverview[126]) + ')</i>';
			} else if (bonus1[1] == 184 && itemBonusOverview[184] > 0)
				_out += '<br><i>(' + LOC_currently + ' ' + PCisloJS2(itemBonusOverview[184]) + ')</i>';
			if (bonus1[1] != 201 && bonus1[1] != 202 && bonus1[1] != 203 && bonus1[1] != 204 && bonus1[1] != 224) _out += ';';
			_out += '</div>';
		}
	}
	if (__ako == 5) _out = _out.split('<br>')
		.join(' ');
	return _out;
}

function PercInfo(_val, _id) {
	if (itemBonusOverview[_id]) return KratPercentoJS(_val, itemBonusOverview[_id]);
	else
		return _val;
}

function DMGinfo(_dmg, _id) {
	if (itemDmgPerOverv[_id]) return KratPercentoJS(_dmg, itemDmgPerOverv[_id]);
	else
		return _dmg;
}

function PlatinaTransmutation(_kolkko) {
	var _plt = 1 + F09f(KratPercentoJS2(KratPercentoJS(ClickGoldValue(1, 1), itemBonusOverview[101]) * 0.00001, _kolkko));
	if (_plt > 1000) _plt = 1000;
	return _plt;
}

function F04c(__item) {
	_bonusA = __item[4];
	var _out = '';
	var bonus1 = new Array();
	for (var i in _bonusA) {
		bonus1 = _bonusA[i];
		if (bonus1[1] == 7 && bonus1[0] == 1) _out += '<br>';
		else if (bonus1[1] == 90)
			_out += '<br><span class="mini3">' + LOC_item_popis[bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '') + '</span><br>';
		else if (bonus1[1] == 4) {
			var _duration = F015(__item[0], 7);
			_out += F037(bonus1[1]) + F06j(bonus1[0] - (_duration > 1 ? _duration : 0), (bonus1[1] < 30 ? 'mediumc' : 'velkec')) + F03m(bonus1[1]) + IconShopBonus2(
				bonus1[1]) + '<span class="mini3">' + LOC_item_popis[bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '') + '</span><br>';
		} else if (bonus1[1] == 5) {
			if (PredchadzajuciLevel > 35) _out += '<span class="mini3">(' + LOC_item_popis[bonus1[1]] + LOC_UI_energia + ': ' + F06j(bonus1[0], 4) + ' )</span><br>';
		} else
			_out += F037(bonus1[1]) + F06j(bonus1[0], (bonus1[1] < 30 ? 'mediumc' : 'velkec')) + F03m(bonus1[1]) + IconShopBonus2(bonus1[1]) + '<span class="mini3">' +
			LOC_item_popis[bonus1[1]] + (bonus1[2] ? F03f(bonus1[1], bonus1[2]) : '') + '</span><br>';
	}
	return _out;
}

function IconPicWH(_meno, _marginbot, _w, _h) {
	return '<img alt="ico' + _meno + '" style="' + (_marginbot ? 'margin-bottom:' + _marginbot + 'px;' : '') + (_w ? 'width:' + _w + 'px;' : '') + (_h ? 'height:' +
		_h + 'px;' : '') + '" src="' + PicPrefix() + _meno + '.png?v=' + picversion + '">';
}

function IconPic(_meno, _marginbot) {
	return '<img alt="ico' + _meno + '" ' + (_marginbot ? 'style="margin-bottom:' + _marginbot + 'px;"' : '') + ' src="' + PicPrefix() + _meno + '.png?v=' +
		picversion + '">';
}

function F08g(_meno) {
	return '<img alt="ico' + _meno + '" class="miniicon" src="' + PicPrefix() + _meno + '.png">';
}

function IconGold(_marginbot) {
	return '<img alt="gold" ' + (_marginbot ? 'style="margin-bottom:' + _marginbot + 'px;"' : '') + ' class="miniicon" src="' + PicPrefix() +
		'icons2/icon_gold.png?v=' + picversion + '">';
}

function IconShopBonus2(_i, _marginbot) {
	if (_i == 2) return IconPic('icons2/icon_gold', _marginbot);
	if (_i == 3) return IconPic('icons2/icon_damage', _marginbot);
	if (_i == 19) return IconPic('icons2/icon_heal', _marginbot);
	if (_i == 20) return IconPic('icons2/icon_clicker', _marginbot);
	if (_i == 4) return IconPic('icons2/cooldown', _marginbot);
	if (_i == 7) return IconPic('icons2/duration', _marginbot);
	if (_i == 43) return IconPic('icons2/icon_ammo', _marginbot);
	return '';
}

function F088() {
	return '<img alt="xp" class="miniicon2" src="' + PicPrefix() + 'icons2/xp_m.png">';
}

function F06m(_i) {
	return F08f(LOC_itemy[_i]);
}

function F037(_b) {
	if (_b == 6 || _b == 25 || _b == 27 || _b == 28 || _b == 29 || _b == 125 || _b == 151 || _b == 176 || _b == 179 || _b == 107 || _b == 108 || _b == 82) return '-';
	if (_b == 4 || _b == 7 || _b == 42 || _b == 132) return '';
	return '+';
}

function F03m(_b) {
	return '';
}

function F03f(_b, _i) {
	if (_b == 32 || _b == 34) return LOC_itemy[_i];
	return '';
}

function F05p(_i) {
	if (!_i) _i = 0;
	var _pocet = 0;
	if (!hracVeciA[_i]) _pocet = 0;
	else _pocet = 1 * hracVeciA[_i];
	return _pocet;
}

function F06b(_vec) {
	if (_vec[1][11] >= 2) {
		var _cena1 = _vec[1][0];
		var _lvl1 = _vec[1][6] + 75;
		if (PredchadzajuciLevel > _lvl1) {
			if (_vec[1][11] == 5) _cena1 -= F09f((PredchadzajuciLevel - _lvl1) * 0.1) * 15;
			else
			if (_vec[1][11] == 6 || _vec[1][11] == 7 || _vec[1][11] == 8 || _vec[1][11] == 9) _cena1 -= F09f((PredchadzajuciLevel - _lvl1) * 0.1) * 20;
			else
				_cena1 -= F09f((PredchadzajuciLevel - _lvl1) * 0.1) * 10;
		}
		if (_vec[1][11] == 2 && _cena1 < 5) _cena1 = 5;
		if (_vec[1][11] == 3 && _cena1 < 15) _cena1 = 15;
		if (_vec[1][11] == 4 && _cena1 < 25) _cena1 = 25;
		if (_vec[1][11] == 5 && _cena1 < 49) _cena1 = 49;
		if (_vec[1][11] == 6 && _cena1 < 99) _cena1 = 99;
		if (_vec[1][11] == 7 && _cena1 < 149) _cena1 = 149;
		if (_vec[1][11] == 8 && _cena1 < 249) _cena1 = 249;
		if (_vec[1][11] == 9 && _cena1 < 399) _cena1 = 399;
		return _cena1;
	}
	if (_vec[1][2] == 0) return _vec[1][0];
	if (_vec[1][1] == 1) return _vec[1][0];
	if (_vec[1][1] == 2) return _vec[1][0];
	if (_vec[1][1] == 3) return _vec[1][0];
	if (_vec[1][1] == 5) return _vec[1][0];
	if (_vec[1][1] == 6) return _vec[1][0];
	if (_vec[1][11] == 1) return _vec[1][0];
	return _vec[1][0];
}
posledne_kupeneVeci = new Array();
niecoKupil = false;
eclientx = eclienty = 0;
var plusLevelAlt = 10;

function F08a(e, _zbran_id, _alternatePay) {
	if (!_alternatePay) _alternatePay = 0;
	if (_alternatePay == 3) {
		var _vecCenaA = itemyVShopeA[_zbran_id][1];
		var _ponuka1 = '<img alt="item" src="' + PicPrefix() + 'veci/vec' + _zbran_id + '.png?v2=' + (picversion + picversionVeci) + '" alt="1"><br><br>' + PCisloJS2(
			F06b(itemyVShopeA[_zbran_id])) + ' ' + IconValuta2(_vecCenaA[1]) + '<br><br>' + (F02h(_zbran_id, 1) > PredchadzajuciLevel ? F09k('warning'
			, LOC_POTREBUJES_LEVEL + F02h(_zbran_id, 1)) + '<br>' : F09d(LOC_SHOP_BUYBUT, 'F07g(\'infoPopup\'); F08a(event,' + _zbran_id + ',1);'));
		var _ponuka2 = '<img alt="item" src="' + PicPrefix() + 'veci/vec' + _zbran_id + '.png?v2=' + (picversion + picversionVeci) + '" alt="1"><br><br>' + PCisloJS2(
			_vecCenaA[12]) + ' ' + IconValuta2(1) + '<br><br>' + F09d(LOC_SHOP_BUYBUT, 'F07g(\'infoPopup\');F08a(event,' + _zbran_id + ',2);');
		var _out = '<table class="tabulka4"><tr><td width="200">' + _ponuka2 + '</td><td width="100">' + LOC_ALT + '</td><td width="200">' + _ponuka1 +
			'</td></tr></table>';
		_out += F09k('mini3', '<br><br>' + LOC_ALT_cost1);
		F07e(_out, LOC_ALT_cost2, 'infoPopup', 600, 1);
		F03b();
		return false;
	}
	var _jeToDailyReset = F015(_zbran_id, 149);
	if (_jeToDailyReset)
		if (PHPtime3 - hrac[75] >= dennaOdmenaPauza) {
			F07e('You your daily reward is already active :) pick it first', 'Sry', 'infoPopup', 600, 1);
			F03b();
			return false;
		}
	anyActivity = 1;
	if (disabledShoping) {
		disabledShoping = false;
		kupVecQueue = [];
		return false;
	}
	if (disabledShoping2) {
		disabledShoping2 = false;
		kupVecQueue = [];
		return false;
	}
	if (e) {
		eclientx = e.clientX;
		eclienty = e.clientY;
	}
	if (kupVecQueue.length <= 0) kupVecQueue.push([_zbran_id, (_alternatePay == 2 ? 1 : 0)]);
	if (e.shiftKey && e.ctrlKey) {
		for (var i = 0; i < 99; i++) kupVecQueue.push([_zbran_id, (_alternatePay == 2 ? 1 : 0)]);
	} else
	if (e.shiftKey) {
		for (var i = 0; i < 9; i++) kupVecQueue.push([_zbran_id, (_alternatePay == 2 ? 1 : 0)]);
	}
	DeselectAll();
}

function KupVec2(_zbran_id, _alternatePay, _noShopDisplay) {
	if (!_noShopDisplay) _noShopDisplay = 0;
	if (!_alternatePay) _alternatePay = 0;
	if (disabledShoping) {
		disabledShoping = false;
		kupVecQueue = [];
		return false;
	}
	if (disabledShoping2) {
		kupVecQueue = [];
		return false;
	}
	disabledShoping2 = true;
	if (saveGameAvaiIn > 0) saveGameAvaiIn = 1;
	var shopPosunTextX = F09f((sirkaScreenuTotal - 1000) * 0.5);
	var shopPosunTextY = -350 + document.body.scrollTop;
	try {
		if (!itemyVShope[_zbran_id] || itemyVShope[_zbran_id] == '' || itemyVShope[_zbran_id] == ' ') {
			kupVecQueue = [];
			disabledShoping2 = false;
			return F03t('wrong item!');
		}
		var jedenItem = itemyVShopeA[_zbran_id];
		var lvlrequired = F02h(_zbran_id, (!_alternatePay && jedenItem[1][12] > 0 ? 1 : 0));
		if (PredchadzajuciLevel < lvlrequired) {
			kupVecQueue = [];
			ZrobFtext2(eclientx - shopPosunTextX, eclienty + shopPosunTextY, LOC_POTREBUJES_LEVEL2 + '(' + lvlrequired + ')', '#f00');
			disabledShoping2 = false;
			PlaySoundLoad('error');
			return false;
		}
		if (jedenItem[1][2] > 0) {
			if (F05p(_zbran_id) == F05j(jedenItem) - 1) EnableShoping();
			if (F05p(_zbran_id) >= F05j(jedenItem)) {
				kupVecQueue = [];
				disabledShoping2 = false;
				PlaySoundLoad('error');
				return DoPopup2('<img src="' + PicPrefix() + 'ui2/ok.png">' + LOC_ITEM_MAXLIMITR, LOC_GOODJOB, 'infoPopup', 500, 1);
			}
		}
		var _cena = F06b(jedenItem);
		if (_alternatePay) _cena = jedenItem[1][12];
		if (jedenItem[1][9] == 1 && hrac[64] <= 0) {
			kupVecQueue = [];
			disabledShoping2 = false;
			PlaySoundLoad('error');
			return F07b(LOC_MUST_BE_VIP + '<br><br>' + F09k('mini4', (PredchadzajuciLevel > 40 ? LOC_MUST_BE_VIP2 : '')) + '<br>' + F09d(LOC_SUPPORT
				, 'F0d(17); F061(\'infoPopup\');'), 400, LOC_MUST_BE_VIP3);
		}
		var _cenaTyp = jedenItem[1][1];
		if (_alternatePay) _cenaTyp = 1;
		if (_cenaTyp == 0 && F04s() < _cena) {
			kupVecQueue = [];
			ZrobFtext2(eclientx - shopPosunTextX, eclienty + shopPosunTextY, LOC_NEMASGOLD2, '#f00');
			disabledShoping2 = false;
			PlaySoundLoad('error');
			return false;
		}
		if (_cenaTyp == 5 && hrac[89] < _cena) {
			kupVecQueue = [];
			ZrobFtext2(eclientx - shopPosunTextX, eclienty + shopPosunTextY, LOC_NEMAS_platinu, '#f00');
			disabledShoping2 = false;
			PlaySoundLoad('error');
			return false;
		}
		if (_cenaTyp == 3 && hrac[65] < _cena) {
			kupVecQueue = [];
			ZrobFtext2(eclientx - shopPosunTextX, eclienty + shopPosunTextY, LOC_NEMAS_AC, '#f00');
			disabledShoping2 = false;
			PlaySoundLoad('error');
			return false;
		}
		if (_cenaTyp == 6 && hrac[98] < _cena) {
			kupVecQueue = [];
			ZrobFtext2(eclientx - shopPosunTextX, eclienty + shopPosunTextY, LOC_EVENT4, '#f00');
			disabledShoping2 = false;
			PlaySoundLoad('error');
			return false;
		}
		if (_cenaTyp == 7 && hrac[106] < _cena) {
			kupVecQueue = [];
			ZrobFtext2(eclientx - shopPosunTextX, eclienty + shopPosunTextY, LOC_CHEST_notenough, '#f00');
			disabledShoping2 = false;
			PlaySoundLoad('error');
			return false;
		}
		if (_cenaTyp == 8 && hrac[118] < _cena) {
			kupVecQueue = [];
			ZrobFtext2(eclientx - shopPosunTextX, eclienty + shopPosunTextY, 'Not enough Rubies', '#f00');
			disabledShoping2 = false;
			PlaySoundLoad('error');
			return false;
		}
		if (_cenaTyp == 1 && hrac[9] < _cena) {
			kupVecQueue = [];
			disabledShoping2 = false;
			return OtvorOknoGemyLepsie(18, F09k('white', LOC_NEMASDIA) + '<br>');
			return false;
		}
		if (_cenaTyp == 2 && hrac[18] < _cena) {
			kupVecQueue = [];
			disabledShoping2 = false;
			return F03t(LOC_NEDOSTATOK_FUEL + '<br><br>' + F09d(LOC_KUP_FUEL, 'F01y();'));
		}
		if (F013(_zbran_id, 40) > 0) {
			$maxFuelCap2 = $maxFuelCap + itemBonusOverview[88];
			if (hrac[18] + F013(_zbran_id, 40) > $maxFuelCap2 && PredchadzajuciLevel < 500) {
				kupVecQueue = [];
				disabledShoping2 = false;
				PlaySoundLoad('error');
				return F03t(LOC_FUEL_MAX);
			}
		}
		if (_cenaTyp == 0) hrac[H_ZLATO] -= _cena;
		if (_cenaTyp == 2) hrac[18] -= _cena;
		if (_cenaTyp == 3) hrac[65] -= _cena;
		if (_cenaTyp == 5) hrac[89] -= _cena;
		if (_cenaTyp == 6) hrac[98] -= _cena;
		if (_cenaTyp == 7) hrac[106] -= _cena;
		if (_cenaTyp == 8) hrac[118] -= _cena;
		if (_cenaTyp == 1) {
			if (F015(_zbran_id, 42) > 0)
				if (!F054() || hrac[17] >= F05u(hrac)) {
					kupVecQueue = [];
					disabledShoping2 = false;
					PlaySoundLoad('error');
					return F03t(LOC_Item_nepotrebujes);
				}
			if (F015(_zbran_id, 43) > 0)
				if (!F054() || hrac[10] >= hrac[26]) {
					kupVecQueue = [];
					disabledShoping2 = false;
					PlaySoundLoad('error');
					return F03t(LOC_Item_nepotrebujes);
				}
			hrac[9] -= _cena;
		}
		DisableAlerts();
		hracVeciA = F05r();
		if (!hracVeciA[_zbran_id]) hracVeciA[_zbran_id] = 1;
		else
			hracVeciA[_zbran_id] = hracVeciA[_zbran_id] * 1 + 1;
		if (_cenaTyp == 2) {
			var clanPlusScore = _cena * (bestPresielLevel + F09f(bestPresielLevel * 0.4));
			hrac[73] += clanPlusScore;
		}
		hrac[H_VECI] = hracVeciA.join(';');
		var _vyskaI = eclienty - ($jeLoginVisible ? 198 : 26) + document.body.scrollTop;
		var vypisDMGtext = 0;
		var vypisDMGtextS = 0;
		if (!IsInArray(_zbran_id)) posledne_kupeneVeci.push(_zbran_id);
		var _vec_bonuses = jedenItem[4];
		for (var i in _vec_bonuses) {
			_bonus = _vec_bonuses[i];
			if (_bonus[1] == 79)
				vypisDMGtext = 1;
			if (_bonus[1] == 31) {
				vypisDMGtext = 1;
			}
			if (_bonus[1] == 30 || _bonus[1] == 102)
				vypisDMGtextS = 1;
			if (_bonus[1] == 34)
				if (F015(_bonus[2], 30) > 0) {
					vypisDMGtextS = 1;
				}
			if (_bonus[1] == 32)
				if (F015(_bonus[2], 31) > 0) {
					vypisDMGtext = 1;
				}
		}
		if (vypisDMGtext) var _povodnaNicivost = ClickAttackValue(1);
		if (vypisDMGtextS) var _povodnaNicivostS = F0w(1);
		uzKupilVec[_zbran_id] = 1;
		var savedLevelHraca = PredchadzajuciLevel;
		F02t(40, _zbran_id * 1 + (_alternatePay ? 10000 : 0));
		PridajJednorazBonusZveci(_vec_bonuses);
		var _xpZaCenu = F03h(_cena, _cenaTyp, jedenItem[1][6], jedenItem[1][4], savedLevelHraca);
		F06n(_xpZaCenu, 8);
		niecoKupil = true;
		if (F05p(_zbran_id) == 1) lastBoughtFirstItemPU = _zbran_id;
		else
			lastBoughtFirstItemPU = 0;
		F046();
		BuffsOverview();
		if (!_noShopDisplay)
			if (PredchadzajuciLevel >= 3) {
				if (!bolLevelUpClosedShop) {
					if (F098('quickshopIsOpen')) OpenQuickShop(LAST_QUICKSHOP_FILTER, LAST_QUICKSHOP_RIADOK);
					else OpenShop1(activeShopFilter, shop_riadok);
				}
				if (kupVecQueue.length <= 0)
					bolLevelUpClosedShop = false;
			} else
		if (F098('quickshopIsOpen')) OpenQuickShop(LAST_QUICKSHOP_FILTER, LAST_QUICKSHOP_RIADOK);
		if (F098('quickshopIsOpen'))
			if (_cenaTyp == 0) ZrobFtext4(910, 70, '-' + PCisloJS2(_cena), 10, '#ffcc00', 90, 300);
		if (ms_itemId == _zbran_id) {
			VypisMiniSales();
		}
		F03b();
		offlineTimer = 0;
		DoQuestJS(40, 1);
		if (_cenaTyp == 3) DoQuestJS(9, _cena);
		PlayMultiSound(6);
		if (PredchadzajuciLevel < 3) RefreshShopItem(_zbran_id);
		SetKBlokValues();
	} catch (e) {
		alert('shopping error:' + e);
	}
	disabledShoping2 = false;
	if ((tut_krok == 3 || tut_krok == 4) && _zbran_id == 1) return ObrazkovyTutorialStart(6);
	if (tut_krok == 4) return NextTut();
	if (F098('pocetkolekci')) ZobrazSkrinu();
	if (PredchadzajuciLevel < 5)
		F07g('tutfirstupgdmg');
	if (F015(_zbran_id, 142)) {
		SetRamcekBoard(0, _zbran_id);
	}
}
lastBoughtFirstItemPU = 0;

function PridajJednorazBonusZveci(_vec_bonuses) {
	for (var i in _vec_bonuses) {
		_bonus = _vec_bonuses[i];
		if (_bonus[1] == 40) {
			F03z(_bonus[0], 1);
			hrac[34] += _bonus[0];
		}
		if (_bonus[1] == 21) {
			var _kolkoz = _bonus[0];
			if (hrac[H_ZLATO] + _kolkoz <= MAXGOLD) F038(_kolkoz, 1);
			else {
				_kolkoz2 = _kolkoz - (MAXGOLD - hrac[H_ZLATO]);
				F038(_kolkoz - _kolkoz2, 1);
				var PlusPlatina = F09l(0.0000000013 * _kolkoz2);
				PridajPlatinu(PlusPlatina, 1);
				kupVecQueue = [];
				disabledShoping2 = false;
				PlaySoundLoad('error');
				return F03t(LOC_GOLD_MAX_REACH2 + ' ' + PCisloJS2(PlusPlatina));
			}
		}
		if (_bonus[1] == 38) {
			hrac[85] = hrac[85] * 1 + _bonus[0] * 1;
			pseudoListky += _bonus[0] * 1;
		}
		if (_bonus[1] == 39)
			PridajKluce(_bonus[0]);
		if (_bonus[1] == 41)
			hrac[9] = hrac[9] * 1 + _bonus[0] * 1;
		if (_bonus[1] == 156)
			hrac[92] = hrac[92] * 1 + _bonus[0] * 1;
		if (_bonus[1] == 157)
			hrac[93] = hrac[93] * 1 + _bonus[0] * 1;
		if (_bonus[1] == 158)
			hrac[94] = hrac[94] * 1 + _bonus[0] * 1;
		if (_bonus[1] == 42)
			F03c(_bonus[0]);
		if (_bonus[1] == 54)
			hrac[10] = hrac[10] * 1 + _bonus[0] * 1;
		if (_bonus[1] == 43)
			F01x(_bonus[0]);
		if (_bonus[1] == 44)
			PridajAutoKlicker(_bonus[0]);
		if (_bonus[1] == 194)
			F06n(_bonus[0], 25);
		if (_bonus[1] == 195 && _bonus[2] >= PredchadzajuciLevel)
			F06n(_bonus[0], 25);
		if (_bonus[1] == 155)
			PridajPlatinu(PlatinaTransmutation(_bonus[0]), 1);
		if (_bonus[1] == 45)
			PridajPlatinu(_bonus[0], 1);
		if (_bonus[1] == 185)
			PridajEventMenu(_bonus[0], 1);
		if (_bonus[1] == 149) {
			hrac[75] -= 86400;
		}
	}
}

function PridajKluce(_kolko) {
	hrac[106] = hrac[106] * 1 + _kolko * 1;
}

function F03h(_cena, _typCeny, _minLevel, _maxStacks, _level) {
	if (!_level) _level = PredchadzajuciLevel;
	if (_typCeny == 8)
		return (F09f(_cena * 100000000));
	if (_typCeny == 7) {
		if (_level > 500 && _maxStacks > 0) return (F09f(_cena * 1000000000));
		if (_level > 400 && _maxStacks > 0) return (F09f(_cena * 100000000));
		if (_level > 300 && _maxStacks > 0) return (F09f(_cena * 30000000));
		return (F09f(_cena * 10000000));
	}
	if (_typCeny == 1) {
		if (_level > 575 && _maxStacks > 0) return (F09f(_cena * 50000 * Math.min(750, _level)));
		if (_level > 500 && _maxStacks > 0) return (F09f(_cena * 25000 * _level));
		if (_level > 400) return (F09f(_cena * 3000 * _level));
		if (_level > 300) return (F09f(_cena * 600 * _level));
		if (_level > 200) return (F09f(_cena * 150 * _level));
		if (_level > 100) return (F09f(_cena * 30 * _level));
		return (F09f(_cena * 3 * _level));
	}
	if (_typCeny == 2 || _typCeny == 6) return (F09f(_cena * _level * _level));
	if (_typCeny == 3) return (F09f(_cena * _level));
	if (_typCeny == 5) return (F09f(Math.pow(_cena * 5000000, 0.70)));
	return (F09f(Math.pow(_cena, 0.70))) * 1;
}
var rewardPopWidth = 480;
var reward_div_top = 0;
var reward_div_left = 0;
var samoVzatieRewards = 0;
var samoVzatieRewards2 = 0;

function F01k(_label, _odmeny, _class) {
	rewardPopWidth = 480;
	if (!jeAutoPilot || APset[8])
		if (F055()) F02i(1);
	rewTabid++;
	lastRewTabid = rewTabid;
	rTab = rewTabid;
	var _out = '';
	var _out2 = '';
	var _out3 = '';
	var $pocetRew = 0;
	var $pocetRew2 = 0;
	var _rvyskaB = 160;
	var _rvyska = -_rvyskaB;
	var _rLeftStart = -50;
	if (_odmeny.length >= 4) {
		rewardPopWidth = 580;
		var _rLeftStart = -10;
	}
	var _rLeft = _rLeftStart;
	var riadok = 0;
	var centrovanie_rA = new Array(0, 0, 0, 0);
	for (var i in _odmeny) {
		if (_odmeny[i][0] == 'medzera') {
			$pocetRew = 0;
			riadok++;
			continue;
		}
		$pocetRew++;
		centrovanie_rA[riadok]++;
	}
	riadok = -1;
	$pocetRew = 0;
	for (var i in _odmeny) {
		if (_odmeny[i][0] == 'medzera') {
			_out3 += F09k('mini3', _odmeny[i][1]) + '<br>';
			$pocetRew = 0;
			_rLeft = _rLeftStart;
			continue;
		}
		if ($pocetRew % 5 == 0) {
			_rvyska += _rvyskaB;
			riadok++;
		}
		_out2 += F08b(i, rTab, _odmeny[i][0], _odmeny[i][1], _odmeny[i][2], _rLeft + (5 - centrovanie_rA[riadok]) * 60, _rvyska + 90);
		_rLeft += 120;
		$pocetRew++;
	}
	_out = '<div id="LevelUPDivIN"><div id="typ_reward_' + _class + '"></div>' + (_class == 'nazovLvlUP' ? IconPic('icons2/icon_xp') : '') + ' ' + '<span class="' +
		(_class ? _class : 'nazov') + ' biely_outline">' + _label + '</span>' + ' ' + (_class == 'nazovLvlUP' ? IconPic('icons2/icon_xp') : '') +
		'<div id="rewardTable" style="position:relative;height:' + (_rvyska + _rvyskaB + 50) + 'px;">' + '</div>' +
		_out3 + (_class == 'nazovLvlUP' ? F09d(LOC_SHOP_LABEL2, 'TakeAllRewards();OpenShop1(8,-1);') : '') + F09d(LOC_TAKE, 'TakeAllRewards();') + '</div>' + _out2; {
		rewardXY = F01u('LevelUPDiv', _out, 50, '', 50);
		if (F098('LevelUPDivIN')) F098('LevelUPDiv')
			.style.width = rewardPopWidth + 'px';
		if (F098('LevelUPDivIN')) {
			if (_class == 'nazovBlue') F098('LevelUPDivIN')
				.style.backgroundColor = DIV_COLOR_A;
			else if (_class == 'nazovGold') F098('LevelUPDivIN')
				.style.backgroundColor = DIV_COLOR_M;
			else if (_class == 'nazovHourB') F098('LevelUPDivIN')
				.style.backgroundColor = DIV_COLOR_HB;
			else F098('LevelUPDivIN')
				.style.backgroundColor = DIV_COLOR_LU;
			F098('LevelUPDivIN')
				.style.width = rewardPopWidth + 'px';
		}
	}
	reward_div_left = rewardXY[0];
	reward_div_top = rewardXY[1] + 30;
	samoVzatieRewards = 90;
	if (bestPresielLevel >= 5) samoVzatieRewards = 60;
	if (bestPresielLevel >= 10) samoVzatieRewards = 15;
	F07g('LevelUPDiv_closebut');
}

function TakeAllRewards() {
	for (var iii = 0; iii < 8; iii++)
		for (var ij in odmenyPrevziat) {
			if (odmenyPrevziat[ij] && odmenyPrevziat[ij][3] == lastRewTabid) F02n(odmenyPrevziat[ij][0], lastRewTabid);
		}
}
var rewid = 0;

function F08b(_idx, _rTab, _co, _kolko, _dophp, _left, _top) {
	rewid++;
	odmenyPrevziat.push(new Array(rewid, _co, _kolko, _rTab, _left, _top, _dophp));
	return '<div class="reward_div" style="left:' + _left + 'px;top:' + _top + 'px;" onmousedown="return false;"><img class="reward_img" ' + F03q(_co, 'reward' +
			rewid) + ' ' + (PredchadzajuciLevel > 5 ? 'onmouseover="F02n(' + rewid + ',' + _rTab + ');"' : '') + ' src="' + PicPrefix() + 'ui2/reward_' + _co +
		'.png" alt="reward"><div class="rewtext">' + F06j(_kolko, 'rewardCislo') + '</div></div>';
}

function F03q(_co, _id) {
	if (PredchadzajuciLevel > 20) return 'id="' + _id + '"';
	var _out = '';
	if (_co == 'icon_gold') _out = LOC_REW[0];
	if (_co == 'icon_skull') _out = LOC_REW[2];
	if (_co == 'icon_fuel') _out = LOC_REW[3];
	if (_co == 'icon_xp') _out = LOC_REW[4];
	if (_co == 'icon_ammo') _out = LOC_REW[5];
	if (_co == 'icon_achp') _out = LOC_REW[6];
	if (_co == 'icon_clicker') _out = LOC_REW[7];
	return F02o(_out, 300, _id);
}

function F01n(_kolko) {
	var _kolko2 = _kolko;
	if (_kolko2 > 10000) _kolko2 = 5;
	else if (_kolko2 > 500) _kolko2 = 4;
	else if (_kolko2 > 3) _kolko2 = 3;
	return _kolko2;
}

function F02n(_rewid, _rTab) {
	var zatvorRTAB = _rTab;
	var unsetindex = -1;
	for (var i in odmenyPrevziat) {
		if (odmenyPrevziat[i][0] == _rewid) unsetindex = i;
		if (odmenyPrevziat[i][0] != _rewid && odmenyPrevziat[i][3] == _rTab) zatvorRTAB = 0;
	}
	F07g('reward' + _rewid);
	var _left = odmenyPrevziat[unsetindex][4];
	var _top = odmenyPrevziat[unsetindex][5];
	var _dophp = odmenyPrevziat[unsetindex][6];
	var _co = odmenyPrevziat[unsetindex][1];
	var _kolko = odmenyPrevziat[unsetindex][2];
	_kolko = F09f(_kolko);
	_kolko2 = F01n(_kolko);
	if (unsetindex > -1) {
		if (_dophp) F02t(160 + ValutaToIndexJS(_co), _kolko);
		F024(odmenyPrevziat[unsetindex][1], _kolko);
		odmenyPrevziat.splice(unsetindex, 1);
	}
	if (zatvorRTAB > 0)
		F06p('LevelUPDiv', 1, 0, 'LevelUPDiv');
	F046();
	var _akoHiduj = 0;
	if (_co == 'icon_achp') F044();
	F033((jeAutoPilot ? 1 : _kolko2), reward_div_left + _left + 75, reward_div_top + _top + 75, _co, reward_div_left + _left + 75, reward_div_top + _top + 75 - 60
		, F08i(_co), F08h(_co), _akoHiduj);
	if (menilSizeAfterReward) {
		menilSizeAfterReward = false;
		setTimeout('F039();', 500);
	}
	if (zatvorRTAB > 0) {
		samoVzatieRewards = 0;
		rewardPoradie3++; {
			saveTick += 1;
			if (focused && !jeAutoPilot) saveTick += 1;
			if (saveTick >= 4 || questyA.length < 13 || lastMisiaPrvyKrat) {
				saveTick = 0;
				lastMisiaPrvyKrat = 0;
				setTimeout('F06o(0,2,1,1);', 500);
			}
		}
		F07g('girl_right');
		if (rewardPoradie3 >= rewardPoradie2) {
			F074('misiaSED');
			DajCieleF08b();
			if (hrac[70] == 100) KlanRewardBublina(1);
		}
		if (F098('typ_reward_nazovGold')) NepriatelZnicenyVideo();
		FocusRefresh();
	}
	PlayMultiSound(3);
	VypisGoldSinceLast();
}
var saveTick = 0;
var lastMisiaPrvyKrat = 0;
var spustiZnovaPU = new Array();
var PUprog = new Array();
var bufyA = new Array();
var buffs = new Array();
var powerUpPerLine = 4;
var powerUpSirka = 50;
var powerUpVyska = powerUpSirka;
var powerUpMedzera = 10;
var powerUpMedzera2 = 9;
PUcolorZnova = '0a0';
selectedPUpic = [];
var puArray = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 69];

function F01g() {
	if (!focused) return false;
	var _out = '';
	var _pocet_zobrazenych = 0;
	var _pu_por = 0;
	for (var j in puArray) {
		var i = puArray[j];
		if (itemyVShopeA[i][3] == 'p') {
			if (hracVeciA[i] > 0) {
				_out += '<div class="powerup" ' + F02o(F02p(i), 450, 'PU_' + i, '', '', 95) + ' style="left:' + ((_pu_por % powerUpPerLine) * (powerUpSirka +
						powerUpMedzera2)) + 'px; top:' + (5 + F09i(_pu_por / powerUpPerLine) * (powerUpVyska + powerUpMedzera)) + 'px;"><div onclick="F05a(event,' + i +
					');" id="PUdis_' + i + '" class="PUdisabled" style="' + (PUDisLabel(i) >= 10 ? 'font-size:36px;' : '') + (F05b(i) ? '' : 'display:block;') + (IsInArray(i
						, spustiZnovaPU) ? 'background-color:#' + PUcolorZnova + ';' : '') + '">' + (PUDisLabel(i)) + '</div><div onclick="WarningPUA(event,' + i +
					');" id="PUdisA_' + i + '" class="PUdisabledAmmo"></div><div onclick="F05a(event,' + i + ');" class="PUdurcool" ' + (F05b(i) || !F054() ? '' :
						'style="display:block;"') + ' id="PUdurcool_' + i + '">' + PUtimeStr(i) + '</div><img onclick="F03l(event,' + i + ');" src="' + PicPrefix() + 'veci/vec' +
					PowerUpPic(i) + '.png?picversion=' + (picversion + picversionVeci) + '"></div>';
				_pocet_zobrazenych++;
			} else {
				if (PredchadzajuciLevel >= itemyVShopeA[i][1][6] && hrac[11] >= itemyVShopeA[i][1][5]) {
					_out += PicAt('pubuybut' + i, 'shop/buybut.png', 5 + ((_pu_por % powerUpPerLine) * (powerUpSirka + powerUpMedzera2)), (10 + F09i(_pu_por / powerUpPerLine) *
						(powerUpVyska + powerUpMedzera)), 1, LOC_SHOP_BUYBUT, 48, 45, 'OpenShop1(' + (1000000 + i) + ',0);', 'wbh');
				}
			}
			_pu_por++;
		}
	}
	mamPocetPowerUp = _pocet_zobrazenych;
	if (!IsPuVisible()) return false;
	F068('powerup_container', _out);
	if (mamPocetPowerUp > 0 && mamPocetPowerUp <= 3 && bestPresielLevel < 7)
		if (IsPuVisible()) F08c('attack_help3');
	PU_ammo_SET();
	PU_ammo_visual_check();
}

function PUdivclick(e, _i) {
	if (e.shiftKey) {
		OpenQuickShop(-GetItemBonusAt(_i, 0)[1], -1);
		return true;
	}
	return false;
}

function PUtimeStr(i) {
	if (F055() && buffs[i]) {
		if (sekundZaKolo < buffs[i][1]) return F099(buffs[i][1] - sekundZaKolo);
		else return '<span class="cooldown">' + F099(buffs[i][2] - sekundZaKolo) + '</span>';
	} else
		return '**';
}
var puAmmos = new Array();
var isEnoughPuAmmo = new Array();

function PU_ammo_SET() {
	for (var j in puArray) {
		var i = puArray[j];
		if (hracVeciA[i] > 0)
			if (itemyVShopeA[i][3] == 'p') {
				isEnoughPuAmmo[i] = !(hrac[10] >= puAmmos[i] ? 1 : 0);
			}
	}
}

function PU_ammo_visual_check() {
	for (var i in isEnoughPuAmmo)
		if (hrac[10] >= puAmmos[i]) {
			if (!isEnoughPuAmmo[i]) {
				F07g('PUdisA_' + i);
				isEnoughPuAmmo[i] = 1;
			}
		} else {
			if (isEnoughPuAmmo[i]) {
				F08c('PUdisA_' + i);
				isEnoughPuAmmo[i] = 0;
			}
		}
}
var hotkeysA = new Array(1, 2, 3, 4, 'q', 'w', 'e', 'r', 'a', 's', 'd', 'f');
var hotkeysK = new Array(49, 50, 51, 52, 81, 87, 69, 82, 65, 83, 68, 70);

function HotKey(_i) {
	if (_i <= 25) return hotkeysA[_i - 15];
	if (_i == 69) return hotkeysA[11];
}

function F02p(_i) {
	var _out = '';
	var _levelPU = F05p(_i);
	_out += F08f(LOC_itemy[_i]) + (somTESTER ? '[id:' + _i + ']' : '') + F08s(' [' + LOC_HOTKEY + ': ' + HotKey(_i) + ']') + '<br>';
	_out += VypisBonusPU(itemyVShopeA[_i], _levelPU, 1);
	var _nabojeCena = _levelPU * F015(_i, 5) + itemBonusOverview[24] - itemBonusOverview[25] + ammoCosts[_i];
	if (_nabojeCena < 0) _nabojeCena = 0;
	puAmmos[_i] = _nabojeCena;
	if (PredchadzajuciLevel >= 15 && _nabojeCena > 0) {
		_out += F09a('mini3', LOC_item_popis[5] + ' ' + LOC_UI_energia + ': ') + F06j(_nabojeCena, 'velkecNaboje') + '<img src="' + PicPrefix() +
			'ui2/action_icon3.png?v=' + picversion + '">';
		if (_i == 16 || _i == 20 || _i == 24) {
			_out += '<br>' + F09a('mini3', '+' + PCisloJS2(_nabojeCena * itemBonusOverview[117]) + '&nbsp;' + GOLD_FOR_AMMO);
		}
	}
	if (PredchadzajuciLevel < 15) _out += '<br>' + LOC_KLIKNI_PREPOUZITIE;
	return _out;
}

function F0a() {
	aktivnychPU = 0;
	bufyA = F01z(hrac[23], ';');
	for (iB in bufyA)
		if (bufyA[iB].length > 2) {
			bufyA[iB] = F01z(bufyA[iB], '_');
			var itemID = bufyA[iB][0];
			buffs[itemID] = new Array(itemID, bufyA[iB][1], bufyA[iB][2]);
			if (sekundZaKolo <= bufyA[iB][2] && hrac[19] * 1 > 0) {
				aktivnychPU++;
			}
		}
}

function BuffsOverview(_ajukoncuj) {
	if (!_ajukoncuj) _ajukoncuj = 0;
	var jedenPU = new Array();
	buffsBonuses = new Array();
	for (var b in buffs)
		if (sekundZaKolo < buffs[b][1]) {
			if (focused) F068('PUdurcool_' + b, F099(buffs[b][1] - sekundZaKolo));
			pocet1PU = F05p(b);
			jedenPU = itemyVShopeA[b];
			for (var bb in jedenPU[4]) {
				buffsBonuses[jedenPU[4][bb][1]] = itemBonusOverview[jedenPU[4][bb][1]];
			}
		} else {
			if (sekundZaKolo <= buffs[b][2]) {
				if (focused) {
					F068('PUdurcool_' + b, '<span class="cooldown">' + F099(buffs[b][2] - sekundZaKolo) + '</span>');
					F08c('PUdis_' + b);
					F08c('PUdurcool_' + b);
				}
			}
			if (_ajukoncuj == 1) {
				if (buffs[b][1] * 1 == sekundZaKolo * 1) {
					PU_DurationEnd(b);
				}
				if (buffs[b][2] * 1 == sekundZaKolo * 1) {
					PU_CooldownEnd(b);
				}
			}
		}
	if (!_ajukoncuj) {
		SetPomocValues();
		SetKBlokValues();
	}
}
maxAktyvnychPU = 2;

function SavePUcoockie() {
	F067('puSave1_' + idHracaHlava, PUprog.join('a'), 86400 * 90);
	F067('puSave2_' + idHracaHlava, spustiZnovaPU.join('a'), 86400 * 90);
}

function F03l(e, _i) {
	if (PUdivclick(e, _i)) return false;
	if (PredchadzajuciLevel < 29) return false;
	FocusTeraz();
	if (F055() <= 0) PUprogramovanie(e, _i);
	if (e) {
		eclientx = e.clientX;
		eclienty = e.clientY;
	} else
		eclientx = eclienty = 0;
	usePUQueue.push(_i);
	F011();
}

function PUprogramovanie(e, _i) {
	if (PUdivclick(e, _i)) return false;
	if (!F055() && itemBonusOverview[138] > 0) {
		if (IsInArray(_i, PUprog)) {
			if (IsInArray(_i, spustiZnovaPU)) {
				OdoberZPola(_i, spustiZnovaPU);
				OdoberZPola(_i, PUprog);
				if (PUprog.length <= 0) F07g('clearPUp');
			} else {
				spustiZnovaPU.push(_i);
			}
		} else {
			if (PUprog.length < maxAktyvnychPU + itemBonusOverview[62]) {
				PUprog.push(_i);
				F08c('clearPUp');
			}
		}
		F01g();
		SavePUcoockie();
	} else {
		if (PredchadzajuciLevel < 40) F0f(3);
	}
}

function PUDisLabel(_i) {
	if (F055()) return '';
	var _kolky = IsInArrayC(_i, PUprog) * 1 + 1;
	if (_kolky > 0) return _kolky;
	return '';
}
pu_ft_gold = 0;
pu_ft_xp = 0;
pu_ft_por = 0;

function UsePowerUp2(_i) {
	F07g('attack_help3');
	_PU = itemyVShopeA[_i];
	_PUlevel = F05p(_i);
	if (_PUlevel <= 0) return false;
	var _nabojeCena = _PUlevel * F015(_i, 5) + itemBonusOverview[24] - itemBonusOverview[25] + ammoCosts[_i];
	if (_nabojeCena < 0) _nabojeCena = 0;
	if (buffs[_i] && buffs[_i][2] > 0) {
		PlaySoundLoad('error');
		if (PredchadzajuciLevel < 50) {
			F02i(1);
			return F03t(LOC_PU_ALREADY_INUSE);
		} else
			return false;
	}
	if (hrac[10] < _nabojeCena) {
		PlaySoundLoad('error');
		if (PredchadzajuciLevel < 45) return F03t(LOC_NEMAS_DOST_ENERGIE);
		else {
			ZrobFtext(882, 312, LOC_NEMAS_DOST_ENERGIE2, 20, 1, '#000');
			ZrobFtext(880, 310, LOC_NEMAS_DOST_ENERGIE2, 20, 1, '#f00');
			PlaySoundLoad('error');
			return false;
		}
	}
	if (aktivnychPU >= maxAktyvnychPU + itemBonusOverview[62]) {
		PlaySoundLoad('error');
		if (aktivnychPU <= 5) {
			F02i(1);
			return F03t(LOC_MAX_AKTIVNYCH_PU + (maxAktyvnychPU * 1 + itemBonusOverview[62] * 1) + (PredchadzajuciLevel > 36 && itemBonusOverview[62] * 1 < 3 ?
				'<br><br>' + LOC_MAX_AKTIVNYCH_PU_vylepsit + '<br><img src="' + PicPrefix() + 'veci/vec55.png?picversion=' + (picversion + picversionVeci) +
				'" onclick="OpenShop(-62,-1);F061(\'warPopup\');"><img onclick="OpenShop(-62,-1);F061(\'warPopup\');" src="' + PicPrefix() +
				'veci/vec235.png?picversion=' + (picversion + picversionVeci) + '"><br>' + F09d(LOC_SHOP_LABEL2, 'OpenShop(-62,-1);F061(\'warPopup\');') : ''), ' ', 500);
		} else
			return false;
	}
	if (F05b(_i)) {
		var PlusZlatoPu = 0;
		F02t(53, hrac[10]);
		if (_nabojeCena > 0) {
			F01x(-_nabojeCena);
		}
		F07i(_i);
		F02t(50, _i);
		var jeZlatoZaStart = F015(_i, 2);
		if (jeZlatoZaStart > 0) {
			var jeSupVrtulnikAktivny = F070(14);
			if (_i == 16) {
				if (itemBonusOverview[180] > 0)
					if (sekundZaKolo <= 32) {
						var _plusPlatina = itemBonusOverview[180];
						if (jeSupVrtulnikAktivny) _plusPlatina = KratPercentoJS(_plusPlatina, itemBonusOverview[120]);
						PridajPlatinu(_plusPlatina);
					}
				if (pomocBonusyEffects[217] > 0)
					if (sekundZaKolo <= 32) {
						var _plusPlatina = pomocBonusyEffects[217];
						PridajPlatinu(_plusPlatina);
					}
			}
			var doPUgold = itemBonusOverview[2];
			if (jeSupVrtulnikAktivny) doPUgold = KratPercentoJS(doPUgold, itemBonusOverview[120]);
			PlusZlatoPu += doPUgold;
			F038(doPUgold);
			if (eclientx > 0) ZrobZlato2(eclientx, eclienty);
		} else {
			var jeDamage = F015(_i, 3);
			if (jeDamage > 0) {
				var jeSupVrtulnikAktivny = F070(14);
				var dealPUDamage = itemBonusOverview[3];
				if (jeSupVrtulnikAktivny) dealPUDamage = KratPercentoJS(dealPUDamage, itemBonusOverview[118]);
				dealPUDamage += pomocBonusyEffects[211];
				var EnemyZivotPred = F049();
				F0h(dealPUDamage, 2, 1);
				if (EnemyZivotPred > 0 && F049() <= 0) {
					zabilManual = 1;
					zobrazujError = 0;
				}
			} else {
				var jePlusHeal = F015(_i, 19);
				if (jePlusHeal > 0) {
					var jeSupVrtulnikAktivny = F070(14);
					var doPUheal = itemBonusOverview[19] + pomocBonusyEffects[218];
					if (jeSupVrtulnikAktivny) doPUheal = KratPercentoJS(doPUheal, itemBonusOverview[119]);
					F03c(doPUheal);
					if (eclientx > 0) ZrobHeal2(eclientx, eclienty);
				} else {
					var jePlusNaboje = F015(_i, 20);
					if (jePlusNaboje > 0) {
						PridajAutoKlicker(itemBonusOverview[20]);
					}
				}
			}
		}
		var _floatText = '';
		if (_nabojeCena > 0)
			if ((itemBonusOverview[117] > 0 && (_i == 16 || _i == 20 || _i == 24)) || PlusZlatoPu > 0) {
				if (itemBonusOverview[117] > 0 && (_i == 16 || _i == 20 || _i == 24)) {
					PlusZlatoPu += itemBonusOverview[117] * _nabojeCena;
					F038(itemBonusOverview[117] * _nabojeCena);
				}
				if (F098('ft_pu_gold' + pu_ft_por)) {
					pu_ft_gold += PlusZlatoPu;
					SchovajFtext(puFTextId2, 0);
				} else
					pu_ft_gold = PlusZlatoPu;
			}
		if (pu_ft_gold > 0) _floatText += FCol('#FFCC00', PCisloJS2(pu_ft_gold) + '<img src="' + PicPrefix() + 'shop/valuta0.png">' + SPC);
		var _plusXP = _nabojeCena + itemBonusOverview[22];
		F06n(_plusXP, 9);
		DoQuestJS(50, 1);
		DoQuestJS(51, 1);
		DoQuestJS(52, _nabojeCena);
		setTimeout('pu_ft_xp=0;pu_ft_gold=0;pu_ft_por++;', 1200);
		if (_plusXP > 0) {
			if (F098('ft_pu_gold' + pu_ft_por)) {
				pu_ft_xp += _plusXP;
				SchovajFtext(puFTextId2, 0);
			} else
				pu_ft_xp = _plusXP;
			_floatText += FCol('#00FF98', PCisloJS2(pu_ft_xp) + '<img src="' + PicPrefix() + 'shop/valuta4.png">');
		}
		if (jeLietajuceIkony2)
			if (_floatText) puFTextId2 = ZrobFtext(830, 377, '<span id="ft_pu_gold' + pu_ft_por + '"></span>' + _floatText, 5, 1, '#0f0', '', 340);
		hrac[36]++;
		BuffsOverview();
		if (doSounds == 1) {
			if (_i == 15) PlayMultiSound(1);
			if (_i == 16) PlayMultiSound(3);
			if (_i == 17) PlayMultiSound(4);
			if (_i == 18) PlayMultiSound(5);
		}
		PU_ammo_visual_check();
	} else {
		PlaySoundLoad('error');
		return F0f(4);
	}
	if (_i == 23 || _i == 24 || _i == 25 || _i == 69) Vypis_kontainer_klikanie();
	if (_i == 19 || _i == 20 || _i == 21 || _i == 22) Vypis_kontainer_pomocnicky();
}
var puFTextId1 = puFTextId2 = puFTextId3 = puFTextId4 = -1;
var qFTextId1 = qFTextId2 = qFTextId3 = qFTextId4 = -1;

function WarningPUA(e, _i) {
	if (PredchadzajuciLevel < 18) return F03t(LOC_NEMAS_DOST_ENERGIE);
	PUprogramovanie(e, _i);
	if (F055() > 0) {
		ZrobFtext(882, 312, LOC_NEMAS_DOST_ENERGIE2, 20, 1, '#000');
		ZrobFtext(880, 310, LOC_NEMAS_DOST_ENERGIE2, 20, 1, '#f00');
	}
	return false;
}

function F05a(e, _i) {
	if (F055() > 0) {
		if (PredchadzajuciLevel <= 50) {
			PlaySoundLoad('error');
			F02i(1);
			return F03t(LOC_PU_cooling);
		} else {
			if (PredchadzajuciLevel < 50) {
				PlaySoundLoad('error');
				FloatingText2(880, 320, LOC_CANTNOW, '#f00');
			} else {
				if (IsInArray(_i, spustiZnovaPU)) {
					OdoberZPola(_i, spustiZnovaPU);
					if (F098('PUdis_' + _i)) F098('PUdis_' + _i)
						.style.backgroundColor = DIV_COLOR_PUdis;
				} else {
					spustiZnovaPU.push(_i);
					if (F098('PUdis_' + _i)) F098('PUdis_' + _i)
						.style.backgroundColor = '#0a0';
				}
				SavePUcoockie();
			}
			return false;
		}
	} else
		return PUprogramovanie(e, _i);
}

function PU_DurationEnd(_i) {
	F02t(51, _i);
	if (_i == 19 || _i == 20 || _i == 21 || _i == 22) {
		jeBoostedSec[PUidTOindex(_i)] = 0;
		Vypis_kontainer_pomocnicky();
	}
	if (_i == 23 || _i == 24 || _i == 25 || _i == 69) {
		jeBoostedClick[PUidTOindex(_i)] = 0;
		Vypis_kontainer_klikanie();
	}
}

function PUidTOindex(_id) {
	if (_id == 19 || _id == 23) return 0;
	if (_id == 20 || _id == 24) return 1;
	if (_id == 21 || _id == 25) return 2;
	return 3;
}

function PU_CooldownEnd(_i) {
	buffs[_i] = new Array(_i, 0, 0);
	F02t(52, _i);
	F07g('PUdis_' + _i);
	F07g('PUdurcool_' + _i);
	aktivnychPU--;
	if (IsInArray(_i, spustiZnovaPU))
		if (_i != 17 || hrac[17] < F05u() || APset[9] == 0) usePUQueue.push(_i);
}

function GetBonusDuration(i) {
	if (i == 20 || i == 24) return 0;
	return itemBonusOverview[23];
}

function F07i(_i) {
	var _baseDur = F015(_i, 7);
	var _cooldown = F015(_i, 4) + (_baseDur > 1 ? GetBonusDuration(_i) : 0) + AdditionalCooldown(_i);
	var _duration = _baseDur + (_baseDur > 1 ? GetBonusDuration(_i) : 0);
	buffs[_i] = new Array(_i, sekundZaKolo + _duration, sekundZaKolo + _cooldown);
	F068('PUdurcool_' + _i, F099(_duration));
	F08c('PUdis_' + _i);
	F08c('PUdurcool_' + _i);
	aktivnychPU++;
}

function F05b(_i) {
	if (!F054()) return false;
	if (!buffs[_i]) return true;
	else {
		if (buffs[_i][2] > 0 && buffs[_i][2] > sekundZaKolo) return false;
		else return true;
	}
}

function F023() {
	var bufyA2 = new Array();
	for (var i in buffs)
		if (buffs[i][0] > 0) {
			if (buffs[i][1] - sekundZaKolo > 0) bufyA2.push(buffs[i][0] + '_' + F09l(buffs[i][1] - sekundZaKolo));
		}
	hrac[23] = bufyA2.join(';');
	return hrac[23];
}

function PocetPrejdeniTotal() {
	var $_spoluZeny = 0;
	for (var i in zenyA) $_spoluZeny += PocetPrejdeni(i) * 1;
	return $_spoluZeny;
}

function F06k(_co) {
	if (_co == 0)
		return hrac[4];
	if (_co == 1)
		return PocetPrejdeniTotal();
	if (_co == 2)
		return hrac[34];
	if (_co == 3)
		return hrac[5];
	if (_co == 4)
		return hrac[21];
	if (_co == 5)
		return hrac[7];
	if (_co == 6)
		return hrac[24];
	if (_co == 7)
		return hrac[25];
	if (_co == 8)
		return hrac[36];
	if (_co == 9)
		return ClickAttackValue();
	if (_co == 10)
		return F0w();
	if (_co == 11)
		return F012();
	if (_co == 12)
		return hrac[H_ZLATO] * 1;
	if (_co == 13)
		return pocetItemov;
	if (_co == 14)
		return hrac[62];
	if (_co == 15)
		return hrac[58];
	if (_co == 16)
		return hrac[66];
	if (_co == 17)
		return itemBonusOverview[46];
	if (_co == 18)
		return hrac[95];
	if (_co == 19)
		return hrac[89] * 1;
	if (_co == 20)
		return hrac[107] * 1;
	if (_co == 21)
		return ArraySum(pomocBonusySpolu);
	if (_co == 22)
		return hrac[107] * 1;
	if (_co == 23)
		return pocetItemovModul;
	if (_co == 24)
		return hrac[111] * 1;
	if (_co == 25)
		return pocetItemovGem;
}

function F08n(_ktoryAch) {
	if (disabledTestSave) return false;
	_kolko = F06k(_ktoryAch);
	if (!jeLoged) return false;
	for (var __i = 0; __i <= _ktoryAch; __i++)
		if (!achieveA[__i]) achieveA[__i] = 0;
	var $_mojLevel = achieveA[_ktoryAch];
	if ($_mojLevel < MAX_ACH_LEVEL) {
		if (_kolko >= achDef[_ktoryAch][$_mojLevel]) {
			lastlyDoneAch = _ktoryAch;
			achieveA[_ktoryAch]++;
			AchivementGiven($_mojLevel, _ktoryAch, _kolko);
			F061('quickshoppopup');
			return true;
		}
	}
	return false;
}

function AchivementGiven(_alvl, _ktoryAch, _kolko) {
	F08c('achOznamDiv');
	F02t(60, _ktoryAch * 100 + _alvl);
	var _out = LOC_GRATULACIA + ' ' + LOC_ACHIEVE_SPRAVIL.toUpperCase();
	_out += '<br>' + FSize(13, '<b>' + LOC_ACHIEVY[_ktoryAch] + '</b>&nbsp;' + LOC_LEVEL + ': ' + F06j(_alvl + 1));
	_out += '<br>' + FSize(13, '[' + LOC_ACHIEVY_popis[_ktoryAch] + ' ' + F06j(achDef[_ktoryAch][_alvl]) + (ach_je_x[_ktoryAch] ? 'x' : '') + ']');
	var _plusGold = AchGoldF08b(_alvl);
	_out += '<br>' + FSize(28, '+' + PCisloJS2(_plusGold)) + IconGold(-10);
	F038(_plusGold, 1);
	F040(1);
	F068('achOkno2', _out);
	achPosunID++;
	achPosun = 0;
	PosuvajAch(achPosunID);
	F08n(_ktoryAch);
}

function AchGoldF08b(_alvl) {
	var _koef = 0;
	if (PredchadzajuciLevel < 15) _koef = 5000;
	else if (PredchadzajuciLevel < 50) _koef = 10000;
	else if (PredchadzajuciLevel < 100) _koef = 25000;
	else if (PredchadzajuciLevel < 150) _koef = 50000;
	else if (PredchadzajuciLevel < 200) _koef = 500000;
	else if (PredchadzajuciLevel < 300) _koef = 5000000;
	else if (PredchadzajuciLevel < 450) _koef = 100000000;
	else if (PredchadzajuciLevel < 600) _koef = 1000000000;
	else if (PredchadzajuciLevel < 800) _koef = 5000000000;
	else _koef = 50000000000;
	return (_alvl + 3) * _koef;
}
var achPosun = 0;
var achPosunID = 0;
var ACH_CAS_LIMIT = 200;

function PosuvajAch(_achPosunID) {
	if (_achPosunID == achPosunID) {
		achPosun++;
		if (achPosun < 20) {
			SetXY('achOkno2', 10, 35 + 100 - 6 * achPosun);
		}
		if (achPosun > ACH_CAS_LIMIT && achPosun < ACH_CAS_LIMIT + 30) {
			SetXY('achOkno2', 10, 25 + 6 * (achPosun - ACH_CAS_LIMIT));
		}
		if (achPosun < ACH_CAS_LIMIT + 30) setTimeout('PosuvajAch(' + _achPosunID + ');', 30);
		else F07g('achOznamDiv');
	}
}

function HideAchOznam() {
	achPosunID++;
	F07g('achOznamDiv');
}

function F0g(_alvl, _ktoryAch, _kolko) {
	F02t(60, _ktoryAch * 100 + _alvl);
	F04(_alvl, _ktoryAch, _kolko, rewardPoradie2);
	rewardPoradie2++;
	F08n(_ktoryAch);
}

function F04(_alvl, _ktoryAch, _kolko, _por) {
	if (F098('rewardTable') || rewardPoradie != _por || !F098('LevelUPDiv') || stunnedPopups) {
		setTimeout('F04(' + _alvl + ',' + _ktoryAch + ',' + _kolko + ',' + _por + ');', 500);
		return false;
	}
	var _odmeny = new Array();
	_odmeny.push(Array('icon_xp', F04v() * 25 * (_alvl + 1) * (_alvl + 1), 1));
	_odmeny.push(Array('icon_gold', F04v() * 200 * (_alvl + 1) * (_alvl + 1) * (_alvl + 2), 1));
	_odmeny.push(Array('icon_achp', 1, 1));
	F01k(LOC_GRATULACIA + ' ' + LOC_ACHIEVE_SPRAVIL + '!<br><span class="normaltext">[ ' + LOC_ACHIEVY[_ktoryAch] + ' ' + LOC_LEVEL + ': ' + F06j(_alvl + 1) +
		' ]<br>' + '<b>' + LOC_ACHIEVY_popis[_ktoryAch] + ': </b>' + F06j(achDef[_ktoryAch][_alvl]) + (ach_je_x[_ktoryAch] ? 'x' : '') + '</span>', _odmeny
		, 'nazovBlue');
	rewardPoradie++;
	PlaySoundLoad('rewarddiv');
}
var achPrereq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function PocetAchDone1(_i) {
	if (achieveA[_i] < MAX_ACH_LEVEL) return achieveA[_i];
	return MAX_ACH_LEVEL;
}
var lastlyDoneAch = -1;

function F0i() {
	HideAchOznam();
	F061('bublinahore');
	if (F055())
		F02i(1);
	achbodyCheck = 0;
	var _out = '';
	if (lastlyDoneAch >= 0) {
		_out += F09k('white', LOC_ACHIEVEMENTS_LAST + '' + LOC_ACHIEVY[lastlyDoneAch] + '&nbsp;(' + LOC_ACHIEVY_popis[lastlyDoneAch] + ':&nbsp;&nbsp;' + F06j(achDef[
			lastlyDoneAch][PocetAchDone1(lastlyDoneAch) - 1], 4) + ')<br><br>');
	}
	_out += '<br><br>';
	var _hotoveAchievementySTR = '';
	for (var _i in achieveA)
		if (F06k(_i) > 0) {
			if (achPrereq[_i])
				if (achPrereq[_i] > 0)
					if (PocetAchDone1(achPrereq[_i]) < 16) continue;
			if (_i == 17)
				if (!VisibleValorPoints(1)) continue;
			var _kolkoC = F06k(_i);
			var _ach1STR = '';
			_ach1STR += '<b>' + LOC_ACHIEVY[_i] + '</b> - ' + LOC_ACHIEVY_popis[_i] + ': &nbsp;&nbsp;&nbsp;&nbsp;' + F06j(_kolkoC, 4) + (PocetAchDone1(_i) <
				MAX_ACH_LEVEL ? ' &nbsp;&nbsp;/&nbsp;&nbsp; ' + F06j(achDef[_i][PocetAchDone1(_i)], 4) : '') + (PocetAchDone1(_i) >= MAX_ACH_LEVEL ? '&nbsp;<b>' +
				LOC_SHOP_MAX + '</b>' : '') + ' <br>';
			for (var _j = 0; _j < PocetAchDone1(_i); _j++) {
				_ach1STR += '<img style="padding:1px;" src="' + PicPrefix() + 'icons2/icon_achp' + (jeSvetJS == 1 ? F09l((_j + 1) / 5) : '') + '.png"> ';
				achbodyCheck++;
			}
			_ach1STR += '<br>';
			_ach1STR += '<br>';
			if (PocetAchDone1(_i) >= 16) _hotoveAchievementySTR += _ach1STR;
			else _out += _ach1STR;
		}
	if (_hotoveAchievementySTR) _out += '<hr>' + _hotoveAchievementySTR;
	_out = '<div id="ach_kontainer" onscroll="AchScroll(event);"><br><br><br><br><br><br>' + LOC_ACHP + ': ' + F06j(hrac[20]) + F09k('mini3', '&nbsp;&nbsp;(' +
			LOC_ACHP_POPIS + (XPperAchP * 100) + '% )') + '<br>' + _out + '<br>' + F09d(LOC_CLOSE, 'F061(\'achievem\');') +
		'<br><span id="achspan"></span><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>';
	F07e(_out, '<span id="achievemLabel">' + LOC_ACHIEVEMENTS + '</span>', 'achievem', 900, 1);
	F098('ach_kontainer')
		.style.height = (window.innerHeight - 150) + 'px';
	F098('ach_kontainer')
		.scrollTop = 110;
}

function AchScroll(e) {
	if ((F098('ach_kontainer')
			.scrollHeight - F098('ach_kontainer')
			.clientHeight) - F098('ach_kontainer')
		.scrollTop < 300) F098('ach_kontainer')
		.scrollTop = (F098('ach_kontainer')
			.scrollHeight - F098('ach_kontainer')
			.clientHeight) - 300;
	if (F098('ach_kontainer')
		.scrollTop < 110) F098('ach_kontainer')
		.scrollTop = 110;
}
var akcie = new Array();
akcieIndx = 0;

function F02t(_akciaTyp, _akciaTyp2) {
	if (!jeLoged) return false;
	var PHPtime3rozdiel = buffHodiny - PHPtimeSAVE;
	if (!_akciaTyp2) _akciaTyp2 = 0;
	var akciaINDEX = akcieIndx;
	var novaAkcia = 1;
	if (akciaINDEX > 0)
		if (akcie[akciaINDEX - 1])
			if (sekundZaKolo - sekundZaKoloSAVE == akcie[akciaINDEX - 1][0] && _akciaTyp == akcie[akciaINDEX - 1][1] && _akciaTyp2 == akcie[akciaINDEX - 1][2]) {
				akcie[akciaINDEX - 1][3]++;
				novaAkcia = false;
			}
	if (novaAkcia) {
		var _sekund = sekundZaKolo - sekundZaKoloSAVE;
		uplynulCasTEST = _sekund;
		akcie[akciaINDEX] = new Array(_sekund, _akciaTyp, _akciaTyp2, 1);
		akcieIndx++;
	}
}
var uplynulCasTEST = 0;

function PrepisAkciuAkRovnaka(_akciaTyp, _akciaTyp2) {
	var _sekund = sekundZaKolo - sekundZaKoloSAVE;
	if (akcie[akcieIndx - 1][1] == _akciaTyp) {
		akcie[akcieIndx - 1] = new Array(_sekund, _akciaTyp, _akciaTyp2, 1);
	} else {
		akcie[akcieIndx] = new Array(_sekund, _akciaTyp, _akciaTyp2, 1);
		akcieIndx++;
	}
}

function F04g(_pox) {
	if (_pox > 0) {
		akcie = new Array();
		akcieIndx = 0;
		PHPtimeSAVE = buffHodiny;
		sekundZaKoloSAVE = sekundZaKolo;
	}
}
narodky = new Array();
rozpadavacky = new Array();
rozpadavacky[0] = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19);

function F06h() {
	F07j('div_top_xp', 1);
	F07j('div_top_zlato', 2);
	if (jeLoged && hrac[55] == 1) {
		if (!somvofcbJS) F068('div_top_xp', '<div class="topTableRequirements">' + LOC_TOP_REQ + '</div>');
		F08c('leader_board_container');
	}
}

function UpozorniNaTopky() {}
avatar_w = 110;
listTopkaTry = 0;
var nacitanaTopka = false;
var topkaPosun = [];
topkaPosun[0] = 0;
topkaPosun[1] = 0;
topkaPosun[2] = 0;

function F07j(_kam, _topka_index) {
	try {
		var topkaA = new Array();
		if (_topka_index == 1) {
			topkaA = topka_xpS.split(';;');
			var valueLAB = LOC_LEVEL;
		}
		if (_topka_index == 2) {
			topkaA = topka_zlatoS.split(';;');
			var valueLAB = LOC_TOP_2;
		}
		var _sirkaTopkydivu = Math.max(950, sirkaScreenuTotal * 0.8);
		var pocetAvatarov = F09i((_sirkaTopkydivu - 150) / avatar_w);
		var avatar_w2 = F09i((_sirkaTopkydivu - 100) / pocetAvatarov);
		var pocetAvatarovHalf = F09i(pocetAvatarov * 0.5);
		var _out = '';
		var pocetAv2 = 0;
		var mojePoradie = 0;
		var _minPor = 999999999;
		var _maxPor = 0;
		var _minPor2 = 999999999;
		var _maxPor2 = 0;
		for (var a in topkaA) {
			topkaA[a] = topkaA[a].split(',');
			topkaA[a][0] = topkaA[a][0] * 1;
			if (_minPor > topkaA[a][0]) _minPor = topkaA[a][0];
			if (_maxPor < topkaA[a][0]) _maxPor = topkaA[a][0];
			if (hrac[0] == topkaA[a][1]) mojePoradie = topkaA[a][0];
		}
		if (mojePoradie < pocetAvatarovHalf - topkaPosun[_topka_index] - 1 + (pocetAvatarov + 1) % 2) {
			topkaPosun[_topka_index] = (pocetAvatarovHalf - topkaPosun[_topka_index] + 1 - mojePoradie);
		}
		if (mojePoradie == 0) {
			if (listTopkaTry < 6) setTimeout('F06h();', 500 + listTopkaTry * listTopkaTry * 500);
			listTopkaTry++;
			return false;
		}
		listTopkaTry = 0;
		var _wep;
		for (var a in topkaA) {
			if (topkaA[a][0] * 1 + pocetAvatarovHalf < mojePoradie + topkaPosun[_topka_index]) continue;
			pocetAv2++;
			if (pocetAv2 > pocetAvatarov) break;
			if (_minPor2 > topkaA[a][0]) _minPor2 = topkaA[a][0];
			if (_maxPor2 < topkaA[a][0]) _maxPor2 = topkaA[a][0];
			jedenHrac = topkaA[a];
			var rankValue = jedenHrac[3];
			rankBestM = jedenHrac[4];
			var _chapter = F09i((rankBestM - 1) / 7) + 1;
			if (hrac[0] == jedenHrac[1]) {
				jedenHrac[6] = hrac[121];
			}
			var _prestigeP = 0;
			var _pici = topkaA[a][5];
			_wep = '';
			if (jeKolekcia && _pici > 2) {
				_wep = PicAt('collection' + topkaA[a][1], 'veci/vec' + _pici + '.png?v=' + (picversion + picversionVeci), 7, 89, 100, LOC_SHOWCOLLECTION + '<br><img src="' +
					PicPrefix() + 'veci/vec' + _pici + '.png?v=' + (picversion + picversionVeci) + '">', 35, 35, '', 'kolekciaclanpic wb');
				_prestigeP = F015(_pici, 198);
			}
			_out = '<div style="display:inline-block;width:' + (avatar_w2) + ';"><div ' + F02o('<b>' + jedenHrac[2] + '</b><br>' + LOC_RANK + ': ' + F06j(jedenHrac[0]
					, 'velkec1') + '<br>' + valueLAB + ': ' + F06j(rankValue) + '<br><br>' + F081(LOC_TOP_MISIA + PCisloJS2(rankBestM) + ',&nbsp;&nbsp;' + LOC_Chapter + ':' +
					_chapter + ',&nbsp;&nbsp;Prestige: ' + _prestigeP) + '<br>' + F081(LOC_TOP_TABLE_CHANGES + '<br>' + LOC_TOP_SORTED[_topka_index]), 350) +
				' class="avatarDiv" style="background-image:url(\'' + PicPrefix() + 'ui2/friend_bg_' + GetAvatarBGIndex(jedenHrac[6]) + '.png?v=' + picversion +
				'\');"><div class="avatpor">' + jedenHrac[0] + '</div><div class="friend_meno" ' + (jedenHrac[1] == hrac[0] ?
					'style="color:#341B9C;font-weight:bold;font-size:11px;"' : '') + '>' + jedenHrac[2] + '</div><div class="friend_rankValue">' + F06j(rankValue, 4) +
				'</div>' + MissionImgDiv(rankBestM, 'avatarPic', jedenHrac[1], jedenHrac[2]) + _wep + '</div></div>' + _out;
		}
		if (_maxPor2 < _maxPor) _out += '<img class="vobj" src="' + PicPrefix() + 'ui2/sipka_left2.png" onclick="ScrollTopku(' + _topka_index +
			',1);" style="cursor:pointer;left:' + (-5) + 'px;top:' + (-100 + 160 * _topka_index) + 'px;">';
		if (_minPor2 > _minPor) _out += '<img class="vobj" src="' + PicPrefix() + 'ui2/sipka_right2.png" onclick="ScrollTopku(' + _topka_index +
			',-1);" style="cursor:pointer;left:' + (_sirkaTopkydivu - 55) + 'px;top:' + (-100 + 160 * _topka_index) + 'px;">';
		F068(_kam, _out);
		if (!nacitanaTopka) {
			nacitanaTopka = true;
			SetVyberLevelDiv();
		}
		F044();
		F08c('leader_board_container');
		if (bestPresielLevel >= 40) F068('clicktopmore', '-' + LOC_CLICK_MORE);
	} catch (e) {
		alert(e);
	}
}

function ScrollTopku(_kera, _okolik) {
	topkaPosun[_kera] += _okolik;
	F06h();
}

function GetAvatarBGIndex(_index) {
	for (var i in ramceky)
		if (ramceky[i] == _index) return i;
	return 0;
}
var ramceky = [0, 3090, 3093, 3118, 3119, 3120, 3121, 3122, 3094, 0, 3092, 0, 3091, 3123];

function ChangeRamcekMenu() {
	var _out = '';
	var avatar_w2 = 130;
	var rankBestM = hrac[43];
	var rankValue = 999;
	for (var i in ramceky)
		if (i == 0 || F05p(ramceky[i]) > 0) {
			var _ramcekItem = ramceky[i];
			var _wep = PicAt('collectionset' + i, 'veci/vec' + hrac[120] + '.png?v=' + (picversion + picversionVeci), 7, 89, 100, '', 35, 35, '', 'kolekciaclanpic wb');
			_out += '<div onclick="SetRamcekBoard(' + i + ');" style="display:inline-block;width:' + (avatar_w2) + ';"><div ' + F02o('Choose this Leader-Board-Border'
					, 300) + ' class="avatarDiv" style="background-image:url(\'' + PicPrefix() + 'ui2/friend_bg_' + GetAvatarBGIndex(_ramcekItem) + '.png?v=' + picversion +
				'\');"><div class="avatpor">' + 666 + '</div><div class="friend_meno" style="color:#341B9C;font-weight:bold;font-size:11px;">' + hrac[99] +
				'</div><div class="friend_rankValue">' + F06j(rankValue, 4) + '</div><img src="' + PicPrefix() + MissionPicSrc(rankBestM) + '" class="avatarPic">' + _wep +
				'</div></div>';
		}
	F02s();
	DoPopup2(_out, 'Avatar Border Settings', 'infoPopup', 800, '');
}

function SetRamcekBoard(_index, _aleboItem) {
	if (_aleboItem) hrac[121] = _aleboItem;
	else hrac[121] = ramceky[_index];
	F02t(196, hrac[121]);
	F061('infoPopup');
	F06h();
}
mozemDalsiQuest = true;

function DoQuestJS($_ktory, _kolko, _ignoreRow, _instantSpln) {
	if (!_instantSpln) _instantSpln = 0;
	if (!_kolko) _kolko = 0;
	var $robimTyp = robimQuest[0];
	if (!_instantSpln && !_ignoreRow && (($robimTyp == 30 && _kolko == 0) || ($robimTyp == 21 && (($_ktory == 2 && pomocBonusyEffects[214] == 0) || $_ktory == 3 ||
			$_ktory == 4)) || ($robimTyp == 22 && ($_ktory == 1 || $_ktory == 3 || $_ktory == 4)) || ($robimTyp == 23 && ($_ktory == 1 || ($_ktory == 2 &&
			pomocBonusyEffects[213] == 0) || $_ktory == 4)) || ($robimTyp == 51 && ($_ktory == 1 || $_ktory == 2 || $_ktory == 3 || $_ktory == 4)))) {
		robimQuest[1] = 0;
		VypisQuest();
	} else if (_instantSpln || ($_ktory == $robimTyp && mozemDalsiQuest)) {
		robimQuest[1] += _kolko;
		if ($robimTyp == 30) robimQuest[1] = _kolko;
		if (_instantSpln || robimQuest[1] >= robimQuest[2]) {
			mozemDalsiQuest = false;
			F02t(62, $robimTyp);
			if (!robimQuest[3]) var _qRewardMulti = 1;
			else {
				var _qRewardMulti = robimQuest[3] * 1;
				if (_qRewardMulti == 0) _qRewardMulti = 1;
			}
			var _plusXP = itemBonusOverview[94] + 100;
			var _plusZlato = KratPercentoJS(500 + itemBonusOverview[95], itemBonusOverview[116]);
			questyA.splice(0, 1);
			if (questyA.length == 0) robimQuest = new Array(0, 0, 100, 0);
			else {
				var oldQ_typ = robimQuest[0];
				var oldQ_target = robimQuest[2];
				robimQuest = questyA[0];
			}
			hrac[58]++;
			F038(_plusZlato, true);
			F06n(_plusXP, 10);
			F0h(itemBonusOverview[57] + pomocBonusyEffects[216], 1, 0);
			if (PredchadzajuciLevel > 6) PlaySoundLoad('quest');
			F02t(63, _plusZlato);
			F02t(64, _plusXP);
			F02t(66, _qRewardMulti);
			F02t(67, itemBonusOverview[94]);
			var __x = quest_xy[0] + 160;
			var __y = quest_xy[1];
			__x = quest_xy[0] - 15;
			if (PredchadzajuciLevel < 15) __x = quest_xy[0] + 45;
			F046();
			setTimeout('q_ft_xp=0;q_ft_gold=0; q_ft_por++;', 800);
			if (_plusXP > 0) {
				if (F098('ft_q_xp_' + q_ft_por)) {
					q_ft_xp += _plusXP;
					SchovajFtext(qFTextId3, 0);
					SchovajFtext(qFTextId4, 0);
				} else
					q_ft_xp = _plusXP;
			}
			if (_plusZlato > 0) {
				if (F098('ft_q_gold_' + q_ft_por)) {
					q_ft_gold += _plusZlato;
					SchovajFtext(qFTextId1, 0);
					SchovajFtext(qFTextId2, 0);
				} else
					q_ft_gold = _plusZlato;
			}
			if (_plusZlato > 0 && _plusXP > 0) qFTextId4 = ZrobFtext(__x + 60, __y + 60, (PredchadzajuciLevel < 20 ? FCol('#fff', 'Quest reward: ') : '') +
				'<span id="ft_q_gold_' + q_ft_por + '">' + FCol('#FFCC00', '+' + F06j(q_ft_gold, 4)) + '</span><img src="' + PicPrefix() + 'shop/valuta0.png">' + SPC +
				'<span id="ft_q_xp2_' + q_ft_por + '">' + FCol('#00FF98', '+' + F06j(q_ft_xp, 4)) + '</span><img src="' + PicPrefix() + 'shop/valuta4.png">', 4, 1, '#000'
				, '', 340);
		} else
			VypisQuest();
	}
}
var q_ft_por = 0;
var q_ft_gold = 0;
var q_ft_xp = 0;
var robimQuest = new Array(0, 0, 0, 0);
var questyA = new Array();

function VypisQuest() {
	if (robimQuest[0] == 0) {
		F068('bar_text_div', LOC_QUEST_MORE);
		F086('bar_quest', 0, 0, 0, '');
	} else {
		F068('bar_text_div', '<b>' + (hrac[58] < 5 ? LOC_quest1 : '') + LOC_QUEST[robimQuest[0]] + '</b>');
		F086('bar_quest', robimQuest[1], robimQuest[2], 1);
	}
}

function ExplodeToQuests(_mnozina) {
	questyA = new Array();
	var _questyA1 = _mnozina.split(';');
	for (var i in _questyA1) {
		questyA[i] = F01z(_questyA1[i], '_');
	}
	robimQuest = questyA[0];
	if (questyA.length > 1) {
		if (robimQuest[0] == 0) {
			questyA.shift();
			robimQuest = questyA[0];
		}
	}
	F08c('bar_quest');
}

function AddToQuests(_mnozina) {
	var _questyAddA1 = _mnozina.split(';');
	if (robimQuest[0] == 0) questyA = new Array();
	for (var i in _questyAddA1) {
		var add1Q = F01z(_questyAddA1[i], '_');
		questyA.push(add1Q);
	}
	if (robimQuest[0] == 0) {
		robimQuest = questyA[0];
		VypisQuest();
	}
	F08c('bar_quest');
}
var zvukyIds = new Array('utok', 'utok_2b', '', 'zlato_b', 'heal_d', 'reload_c', 'kasa');
var audioSounds = new Array();
var firstSoundLoaded = 0;
soundIDdef = 0;
audioSounds[soundIDdef] = new Array();
soundIDdef = 1;
audioSounds[soundIDdef] = new Array();
soundIDdef = 3;
audioSounds[soundIDdef] = new Array();
soundIDdef = 4;
audioSounds[soundIDdef] = new Array();
soundIDdef = 5;
audioSounds[soundIDdef] = new Array();
soundIDdef = 6;
audioSounds[soundIDdef] = new Array();
var audioPorA = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

function PlayMultiSound(_zvukId) {
	if (!focused) return false;
	if (somTESTER) return false;
	if (doSounds != 1) return false;
	audioPorA[_zvukId]++;
	if (audioPorA[_zvukId] >= $maxZvukov) audioPorA[_zvukId] = 0;
	audioSounds[_zvukId][audioPorA[_zvukId]].play();
}
audio_menu = false;

function MenuSound() {
	skrinaKoef = 0;
	if (doSounds == 1) {
		if (audio_menu) audio_menu.play();
		else audio_menu = new Audio("sounds_" + SVET_SUFIX + "/menu.wav?v=" + soundsV);
	}
}
var clanA = new Array();
var pocetClenov = 0;
var clanId = 0;

function SetClanHraci(_clanSTR) {
	clanA = _clanSTR.split(';;');
	pocetClenov = 0;
	for (var i in clanA) {
		clanA[i] = clanA[i].split(',,');
		pocetClenov++;
	}
	clanId = clanA[0][5];
}

function GetMaxClenov() {
	return $maxClanClenov + itemBonusOverview[146];
}
var clanOdmenyPocty = new Array(500, 20, 5000, 15);
var clanOdmenyTypy = new Array(0, 2, 3, 4);
var myClanPos = 0;

function JeVelkyClan() {
	if (PredchadzajuciLevel >= 95 || pocetClenov > 1) return true;
	return false;
}
var GemyZaActivityReward = 3;

function VypisClan() {
	clanA.sort(function(a, b) {
		if (b[4] != a[4]) return b[4] - a[4];;
		if (b[3] == a[3]) return b[2] - a[2];
		return b[3] - a[3];
	});
	var _addButton = '';
	var _saleIcon = '';
	var _referalIcon = '';
	var _out = '';
	var _esteJedneClenVis = 0;
	if (pocetClenov >= GetMaxClenov()) _esteJedneClenVis = 1;
	_out += F08q('dailyRewDiv', (window.innerWidth > 640 ? -130 : 0), 35, 0, '', '', 100, 82); {
		var _posClenaVypis = 0;
		if (JeVelkyClan())
			for (var i in clanA) {
				if (i < odClenaZobrazit) continue;
				if (i >= odClenaZobrazit + maxClenovVisible + _esteJedneClenVis) continue;
				if (clanA[i][0] == hrac[0]) myClanPos = i;
				_out += ClanMember1(i, _posClenaVypis);
				_posClenaVypis++;
			}
		var _clanX = ClanSirka() + 20;
		if (JeVelkyClan()) _out += F08q('clanguide', _clanX - 38, 110, 100, '?', LOC_KLAN_navod + '<br>' + LOC_CLICK_clickme, 20, 20, 'ShowClanGuide();');
		if (PredchadzajuciLevel >= 128)
			_out += PicAt('autoclickerplusbut', 'ui2/skull_plus.png', _clanX - 39, 135, 3, LOC_SHOP_LABEL2, 24, 24, '', '', 'OpenShop(52,-1); return false;');
		if (JeVelkyClan()) _out += F05n('clan_body_bar', 7, 129, _clanX - 215, 22, LOC_KLAN_Progress, '', (hrac[70] >= 100 ?
			'border-right:1px #26512B solid; background-image:url(\'' + PIC_DIR + '/ui2/bar_health.png\');font-weight:bold;' : ''));
		else {
			_out += '<br>' + LOC_KLAN_Progress;
			_out += F05n('clan_body_bar', 7, 90, _clanX - 40, 22, LOC_KLAN_Progress, '', (hrac[70] >= 100 ? 'border-right:1px #26512B solid; background-image:url(\'' +
				PIC_DIR + '/ui2/bar_health.png\');font-weight:bold;' : ''));
		}
		clanOdmena = '';
		clanOdmena += '<br>+' + PCisloJS2(GemyZaActivityReward) + IconValuta2(1);
		var _odmenaPocet = KratPercentoJS(clanOdmenyPocty[hrac[71] % 4], (pocetClenov - 1) * 10);
		if (hrac[71] % 4 == 0) {
			if (PredchadzajuciLevel < 100) _odmenaPocet *= ClickGoldValue(1, 1);
			else if (PredchadzajuciLevel < 300) _odmenaPocet *= 3 * ClickGoldValue(1, 1);
			else if (PredchadzajuciLevel < 700) _odmenaPocet *= 10 * ClickGoldValue(1, 1);
			else _odmenaPocet *= 30 * ClickGoldValue(1, 1);
			if (_odmenaPocet > 10000000000000) _odmenaPocet = 10000000000000;
		}
		if (hrac[71] % 4 == 3) _odmenaPocet = F09f(_odmenaPocet * 0.01 * levelTable[PredchadzajuciLevel]);
		clanOdmena += '<br>+' + PCisloJS2(_odmenaPocet) + IconValuta2(clanOdmenyTypy[hrac[71] % 4]);
		if (itemBonusOverview[59] > 0) clanOdmena += '<br>+' + PCisloJS2(itemBonusOverview[59]) + IconValuta2(3);
		if (itemBonusOverview[177] > 0) clanOdmena += '<br>+' + PCisloJS2(itemBonusOverview[177]) + IconValuta2(5);
		_out += But1xyc(LOC_TAKE, 'TakeClanBonus();', LOC_KLAN_ButtonHint + clanOdmena + '<br>' + F08s(LOC_KLAN_ButtonHint2 + (JeVelkyClan() ? '<br>' + LOC_CLAN_BUFF :
			'')), '', 'clantakebut', (JeVelkyClan() ? _clanX - 208 : F09f(_clanX * 0.5) - 70), (JeVelkyClan() ? 122 : 120), (hrac[70] >= 100 ? 'button' : 'button_dis'));
		if (pocetClenov > 1) _out += PicAt('clanmsgbut', 'ui2/menu_mail' + (hrac[90] > 0 ? '2' : '') + '.png', _clanX - 75, 122, 50, LOC_CLAN_MES, 30, 30
			, 'OpenClanMessages();', 'wbh');
		if (PredchadzajuciLevel >= 95 && pocetClenov < GetMaxClenov() && (clanId == hrac[0] || hrac[0] == 2)) {
			_addButton = PicAt('clanAddBut', 'ui2/clan_add.png', _clanX - 125, 20, 105, LOC_CLICK_clickme + '<br>' + LOC_KLAN_clenovia + ': ' + (pocetClenov) + ' / ' +
				GetMaxClenov(), 60, 60, 'AddMemberFun();');
		}
		if (PredchadzajuciLevel > 100) _referalIcon += F08q('sale_iconC', _clanX + 10, 20, 100, '<img src=' + PicPrefix() + 'ui2/silueta.png?v=' + picversion +
			'><div id="saleclick">' + LOC_CLICK_clickme + '</div>', '', 106, 106, 'ReferalMenu();');
		if (pocetClenov - odClenaZobrazit > maxClenovVisible + _esteJedneClenVis) _out += PicAt('clansipka1', 'ui2/sipka_right2.png', _clanX - 50, 15, 3, '', 25, 43
			, '', '', 'PosunClanClenov(1); return false;');
		if (odClenaZobrazit > 0) _out += PicAt('clansipka2', 'ui2/sipka_left2.png', _clanX - 50, 65, 3, '', 25, 43, '', '', 'PosunClanClenov(-1); return false;');
	}
	if (jeLoged)
		if (jeSpecialOffer == 1) {
			var _saleIcon = F08q('sale_iconC', _clanX + 80, 20, 110, '<div class="saleText1 cierny_outline rott11">SALE</div><img src=' + PicPrefix() +
				'offers/sale_4.png?v=' + picversion + '><div id="saleclick">' + LOC_CLICK_clickme + '</div>', '', 106, 106, 'OfferClick(24);');
			_saleIcon += F08q('sale_iconC', -220, 20, 110, '<div class="saleText1 cierny_outline rott11">SALE</div><img src=' + PicPrefix() + 'offers/sale_4.png?v=' +
				picversion + '><div id="saleclick">' + LOC_CLICK_clickme + '</div>', '', 106, 106, 'OfferClick(25);');
		}
	F068('klanDiv', _out + _addButton + _saleIcon + _referalIcon);
	ZobrazKlanDiv();
}
var maxClenovVisible = 5;
var odClenaZobrazit = 0;

function PosunClanClenov(_smer) {
	odClenaZobrazit += _smer;
	VypisClan();
}

function OpenClanMessages() {
	try {
		hrac[90] = 0;
		F02i(1);
		VypisClan();
		F09b('readclanmsg');
	} catch (e) {
		alert(e);
	}
}
clan_spravy = new Array();

function SetClanSpravy(_cspravy, _pocets) {
	deselectuj = false;
	var _out = '';
	if (_pocets <= 0) _out += '<br><br>' + LOC_nosysmsg;
	else {
		clan_spravy = new Array();
		clan_spravy = _cspravy.split(';:.');
		_out += '<div id="clanmsgdiv"><table id="clanmsgTable"><tr><th width="120">.</th><th width="43">.</th><th width="110">.</th><th>.</th></tr>';
		for (var i in clan_spravy) {
			clan_spravy[i] = clan_spravy[i].split(';,.');
			var _csprava = clan_spravy[i];
			_csprava[3] = _csprava[3].split('[e.br]');
			_csprava[3] = _csprava[3].join('<br>');
			_out += '<tr ' + (i % 2 == 0 ? 'class="tr2"' : '') + ' ' + (idHraca == _csprava[4] ? 'style="font-weight:bold;"' : '') + '><td class="tdr2">' + _csprava[0] +
				'</td>';
			_out += '<td><img width="30" class="wb" height="30"src="' + PicPrefix() + MissionPicSrc(_csprava[2] * 1) + '"alt="' + _csprava[2] + '"></td>';
			_out += '<td>' + F08k(_csprava[1]) + '</td>';
			_out += '<td>' + _csprava[3] + '</td>';
			_out += '</tr>';
		}
		_out += '</table></div>';
	}
	_out += '<br>' + F09d(LOC_BUT_sysmsg2, 'ZacniPisatSpravu();');
	DoPopup2(_out, LOC_CLAN_MES, 'infoPopup', 900, 1);
	if (F098('clanmsgdiv')) F098('clanmsgdiv')
		.scrollTop = F098('clanmsgdiv')
		.scrollHeight;
}

function ZacniPisatSpravu() {
	deselectuj = false;
	var _out = '<textarea id="clanmsgtext" cols="80" rows="10"></textarea><br><br>' + F09d(LOC_sendticket_BUT, 'SendClanMsg();');
	F07e(_out, LOC_BUT_sysmsg2.toUpperCase(), 'infoPopup', 700, 1);
	F07k('clanmsgtext', 1);
}

function SendClanMsg() {
	if (F09j('clanmsgtext')
		.length < 2) return F03t(LOC_tick_pistik);
	if (F09j('clanmsgtext')
		.length > 2500) return F03t(LOC_tick_LONG);
	F09b('readclanmsg&sprava=' + LinkFixer(F09j('clanmsgtext')), 1);
	F061('infoPopup');
}

function KlanRewardBublina(_byforce) {
	if (PredchadzajuciLevel > 40)
		if ((hrac[70] >= 150 || _byforce) && !F055()) {
			var _drew_x = 500 + F09f(F06g('klanDiv') * 0.5) - 85;
			BublinaHore('<br>' + LOC_KLAN_ButtonHint, _drew_x, -50 - (IsEvent() ? 100 : 0) - (MaHlavnuKacicku() ? 90 : 0));
		}
}
KLANLEVEL = 20;

function ZobrazKlanDiv() {
	if (!F098('klanDiv')) return false;
	if (PredchadzajuciLevel >= KLANLEVEL || !vidnociele) {
		F08c('klanDiv');
		F098('klanDiv')
			.style.width = ClanSirka() + 'px';
		F086('clan_body_bar', hrac[70], 100, 1, '', (itemBonusOverview[141] > 0 && hrac[70] >= 100 ? ' (reserve: ' + (ClanReserva()) + ' ' + '/' + ' ' +
			itemBonusOverview[141] + ')' : ''), 0, '');
	}
	DailyRewardVypis();
	KlanRewardBublina();
}

function ClanReserva() {
	var _cres = hrac[70] - 100;
	if (_cres < 0) _cres = 0;
	return Math.min(_cres, itemBonusOverview[141]);
}

function ClanSirka() {
	return (Math.max(5, Math.min($maxClanClenov, pocetClenov + 1)) * 105 - 20);
}

function AddMemberFun() {
	if (somvofcbJS) var _link = 'https://apps.facebook.com/' + JS_namespace + '/?join_clan=' + clanId + '&team=' + clanIdHash;
	else var _link = 'http://' + GAME_LINK_JS + '?join_clan=' + clanId + '&team=' + clanIdHash;
	_link = '<input style="text-align:center;" type="text" size="80" id="clanreflink" value="' + _link + '">';
	F07b('Give this link only to your best friends - to team up the greatest team ever!<br><br>Link: <br><br>' + _link + F09k('mini7'
		, '<br>press CTRL+C and send it to your friend'), 650);
	F07k('clanreflink', 1);
}

function ClanMember1(_i, _posClenaVypis) {
	var member1 = clanA[_i];
	if (member1[0] == hrac[0]) {
		member1[2] = hrac[13];
		member1[3] = hrac[73];
		member1[4] = hrac[43];
		member1[5] = hrac[69];
		member1[6] = hrac[14];
		member1[7] = hrac[120];
	}
	var _mem_out = '';
	var _chapter = F09i((member1[4] - 1) / 7) + 1;
	var _topmishint = LOC_TOP_MISIA + member1[4] + '<br>' + LOC_Chapter + ': ' + _chapter + '<br>(' + (LOC_KAPITOL[_chapter - 1]) + ' ' + ')';
	var _posy = 60;
	if (jeKolekcia) {
		var _plvl = F015(member1[7], 198);
		if (!_plvl) {
			member1[7] = 2;
			_plvl = 0;
		}
		_mem_out += PicAt('collection' + _i, 'veci/vec' + member1[7] + '.png?v=' + (picversion + picversionVeci), 65, 15, 100, LOC_SHOWCOLLECTION + '<br><img src="' +
			PicPrefix() + 'veci/vec' + member1[7] + '.png?v=' + (picversion + picversionVeci) + '"><br>' + (_plvl ? 'Prestige level: ' + _plvl : ''), 25, 25
			, 'if(event.shiftKey)return OpenPrestigeShop(); ShowKolekcia(' + member1[0] + ',\'' + member1[1] + '\');', 'kolekciaclanpic wbh');
	}
	_mem_out += F08q('mem_meno' + _i, 0, 1, 1, '<b>' + member1[1] + '</b>', '', 0, 0, '', 'mem_meno');
	_mem_out += F08q('mem_pic' + _i, 3, 15, 1, MissionImgDiv(member1[4], 'mempic'), _topmishint, 60, 60, 'MemOptions(' + member1[0] + ');');
	_mem_out += F08q('mem_rank' + _i, 0, _posy + 17, 1, '#' + (_i * 1 + 1) + MEDZ + 'lvl:' + member1[6], LOC_RANK_LEVEL, '', '', '', (member1[0] == clanId ?
		'clan_leader' : ''));
	_mem_out += F08q('mem_dmg' + _i, 0, _posy + 30, 1, PCisloJS2(member1[2]) + '&nbsp;/s', LOC_item_popis[30], 0, 0, '', 'memdmgclass');
	_mem_out += F08q('mem_points' + _i, 0, _posy + 45, 1, PCisloJS2(member1[3]), LOC_KLAN_scoreHint);
	return F08q('memberDiv' + _i, 4 + _posClenaVypis * 97, 5, _i, _mem_out, '', 95, 120, '', 'memberDiv');
}

function OpenPrestigeShop() {
	OpenShop1(-198, -1);
	return true;
}

function MemOptions(_koho) {
	if (_koho == clanId && _koho == hrac[0]) {
		if (pocetClenov > 1) F03t(LOC_SURE_TO_KICK_SELF2);
		else
			F07b(LOC_CLAN_ALONE, 300);
	} else if (_koho == hrac[0]) {
		if (pocetClenov > 1 || clanId != hrac[0]) F03r(LOC_SURE_TO_KICK_SELF, 'KickMember(' + _koho + ');');
		else F07b(LOC_CLAN_ALONE, 300);
	} else if (clanId == hrac[0])
		if (_koho != clanId) {
			F03r(LOC_SURE_TO_KICK, 'KickMember(' + _koho + ');');
		}
}

function KickMember(_koho) {
	if (_koho != clanId) {
		F02t(76, _koho);
		if (_koho == hrac[0]) {
			var clanZaloha = new Array();
			for (var i in clanA)
				if (clanA[i][0] == _koho) clanZaloha[i] = clanA[i];
			pocetClenov = 1;
			clanId = hrac[0];
			clanA = clanZaloha;
			ZobrazKlanDiv();
			VypisClan();
			F06o(1, 1, 0, 1);
		} else {
			var _kohoIndex = -1;
			for (var i in clanA)
				if (clanA[i][0] == _koho) _kohoIndex = i;
			if (_kohoIndex >= 0) {
				clanA.splice(_kohoIndex, 1);
				pocetClenov--;
				ZobrazKlanDiv();
				VypisClan();
				F06o(1, 1, 0, 1);
			}
		}
	}
}

function TakeClanBonus() {
	if (F055() > 0) F03t(LOC_KLAN_mimoMisie);
	else if (hrac[70] < 100) F03t(LOC_KLAN_maloBodov);
	else {
		var _odmenaPocet = KratPercentoJS(clanOdmenyPocty[hrac[71] % 4], (pocetClenov - 1) * 10);
		var _odmenaTyp = hrac[71] % 4;
		F02t(75, pocetClenov);
		F02t(9999, 1); {
			F034(715, -60 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), 'icon_skull', 705, -110 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), dia_xy[
				0], dia_xy[1]);
			hrac[9] = hrac[9] * 1 + GemyZaActivityReward;
		}
		if (_odmenaTyp == 0) {
			if (PredchadzajuciLevel < 100) _odmenaPocet *= ClickGoldValue(1, 1);
			else if (PredchadzajuciLevel < 300) _odmenaPocet *= 3 * ClickGoldValue(1, 1);
			else if (PredchadzajuciLevel < 700) _odmenaPocet *= 10 * ClickGoldValue(1, 1);
			else _odmenaPocet *= 30 * ClickGoldValue(1, 1);
			if (_odmenaPocet > 10000000000000) _odmenaPocet = 10000000000000;
			F038(_odmenaPocet);
			F034(745, -60 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), 'icon_gold', 755, -110 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), gold_xy[
				0], gold_xy[1]);
		}
		if (_odmenaTyp == 1) {
			F03z(_odmenaPocet, 1);
			F034(745, -60 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), 'icon_fuel', 755, -110 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), fuel_xy[
				0], fuel_xy[1]);
		}
		if (_odmenaTyp == 2) {
			PridajAutoKlicker(_odmenaPocet);
			F034(745, -60 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), 'icon_clicker', 755, -110 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0)
				, clicker_xy[0], clicker_xy[1]);
		}
		if (itemBonusOverview[59] > 0) {
			PridajAutoKlicker(itemBonusOverview[59]);
			F034(745, -60 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), 'icon_clicker', 755, -110 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0)
				, clicker_xy[0], clicker_xy[1]);
		}
		if (itemBonusOverview[177] > 0) {
			PridajPlatinu(itemBonusOverview[177]);
			F034(740, -60 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0), 'icon_platina', 755, -110 - (IsEvent() ? 110 : 0) - (MaHlavnuKacicku() ? 90 : 0)
				, platina_xy[0], platina_xy[1]);
		}
		if (_odmenaTyp == 3) {
			_odmenaPocet = F09f(_odmenaPocet * 0.01 * levelTable[PredchadzajuciLevel]);
			F06n(_odmenaPocet);
			F034(745, -60, 'icon_xp', 755, -110, xp_xy[0], xp_xy[1]);
		}
		hrac[70] -= 100;
		if (hrac[70] > itemBonusOverview[141]) hrac[70] = itemBonusOverview[141];
		hrac[71] = hrac[71] * 1 + 1;
		F046();
		F03e();
		PlaySoundLoad('rewarddiv');
		if (hrac[70] < 100)
			if (!IsRewardVisible()) F06o(1, 1, 0, 1);
		F061('bublinahore');
		SetVyberLevelDiv();
	}
}

function ShowClanGuide() {
	var _out = '';
	_out += '<ul class="mini4" style="text-align:left;">';
	for (var i in LOC_KLAN_navodA) _out += '<li>' + LOC_KLAN_navodA[i] + '</li>';
	_out += '</ul>';
	F07e(_out, LOC_KLAN_navod, 'infoPopup', 700);
}
var referalLinkVar = '';

function ReferalMenu() {
	var _out = '<br><br>' + LOC_REFER_1;
	_out += '<br><br>';
	referalLinkVar = GAME_LINK_JS + '?referal_id=' + hrac[0];
	if (somvofcbJS) referalLinkVar = 'https://apps.facebook.com/' + zeNejmSpejs + '?jefcb=1&amp;referal_id=' + hrac[0];
	_out += '<input id="referedlintext" style="text-align:center;width:70%" type="text" value="' + referalLinkVar + '" onkeyup="SetValue(\'referedlintext\',\'' +
		referalLinkVar + '\'); F07k(\'referedlintext\',1,50);">';
	_out += '<br><br>' + LOC_REFER_2;
	_out += '<div style="text-align:left;"><ol>';
	for (var i in LOC_REFER_A) _out += '<li>' + F09k('mini5', LOC_REFER_A[i]) + '</li>';
	_out += '</ol></div>';
	_out += '<br><br>' + F09k('mini4', LOC_REFER_E);
	F07e(_out, '', 'infoPopup', 700);
	F07k('referedlintext', 1, 50);
}

function DailyRewardVypis() {
	var _dailyOUT = '';
	if (PredchadzajuciLevel >= KLANLEVEL) {
		if (PHPtime3 - hrac[75] >= dennaOdmenaPauza) {
			{
				_dailyOUT = PicAt('daily_bedna', 'ui2/daily1.png?v=' + picversion, 0, 0, 1, LOC_DAILYR1, 100, 82, 'ZoberDaily(event);');
				if (!F055() && !F098('missionRewardNew')) {
					var _drew_x = 500 - F09f(F06g('klanDiv') * 0.5) - 80;
					BublinaHore('<br><span id="dailyrewardbub"></span>' + LOC_DAILYR1, _drew_x, -90 - (IsEvent() ? 100 : 0) - (MaHlavnuKacicku() ? 90 : 0));
				}
			}
		} else {
			var _readyIn = Math.ceil((dennaOdmenaPauza - (PHPtime3 - hrac[75])) / 3600);
			_dailyOUT = PicAt('daily_bedna', 'ui2/daily0.png?v=' + picversion, 0, 0, 1, LOC_DAILYR0 + '<br><br>' + F08s(LOC_DAILY_CAS + _readyIn + LOC_DAILY_CAS2), 100
				, 82, 'ZoberDaily(event);');
		}
		if (PredchadzajuciLevel >= 69) _dailyOUT += F08q('skull_plus', 85, 75, 4, '', LOC_IMPROVEDAILY, 24, 24, 'OpenQuickShop(46,-1);');
		F068('dailyRewDiv', _dailyOUT);
	}
}
var deaktiv_STR = '';

function CheckResetDailyItems() {
	var pocetDeaktivovanychPasivov = 0;
	deaktiv_STR = '';
	for (var i in itemyVShopeA)
		if (hracVeciA[i]) {
			var item_i = itemyVShopeA[i];
			for (var j in item_i[4]) {
				var _bonus1 = item_i[4][j];
				if (_bonus1[1] == 112) {
					deaktiv_STR += LOC_itemy[i] + ';' + ' ';
					pocetDeaktivovanychPasivov++;
				}
			}
		}
	return pocetDeaktivovanychPasivov * 1;
}

function ResetniDailyItemy() {
	for (var i in itemyVShopeA)
		if (hracVeciA[i]) {
			var item_i = itemyVShopeA[i];
			for (var j in item_i[4]) {
				var _bonus1 = item_i[4][j];
				if (_bonus1[1] == 130) {
					hracVeciA[i] = 0;
				}
			}
		}
	hrac[H_VECI] = hracVeciA.join(';');
	F046();
}
var $dailyGemBase = 2;

function ZoberDaily(_eve) {
	F02q((CheckResetDailyItems() > 0 ? 1 : 0), LOC_ZOBRAT_DAILY_ISTO1 + deaktiv_STR + LOC_ZOBRAT_DAILY_ISTO2, 'ZoberDaily2();', _eve);
}

function ZoberDaily2() {
	if (F055() > 0) F03t(LOC_KLAN_mimoMisie);
	else if (PHPtime3 - hrac[75] >= dennaOdmenaPauza) {
		ResetniDailyItemy();
		var _floatinTextReward = '';
		hrac[75] = F09i(PHPtime3 / 86400) * 86400 + 14400;
		F02t(79, 1);
		var _drew_x = 500 - F09f(F06g('klanDiv') * 0.5) - 80;
		var plusFuelDaily = 2 + itemBonusOverview[70];
		F03z(plusFuelDaily, 1);
		F033(2, _drew_x, -80, 'icon_fuel', _drew_x, -140, fuel_xy[0], fuel_xy[1]);
		_floatinTextReward += FCol('#DD5A00', '+' + plusFuelDaily + ' ' + LOC_FUEL + '<br>');
		if (MaAutoclikery()) {
			var _pridajAC = 100 + itemBonusOverview[111];
			PridajAutoKlicker(_pridajAC);
			F033(2, _drew_x, -80, 'icon_clicker', _drew_x, -140, clicker_xy[0], clicker_xy[1]);
			_floatinTextReward += FCol('#0093DD', '+' + PCisloJS2(_pridajAC) + ' ' + LOC_AUTOCLIKER_LABEL + '<br>');
		}
		DailyRewardVypis();
		hrac[97] = 0;
		if ($dailyGemBase + itemBonusOverview[144] > 0) {
			F033(3, _drew_x, -80, 'icon_skull', _drew_x, -140, dia_xy[0], dia_xy[1]);
			F01r(itemBonusOverview[144] + $dailyGemBase);
			_floatinTextReward += FCol('#3578C7', '+' + PCisloJS2(itemBonusOverview[144] + $dailyGemBase) + ' ' + LOC_item_popis[41] + '<br>');
		}
		if (itemBonusOverview[147] > 0) {
			var plusTickets = itemBonusOverview[147];
			var _exxxxtra = 0;
			if (IN_TEST) _exxxxtra = 100;
			if (hrac[85] + plusTickets > MaxArenaTickets() + itemBonusOverview[147] + _exxxxtra) plusTickets = MaxArenaTickets() + itemBonusOverview[147] + _exxxxtra -
				hrac[85];
			if (plusTickets < 0) plusTickets = 0;
			if (plusTickets > 0) {
				hrac[85] = hrac[85] * 1 + plusTickets;
				_floatinTextReward += FCol('#ffcc00', '+' + PCisloJS2(plusTickets) + ' ' + LOC_ARENA_your_tickets + '<br>');
			} else {
				_floatinTextReward += FCol('#FF2D00', '+0 ' + LOC_ARENA_your_tickets + '(' + LOC_SHOP_MAX + ')' + '<br>');
			}
		}
		if (itemBonusOverview[189] > 0) {
			var _plusZlato = itemBonusOverview[189];
			F038(_plusZlato, 1);
			_floatinTextReward += FCol('#FFCC00', '+' + PCisloJS2(_plusZlato) + '&nbsp;' + LOC_item_popis[21] + '<br>');
		}
		if (itemBonusOverview[165] > 0) {
			hrac[106] += itemBonusOverview[165];
			F068('hs_kluc', hrac[106]);
			_floatinTextReward += FCol('#66A1A9', '+' + PCisloJS2(itemBonusOverview[165]) + ' ' + LOC_CHEST_KEY + '<br>');
		}
		var _plusBomb = 0;
		if (itemBonusOverview[173] > 0) {
			hrac[92] += itemBonusOverview[173];
			_plusBomb += itemBonusOverview[173];
		}
		if (itemBonusOverview[196] > 0 && hrac[92] < 100) {
			hrac[92] += itemBonusOverview[196];
			_plusBomb += itemBonusOverview[196];
		}
		if (_plusBomb > 0) {
			_floatinTextReward += FCol('#DFDFDF', '+' + PCisloJS2(_plusBomb) + ' x ' + LOC_C1 + '<br>');
			F068('consumDiv', ConsumDivVnutro());
		}
		ZrobFtext3(_drew_x, -150 - (IsEvent() ? 100 : 0) - (MaHlavnuKacicku() ? 90 : 0), _floatinTextReward, 10, 5000);
		F061('bublinahore');
		SetVyberLevelDiv();
		F0z();
		F039();
		F06o(1, 1, 0, 1);
	} else {
		F03t(LOC_DAILYR2, '...');
	}
}

function FloatingClanScore(_score) {
	if (F098('klanDiv') && bestPresielLevel > 45) {
		var _drew_x = 500 + 50 - F09f(F06g('klanDiv') * 0.5) + myClanPos * 100;
		FloatingText(_drew_x, -100, '+' + _score, '#00dd55');
	}
}

function SpustiMisiuPoRefreshy() {
	var _dalsiaMisia = bestPresielLevel * 1 + 1;
	var _maxMisia = (hrac[11] * 1 + 1) * 7;
	if (!F054())
		if (bestPresielLevel < 10) {
			if (_dalsiaMisia < _maxMisia) F03x(_dalsiaMisia);
		}
}
maValorPointy = false;

function VisibleValorPoints(_strict) {
	if (maValorPointy)
		if ((PredchadzajuciLevel >= 209 && !_strict) || PredchadzajuciLevel >= 210) return true;
	if (maValorPointy)
		if (itemBonusOverview[46] > 0 && PredchadzajuciLevel >= 130) return true;
	return false;
}

function IsTutorial2() {
	return true;
}

function IsSimpleTutorialLog() {
	if (IsSimpleTutorial() && !jeLoged)
		return true;
	return false;
}

function IsSimpleTutorial() {
	if (jeSvetJS == 2) return true;
	return false;
}
var waitingForArena = false;
var pseudoListky = 0;

function OpenArena() {
	skrinaKoef = 0;
	if (PredchadzajuciLevel < 60)
		return F03t(LOC_ARENA_NIZKY_LEVEL);
	if (F055() > 0 || IsRewardVisible() || waitingForArena) return F03t(LOC_ARENA_mimo);
	var _out = '';
	if (JePlatinaArenaOdmena()) _out += (hrac[87] > 0 ? '<div id="arenaRewDiv2">' + LOC_ARENA_platinum + PCisloJS2(F09l(hrac[87] / 850000000)) + ' ' + IconValuta2(
		5) + '<br>' + F09d(LOC_TAKE, 'ZoberArenaOdmenu();') + '</div>' : '');
	else
		_out += (hrac[87] > 0 ? '<div id="arenaRewDiv2">' + LOC_ARENA_zlato + PCisloJS2(hrac[87]) + ' ' + IconValuta2(0) + '<br>' + F09d(LOC_TAKE
			, 'ZoberArenaOdmenu();') + '</div>' : '');
	_out += '<img class="wb" src="' + PicPrefix() + 'ui2/arena.jpg?v=' + picversion + '"><div id="ArenaEnemiesDiv"><img src="' + PicPrefix() +
		'ui2/loading.gif" alt="loading"></div>' + F08q('arena5Buff', 600, 265, 0, '[ ' + LOC_ARENA_buff + ' ]', LOC_ARENA_buff_hint + itemBonusOverview[163], 200, 30) +
		F08q('arenaJa', 600, 301, 0, '', '', 200, 170);
	DoPopup2(_out, '', 'infoPopup', 800, 1);
	F09b('readarena');
}
var arenaEnemies = new Array();
var mojeArenaPoradie = 0;
var mojeSkore = 0;
var vyhral = 0;
var vyhral2 = 0;
var prehral = 0;

function SetArenaEnemies(aEnemies_str, _mojePoradie, _mojeSkore, _vyhral, _vyhral2, _prehral, _display) {
	vyhral = _vyhral;
	vyhral2 = _vyhral2;
	prehral = _prehral;
	mojeArenaPoradie = _mojePoradie;
	mojeSkore = _mojeSkore;
	arenaEnemies = aEnemies_str.split(':,:');
	for (var i in arenaEnemies) arenaEnemies[i] = arenaEnemies[i].split(':;:');
	ShowArenaEnemies(_display);
}

function ShowArenaEnemies(_display) {
	var _Aout = '<div style="text-align:left;position:relative; height:315px;">';
	_Aout += PicAt('arpic1', 'ui2/arena_icon_rank.png', 30, 10, 0, LOC_ARENA_L_poradie, 34, 34);
	_Aout += PicAt('arpic2', 'ui2/arena_icon_score.png', 300, 10, 0, LOC_ARENA_L_skore, 34, 34);
	_Aout += PicAt('arpic3', 'ui2/arena_icon_level.png', 380, 10, 0, LOC_LEVEL, 34, 34);
	_Aout += PicAt('arpic4', 'ui2/arena_icon_items.png', 460, 10, 0, LOC_ARENA_L_pocetitemov, 34, 34);
	arenaEnemies.sort(function(a, b) {
		return a[3] - b[3];
	});
	for (var i in arenaEnemies) _Aout += VypisArenaEnemy(arenaEnemies[i], i);
	_Aout += F05n('bar_arena', 30, 240, 540, 22, LOC_ARENA_specitemprog, '', '');
	if (ArenaNextItemIndex() >= 0) {
		_Aout += But1xyc(LOC_takeitem, 'GrabArenaItem();', '', '', 'arenaitemtake', 628, 236, (ArenaItemReady() ? 'button' : 'button_dis'));
		var bonusySTR = VypisBonusNEW(itemyVShopeA[arenaIitemsIds[ArenaNextItemIndex()]], 3);
		_Aout += PicAt('arenaItemPic', 'veci/vec' + arenaIitemsIds[ArenaNextItemIndex()] + '.png', 572, 225, 1, bonusySTR, 50, 50, '', 'wb2');
	}
	var _extraA = '<br>Leagues: ';
	for (var i in LOC_LIGY)
		if (i > 0) {
			var _rankSRC = ' src="' + PicPrefix() + 'ui2/arena_liga' + i + '.png?v=' + picversion + '" alt="L' + i + '"';
			_extraA += '<span ' + F02o('<img' + _rankSRC + '><br>' + LOC_LIGY[i]) + '><img width="14"' + _rankSRC + '>' + LOC_LIGY[i] + ';</span>&nbsp;&nbsp;';
		}
	_Aout += F08q('arenapopiska', 30, 280, 0, LOC_Arena_popiska + _extraA, '', 740, 65);
	_Aout += '</div>';
	_Aout += PicAt('arenbuybut', 'shop/buybut.png', 765, 255, 1, '', 48, 45, 'F061(\'infoPopup\'); KupitArenaItems();');
	if (_display) {
		var _out = '';
		_out += '<div id="ArenaResultsDiv"></div>';
		_out += '<img class="wb" src="' + PicPrefix() + 'ui2/arena.jpg?v=' + picversion + '"><div id="ArenaEnemiesDiv"><img src="' + PicPrefix() +
			'ui2/loading.gif" alt="loading"></div>' + F08q('arena5Buff', 600, 265, 0, '[ ' + LOC_ARENA_buff + ' ]', LOC_ARENA_buff_hint + itemBonusOverview[163], 200
				, 30) + F08q('arenaJa', 600, 301, 0, '', '', 200, 170);
		DoPopup2(_out, '', 'infoPopup', 800, 1);
	}
	F068('ArenaEnemiesDiv', _Aout);
	SetArenaBar();
	VypisArenaJa();
}

function VypisArenaJa() {
	var _out = '<b class="superb">' + LOC_ARENA_your_stats + ':</b>';
	if (mojeArenaPoradie != 1999999999) _out += '<br># <div style="display:inline-block;font-size:25px;height:35px;line-height:35px;">' + LigaPoradie(
		mojeArenaPoradie) + '</div>' + LigaPic(mojeArenaPoradie, 35);
	_out += '<br>' + LOC_ARENA_your_tickets + ': ' + PCisloJS2(Math.min(MaxArenaTickets(), hrac[85]), (hrac[85] >= MaxArenaTickets() ? 'cervena2' : '')) + (hrac[
		85] >= MaxArenaTickets() ? (hrac[85] - MaxArenaTickets() > 0 ? '+' + (hrac[85] - MaxArenaTickets()) : '') + '(MAX)' : '');
	_out += '<br>' + LOC_ARENA_your_skore + ': ' + F06j(mojeSkore);
	_out += '<br>--------------';
	_out += '<br>' + LOC_ARENA_your_vyhral + ': ' + PCisloJS2(vyhral);
	_out += '<br>' + LOC_ARENA_your_vyhral2 + ': ' + PCisloJS2(vyhral2);
	_out += '<br>' + LOC_ARENA_your_prehral + ': ' + PCisloJS2(prehral);
	F068('arenaJa', '<div id="arenaJaIn">' + _out + '</div>');
	F08c('arenaJa');
	if ((vyhral + prehral) % 5 == 4 && itemBonusOverview[163] > 0) F08c('arena5Buff');
	else F07g('arena5Buff');
	DeselectAll();
}

function MaxArenaTickets() {
	return 4 + itemBonusOverview[127];
}
var ligyDifs = [1, 50, 150, 300, 500, 750, 1000, 1400, 2000];

function LigaRank(_rank) {
	for (var i in ligyDifs)
		if (_rank < ligyDifs[i]) return 1 * i;
	return 9;
}

function LigaPoradie(_rank) {
	var _ligaRank = LigaRank(_rank);
	return _rank - ligyDifs[_ligaRank - 1] + 1;
}

function LigaPic(_rank, _size) {
	if (!_size) _size = 50;
	var _rankPic = LigaRank(_rank);
	var _rankSRC = 'src="' + PicPrefix() + 'ui2/arena_liga' + _rankPic + '.png?v=' + picversion + '" alt="L' + _rankPic + '"';
	return '<img style="margin-bottom:-7px;" height="' + _size + '" ' + F02o('<img ' + _rankSRC + '><br>' + LOC_LIGY[_rankPic] + ' ' + LOC_LIGA) + _rankSRC + '>';
}

function VypisArenaEnemy(_aEnemy, _i) {
	var _out = '';
	_out += F08q('a_1_' + _i, 5, 14, 0, F09k('mini6', '#' + LigaPoradie(_aEnemy[3])), (mojeArenaPoradie == 1999999999 ? '-' : LOC_ITEM_pocetkusov + ': #' +
		LigaPoradie(mojeArenaPoradie) + ' ' + LOC_LIGY[LigaRank(mojeArenaPoradie)]));
	_out += F08q('a_liga_' + _i, 30, -1, 0, LigaPic(_aEnemy[3]), '');
	if (!somvofcbJS) _out += PicAt('picar' + _i, MissionPicSrc((_aEnemy[7] > 0 ? _aEnemy[7] : 50 + (_aEnemy[4] % 6))), 80, 7, 0, '', 34, 34, '', 'wb');
	_out += F08q('a_2_' + _i, 120, 14, 0, '<b>' + _aEnemy[2] + '</b>', '');
	_out += F08q('a_3_' + _i, 290, 14, 0, F09k((mojeSkore > _aEnemy[4] ? 'mini6' : ''), _aEnemy[4]), LOC_ITEM_pocetkusov + ': ' + mojeSkore);
	_out += F08q('a_4_' + _i, 360, 14, 0, F09k((PredchadzajuciLevel < _aEnemy[5] ? 'mini6' : ''), _aEnemy[5]), LOC_ITEM_pocetkusov + ': ' + PredchadzajuciLevel);
	_out += F08q('a_5_' + _i, 430, 14, 0, F09k((pocetItemov < _aEnemy[6] ? 'mini6' : ''), PCisloJS2(_aEnemy[6])), LOC_ITEM_pocetkusov + ': ' + PCisloJS2(
		pocetItemov));
	_out += PicAt('a_6_' + _i, 'ui2/menu_arena.png?v=' + picversion, 488, 7, 0, LOC_ARENA_boj + ' <b>' + _aEnemy[2] + '</b>!', 36, 36, 'FightArenaEnemy(' +
		_aEnemy[0] + ',1);', 'wbh');
	if (PredchadzajuciLevel >= 500 && hrac[85] >= 5) _out += PicAt('a_7_' + _i, 'ui2/menu_arena5.png?v=' + picversion, 530, -2, 0, LOC_ARENA_boj + ' <b>' +
		_aEnemy[2] + '</b>!<br><br>' + LOC_ARENA_boj5, 25, 25, 'FightArenaEnemy(' + _aEnemy[0] + ',2);', 'wbh');
	if (PredchadzajuciLevel >= 500 && hrac[85] >= 10) _out += PicAt('a_8_' + _i, 'ui2/menu_arena10.png?v=' + picversion, 530, 26, 0, LOC_ARENA_boj + ' <b>' +
		_aEnemy[2] + '</b>!<br><br>' + LOC_ARENA_boj10, 25, 25, 'FightArenaEnemy(' + _aEnemy[0] + ',3);', 'wbh');
	return F08q('arenaOn' + _i, 20, 50 + 60 * _i, 0, _out, '', 550, 50);
}

function FightArenaEnemy(_i, _type) {
	F061('bublinahore');
	if (IsRewardVisible()) {
		F061('infoPopup');
		return F03t(LOC_TAKE_REWARD_FIRST, ' ');
	}
	if (hrac[85] <= 0) return F03t(LOC_NO_ARENA_TICKETS);
	waitingForArena = true;
	F068('ArenaEnemiesDiv', '<br><br>' + LOC_ARENA_LOADING + '<br><br><img src="' + PicPrefix() +
		'ui2/loading.gif" alt="loading"><div style="text-align:left;position:relative; height:255px;"></div>');
	F02t(120, _type * 100000000 + _i);
	F06o(1, 1, 1, 1);
}

function VysledkyArenaBoja(_wl, _lava, _prava, _wonSkore, _bolCrit) {
	F03e();
	var _out = '';
	if (_wl == 1) _out += '<span class="arenaWon">' + LOC_ARENA_WON + '</span>';
	else
		_out += '<span class="arenaLost">' + LOC_ARENA_LOST + '</span>';
	if (_bolCrit) _out += SPC + F09k('arenaCritical', LOC_ARENA_critical);
	_out += '<br><div id="arenaRatioDiv"><div style="position:absolute; width:250px; top:5px;left:-260px; text-align:right;">' + LOC_ARENA_mojasila + '</div>' +
		F05n('arenaratio', 0, 0, 300, 30, LOC_ARENA_GRAF, '') + '<div style="position:absolute;text-align:left;top:5px;left:310px;width:300px;">' +
		LOC_ARENA_jehosila + '</div></div>';
	if (hrac[87] > 0) {
		if (JePlatinaArenaOdmena()) _out += '<br>' + LOC_ARENA_platinum + PCisloJS2(F09l(hrac[87] / 850000000)) + IconValuta2(5) + '<br>' + F09k('mini5'
			, LOC_ARENA_platinum2) + '<br>';
		else
			_out += '<br>' + LOC_ARENA_zlato + PCisloJS2(hrac[87]) + IconValuta2(0) + '<br>';
		_out += F09d(LOC_TAKE, 'ZoberArenaOdmenu(0);');
		if (_wonSkore > 0) _out += '<br><br>' + LOC_ARENA_L_skore + ':&nbsp;+' + IconPic('ui2/arena_icon_score', -10) + _wonSkore + '<br>';
		if (_wonSkore < 0) _out += '<br><br>' + LOC_ARENA_L_skore + ':&nbsp;' + IconPic('ui2/arena_icon_score', -10) + _wonSkore + '<br>';
	} else {
		if (_wonSkore < 0) _out += '<br><br>' + LOC_ARENA_L_skore + ':&nbsp;' + IconPic('ui2/arena_icon_score', -10) + _wonSkore + '<br>';
		_out += '<br><img alt="ico" onclick="F061(\'infoPopup\');" class="wbh" src="' + PicPrefix() + 'ui2/menu_cancel.png?v=' + picversion + '" ' + F02o(LOC_CLOSE) +
			'>' + SPC + '<img alt="ico" onclick="OpenArena();" class="wbh" src="' + PicPrefix() + 'ui2/menu_arena.png?v=' + picversion + '" ' + F02o(LOC_ARENA_BUT) +
			'>';
	}
	if (_lava > _prava) _lava = F09f(_lava * 1.2);
	else if (_lava < _prava) _prava = F09f(_prava * 1.2);
	var spolu_A = F09f(10 * (_lava + _prava));
	F068('ArenaResultsDiv', _out);
	F08c('ArenaResultsDiv');
	F086('arenaratio', spolu_A - F09f(_prava * 10), spolu_A);
}

function JePlatinaArenaOdmena() {
	if ((jeAutoPilot && JePlatina() && hrac[87] >= 850000000) || hrac[87] >= 49111000111000) return true;
	return false;
}

function ZoberArenaOdmenu(ajClose) {
	anyActivity = 1;
	if (hrac[87] > 0) {
		if (JePlatinaArenaOdmena()) {
			F02t(124, hrac[87]);
			PridajPlatinu(F09l(hrac[87] / 850000000), 1);
			hrac[87] = 0;
		} else {
			for (var i = 0; i < 5; i++) ZrobZlato2(500, 400);
			F02t(121, hrac[87]);
			F038(hrac[87]);
			hrac[87] = 0;
		}
	}
	if (ajClose) F061('infoPopup');
	else {
		F07g('ArenaResultsDiv');
		F07g('arenaRewDiv2');
	}
}

function ArenaIsEmpty() {
	F068('ArenaEnemiesDiv', LOC_ARENA_EMPTY);
	F07g('arenaJa');
}
var _ARENALEVEL = 40;

function MaArenu() {
	if (ma_arenu && PredchadzajuciLevel >= _ARENALEVEL) return true;
	else return false;
}
var arenaIScores = new Array(75, 200, 400, 800, 1500, 2000, 2500, 3000, 4000, 5000, 7500, 10000, 13000, 16000, 20000, 25000, 35000, 45000, 60000, 75000, 90000
	, 100000, 120000, 140000, 200000);
var arenaIitemsIds = new Array(463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 570, 572, 724, 725, 882, 883, 1009, 1167, 1289, 1481, 1498, 1499, 1778, 1906
	, 2517);

function ArenaNextItemIndex() {
	for (var i in arenaIitemsIds)
		if (F05p(arenaIitemsIds[i]) <= 0) return i;
	return -1;
}

function ArenaItemReady() {
	for (var i in arenaIitemsIds)
		if (F05p(arenaIitemsIds[i]) <= 0)
			if (mojeSkore >= arenaIScores[i]) return arenaIitemsIds[i];
			else
				return 0;
	return 0;
}

function SetArenaBar() {
	var _arenaMaxSkore = arenaIScores[ArenaNextItemIndex()];
	if (_arenaMaxSkore >= 0) F086('bar_arena', mojeSkore, _arenaMaxSkore, 1, '', SPC + '(' + LOC_ARENA_L_skore + ')', 0, '');
	else F086('bar_arena', mojeSkore, mojeSkore, 1, '', SPC + '(MAX)', 0, '');
}

function GrabArenaItem() {
	var grabItemId = ArenaItemReady();
	if (grabItemId) {
		F07g('infoPopup');
		hracVeciA[grabItemId] = 1;
		hrac[H_VECI] = hracVeciA.join(';');
		F02t(47, grabItemId);
		F046();
		OpenShop1(1000000 + grabItemId, 0);
	}
}

function JePlatina() {
	if (bestPresielLevel >= 106 || hrac[89] > 0 || (hrac[11] >= 15 && PredchadzajuciLevel > 285 - (hrac[11] - 15) * _ITEM_LVL_POSUN_ZA_KAPITOLU)) return true;
	return false;
}

function SuRubiny() {
	if (PredchadzajuciLevel >= 950) return true;
	return false;
}
gemNotSaved = true;

function MapujGemy(_kde) {
	return false;
}

function VypisDivPodHrou() {
	var _out = VypisDivPodHrou2();
	if (_out == '') F07g('podHrouDiv');
	else F068('podHrouDiv', _out);
}
var recitems = [1, 2, 3, 4, 5, 125, 33, 6, 7, 8, 9, 10, 35, 178, 14, 175, 42, 176, 31, 30, 13, 32, 58, 59, 126, 177, 41, 45, 61, 62];
var recitemsH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1];
var pocetZobrazRec = 0;

function RecommendedShop() {
	{
		F07g('recshopdiv');
		return false;
	}
	F08c('recshopdiv');
	var _out = LOC_REC_SHOP + '<br>';
	for (var i in recitems) {
		_out += ShopItemRec1(recitems[i], i, pocetZobrazRec);
	}
	_out += '<br>' + LOC_REC_SHOP4 + ' [' + F07f(LOC_auto_changehere, 'OpenShop1(0,0);') + ']<br>';
	F068('recshopdiv', _out);
	for (var i in recitems) NastavRecItemBar(recitems[i]);
}

function ShopItemRec1(_id, por, _poc) {
	if (_poc >= 12) return '';
	var _vec1 = ShopItemBlok(itemyVShopeA[_id], 1, 0);
	if (_vec1)
		if (PredchadzajuciLevel >= itemyVShopeA[_id][1][6]) {
			pocetZobrazRec++;
			var _hint = '';
			_hint += F09a('clasichint', LOC_REC_SHOP3[recitemsH[por]]);
			_hint += '<hr><div class="itemrecshophintdiv">' + VypisBonusNEW(itemyVShopeA[_id], 3);
			var _cena = F06b(itemyVShopeA[_id]);
			_hint += '<br>' + LOC_ITEM_cena + '<b>' + PCisloJS2(_cena) + '</b> ' + IconValuta2(itemyVShopeA[_id][1][1]);
			_hint += SPC + SPC + LOC_OWNED + ': ' + F05p(_id) + ' / ' + F05j(itemyVShopeA[_id]);
			return '<div class="recdiv"><img class="recimg"' + F02o(_hint, 350) + ' src="' + PicPrefix() + 'veci/vec' + _id + '.png?v=' + (picversion + picversionVeci) +
				'" onmousedown="bolLevelUpClosedShop=true; F08a(event,' + _id + ',0); F03b();"><br><div class="absdiv recbar"><div class="absdiv recbarIn" id="recbarin' +
				_id + '"> </div></div></div>';
		}
	return '';
}

function NastavRecItemBar(_id) {
	if (F05j(itemyVShopeA[_id]) <= 0) return false;
	var _sirka = 55;
	if (F098('recbarin' + _id)) F098('recbarin' + _id)
		.style.width = F09l((F05p(_id) / F05j(itemyVShopeA[_id])) * _sirka) + 'px';
}
var page_like_or_unlike_callback = function(url, html_element) {
	F07b('Thank you for your like!<br><br>Be sure to visit the fan site and grab bonus Fuel and bonus Autoclickers!', 400, 'Thank you!');
	console.log(url);
	console.log(html_element);
};
var premiumEventEndBuy = 0;
var eventStarterItem = 0;
var event_start = 0;
var event_end = 0;
var event_ktore = [];
var event_name = '';
var event_picK = 0;
var event_odmeny = [5, 6, 8, 10, 12];

function EventIkona() {
	return IconValuta2(100 + event_picK * 1, -7);
}

function IsEvent(extraTime) {
	if (!extraTime) extraTime = 0;
	if (!premiumEvent || hracVeciA[eventStarterItem])
		if (PHPtime2 >= event_start && PHPtime2 < event_end + extraTime && PredchadzajuciLevel >= 30) return true;
	return false;
}

function EventMisIndex(_i) {
	return 10000 + event_ktore[_i] * 1;
}

function ZacniEventMisiu(_i) {
	eventMisIndex = EventMisIndex(_i);
	F03x(eventMisIndex);
}

function EventIndexDifficult(_i) {
	if (hrac[43] > 21) return (F09i((hrac[43] - 1) / 7) - 2) * 7 + 1 + (_i * 1);
	return hrac[43];
}

function MaHlavnuKacicku() {
	return (hrac[64] <= 0 && PredchadzajuciLevel > 350 ? 1 : 0);
}

function VypisKacicky() {
	if (MaHlavnuKacicku()) {
		F068('kacickadiv', '<br><img src="' + PicPrefix() + 'ui2/kacicka1.jpg?v2=' + picversion +
			'" style="border:1px #000 solid;cursor:pointer;" onclick="OfferClick(22);">');
		F08c('kacickadiv');
	} else {
		F07g('kacickadiv');
	}
}

function VypisEventDiv() {
	var _out = '<center>';
	var kolkoEmisii = 0;
	for (var i in event_ktore) {
		kolkoEmisii++;
		var novyELvl = CopyArray(herne_levelyA[EventIndexDifficult(i)]);
		novyELvl[0] = EventMisIndex(i);
		novyELvl[1] = EventMisIndex(i) + '' + event_PicCode;
		novyELvl[3] = 0;
		novyELvl[5] = 0;
		novyELvl[6] = 0;
		novyELvl[7] = 5;
		novyELvl[14] = 0;
		novyELvl[9] = 0;
		novyELvl[15] = event_odmeny[i];
		herne_levelyA[EventMisIndex(i)] = herne_levely[EventMisIndex(i)] = novyELvl;
		var _hint = LOC_DIF[i];
		eveMisID = event_ktore[i];
		if (PocetPrejdeni(EventMisIndex(i))) _hint += '<br><br>' + LOC_PRESIEL_LEVEL_pocet + PocetPrejdeni(EventMisIndex(i)) + '';
		_hint += '<br><br>' + LOC_fuelcost + ': 5' + IconValuta2(2);
		_hint += '<br><br>' + LOC_REWARD + ': +' + event_odmeny[i] + EventIkona();
		var _akomisia = (F09i((bestPresielLevel - 1) / 7) - 2) * 7 + 1 + (i * 1);
		_hint += '<br><br>' + LOC_EVENT6 + _akomisia;
		if (i == 0 || PocetPrejdeni(EventMisIndex(i - 1)) > 0) _out += '<img onclick="ZacniEventMisiu(' + i + ');" ' + F02o(_hint, 300) +
			' class="wbh evenimg" src="' + PicPrefix() + 'zeny/map/' + EventMisIndex(i) + '.png?v2=' + picversion + '" alt="a">';
		else
			_out += '<img ' + F02o(_hint) + ' class="evenimg" width="80" src="' + PicPrefix() + 'veci/veclocked.png" alt="a">';
	}
	var konciEStr = '<br>' + LOC_EVENT2;
	konciEStr = konciEStr.split('XYZ');
	_dniDoKoncaE = F09i((event_end - PHPtime2) / 86400);
	if (_dniDoKoncaE < 1) _dniDoKoncaE = 1;
	konciEStr = konciEStr.join(_dniDoKoncaE);
	if (hrac[98] > 0) {
		konciEStr += PicAt('eventshopbut', 'shop/buybut.png', 215, 20, 1, LOC_EVENT7, 48, 45, 'OpenShop(10,0,1);', 'wbh');
		if (JeChestaSpecial()) konciEStr += PicAt('eventshopbut2', 'ui2/mainbuts/chest_light.png', 275, 5, 1, LOC_CHEST_LABEL, 100, 74, 'OpenChestMenu();', '');
	}
	_out += '<div id="eventMenaDiv"><b>' + event_name + '</b><br>' + LOC_ITEM_pocetkusov + ' ' + '<span id="eventMena" style="font-weight:bold;">' + PCisloJS2(
		hrac[98]) + '</span>' + ' ' + EventIkona() + '<br>' + F09k('mini7', LOC_EVENT1 + konciEStr) + '</div></center>';
	if (IsEvent()) {
		if (!F055() && eventBublinaLenRaz > 0 && PocetPrejdeni(EventMisIndex(0)) <= 0) {
			BublinaHore(FSize(10, LOC_EVENT5), 200, -65);
			eventBublinaLenRaz--;
		}
		if (F098('body2Id2')) F098('body2Id2')
			.style.height = '1100px';
		F068('eventdiv', _out);
		if (F098('eventdiv')) F098('eventdiv')
			.style.width = (225 + 20 + 105 * Math.max(4, kolkoEmisii)) + 'px';
		F08c('eventdiv');
		F061('eventdivBuy');
	} else {
		if (PHPtime2 > event_start)
			if (eventStarterItem > 0 && premiumEvent && PHPtime2 < premiumEventEndBuy && !hracVeciA[eventStarterItem]) {
				_out = '';
				_out += '<img alt="premiumevent" src="' + PicPrefix() + 'ui2/premiumevent' + premiumEvent + '.jpg?v=' + picversion + '">';
				F068('eventdivBuy', _out);
				F061('bublinahore');
				F08c('eventdivBuy');
				F061('eventdiv');
				return false;
			}
		F061('eventdiv');
		F061('eventdivBuy');
	}
}
var premiumEventItems = [];

function BuyEventMenu() {
	if (eventStarterItem > 0 && premiumEvent && PHPtime2 < premiumEventEndBuy && F05p(eventStarterItem) <= 0) {
		var _out = '';
		_out += '<img alt="premiumevent" src="' + PicPrefix() + 'ui2/premiumevent' + premiumEvent + '.jpg?v=' + picversion + '">';
		_out += '<br><br>The first Premium Event in Army Clicker is here!<br>Purchase the access, and you will be able to earn:';
		_out += '<ul style="text-align:left;"><li>these new Items:</li>';
		for (var i in premiumEventItems) {
			_out += '<img width="70" src="' + PicPrefix() + 'veci/vec' + premiumEventItems[i] + '.png?v=' + (picversion + picversionVeci) + '" ' + F02o(VypisBonusNEW(
				itemyVShopeA[premiumEventItems[i]], 1)) + '>';
		}
		_out += '<li>4 Event-exclusive art pieces</li>';
		_out += '<li>Event currency to catch up on items from previous Events</li>';
		_out += '<li>Event will be active until ' + F08k(event_end) + ' GMT</li>';
		_out += '</ul>';
		_out += '<img alt="kup" src="' + PicPrefix() + 'ui2/event_buy.png?v=' + picversion + '" class="wbh" onclick="BuyEvent();">';
		DoPopup2(_out, '', 'infoPopup2', 750, 1);
		return true;
	}
	return false;
}

function BuyEvent() {
	F061('infoPopup2');
	var _cena = 9999;
	if (hrac[9] < _cena) {
		return OtvorOknoGemyLepsie(18, F09k('white', LOC_NEMASDIA) + '<br>');
	}
	if (eventStarterItem > 0 && F05p(eventStarterItem) <= 0) {
		hracVeciA[eventStarterItem] = 1;
		hrac[H_VECI] = hracVeciA.join(';');
		PridajJednorazBonusZveci(itemyVShopeA[eventStarterItem][4]);
		hrac[9] -= _cena;
		F02t(48, eventStarterItem);
		F046();
	}
}
var eventBublinaLenRaz = 2;

function PridajEventMenu(_kolko) {
	hrac[98] += _kolko;
}
var upgradeHCost = 250;
var upgradeHTime = 86400;
slot_usedA = [];
slot_freeA = [];

function OpenModules(_pomi) {
	return UpgradePomPop(_pomi);
}

function UpgradePomPop(_pomi) {
	F03e();
	if (F055())
		return F03t(LOC_modul_MIS);
	var _out = '<div id="upgradeHelperDivPic"></div>';
	_out += '<div id="nasivkyDiv"></div><br>' + F09k('mini6', LOC_DRAGDROP_tut);
	DoPopup2(_out, LOC_upgrade_helper + '<span id="modulpresetlabel"></span>', 'infoPopup', 980, 1);
	VypisNasivkyDole();
	VypisNasivkyHore();
	return true;
}
var pomocBonusySpolu = [];
var pomocBonusyModulsUsed = [];
var pomocBonusyEffects = [];

function ZratajPomocBonusyJS() {
	pomocBonusyModulsUsed = [];
	pomocBonusySpolu = [0, 0, 0, 0, 0];
	pomocBonusyEffects = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (var i in slot_freeA)
		for (var j = 0; j < slot_freeA[i]; j++) {
			var bonusItemID = 0;
			var _slotIndex = 4 * j * 1 + i * 1;
			if (slot_usedA[_slotIndex]) bonusItemID = slot_usedA[4 * j * 1 + i * 1];
			if (bonusItemID > 0) {
				bonusItem = itemyVShopeA[bonusItemID];
				for (var b in bonusItem[4]) {
					if (bonusItem[4][b][1] == 167) pomocBonusySpolu[i] += bonusItem[4][b][0];
					if (bonusItem[4][b][1] == 176) pomocBonusySpolu[i] -= bonusItem[4][b][0];
					if (bonusItem[4][b][1] == 174)
						for (var iii = 0; iii < 4; iii++) pomocBonusySpolu[iii] += bonusItem[4][b][0];
					if (bonusItem[4][b][1] == 175)
						for (var iii = 0; iii < 4; iii++)
							if (iii != i) pomocBonusySpolu[iii] += bonusItem[4][b][0];
					pomocBonusyEffects[bonusItem[4][b][1]] += bonusItem[4][b][0];
				}
				if (!pomocBonusyModulsUsed[bonusItemID]) pomocBonusyModulsUsed[bonusItemID] = 0;
				pomocBonusyModulsUsed[bonusItemID]++;
			}
		}
}
var aktivnySet = 1;

function SetPreset(_ktory) {
	if (aktivnySet != _ktory) {
		if (_ktory < 1) _ktory = 1;
		if (_ktory > 4) _ktory = 4;
		presets[aktivnySet] = CopyArray(slot_usedA);
		slot_usedA = CopyArray(presets[_ktory]);
		aktivnySet = _ktory;
		PrepisAkciuAkRovnaka(145, _ktory);
		VypisNasivkyHore();
		slotyOD = 0;
		VypisNasivkyDole();
		F03b();
		F046();
	}
}
var VIAC_MDL_LVL = 500;

function VypisNasivkyHore() {
	ZratajPomocBonusyJS();
	var usedSlots = '';
	var horneTaby = '';
	if (pocetItemovModul > 3) {
		horneTaby += '<div id="horneModTaby">';
		horneTaby += But2('PRESET 1', 'SetPreset(1);', LOC_PRESET_HINT, (aktivnySet == 1 ? 0 : 1));
		horneTaby += But2('PRESET 2', 'SetPreset(2);', LOC_PRESET_HINT, (aktivnySet == 2 ? 0 : 1));
		horneTaby += But2('PRESET 3', 'SetPreset(3);', LOC_PRESET_HINT, (aktivnySet == 3 ? 0 : 1));
		horneTaby += '</div>';
	}
	for (var i in slot_freeA) {
		for (var j = 0; j < slot_freeA[i]; j++) {
			if (PredchadzajuciLevel > VIAC_MDL_LVL) {
				var _x = i * 225 + j % 3 * 75 + 7;
				var _y = 442 - 75 - F09i(j / 3) * 75;
			} else {
				var _x = i * 225 + j % 2 * 105 + 14;
				var _y = 442 - 105 - F09i(j / 2) * 105;
			}
			var bonusItemID = 0;
			var _slotIndex = 4 * j * 1 + i * 1;
			if (slot_usedA[_slotIndex]) bonusItemID = slot_usedA[4 * j * 1 + i * 1];
			bonusItem = itemyVShopeA[bonusItemID];
			freeModuleHint = HelperPopiska(201 + i * 1) + '<br>' + LOC_MOD_FREE;
			usedSlots += '<div ' + (bonusItemID <= 0 ? F02o(freeModuleHint) : '') + ' class="nasivka_slot' + (PredchadzajuciLevel > VIAC_MDL_LVL ? 2 : '') + ' nslot' +
				(i * 1 + 1) + '" style="left:' + _x + 'px; top:' + _y + 'px;">' + (bonusItemID > 0 ? '<img class="nasivka_slot_img' + (PredchadzajuciLevel > VIAC_MDL_LVL ?
						2 : '') + '" onmousedown="GrabNasivka(event,' + bonusItemID + ',' + (i * 1 + 1) + ',' + _slotIndex + '); return false;" onclick="RemoveNasivka(' +
					_slotIndex + ');" ' + F02o((IN_TEST ? '[' + bonusItemID + ']' : '') + (PredchadzajuciLevel < 385 ? LOC_DRAGtoRemove + '<br><br>' : '') + VypisBonusNEW(
						bonusItem, 4), 450) + ' src="' + PicPrefix() + 'veci/vec' + bonusItemID + '.png?v=' + (picversion + picversionVeci) + '">' : '');
			var _fuelneed = F015(bonusItemID, 212);
			if (_fuelneed)
				for (var f = 0; f < _fuelneed; f++) usedSlots += '<img class="modulfuelicon" style="left:' + (PredchadzajuciLevel > VIAC_MDL_LVL ? 50 : 80) + 'px;top:' + (-
					2 + 15 * f) + 'px" src="' + PicPrefix() + '/shop/shop_i4.png?v=' + picversion + '">';
			var _autoNeeded = F015(bonusItemID, 223);
			if (_autoNeeded)
				for (var f = 0; f < _autoNeeded; f++) usedSlots += '<img class="modulfuelicon" style="left:' + (PredchadzajuciLevel > VIAC_MDL_LVL ? 50 : 80) + 'px;top:' +
					(-2 + 15 * f) + 'px" src="' + PicPrefix() + '/shop/valuta3.png?v=' + picversion + '">';
			usedSlots += '</div>';
		}
	}
	if (pomocBonusyEffects[212] > 0) usedSlots += F08q('totalfuelused1', 370, -20, 1, FSize(12, LOC_TOTAL + ':&nbsp;-' + pomocBonusyEffects[212] +
		'&nbsp;<img src="' + PicPrefix() + '/shop/shop_i4.png?v=' + picversion + '">&nbsp;' + LOC_item_popis[212]));
	if (pomocBonusyEffects[223] > 0) usedSlots += F08q('totalfuelused1', 10, -20, 1, FSize(12, LOC_TOTAL + ':&nbsp;-' + PCisloJS2(pomocBonusyEffects[223] * 1000) +
		'&nbsp;<img src="' + PicPrefix() + '/shop/valuta3.png?v=' + picversion + '">&nbsp;' + LOC_item_popis[223]));
	for (var i = 0; i < 4; i++) {
		usedSlots += '<div class="pomocPerSpolu' + (pomocBonusySpolu[i] < 0 ? ' cervena' : '') + '" style="right:' + (680 - i * 225) + 'px;">' + (pomocBonusySpolu[i] >
			0 ? '+' : '') + pomocBonusySpolu[i] + '%<br>' + F09k('miniModText', '(' + (pomocBonusySpolu[i] < 0 ? '-' : '') + PCisloJS2(Math.abs(BonusZModulov(i))) +
			')') + '</div>';
	}
	F068('modulpresetlabel', SPC + '#' + aktivnySet);
	F068('upgradeHelperDivPic', horneTaby + usedSlots);
}

function BonusZModulov(i) {
	if (i == 0) return KratPercentoJS2(F0w(), pomocBonusySpolu[i]);
	if (i == 1) return KratPercentoJS2(F012(), pomocBonusySpolu[1]);
	if (i == 2) return KratPercentoJS2(F01o(), pomocBonusySpolu[2]);
	if (i == 3) return KratPercentoJS2(F0v(), pomocBonusySpolu[3]);
}

function RemoveNasivka(_slotIndex, _ignoreVypis) {
	slot_usedA[_slotIndex] = 0;
	VypisNasivkyHore();
	VypisNasivkyDole();
	F02t(140, _slotIndex);
	grabedNasivkaZoZony = 0;
	grabedNasivkaSlot = -1;
	F03b();
	Vypis_kontainer_pomocnicky();
	if (!_ignoreVypis) {
		F046();
	}
}
slotyOD = 0;
slotyDoMax = 99999;
var slotyPoKolko = 30;
var slotyPoKolkoPol = 15;
var active_module_fil = 5;

function VypisNasivkyDole() {
	if (slotyOD < 0) slotyOD = 0;
	if (slotyOD > slotyDoMax - slotyPoKolko) slotyOD = slotyDoMax - slotyPoKolko;
	if (slotyOD < 0) slotyOD = 0;
	var itemyCoSaDaju = '';
	var _poradie = 0;
	var _poradie2 = 0;
	var _leftshopx = 897;
	slotyDoMax = 0;
	var modulySorted = [];
	for (var i in itemyVShopeA)
		if (itemyVShopeA[i][4][0][1] == 167 || itemyVShopeA[i][4][0][1] == 174 || itemyVShopeA[i][4][0][1] == 175 || itemyVShopeA[i][4][0][1] == 176 || itemyVShopeA[
				i][4][0][1] == 201 || itemyVShopeA[i][4][0][1] == 202 || itemyVShopeA[i][4][0][1] == 203 || itemyVShopeA[i][4][0][1] == 204 || itemyVShopeA[i][4][0][1] ==
			224 || itemyVShopeA[i][4][0][1] == 205) modulySorted[i] = itemyVShopeA[i];
	modulySorted.sort(function(a, b) {
		return b[4][0][0] - a[4][0][0];
	});
	if (pocetItemovModul > 24) {
		itemyCoSaDaju += '<div id="modfilterdiv">';
		itemyCoSaDaju += F08q('filtertext', 5, 2, 1, LOC_MOD_FIL + ':');
		var _modfposun = 65;
		var _spc = '&nbsp;::&nbsp;';
		itemyCoSaDaju += F07f(ActFilStyle(LOC_MOD_FIL5, 5), 'NastavModuleFilter(5);', LOC_MOD_FIL) + _spc;
		itemyCoSaDaju += F07f(ActFilStyle(LOC_MOD_FIL1, 1), 'NastavModuleFilter(1);', LOC_MOD_FIL) + _spc;
		itemyCoSaDaju += F07f(ActFilStyle(LOC_MOD_FIL2, 2), 'NastavModuleFilter(2);', LOC_MOD_FIL) + _spc;
		itemyCoSaDaju += F07f(ActFilStyle(LOC_MOD_FIL3, 3), 'NastavModuleFilter(3);', LOC_MOD_FIL) + _spc;
		itemyCoSaDaju += F07f(ActFilStyle(LOC_MOD_FIL4, 4), 'NastavModuleFilter(4);', LOC_MOD_FIL) + _spc;
		itemyCoSaDaju += F07f(ActFilStyle(LOC_MOD_FIL6, 6), 'NastavModuleFilter(6);', LOC_MOD_FIL) + _spc;
		itemyCoSaDaju += F07f(ActFilStyle(LOC_MOD_FIL7, 7), 'NastavModuleFilter(7);', LOC_MOD_FIL) + _spc;
		itemyCoSaDaju += F07f(ActFilStyle(LOC_MOD_FIL8, 8), 'NastavModuleFilter(8);', LOC_MOD_FIL);
		itemyCoSaDaju += '</div>';
	}
	try {
		var pouzityModule = [];
		for (var i in modulySorted)
			if (!pouzityModule[i]) {
				var _itemID = modulySorted[i][0];
				var _pocet = F05p(_itemID);
				if (!pomocBonusyModulsUsed[_itemID]) pomocBonusyModulsUsed[_itemID] = 0;
				if (_pocet - pomocBonusyModulsUsed[_itemID] > 0)
					for (var a = 0; a < 4; a++)
						if (modulySorted[i][4][a])
							if (active_module_fil == 5 || ((active_module_fil >= 1 && active_module_fil <= 4) && (active_module_fil == modulySorted[i][4][a][1] - 200)) || ((
									active_module_fil == 1 || active_module_fil == 3) && modulySorted[i][4][a][1] == 224) || (active_module_fil == 6 && (modulySorted[i][4][a][1] == 167 ||
									modulySorted[i][4][a][1] == 176)) || (active_module_fil == 7 && (modulySorted[i][4][a][1] == 174 || modulySorted[i][4][a][1] == 175)) || (
									active_module_fil == 8 && (modulySorted[i][4][a][1] == 167 || modulySorted[i][4][a][1] == 174 || modulySorted[i][4][a][1] == 175 || modulySorted[i][4]
										[a][1] == 176))) {
								var item1B = modulySorted[i][4];
								pouzityModule[i] = 1;
								_poradie++;
								if (_poradie > slotyOD && _poradie <= slotyOD + slotyPoKolko) {
									var _x = -20 + (_poradie2 % slotyPoKolkoPol) * 55;
									var _y = F09i(_poradie2 / slotyPoKolkoPol) * 55 + 28;
									var _mozemPocet = _pocet - pomocBonusyModulsUsed[_itemID];
									itemyCoSaDaju += '<div class="nasivka_dole" style="left:' + _x + 'px;top:' + _y + 'px;"><img onmousedown="GrabNasivka(event,' + _itemID +
										',0,-1); return false;" ' + F02o(VypisBonusNEW(itemyVShopeA[_itemID], 4) + '<br><br>' + LOC_ITEM_pocetkusov + ':' + ' ' + '<b>' + _mozemPocet +
											'</b>' + '<br><br>' + LOC_DRAGDROP, 450) + ' src="' + PicPrefix() + 'veci/vec' + _itemID + '.png?v=' + (picversion + picversionVeci) + '"></div>';
									_poradie2++;
								}
								break;
							}
			}
	} catch (e) {
		alert(e);
	}
	if (_poradie2 < 8) _leftshopx = _poradie2 * 100 + 10;
	slotyDoMax = _poradie;
	if (slotyOD > 0) itemyCoSaDaju += '<img style="position:absolute; left:815px; top:30px; cursor:pointer;" onclick="slotyOD-=' + slotyPoKolko +
		'; VypisNasivkyDole();" src="' + PicPrefix() + 'shop/up_line.png?v=' + picversion + '" att="next">';
	if (slotyOD < slotyDoMax - slotyPoKolko) itemyCoSaDaju += '<img style="position:absolute; left:855px; top:30px; cursor:pointer;" onclick="slotyOD+=' +
		slotyPoKolko + '; VypisNasivkyDole();" src="' + PicPrefix() + 'shop/down_line.png?v=' + picversion + '" att="prev">';
	if (_poradie2 < 1) itemyCoSaDaju += F08q('pomockahint', 100, 40, 0, LOC_NoModules);
	itemyCoSaDaju += '<img class="wbh" style="position:absolute; left:' + _leftshopx +
		'px; top:40px; cursor:pointer;" onclick="F061(\'infoPopup\'); otvoreneModuly=true; OpenShop1(50,-1);" src="' + PicPrefix() + 'shop/buybut.png?v=' +
		picversion + '" att="prev">';
	F068('nasivkyDiv', itemyCoSaDaju);
	SetVyberLevelDiv();
}
var otvoreneModuly = false;

function ActFilStyle(_label, _i) {
	if (_i == active_module_fil) return '<b>[' + _label.toUpperCase() + ']</b>';
	return '[' + _label + ']';
}

function NastavModuleFilter(_fil) {
	slotyOD = 0;
	active_module_fil = _fil;
	VypisNasivkyDole();
}
grabedNasivka = 0;
grabedNasivkaZoZony = 0;
grabedNasivkaSlot = -1;
grabedNasivkaDropZone = 0;
var traveledNasivkaDistance = 0;

function GrabNasivka(e, _aka, _zoZony, _zoSlotu) {
	traveledNasivkaDistance = 0;
	lastPosX = e.clientX;
	lastPosY = e.clientY;
	grabedNasivkaSlot = _zoSlotu;
	grabedNasivka = _aka;
	grabedNasivkaZoZony = _zoZony;
	ShowJSxy('GrabedNasivkaDiv', e.clientX - 50 + document.body.scrollLeft, e.clientY - 50 + document.body.scrollTop);
	F068('GrabedNasivkaDiv', '<img src="' + PicPrefix() + 'veci/vec' + _aka + '.png?v=' + (picversion + picversionVeci) + '">');
	F03b();
}

function BodyMouseUpGame(e) {
	drzimBombyZaGule = 0;
	if (grabedNasivka > 0) {
		F07g('ramcekNasivkyDrop');
		F07g('GrabedNasivkaDiv');
		if (grabedNasivkaDropZone > 0 && grabedNasivkaZoZony != grabedNasivkaDropZone) {
			var _slotStlpec = grabedNasivkaDropZone - 1;
			if ((itemyVShopeA[grabedNasivka][4][0][1] == 201 && _slotStlpec != 0) || (itemyVShopeA[grabedNasivka][4][0][1] == 202 && _slotStlpec != 1) || (itemyVShopeA[
					grabedNasivka][4][0][1] == 203 && _slotStlpec != 2) || (itemyVShopeA[grabedNasivka][4][0][1] == 204 && _slotStlpec != 3) || (itemyVShopeA[grabedNasivka][4]
					[0][1] == 224 && _slotStlpec != 0 && _slotStlpec != 2)) {
				var grabedNasivka2 = grabedNasivka;
				grabedNasivka = 0;
				grabedNasivkaZoZony = 0;
				grabedNasivkaSlot = 0;
				grabedNasivkaDropZone = 0;
				return F03t(LOC_zlymodule + '<br><br>' + LOC_item_popis[itemyVShopeA[grabedNasivka2][4][0][1]]);
			}
			grabedNasivkaDropZone = 0;
			VlozNasivku(_slotStlpec);
		} else if (grabedNasivkaDropZone == 0 && grabedNasivkaZoZony != grabedNasivkaDropZone && grabedNasivkaZoZony > 0 && grabedNasivkaSlot >= 0) {
			RemoveNasivka(grabedNasivkaSlot);
		} else if (traveledNasivkaDistance < 10) {
			if (itemyVShopeA[grabedNasivka][4][0][1] == 201) VlozNasivku(0);
			if (itemyVShopeA[grabedNasivka][4][0][1] == 202) VlozNasivku(1);
			if (itemyVShopeA[grabedNasivka][4][0][1] == 203) VlozNasivku(2);
			if (itemyVShopeA[grabedNasivka][4][0][1] == 204) VlozNasivku(3);
		}
		grabedNasivka = 0;
		grabedNasivkaZoZony = 0;
		grabedNasivkaSlot = 0;
		grabedNasivkaDropZone = 0;
	}
}

function VlozNasivku(_slotStlpec) {
	try {
		var _pocetslotov = slot_freeA[_slotStlpec];
		for (var i = 0; i < _pocetslotov; i++) {
			var _slotIndex = i * 4 + _slotStlpec;
			if (!slot_usedA[_slotIndex] || slot_usedA[_slotIndex] == 0) {
				slot_usedA[_slotIndex] = grabedNasivka;
				if (grabedNasivkaSlot >= 0) RemoveNasivka(grabedNasivkaSlot, 1);
				else {
					VypisNasivkyHore();
					VypisNasivkyDole();
				}
				F02t(140 + _slotStlpec + 1, grabedNasivka + (_slotIndex + 1) * 10000);
				Vypis_kontainer_pomocnicky();
				F046();
				break;
			}
		}
	} catch (e) {
		alert(e);
	}
}
var lastPosY = 0;
var lastPosX = 0;

function BodyMoveGame(e) {
	if (grabedNasivka > 0) {
		traveledNasivkaDistance += Math.abs(lastPosX - e.clientX) + Math.abs(lastPosY - e.clientY);
		grabedNasivkaDropZone = 0;
		var _x = e.clientX + document.body.scrollLeft;
		var _y = e.clientY + document.body.scrollTop;
		lastPosX = e.clientX;
		lastPosY = e.clientY;
		SetXY('GrabedNasivkaDiv', _x - 50, _y - 50);
		_xy = GetXY('upgradeHelperDivPic');
		nasielDropZone = false;
		for (var i = 0; i < 4; i++)
			if (_x >= _xy[0] + i * 225 && _x < _xy[0] + 225 + i * 225 && _y >= _xy[1] && _y < _xy[1] + 443) {
				F08c('ramcekNasivkyDrop');
				nasielDropZone = true;
				SetXYWH('ramcekNasivkyDrop', _xy[0] + i * 225, _xy[1], 221, 438);
				grabedNasivkaDropZone = i + 1;
				break;
			}
		if (!nasielDropZone)
			F07g('ramcekNasivkyDrop');
	}
}

function PomocBonusPerSTR(_i) {
	if (pomocBonusySpolu[_i] == 0) return '';
	if (pomocBonusySpolu[_i] < 0) return F09k('cervena', pomocBonusySpolu[_i] + '%');
	return pomocBonusySpolu[_i] + '%';
}

function HelperPopiska(bonus1) {
	if (bonus1 == 204) return '<b>' + FCol('#5A2F00', LOC_item_popis[bonus1]) + '</b>';
	else if (bonus1 == 203) return '<b>' + FCol('#005A00', LOC_item_popis[bonus1]) + '</b>';
	else if (bonus1 == 202) return '<b>' + FCol('#8F6B00', LOC_item_popis[bonus1]) + '</b>';
	else if (bonus1 == 201) return '<b>' + FCol('#8F0000', LOC_item_popis[bonus1]) + '</b>';
	else if (bonus1 == 224) return '<b>' + FCol('#000', LOC_item_popis[bonus1]) + '</b>';
	else return LOC_item_popis[bonus1];
}
var LAST_QUICKSHOP_FILTER = 0;
var LAST_QUICKSHOP_RIADOK = 0;

function OpenQuickShop(_filter, _riadok) {
	if (jeVzdyVelkyShop) {
		OpenShop(_filter, _riadok);
		return true;
	}
	F02i(1);
	var _out = '';
	LAST_QUICKSHOP_FILTER = _filter;
	_riadok = 0;
	LAST_QUICKSHOP_RIADOK = _riadok;
	shop_stlpcov_nastranu = 5;
	try {
		FocusTeraz();
		if (_filter >= 1000000) {
			var _cofilt = Math.abs(_filter % 1000000);
			var _subshop = new Array();
			_subshop.push(itemyVShopeA[_cofilt]);
		} else if (_filter < 0) {
			var _cofilt = Math.abs(_filter);
			var _subshop = new Array();
			var uzPridane = new Array();
			for (var ihl in itemyVShopeA)
				if (F015(ihl, _cofilt) > 0)
					if (!uzPridane[ihl]) {
						uzPridane[ihl] = 1;
						_subshop.push(itemyVShopeA[ihl]);
					}
			_subshop.sort(function(a, b) {
				return a[1][6] - b[1][6]
			});
		} else
			var _subshop = shopItemyFiltered[_filter];
		var _out2 = '';
		var shop_pocet_nastranu_max2 = 15;
		var pocet_na_stranu = 0;
		var _budeSipkaDole = false;
		var shop_item_vsetky_pocet = 0;
		for (var i in _subshop)
			if (pocet_na_stranu < shop_pocet_nastranu_max2 + 1)
				if (_subshop[i][0] > 0) {
					var _out3 = ShopItemBlok2(_subshop[i]);
					if (_out3 != '') {
						if (pocet_na_stranu >= shop_pocet_nastranu_max2) {
							_budeSipkaDole = true;
							break;
						} else {
							if (shop_item_vsetky_pocet >= _riadok * shop_stlpcov_nastranu) {
								_out2 += _out3;
								pocet_na_stranu++;
								if (pocet_na_stranu % shop_stlpcov_nastranu == 0) _out2 += '<div class="linedivider"></div>';
							}
							shop_item_vsetky_pocet++;
						}
					}
				}
		if (pocet_na_stranu == 0) _out2 += '<table class="prazdnyshopTable"><tr>' + ThumbsUpGirl('<td><br>', '</td>') + '<td width="500">' + F09k('imper'
			, LOC_SHOP_PRAZDNE) + '</td></tr></table>';
		var _vyskaShopu = 160;
		if (pocet_na_stranu > 5) _vyskaShopu = 350;
		if (pocet_na_stranu > 10) _vyskaShopu = 480;
		if (pocet_na_stranu == 0) _vyskaShopu = 480;
		_out += '<div style="position:relative;height:' + (_vyskaShopu) + 'px;" id="quickshopIsOpen">' + _out2 + '</div>';
		if (pocet_na_stranu > 0)
			if (PredchadzajuciLevel < 10) _out += '<br>' + LOC_QUICK_SHOP2 + '<br><br>';
		_out += F09d(LOC_CLOSE, 'F061(\'quickshoppopup\');') + SPC;
		_out += '' + F09d(LOC_OPENFULLSHOP, 'OpenShop(' + _filter + ',' + _riadok + ');');
		if (PredchadzajuciLevel > 15) _out += '<input name="togleshopinfo" type="checkbox" ' + (jeVzdyVelkyShop ? 'checked="checked"' : '') +
			' onclick="ExtraShopInfoToggle2();">' + FSize(10, LOC_options_3);
	} catch (e) {
		alert(e);
	}
	F07e(_out, 'QUICK SHOP', 'quickshoppopup', 700, 1, '', '', 0.4, F09f(0.5 * (window.innerWidth - 1000) - 5), 40, 0, '', '', 0, 0);
}

function ShopItemBlok2(_item) {
	if (ShopItemBlok(_item, 0, 0, 1) == '') {
		return '';
	}
	var _out = '';
	var _itemID = _item[0];
	var _itemPopiska = '';
	_itemPopiska += '<b>' + LOC_itemy[_itemID] + '</b><hr><br>';
	_itemPopiska += VypisBonusNEW(_item, 0, 1) + '<br><hr>';
	var _vecCenaA = _item[1];
	var _vecCena1 = F06b(_item);
	if (PredchadzajuciLevel < 10) _itemPopiska += LOC_ITEM_cena;
	_itemPopiska += '<b>' + PCisloJS2(_vecCena1) + '</b>' + IconValuta2(_vecCenaA[1]);
	if (_vecCenaA[12] > 0) _itemPopiska += SPC + LOC_ALT + SPC + PCisloJS2(_vecCenaA[12]) + IconValuta2(1);
	var buyClickStr = 'onclick="F02q(' + ((_vecCenaA[1] == 1 || _vecCenaA[1] == 2) && uzKupilVec[_itemID] == 0 && _vecCenaA[12] <= 0 ? 1 : 0) + ',\'' + (_vecCenaA[
		1] == 1 ? LOC_SI_SI_ISTY_UPOU_ITEMU : LOC_SI_SI_ISTY_UPOU_ITEMU_f) + '\',\'F08a(event,' + _itemID + ',' + (_vecCenaA[12] > 0 ? 3 : 0) + ');\',event);"';
	_out += '<div ' + buyClickStr + ' class="shopitem2" ' + F02o(_itemPopiska, 450) + '>';
	_out += '<img src="' + PicPrefix() + 'veci/vec' + _itemID + '.png?v=' + (picversion + picversionVeci) + '"><br>';
	_out += F05p(_itemID) + '&nbsp;/&nbsp;' + F05j(_item);
	_out += '</div>';
	return _out;
}
if (!loadedJS) var loadedJS = 0;
loadedJS++;
