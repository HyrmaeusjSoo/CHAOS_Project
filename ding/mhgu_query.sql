
-- base query katana range
SELECT i._id,w.parent_id,i.name,w.attack,w.element,w.element_attack,w.affinity,w.sharpness,w.num_slots,w.defense,
    w.creation_cost,w.upgrade_cost,w.wtype,w.final,w.family,i.rarity,i.description -- i.sub_type,
FROM items i
LEFT JOIN weapons w ON i._id=w._id
WHERE i._id >= 524545 AND i._id <= 556291; -- AND wtype = 'Long Sword'

-- max atc
SELECT i._id,w.parent_id,i.name,w.attack,w.element,w.element_attack,w.affinity,w.sharpness,w.num_slots,w.defense,
    w.creation_cost,w.upgrade_cost,w.wtype,w.final,w.family,i.rarity,i.description -- i.sub_type,
FROM items i
LEFT JOIN weapons w ON i._id=w._id
WHERE i._id >= 524545 AND i._id <= 556291
ORDER BY attack DESC;

-- max affinity
SELECT i._id,w.parent_id,i.name,w.attack,w.element,w.element_attack,w.affinity,w.sharpness,w.num_slots,w.defense,
    w.creation_cost,w.upgrade_cost,w.wtype,w.final,w.family,i.rarity,i.description -- i.sub_type,
FROM items i
LEFT JOIN weapons w ON i._id=w._id
WHERE i._id >= 524545 AND i._id <= 556291
ORDER BY affinity*1 DESC;

-- max final
SELECT i._id,w.parent_id,i.name,w.attack,(attack+15)*affinity*1.39 AS atc,SUBSTR(w.sharpness,1,INSTR(w.sharpness,' ')-1) AS sharpness,
    w.affinity,w.element,w.element_attack,w.num_slots,i.rarity,w.defense,
    w.creation_cost,w.upgrade_cost,w.wtype,w.final,w.family,i.description,w.sharpness -- i.sub_type,
FROM items i
LEFT JOIN weapons w ON i._id=w._id
WHERE i._id >= 524545 AND i._id <= 556291 AND w.final=1


SELECT SUBSTR('6.4.5.16.5.4.0 6.4.5.16.5.6.0 6.4.5.16.5.9.0',1,INSTR('6.4.5.16.5.4.0 6.4.5.16.5.6.0 6.4.5.16.5.9.0',' ')-1)












