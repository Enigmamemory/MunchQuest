'''===============================

-Store items
-Discard items
-Equip items
-Unequip items
-Equip buffs/debuffs
-Unequip buffs/debuffs
-Change stats based on items/buffs/debuffs
-Change stats based on battle
-Actual battle
-Holding onto items (cards)
-Knocking down doors (drawing cards)
-Looting treasure (drawing different cards)
-Encountering monsters (actions based on knocking down doors)

==============================='''

def store_card(guy,card): #guy is player dictionary, door is string of card name
    hand = guy["Storage"]
    hand.append(card)
    guy["Storage"] = hand

def discard_card(guy,card):
    hand = guy["Storage"]
    hand.remove(card)
    guy["Storage"] = hand

def equip_item(guy,part,item): #player dictionary, string equip slot, string item name
    hand = guy["Storage"]
    if len(guy[part]) == 1:
        hand.append(guy[part])
    guy[part] = item
    hand.remove(item)

def unequip_item(guy,part):
    hand = guy["Storage"]
    slot = guy[part]
    hand.append(item)
    guy["Storage"] = hand
    slot.remove(slot[0])
    

def change_stats(guy):
    pass
 
def fight(guy,monster):
    pass
   
def knock_door():
    pass

def loot_dungeon():
    pass
